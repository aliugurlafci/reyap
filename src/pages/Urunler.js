import './Urunler.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    ProductComponent
} from '../../src/components/index';

const { Content } = Layout;

export default function Urunler() {
    return (
        <Layout>
            <MenuComponent />
            <Content className='content'>
                <ProductComponent />
            </Content>
            <FooterComponent />
        </Layout>
    );
}