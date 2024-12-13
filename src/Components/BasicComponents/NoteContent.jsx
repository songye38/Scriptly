import React from 'react';

const NoteContent = ({ content }) => {
  return (
    <div
      style={{
        color: '#4C4B4B',
        fontSize: 14,
        fontFamily: 'Pretendard',
        fontWeight: '500',
        wordWrap: 'break-word',
      }}
    >
      {content}
    </div>
  );
};

export default NoteContent;
