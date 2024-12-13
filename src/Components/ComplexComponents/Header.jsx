import React from 'react';
import Logo from '../BasicComponents/Logo';
import UserProfile from '../BasicComponents/UserProfile';

const Header = () => {
  return (
    <div style={{ width: '100%', height: '100%', paddingTop: 0, paddingBottom: 32, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
      {/* 첫 번째 섹션 (아이콘과 그라디언트 박스) */}
      <Logo />

      {/* 두 번째 섹션 (이미지와 텍스트) */}
        <UserProfile />
    </div>
  );
};

export default Header;
