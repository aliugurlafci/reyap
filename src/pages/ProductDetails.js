import './ProductDetails.css';
import React from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import {
    FooterComponent,
    MenuComponent,
    ProductDetailsComponent
} from '../../src/components/index';

const { Content } = Layout;

export default function ProductDetails() {
    const { state } = useLocation();
    return (
        <Layout>
            <MenuComponent />
            <Content className='content' style={{ paddingBottom: 250 }}>
                <ProductDetailsComponent index={state} />
            </Content>
            <Layout className='bottom-fixed'>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}