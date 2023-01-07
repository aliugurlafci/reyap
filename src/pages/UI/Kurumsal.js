import '../../css/Kurumsal.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent
} from '../../components/index';
import { AboutComponent } from '../../components/index';

const { Content } = Layout;

export default function Kurumsal() {
    return (
        <Layout>
            <Layout className='navbar-sticky'>
                <MenuComponent />
            </Layout>
            <Layout className='content-layout'>
                <Content className='content'>
                    <AboutComponent />
                </Content>
            </Layout>
            <Layout>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}