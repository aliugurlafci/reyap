import '../../css/Anasayfa.css';
import React from 'react';
import { Layout } from 'antd';
import {
  CarouselComponent,
  WorkDetails,
  FooterComponent,
  MenuComponent,
  BuyerCommentComponent,
  CompanionsComponent
} from '../../components/index';

const { Content } = Layout;

function Anasayfa() {
  return (
    <Layout>
      <MenuComponent isHome={true} />
      <Content className='content'>
        <CarouselComponent />
        <WorkDetails />
        <CompanionsComponent />
        <BuyerCommentComponent />
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default Anasayfa;
/**<CompanyDetails /> */