import React, { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';

export const FooterComponent = () => {
    const [env, setEnv] = useState(window.location.href.replace("https://aliugurlafci.github.io/reyap/", ""));
    const { Footer } = Layout;

    useEffect(() => {
        setEnv(window.location.href.replace("https://aliugurlafci.github.io/reyap", ""));
    }, [env]);

    return (
        <Footer className='footer'>
            <Row justify="center" className='standart'>
                <Col span={8} className="center gutter-row" xs={24} sm={12} md={8} lg={6}>
                    <span className='poppins-bold header'>Hakkımızda</span>
                    <h1 className='poppins-regular'>
                        1996 yılında mezun olduğumda romantik bir idealist olarak mesleğe başladım. İyi projelerde, önemli görevlerde çalıştım. 2010 yılında ahşap merdivenle, Ahşap küpeşte ve ahşap basamak yapımı ile kesişti mesleki serüvenim. Firmayı, özelinde de sevdiğim kadının önemsediği insanların sahip olduğu firmayı kurtarmaya çalışırken, o güne dek ilgi alanıma girmemiş yeni bir sanatla tanıştım; ahşap merdiven imalatıyla.
                    </h1>
                    <h1 className='poppins-regular copyright'>
                        Copyright @ 2023 Reyap Grup. Tüm hakları saklıdır.
                    </h1>
                </Col>
                <Col span={8} className="center gutter-row" xs={24} sm={12} md={8} lg={6}>
                    <span className='poppins-bold header centered'>Hızlı Menü</span>
                    <ul>
                        <li>
                            <a href="/" className={`poppins-regular ${env === "/" ? 'active' : ''}`}>Anasayfa</a>
                        </li>
                        <li>
                            <a href="/hakkimizda" className={`poppins-regular ${env === "/hakkimizda" ? 'active' : ''}`}>Hakkımızda</a>
                        </li>
                        <li>
                            <a href="/urunler" className={`poppins-regular ${env === "/urunler" ? 'active' : ''}`}>Ürünler</a>
                        </li>
                        <li>
                            <a href='/iletisim' className={`poppins-regular ${env === "/iletisim" ? 'active' : ''}`}>İletişim</a>
                        </li>
                    </ul>
                </Col>
                <Col span={8} className="center gutter-row" xs={24} sm={12} md={8} lg={6}>
                    <span className='poppins-bold header'>Ürünlerimiz</span>
                    <h1 className='h1'>
                        <span className='poppins-bold'>Adres:</span>
                        Sultanbeyli
                    </h1>
                    <h1 className='h1'>
                        <span className='poppins-bold'>GSM: </span>
                        (0555) 555 55 55
                    </h1>
                    <h1 className='h1'>
                        <span className='poppins-bold'>Telefon1: </span>
                        (0555) 555 55 55
                    </h1>
                    <h1 className='h1'>
                        <span className='poppins-bold'>Telefon2: </span>
                        (0555) 555 55 55
                    </h1>
                    <h1 className='h1'>
                        <span className='poppins-bold'>Fax: </span>
                        (0555) 555 55 55
                    </h1>
                </Col>
            </Row>
        </Footer>
    );
}