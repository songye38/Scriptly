import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
  return (
    <div style={{ width: '100%', height: '100%', padding: '10px', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', display: 'inline-flex' }}>
      <img 
        style={{ width: '32px', height: '32px', borderRadius: '9999px' }} 
        src="/images/userImage.svg" 
        alt="User Profile" 
      />
      <div style={{ color: 'black', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>
        아이에이블
      </div>
    </div>
  );
};

export default UserProfile;
