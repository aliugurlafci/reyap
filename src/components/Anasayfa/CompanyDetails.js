import React from "react";
import { Row, Col } from 'antd';
import {
    LikeOutlined,
    SmileOutlined,
    RocketOutlined,
    MoneyCollectOutlined
} from '@ant-design/icons';
import i18n from "../../i18n";

export const CompanyDetails = ({ config }) => {

    return (
        <div className="work-details">
            <Row className="slogan-box-main" justify="center" align="middle" gutter={16}>
                <Col className="slogan-box" xs={20} sm={10} md={10} lg={5}>
                    <LikeOutlined className="icon" />
                    <span>{i18n.t('highproductquality')}</span>
                </Col>
                <Col className="slogan-box" xs={20} sm={10} md={10} lg={5}>
                    <RocketOutlined className="icon" />
                    <span>{i18n.t('quickproductdelivery')}</span>
                </Col>
                <Col className="slogan-box" xs={20} sm={10} md={10} lg={5}>
                    <MoneyCollectOutlined className="icon" />
                    <span>{i18n.t('lowpricewarrant')}</span>
                </Col>
                <Col className="slogan-box" xs={20} sm={10} md={10} lg={5}>
                    <SmileOutlined className="icon" />
                    <span>{i18n.t('customerhappiness')}</span>
                </Col>
            </Row>
        </div>
    );
}