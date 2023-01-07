import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import '../node_modules/antd/dist/reset.css';
import MainRouter from './router/MainRouter';
import { Layout, FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const root = ReactDOM.createRoot(document.getElementById('root'));

const openWp = () => {
  window.open('https://api.whatsapp.com/send/?phone=905324968590&text&type=phone_number&app_absent=0', '_blank', 'noreferrer');
}

function Index() {
  return (
    <>
      <MainRouter />
      <FloatButton icon={<WhatsAppOutlined />} onClick={() => openWp()} tooltip={<div>Bize Ulaşın</div>} style={{ width: 50, height: 50,  }} />
    </>
  );
}
root.render(<Index />);

