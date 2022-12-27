import '../css/Anasayfa.css';
import React from 'react';
import { Layout } from 'antd';
import {
  CarouselComponent,
  WorkDetails,
  FooterComponent,
  NavbarComponent
} from '../components/index';

function Anasayfa() {
  const { Content } = Layout;
  return (
    <Layout>
      <Layout>
        <NavbarComponent />
      </Layout>
      <Layout className='content-layout'>
        <Content className='content'>
          <CarouselComponent />
          <WorkDetails />
        </Content>
      </Layout>
      <Layout>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}

export default Anasayfa;
