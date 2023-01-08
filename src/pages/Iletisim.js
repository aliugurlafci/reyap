import React from 'react';
import { Layout } from 'antd';
import './Iletisim.css'
import {
    FooterComponent,
    MenuComponent,
    MapComponent
} from '../../src/components/index';

const { Content } = Layout;

export default function Iletisim() {
    return (
        <Layout>
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content'>
                    <MapComponent />
                </Content>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}