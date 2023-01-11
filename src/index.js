import './index.css';
import '../node_modules/antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import MainRouter from './router/MainRouter';
import Store from './redux/store';
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

const openWp = () => {
  window.open('https://api.whatsapp.com/send/?phone=905302472674&text&type=phone_number&app_absent=0', '_blank', 'noreferrer');
}

function Index() {
  return (
    <Provider store={Store()}>
      <MainRouter />
      <FloatButton icon={<WhatsAppOutlined />} onClick={() => openWp()} tooltip={<div>{i18n.t('order')}</div>} style={{width: 50, height: 50}} />
    </Provider>
  );
}
root.render(<Index />);

