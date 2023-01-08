import './Anasayfa.css';
import React from 'react';
import { Layout } from 'antd';
import i18n from '../i18n';
import {
  CarouselComponent,
  WorkDetails,
  FooterComponent,
  MenuComponent,
  InfoBox,
  WorkBrands
} from '../../src/components/index';

const { Content } = Layout;

function Anasayfa() {
  return (
    <Layout>
      <MenuComponent />
      <Content >
        <CarouselComponent />
        <InfoBox />
        <WorkDetails />
        <WorkBrands />
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default Anasayfa;
/**<CompanyDetails /> */