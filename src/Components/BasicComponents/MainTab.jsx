import React from 'react';

const MainTab = () => {
  return (
    <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
      <div style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
        <div style={{ color: '#BFBFBF', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>
          블로그
        </div>
      </div>
      <div style={{ padding: 10, borderBottom: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>
          공부
        </div>
      </div>
    </div>
  );
};

export default MainTab;
