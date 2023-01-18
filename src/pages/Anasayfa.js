import './Anasayfa.css';
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import i18n from '../i18n';
import {
    CarouselComponent,
    WorkDetails,
    FooterComponent,
    MenuComponent,
    InfoBox,
    WorkBrands,
    CompanyDetails
} from '../../src/components/index';
import { useSelector } from 'react-redux';

const { Content } = Layout;

function Anasayfa() {
    const config = useSelector(state => state.config.config.config.data.home);
    const language = useSelector(state => state.languageListener.language);
    return (
        <Layout>
            <MenuComponent />
            <Content style={{ paddingBottom: 200, backgroundColor: '#fff' }}>
                <CarouselComponent config={
                    language === 'tr' ? config.carousel.TR : config.carousel.EN
                } />
                <InfoBox config={
                    language === 'tr' ? config.aboutUs.TR : config.aboutUs.EN
                } />
                <CompanyDetails />
                <WorkDetails />
                <WorkBrands config={config.partners} />
            </Content>
            <Layout style={{ position: 'relative' }}>
                <FooterComponent />
            </Layout>
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