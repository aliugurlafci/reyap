import './Kurumsal.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    AboutComponent
} from '../../src/components/index';

const { Content } = Layout;

export default function Kurumsal() {
    return (
        <Layout>
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content'>
                    <AboutComponent />
                </Content>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}