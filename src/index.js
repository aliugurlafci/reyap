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
  window.open('https://api.whatsapp.com/send/?phone=905344244423&text&type=phone_number&app_absent=0', '_blank', 'noreferrer');
}

function Index() {
  return (
    <Provider store={Store()}>
      <MainRouter />
      <FloatButton
        type=''
        icon={<WhatsAppOutlined style={{ marginLeft: -2 ,color: '#fff', fontSize: 22, }} />}
        onClick={() => openWp()}
        tooltip={<div>{i18n.t('order')}</div>}
        style={{ width: 60, height: 60, marginRight:16, backgroundColor: '#25d366' }} />
    </Provider>
  );
}
root.render(<Index />);

