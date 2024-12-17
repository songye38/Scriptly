// CustomInput.js
import React from 'react';
import { Input } from 'antd';
import Button from './Button';

const MyInput = ({ value, onChange, placeholder }) => {
  return (
      <Input.TextArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={1} 
        style={{
          borderRadius: '8px',
          border: '1px solid #BFBFBF', // 기본 테두리 색상
          padding: '8px 12px',
          fontSize: '14px',
        }}
        onFocus={(e) => e.target.style.borderColor = '#3150EE'} // 포커스 시 테두리 색상 변경
        onBlur={(e) => e.target.style.borderColor = '#BFBFBF'}  // 포커스 해제 시 기본 테두리 색상
      />

  );
};

export default MyInput;
