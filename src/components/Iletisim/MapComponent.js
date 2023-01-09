import React, { useState } from 'react';
import {
    Row,
    Form,
    Input,
    Button,
} from 'antd';
import i18n from '../../i18n';

const { TextArea } = Input;

export const MapComponent = () => {
    return (
        <div className="contact-container">
            <Row wrap justify="center" style={{ marginBottom: 25, padding: 30 }}>
                <Row className="contact-header-container">
                    <span className='contact-header'>iletişim</span>
                    <div className='contact-body'>
                        <div>
                            <iframe
                                className='contact-map'
                                width="50%"
                                height="356px"
                                frameborder="0"
                                //marginheight="0"
                                //marginwidth="0"
                                id="gmap_canvas"
                                title='reyap-map'
                                src="https://maps.google.com/maps?width=520&amp;height=356&amp;hl=en&amp;q=Sultanbeyli%20Istanbul+(Our%20Office)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                        <div className='contact-form'>
                            <Form.Item>
                                <Input placeholder={i18n.t("namesurname")}/>
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder={i18n.t("phone")}/>
                            </Form.Item>
                            <Form.Item >
                                <Input placeholder={i18n.t("mailadress")}/>
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder={i18n.t("summary")}/>
                            </Form.Item>
                            <Form.Item>
                                <TextArea placeholder={i18n.t("message")}/>
                            </Form.Item>
                            <Form.Item>
                                <Button>{i18n.t("send")}</Button>
                            </Form.Item>
                        </div>
                    </div>
                </Row>
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