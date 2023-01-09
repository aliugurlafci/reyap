import './Kurumsal.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    AboutComponent
} from '../../src/components/index';
//import { useSelector } from 'react-redux';

const { Content } = Layout;

export default function Kurumsal() {
    //const config = useSelector(state => state.config.config);
    return (
        <Layout>
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content'>
                    <AboutComponent /*config={config.instituonal}*/ />
                </Content>
                <FooterComponent />
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