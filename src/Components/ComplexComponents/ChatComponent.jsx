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
  const [conversation, setConversation] = useState([]); // 사용자 및 AI 메시지 순서 저장
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

  const handleAskQuestion = async () => {
    if (!inputValue) return;
  
    // 사용자 메시지 추가
    const userMessage = { role: "user", content: inputValue };
    setConversation((prevConversation) => [...prevConversation, userMessage]);
  
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
  
      // OpenAI의 답변 추가
      const assistantMessage = { role: "assistant", content: data.answer };
      setConversation((prevConversation) => [...prevConversation, assistantMessage]);
  
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
    } catch (error) {
      console.error("Error with OpenAI API:", error);
    } finally {
      setLoading(false);
      setInputValue(""); // 입력 필드 초기화
    }
  };
  
  useEffect(() => {
  console.log("Updated conversation:", conversation);
}, [conversation]);

  // 메시지와 답변 섹션의 스크롤을 아래로 내리기
  // useEffect(() => {
  //   messageContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [conversation]);

  useEffect(() => {
    setTimeout(() => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }, [conversation]);
  


  // 대화모드 on일 때 노출
  const renderDetailedView = () => (
    <>
      {/* 기존 질문 목록 렌더링 */}
      {studyQuestions.map((question, idx) => (
        <div key={idx} style={{ marginBottom: "40px" }}>
          <div style={{ textAlign: "right" }}>
            <UserMsg msg={question.question} />
          </div>
          <div style={{ textAlign: "left" }}>
            <ResultBasic question={question} />
          </div>
        </div>
      ))}
  
      {/* 대화 메시지 렌더링 */}
      <div ref={messageContainerRef} style={{ overflowY: "auto", maxHeight: "60vh" }}>
        {conversation.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "20px",
            }}
          >
            {msg.role === "user" ? (
              <UserMsg msg={msg.content} />
            ) : (
              <ResultBasic
                question={{answer_title: extractTitleAndContent(msg.content).title,answer_content: extractTitleAndContent(msg.content).content}}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
  

  // 대화모드 off일 때
  const renderSummaryView = () => (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        <MyInput value={inputValue} onChange={handleInputChange} placeholder="제목을 입력해주세요." />
        <Button onClick={handleAskQuestion} title={"OK"} type="primary" disabled={loading || !isDetailedView} />
      </div>
      {/* Study Questions */}
      {studyQuestions.map((question, idx) => (
        <div key={idx} style={{ textAlign: "left", marginBottom: "20px" }}>
          <ResultSummary question={question} />
        </div>
      ))}

      {/* OpenAI 답변 */}
      {conversation
        .filter((msg) => msg.role === "assistant")
        .map((msg, idx) => (
          <div key={idx} style={{ textAlign: "left", marginBottom: "20px" }}>
            <ResultSummary question={extractTitleAndContent(msg.content)} />
          </div>
        ))}
    </>
  );

  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <div style={{ overflow: "auto", height: isDetailedView ? "70%" : "90%", width: "100%" }}>
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
          gap: "4px",
        }}
      >
        {isDetailedView && (
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <MyInput value={inputValue} onChange={handleInputChange} placeholder="Ask a question..." />
            <Button
              onClick={handleAskQuestion}
              title={loading ? "생성중✨" : "Ask"}
              type="primary"
              disabled={loading || !isDetailedView}
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
