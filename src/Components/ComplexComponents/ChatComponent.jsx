import React, { useState, useEffect } from "react";
import MyInput from "../BasicComponents/MyInput";
import Button from "../BasicComponents/Button";
import { supabase } from "../../utils/supabase";
import UserMsg from "../BasicComponents/\bUserMsg";
import ResultBasic from "./ResultBasic";
import Toggle from "../BasicComponents/Toggle";

const ChatComponent = ({ projectID, studyQuestions }) => {
  const [inputValue, setInputValue] = useState(""); // 사용자 입력 값
  const [messages, setMessages] = useState([]); // 사용자 질문을 저장하는 상태
  const [assistantMessages, setAssistantMessages] = useState([]); // OpenAI 답변을 저장하는 상태
  const [loading, setLoading] = useState(false);  // API 요청 진행 중 상태

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const extractTitleAndContent = (markdown) => {
    // 제목은 #으로 시작하는 첫 번째 줄을 찾습니다.
    const titleMatch = markdown.match(/^#\s*(.*)/m);
    const contentMatch = markdown.slice(titleMatch ? titleMatch[0].length : 0);

    const title = titleMatch ? titleMatch[1].trim() : "No title";
    const content = contentMatch.trim();

    return { title, content };
  };

  const handleSubmit = async () => {
    // 입력값이 없으면 아무 것도 하지 않음
    if (!inputValue) return;

    // 사용자의 메시지를 먼저 화면에 추가 (messages 상태에 저장)
    const userMessage = { role: "user", content: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);  // 사용자 메시지 추가

    setLoading(true); // API 요청 시작

    try {
      // OpenAI API에 요청 보내기
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: inputValue,
          messages: [
            { 
              role: 'system', 
              content: 'You are a helpful assistant. Please always respond in Korean and explain with code examples. Your response must include a title using `#` for the main title, followed by subheadings using `##` as needed. Make sure that every response includes a clear title. The response should be formatted in markdown, and include code blocks using triple backticks (```). For example:\n\n# Main Title\n\n## Subheading\n\n```javascript\n// Code block here\nconsole.log("Hello, world!");\n```\n\nMake sure to include appropriate headings and code blocks for better clarity, and always provide a title in your answer.'
            },
          ],
        }),
      });

      const data = await res.json();

      // OpenAI의 답변을 별도의 상태에 추가 (assistantMessages 상태에 저장)
      const assistantMessage = { role: "assistant", content: data.answer };
      setAssistantMessages((prevMessages) => [...prevMessages, assistantMessage]);  // OpenAI의 답변 추가

      // OpenAI의 응답에서 제목과 내용을 추출
      const { title, content } = extractTitleAndContent(data.answer);  // 제목과 내용 분리

      // Supabase에 제목과 내용 저장
      const { data: insertedData, error } = await supabase
        .from('study_questions')
        .insert([
          { project_id: projectID, question: inputValue, answer_title: title, answer_content: content }  // project_id 포함
        ]);

      if (error) {
        console.error('Error saving to Supabase:', error);
      } else {
        console.log('Data saved to Supabase:', insertedData);
      }

      // 로딩 상태 종료
      setLoading(false); // 로딩 상태 종료

    } catch (error) {
      console.error("Error with OpenAI API:", error);
      setLoading(false); // 오류 발생시 로딩 상태 해제
    }

    // 입력값 초기화
    setInputValue("");
  };

  // `messages`가 변경될 때만 실행되는 `useEffect`
  useEffect(() => {
    if (messages.length > 0) {
      // 이 부분에서 `messages` (사용자 메시지 배열)가 변경될 때마다 호출됩니다.
      console.log("새로운 사용자 메시지가 추가되었습니다.");
    }
  }, [messages]); // `messages` 배열이 변경될 때마다 실행

  // `assistantMessages`가 변경될 때만 렌더링되도록 처리
  useEffect(() => {
    if (assistantMessages.length > 0) {
      // 이 부분에서 `assistantMessages`가 변경될 때마다 호출됩니다.
      console.log("새로운 OpenAI 메시지가 추가되었습니다.");
    }
  }, [assistantMessages]); // `assistantMessages` 배열이 변경될 때마다 실행

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ overflow: 'scroll', height: '70%', width: '100%' }}>
        {/* Study Questions 부분 렌더링 */}
        {studyQuestions && studyQuestions.length > 0 && (
          <div style={{ marginBottom: '50px' }}>
            {studyQuestions.map((question, idx) => (
              <div key={idx} style={{marginBottom:'40px'}}>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    <UserMsg msg={question.question} />
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <ResultBasic question={question} />
                </div>
              </div>
            ))}
          </div>
        )}

        {messages && messages.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
            {messages.map((msg, idx) => {
            if (msg.role === "user") {
                const userMessage = msg.content;
                console.log(userMessage)
                return (
                <div key={idx} style={{ display: 'flex', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'right' }}>
                    {/* 사용자 메시지를 렌더링 */}
                    <UserMsg msg={userMessage} />
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
                const assistantMessage = msg.content;
                const { title, content } = extractTitleAndContent(assistantMessage);
                const answer = { answer_title: title, answer_content: content };

                return (
                  <div key={idx} style={{ display: 'flex', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <ResultBasic question={answer} />
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
        <MyInput value={inputValue} onChange={handleInputChange} placeholder="Ask a question..." />
        <Button onClick={handleSubmit} title={loading ? "Loading..." : "Ask"} type="primary" disabled={loading} />
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <div>대화모드</div>
            <Toggle />
        </div>
      </div>
      
    </div>
  );
};

export default ChatComponent;
