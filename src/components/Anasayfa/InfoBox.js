import React from "react";
import { Col, Row } from 'antd';
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
        <Row className="info-details" gutter={16}>
            <div className="header">
                <h1>{i18n.t('maxquality')}</h1>
            </div>
            <Col className="box-main" xs={20} sm={20} md={20} lg={20}>
                {config.description}
            </Col>
        </Row>
    );
}