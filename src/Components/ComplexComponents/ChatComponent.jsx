import React, { useState, useEffect } from "react";
import MyInput from "../BasicComponents/MyInput";
import Button from "../BasicComponents/Button";
import { supabase } from "../../utils/supabase";
import UserMsg from "../BasicComponents/\bUserMsg";
import ResultBasic from "./ResultBasic";
import ResultSummary from "./ResultSummary"; // 추가된 컴포넌트
import Toggle from "../BasicComponents/Toggle";

const ChatComponent = ({ projectID, studyQuestions }) => {
  const [inputValue, setInputValue] = useState(""); // 사용자 입력 값
  const [messages, setMessages] = useState([]); // 사용자 질문을 저장하는 상태
  const [assistantMessages, setAssistantMessages] = useState([]); // OpenAI 답변을 저장하는 상태
  const [loading, setLoading] = useState(false); // API 요청 진행 중 상태
  const [isDetailedView, setIsDetailedView] = useState(true); // 토글 상태 추가

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleChange = (checked) => {
    setIsDetailedView(checked); // 토글 상태 업데이트
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
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: inputValue,
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant. Please always respond in Korean and explain with code examples. Your response must include a title using `#` for the main title, followed by subheadings using `##` as needed. The response should be formatted in markdown, and include code blocks using triple backticks (```).'
            },
          ],
        }),
      });

      const data = await res.json();
      const assistantMessage = { role: "assistant", content: data.answer };
      setAssistantMessages((prevMessages) => [...prevMessages, assistantMessage]);

      const { title, content } = extractTitleAndContent(data.answer);
      const { data: insertedData, error } = await supabase
        .from('study_questions')
        .insert([{ project_id: projectID, question: inputValue, answer_title: title, answer_content: content }]);

      if (error) console.error('Error saving to Supabase:', error);

      setLoading(false);
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      setLoading(false);
    }

    setInputValue("");
  };

  useEffect(() => {
    if (messages.length > 0) {
      console.log("새로운 사용자 메시지가 추가되었습니다.");
    }
  }, [messages]);

  useEffect(() => {
    if (assistantMessages.length > 0) {
      console.log("새로운 OpenAI 메시지가 추가되었습니다.");
    }
  }, [assistantMessages]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ overflow: 'scroll', height: '70%', width: '100%' }}>
        {/* Study Questions 부분 렌더링 */}
        {studyQuestions && studyQuestions.length > 0 && (
          <div style={{ marginBottom: '50px' }}>
            {studyQuestions.map((question, idx) => (
              <div key={idx} style={{ marginBottom: '40px' }}>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    {isDetailedView ? (
                        <UserMsg msg={question.question} />
                    ) : (
                        <div></div>
                    )}
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  {/* 토글 상태에 따라 다른 컴포넌트 렌더링 */}
                  {isDetailedView ? (
                    <ResultBasic question={question} />
                  ) : (
                    <ResultSummary question={question} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 사용자 메시지 렌더링 */}
        {messages && messages.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            {messages.map((msg, idx) => {
              if (msg.role === "user") {
                return (
                  <div key={idx} style={{ display: 'flex', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'right' }}>
                      <UserMsg msg={msg.content} />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}

        {/* OpenAI의 질문과 답변을 나란히 표시 */}
        {assistantMessages && assistantMessages.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            {assistantMessages.map((msg, idx) => {
              if (msg.role === "assistant") {
                const { title, content } = extractTitleAndContent(msg.content);
                const answer = { answer_title: title, answer_content: content };

                return (
                  <div key={idx} style={{ display: 'flex', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      {isDetailedView ? (
                        <ResultBasic question={answer} />
                      ) : (
                        <ResultSummary question={answer} />
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>

      {/* 입력 필드와 버튼 */}
      <div style={{ display: "flex", marginTop: "32px", position: 'absolute', bottom: '20px', width: '80%', height: 'auto', flexDirection: 'column', gap: '8px' }}>
        <MyInput value={inputValue} onChange={handleInputChange} placeholder="Ask a question..." disabled={!isDetailedView}/>
        <Button onClick={handleSubmit} title={loading ? "Loading..." : "Ask"} type="primary" disabled={loading} />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div>대화모드</div>
          {/* Toggle에 상태와 핸들러 전달 */}
          <Toggle checked={isDetailedView} onChange={handleToggleChange} />
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
