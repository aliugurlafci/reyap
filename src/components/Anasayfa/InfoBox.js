import React from "react";
import { Col } from 'antd';
import './infoBox.css'
import test from '../../assets/telephone.png'
import i18n from '../../i18n';

export const InfoBox = ({config}) => {

    return (
        <div className="info-details">
            <h1>MAKSİMUM KALİTE, EN UYGUN FİYAT !</h1>
            <Col className="box-main">
                Burak Plastik, kalite ve sürekliliğin ancak değişen ve gelişen müşteri beklentilerinin tam ve doğru olarak tespit edilmesi ve karşılanması ile mümkün olacağı bilincindedir. Bu nedenle araştıma ve iş geliştirme faaliyetlerine büyük önem vermektedir. Zamanın getirdiği teknoloji ile kaliteli üretim yaparak müşterilerine sunmaktadır. Ürünlerimizi satın almadan, satış sonrasına kadar tüm faaliyetlerinde dikkat edilmesi gereken prensip ilk seferde doğru yapmak ve müşteri memnuniyetini ön planda tutmaktır. Başlıca Ürünlerimiz; plastik saksı , plastik saksı üreticileri, plastik saksı imalatı, plastik saksı üreten firmalar, plastik saksı istoç , kağıt havluluk, plastik kağıt havluluk,toptan kağıt havluluk
            </Col>
            <div className="slogan-box-main">
                <div className="slogan-box">
                    <img src={test} style={{ width: 50, height: 50 }} />
                    <span>Yüksek ürün kalitesi{i18n.t('username')}</span>
                </div>
                <div className="slogan-box">
                    <img src={test} style={{ width: 50, height: 50 }} />
                    <span>Yüksek ürün kalitesi</span>
                </div>
                <div className="slogan-box">
                    <img src={test} style={{ width: 50, height: 50 }} />
                    <span>Yüksek ürün kalitesi</span>
                </div>
                <div className="slogan-box">
                    <img src={test} style={{ width: 50, height: 50 }} />
                    <span>Yüksek ürün kalitesi</span>
                </div>
            </div>
        </div>
    );
}