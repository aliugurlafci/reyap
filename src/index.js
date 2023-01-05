import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import '../node_modules/antd/dist/reset.css';
import MainRouter from './router/MainRouter';
import { Layout, FloatButton } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));

const { BackTop } = FloatButton;

function Index() {
  return (
    <>
      <MainRouter />
      <BackTop style={{ width: 50, height: 50 }} />
    </>
  );
}
root.render(<Index />);

