import React from 'react';
import { Layout } from 'antd';
import './Iletisim.css'
import {
    FooterComponent,
    MenuComponent,
    MapComponent,
    LocationComponent,
    FormComponent
} from '../../src/components/index';
import { useSelector } from 'react-redux';
import i18n from '../i18n';

const { Content } = Layout;

export default function Iletisim() {
    const config = useSelector(state => state.config.config);
    return (
        <Layout>
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content'>
                    <MapComponent />
                    <div className='subcontent'>
                        <FormComponent />
                        <LocationComponent />
                    </div>
                </Content>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}
/**
 * Veri şeması
 * 
 * "contact": {
        "central": {
            "adres": "example",
            "tel": "example",
            "fax": "example",
            "email": "example"
        },
        "factory": {
            "adres": "example",
            "tel": "example"
        },
        "export": {
            "name": "example",
            "tel": "example"
        }
    },
 */