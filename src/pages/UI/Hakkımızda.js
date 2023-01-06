import '../../css/Hakkimizda.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    HakkimizdaComponent
} from '../../components/index';

const { Content } = Layout;

export default function Hakkımızda() {
    return (
        <Layout>
            <MenuComponent />
            <Content className='content'>
                <HakkimizdaComponent />
            </Content>

        </Layout>
    );
}

/**
 * <FooterComponent />
 */