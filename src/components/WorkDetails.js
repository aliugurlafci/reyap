import React from "react";
import { Row, Col } from 'antd';
import {
    RiseOutlined,
    AuditOutlined,
    CommentOutlined,
    HourglassOutlined
} from '@ant-design/icons';

export const WorkDetails = () => {

    return (
        <div className="work-details">
            <Row>
                <Col xs={24} sm={12} md={8} lg={6} span={6}>
                    <div className="item-container">
                        <RiseOutlined className="item-icon" />
                        <div className="item-content">
                            <span className="poppins-regular">DASADASDSADSA</span>
                            <h1 className="poppins-regular">kasjfsnsaj</h1>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="item-container" xs={24} sm={12} md={8} lg={6} span={6}>
                        <AuditOutlined className="item-icon" />
                        <div className="item-content">
                            <span className="poppins-regular">DASADASDSADSA</span>
                            <h1 className="poppins-regular">kasjfsnsaj</h1>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="item-container" xs={24} sm={12} md={8} lg={6} span={6}>
                        <CommentOutlined className="item-icon" />
                        <div className="item-content">
                            <span className="poppins-regular">DASADASDSADSA</span>
                            <h1 className="poppins-regular">kasjfsnsaj</h1>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="item-container" xs={24} sm={12} md={8} lg={6} span={6}>
                        <HourglassOutlined className="item-icon" />
                        <div className="item-content">
                            <span className="poppins-regular">DASADASDSADSA</span>
                            <h1 className="poppins-regular">kasjfsnsaj</h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}