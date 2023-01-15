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

const { Content } = Layout;

export default function Iletisim() {
    return (
        <Layout>
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content'>
                    <div className='topContent'>
                        <MapComponent />
                        <LocationComponent />
                    </div>
                    <div className='subcontent'>
                        <FormComponent />
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