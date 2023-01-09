import React from "react";
import { Row, Col } from 'antd';
import {
    RiseOutlined,
    AuditOutlined,
    CommentOutlined,
    HourglassOutlined
} from '@ant-design/icons';

export const WorkDetails = ({ config }) => {

    return (
        <div className="work-details">
            <Row className="work-details-row">
                <Col>
                    <div className="item-container">
                        <RiseOutlined className="item-icon" />
                        <div className="item-content">
                            <span className="poppins-regular"> + 560</span>
                            <h1 className="poppins-regular">Memnun Müşteri</h1>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="item-container" xs={24} sm={12} md={12} lg={6} span={6}>
                        <AuditOutlined className="item-icon" />
                        <div className="item-content">
                            <span className="poppins-regular">+ 30</span>
                            <h1 className="poppins-regular">İştirakçi Firma</h1>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="item-container" xs={24} sm={12} md={12} lg={6} span={6}>
                        <CommentOutlined className="item-icon" />
                        <div className="item-content">
                            <span className="poppins-regular">+ 5000</span>
                            <h1 className="poppins-regular">Kullanılmış Plastik</h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}