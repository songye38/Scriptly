import React from 'react';
import Checkbox from 'antd/es/checkbox/Checkbox';
import ExpandButton from '../BasicComponents/ExpandButton';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // 마크다운 확장 기능 (표, 체크박스 등)

const ResultSummary = ({ question }) => {
  // 상태 관리: 내용이 보이는지 여부를 관리
  const [isContentVisible, setIsContentVisible] = useState(false);

  // 내용 보이기/숨기기 토글 함수
  const toggleContentVisibility = () => {
    console.log("버튼이 눌립니다.")
    setIsContentVisible(prevState => !prevState);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: 20,
        background: '#EAEEFD',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        gap: '8px',
        display: 'inline-flex',
      }}
    >
      {/* 제목과 체크박스 및 상태 표시 */}
      <div
        style={{
          alignSelf: 'stretch',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 16,
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            flex: '1 1 0',
            height: 23,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            display: 'flex',
          }}
        >
          {/* 제목 */}
          <div
            style={{
              flex: '1 1 0',
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Pretendard',
              fontWeight: '500',
              lineHeight: '23px',
              wordWrap: 'break-word',
            }}
          >
            {question?.answer_title} {/* title prop 사용 */}
          </div>
          {/* 상태 표시 */}
          <div
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
              display: 'flex',
            }}
          >
            <ExpandButton onClick={toggleContentVisibility} />
            <Checkbox />
          </div>
        </div>
      </div>

      {/* 내용 토글 */}
      {isContentVisible && (
        <div
          style={{
            alignSelf: 'stretch',
            color: 'black',
            fontSize: '16px',
            fontFamily: 'Pretendard',
            fontWeight: '400',
            lineHeight: '29px',
            wordWrap: 'break-word',
          }}
        >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{question?.answer_content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ResultSummary;
