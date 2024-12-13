import React from 'react';
import NoteTitle from '../BasicComponents/NoteTitle';
import NoteContent from '../BasicComponents/NoteContent';

const Note = ({ title, contentArray }) => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',gap:'16px', padding:'10px' }}>
      {/* 제목 */}
      <NoteTitle title={title}  isChecked={true}/>

      {/* NoteContent들을 감싸는 div */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* NoteContent들 */}
        {contentArray.map((content, index) => (
          <NoteContent
            key={index}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};

export default Note;
