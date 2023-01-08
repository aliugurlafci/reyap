import React, { useState } from 'react';
import { Drawer, Row, Col, Divider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import logoW from '../../assets/logo.png';
import { MailOutlined } from '@ant-design/icons';

const DescriptionItem = ({ title, content }) => (
    <Row>
        <Col span={12}>
            <p className="site-description-item-profile-p-label poppins-regular">{title} :</p>
        </Col>
        <Col span={12}>
            <p className="site-description-item-profile-p-label poppins-regular">{content}</p>
        </Col>
    </Row>
);

export const ProductDetailsComponent = ({ drawerState, setDrawerState, item }) => {
    const navigate = useNavigate();
    return (
        <Drawer
            key={item}
            placement="right"
            closable={true}
            onClose={() => setDrawerState(false)}
            open={drawerState}
            destroyOnClose
            size='large'
            autoFocus>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={logoW} width={180} height={180} alt="product" />
            </div>
            <p className="site-description-item-profile-p poppins-regular">Details</p>

            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <Divider />
            <p className="poppins-regular">Company</p>
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <Divider />
            <p className="poppins-regular">Contacts</p>
            <DescriptionItem title="Descriptions" content="Answer" />
            <DescriptionItem title="Descriptions" content="Answer" />
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        type='primary'
                        shape='round'
                        icon={<MailOutlined />}
                        size="large"
                        onClick={() => navigate('/iletisim')} >Lets Contact</Button>
                </Col>
            </Row>
        </Drawer>
    );
}