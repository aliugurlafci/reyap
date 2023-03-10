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
            <MenuComponent />
            <Content className='content'>
                <AboutComponent config={language === 'tr' ? config.TR : config.EN} />
            </Content>
            <Layout className='bottom-fixed'>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}
