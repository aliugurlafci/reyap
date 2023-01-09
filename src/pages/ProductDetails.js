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
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content'>
                    <ProductDetailsComponent index={state} />
                </Content>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}