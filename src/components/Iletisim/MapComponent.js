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

export const MapComponent = () => {
    return (
        <div className="contact-container">
            <Row wrap justify="center" align="middle" style={{ marginBottom: 25, padding: 30 }}>
                <Col className="contact-header-container">
                    <span className='contact-header'>iletişim</span>
                    <div className='contact-body'>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.427083688976!2d29.24657831566132!3d40.97212802959696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad01697c3c0e7%3A0xbfedeb715d949d67!2zRmF0aWggxLDFnyBNZXJrZXpp!5e0!3m2!1str!2str!4v1673380056661!5m2!1str!2str"
                                width="100%"
                                height="356"
                                className='contact-map'
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                title='reyap-map'
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='contact-form'>
                            <Form.Item>
                                <Input placeholder={i18n.t("namesurname")} />
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder={i18n.t("phone")} />
                            </Form.Item>
                            <Form.Item >
                                <Input placeholder={i18n.t("mailadress")} />
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

            {/*             <span className='about-header'>iletişim</span>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <iframe
                        width="50%"
                        height="356"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        id="gmap_canvas"
                        title='reyap-map'
                        src="https://maps.google.com/maps?width=520&amp;height=356&amp;hl=en&amp;q=Sultanbeyli%20Istanbul+(Our%20Office)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
                <div className="boxMain">
                    <h1>What is Lorem Ipsum?</h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div> */}
        </div>
    );
}