import './Anasayfa.css';
import React from 'react';
import { Layout } from 'antd';
import i18n from '../i18n';
import {
    CarouselComponent,
    WorkDetails,
    FooterComponent,
    MenuComponent,
    InfoBox,
    WorkBrands
} from '../../src/components/index';
import { useSelector } from 'react-redux';

const { Content } = Layout;

function Anasayfa() {
    const config = useSelector(state => state.config.config);
    return (
        <Layout>
            <MenuComponent />
            <Content >
                <CarouselComponent config={config.home.carousel} />
                <InfoBox config={config.home.whatToDo} />
                <WorkDetails config={config.home.aboutUs} />
                <WorkBrands config={config.home.partners} />
            </Content>
            <FooterComponent />
        </Layout>
    );
}

export default Anasayfa;

/** VERİ ŞEMASI
 * 
 * "home": {
        "carousel": [
            {
                "key": 1,
                "carouselImage": "eample",
                "carouselHeader": "example",
                "carouselSubText": "example"
            },
            {
                "key": 2,
                "carouselImage": "example",
                "carouselHeader": "example",
                "carouselSubText": "example"
            }
        ],
        "aboutUs": {
            "header": "example",
            "description": "example"
        },
        "whatToDo": [
            {
                "key": 1,
                "icon": "example",
                "header": "example",
                "subHeader": "example"
            },
            {
                "key": 2,
                "icon": "example",
                "header": "example",
                "subHeader": "example"
            }
        ],
        "partners": [
            {
                "key": 1,
                "icon": "example",
                "description": "gerekirse"
            },
            {
                "key": 2,
                "icon": "example",
                "description": "gerekirse"
            }
        ]
    },
 */