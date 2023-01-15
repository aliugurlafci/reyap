import './Kurumsal.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    AboutComponent
} from '../../src/components/index';
import { useSelector } from 'react-redux';

const { Content } = Layout;

export default function Kurumsal() {
    const config = useSelector(state => state.config.config.config.data.instituonal);
    const language = useSelector(state => state.languageListener.language);
    return (
        <Layout>
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content'>
                    <AboutComponent config={language === 'tr' ? config.TR : config.EN} />
                </Content>
                <Layout style={{ bottom: 0, left: 0, width: '100%', zIndex: 3 }}>
                    <FooterComponent />
                </Layout>
            </Layout>
        </Layout>
    );
}
/**
 * Veri şeması
 * 
 * "instituonal": {
        "image": "example",
        "title": "example",
        "details": "example"
    },
 */