import './Urunler.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    ProductComponent
} from '../../src/components/index';
import { useSelector } from 'react-redux';

const { Content } = Layout;

export default function Urunler() {
    const config = useSelector(state => state.config.config.config.data.products);
    const language = useSelector(state => state.languageListener.language);
    return (
        <Layout>
            <MenuComponent />
            <Content className='content' style={{ height: window.innerHeight }}>
                <ProductComponent
                    categories={
                        language === 'tr' ? config.categories.TR : config.categories.EN
                    }
                    products={
                        language === 'tr' ? config.productList.TR : config.productList.EN
                    } />
            </Content>
            <Layout style={{ position: 'relative' }}>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}
