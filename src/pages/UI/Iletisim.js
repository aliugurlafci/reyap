import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    MapComponent
} from '../../components/index';

const { Content } = Layout;

export default function Iletisim() {
    return (
        <Layout>
            <Layout className='navbar-sticky'>
                <MenuComponent />
            </Layout>
            <Layout className='content-layout'>
                <Content className='content'>
                    <MapComponent />
                </Content>
            </Layout>
            <Layout>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}