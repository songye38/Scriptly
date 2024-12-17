import React, { useState, useEffect, useRef } from "react";
import MyInput from "../BasicComponents/MyInput";
import Button from "../BasicComponents/Button";
import { supabase } from "../../utils/supabase";
import UserMsg from "../BasicComponents/\bUserMsg";
import ResultBasic from "./ResultBasic";
import ResultSummary from "./ResultSummary";
import Toggle from "../BasicComponents/Toggle";

const ChatComponent = ({ projectID, studyQuestions }) => {
  const [inputValue, setInputValue] = useState(""); // 사용자 입력 값
  const [messages, setMessages] = useState([]); // 사용자 메시지
  const [assistantMessages, setAssistantMessages] = useState([]); // OpenAI 답변
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [isDetailedView, setIsDetailedView] = useState(true); // 토글 상태
  const messageContainerRef = useRef(null); // 메시지와 답변을 감싸는 div에 대한 ref

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleChange = (checked) => {
    setIsDetailedView(checked);
  };

  const extractTitleAndContent = (markdown) => {
    const titleMatch = markdown.match(/^#\s*(.*)/m);
    const contentMatch = markdown.slice(titleMatch ? titleMatch[0].length : 0);

    const title = titleMatch ? titleMatch[1].trim() : "No title";
    const content = contentMatch.trim();

    return { title, content };
  };

  const handleSubmit = async () => {
    if (!inputValue) return;

    const userMessage = { role: "user", content: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setLoading(true);

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: inputValue,
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant. Please always respond in Korean and explain with code examples. Your response must include a title using `#` for the main title, followed by subheadings using `##` as needed. The response should be formatted in markdown, and include code blocks using triple backticks (```).",
            },
          ],
        }),
      });

      const data = await res.json();
      const assistantMessage = { role: "assistant", content: data.answer };
      setAssistantMessages((prevMessages) => [...prevMessages, assistantMessage]);

      const { title, content } = extractTitleAndContent(data.answer);

      const { error } = await supabase.from("study_questions").insert([
        {
          project_id: projectID,
          question: inputValue,
          answer_title: title,
          answer_content: content,
        },
      ]);

      if (error) console.error("Error saving to Supabase:", error);

      setLoading(false);
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      setLoading(false);
    }

    setInputValue("");
  };

  // 메시지와 답변 섹션의 스크롤을 아래로 내리기
  useEffect(() => {
    messageContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, assistantMessages]);

  // 대화모드 on일 때 노출
  const renderDetailedView = () => (
    <>
      {/* Study Questions */}

        {studyQuestions.map((question, idx) => (
            <div key={idx} style={{ marginBottom: "40px"}}>
            <div style={{ textAlign: "right" }}>
                <UserMsg msg={question.question} />
            </div>
            <div style={{ textAlign: "left" }}>
                <ResultBasic question={question} />
            </div>
            </div>
        ))}


      {/* 사용자 메시지 및 OpenAI 답변 영역 */}
      <div ref={messageContainerRef} style={{ overflowY: "auto", maxHeight: "60vh" }}>
        {/* 사용자 메시지 */}
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: "right", marginBottom: "20px" }}>
            <UserMsg msg={msg.content} />
          </div>
        ))}

        {/* OpenAI 답변 */}
        {assistantMessages.map((msg, idx) => {
          const { title, content } = extractTitleAndContent(msg.content);
          const answer = { answer_title: title, answer_content: content };

          return (
            <div key={idx} style={{ textAlign: "left", marginBottom: "20px" }}>
              <ResultBasic question={answer} />
            </div>
          );
        })}
      </div>
    </>
  );

  // 대화모드 off일때
  const renderSummaryView = () => (
    <>
      {/* Study Questions */}
      {studyQuestions.map((question, idx) => (
        <div key={idx} style={{ textAlign: "left", marginBottom: "20px" }}>
          <ResultSummary question={question} />
        </div>
      ))}

      {/* OpenAI 답변 */}
      {assistantMessages.map((msg, idx) => {
        const { title, content } = extractTitleAndContent(msg.content);
        const answer = { answer_title: title, answer_content: content };

        return (
          <div key={idx} style={{ textAlign: "left", marginBottom: "20px" }}>
            <ResultSummary question={answer} />
          </div>
        );
      })}
    </>
  );

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div style={{ overflow: "auto", height: isDetailedView ? "70%" : "90%", width: "80%" }}>
        {isDetailedView ? renderDetailedView() : renderSummaryView()}
      </div>

      {/* 입력 필드와 버튼 */}
      <div
        style={{
          width: "64%",
          display: "flex",
          position: "absolute",
          bottom: "20px",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* 입력 필드와 버튼 */}
        {isDetailedView && ( // 토글이 켜져 있을 때만 렌더링
          <div
            style={{
              width: "100%",
              display: "flex",
              position: "absolute",
              bottom: "20px",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <MyInput
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask a question..."
            />
            <Button
              onClick={handleSubmit}
              title={loading ? "Loading..." : "Ask"}
              type="primary"
              disabled={loading || !isDetailedView} // 이 라인도 필요 없지만 유지 가능
            />
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>대화모드</div>
          <Toggle checked={isDetailedView} onChange={handleToggleChange} />
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
