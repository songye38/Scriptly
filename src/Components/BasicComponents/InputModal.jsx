import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import Button from './Button';

const InputModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('입력한 값:', inputValue);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
    
      <Button onClick={showModal} title="새로운 프로젝트 만들기"/>
      <Modal
        title="프로젝트 이름을 적어주세요"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="확인"
        cancelText="취소"
      >
        <Input 
          placeholder="프로젝트명"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Modal>
    </div>
  );
};

export default InputModal;
