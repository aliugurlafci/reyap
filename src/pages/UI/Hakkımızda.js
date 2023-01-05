import '../../css/Hakkimizda.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent
} from '../../components/index';

const { Content } = Layout;

export default function Hakkımızda() {
    return (
        <Layout>
            <Layout className='navbar-sticky'>
                <MenuComponent />
            </Layout>
            <Layout className='content-layout'>
                <Content className='content'>
                    <div>Hakkımızda Screen</div>
                </Content>
            </Layout>
            <Layout>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}