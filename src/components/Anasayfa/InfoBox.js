import React from "react";
import { Col } from 'antd';
import {
    LikeOutlined,
    SmileOutlined,
    RocketOutlined,
    MoneyCollectOutlined
} from '@ant-design/icons';
import './infoBox.css'
import i18n from '../../i18n';

export const InfoBox = ({ config }) => {

    return (
        <div className="info-details">
            <h1>{i18n.t('maxquality')}</h1>
            <Col className="box-main">
                {i18n.t('aboutreyap')}
            </Col>
            <div className="slogan-box-main">
                <div className="slogan-box">
                    <LikeOutlined className="icon" />
                    <span>{i18n.t('highproductquality')}</span>
                </div>
                <div className="slogan-box">
                    <RocketOutlined className="icon" />
                    <span>{i18n.t('quickproductdelivery')}</span>
                </div>
                <div className="slogan-box">
                    <MoneyCollectOutlined className="icon" />
                    <span>{i18n.t('lowpricewarrant')}</span>
                </div>
                <div className="slogan-box">
                    <SmileOutlined className="icon" />
                    <span>{i18n.t('customerhappiness')}</span>
                </div>
            </div>
        </div>
    );
}