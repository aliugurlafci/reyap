import React, { useState } from 'react';
import {
    Row,
    Form,
    Input,
    Button,
    Col
} from 'antd';
import i18n from '../../i18n';

const { TextArea } = Input;

export const FormComponent = () => {
    return (
        <div className="contact-container">
            <Row>
                <Col>
                    <div className='contact-body'>
                        <div className='contact-form'>
                            <Form.Item>
                                <Input placeholder={i18n.t("namesurname")} />
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder={i18n.t("phone")} />
                            </Form.Item>
                            <Form.Item >
                                <Input placeholder={i18n.t("mailaddress")} />
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder={i18n.t("summary")} />
                            </Form.Item>
                            <Form.Item>
                                <TextArea placeholder={i18n.t("message")} />
                            </Form.Item>
                            <Form.Item>
                                <Button>{i18n.t("send")}</Button>
                            </Form.Item>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}