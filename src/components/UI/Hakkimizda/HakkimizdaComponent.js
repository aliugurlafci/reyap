import React from 'react';
import { Row, Col } from 'antd';

export const HakkimizdaComponent = () => {
    return (
        <div className='about-container'>
            <Row wrap style={{ marginBottom: 40, marginTop: 30 }} justify='center'>
                <Col xs={24} sm={24} md={12} lg={24}>
                    <span className='poppins-bold about-header'>
                        Hakkımızda
                    </span>
                </Col>
            </Row>
            <Row wrap className='' justify='center'>
                <Col xs={24} sm={24} md={12} lg={8}>
                    <div className='aboutus-image'>
                        <img src='https://slp-statics.astockcdn.net/static_assets/staging/21spring/homepage/curated-asset-collection/card-6.webp'
                            alt='aboutus-alt' />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <div className='aboutus-details'>
                        <span className='poppins-regular'>
                            Rekabetçi piyasa şartlarında taahhüt ve ve hizmetlerini mümkün olan en kısa zamanda ve optimum maliyetle tamamlamak. Müşteri beklentilerini eksiksiz karşılamak ve müşterilerine sunduğu mal ve hizmetlerini en üst kaliteye taşımaktır.
                            <br />
                            <br />
                            <br />
                            BURAK PLASTİK kalite ve sürekliliğin ancak değişen ve gelişen müşteri beklentilerinin tam ve doğru olarak tespit edilmesi ve karşılanması ile mümkün olacağı bilincindedir. Bu nedenle araştırma ve iş geliştirme faaliyetlerine büyük önem vermektedir. Zamanın getirdiği teknoloji ile kaliteli üretim yaparak müşterilerine sunmaktadır.
                            <br />
                            <br />
                            <br />
                            Ürünlerimizi satın almadan, satış sonrasına kadar tüm faaliyetlerinde dikkat edilmesi gereken prensip ilk seferde doğru yapmak ve müşteri memnuniyetini ön planda tutmaktır.
                        </span>
                    </div>
                </Col>
            </Row>
        </div >
    )
}