import React, { useState } from 'react';
import {
    Row,
    Form,
    Input,
    Button,
    Col,
    notification
} from 'antd';
import axios from 'axios';
import i18n from '../../i18n';

const { TextArea } = Input;

export const FormComponent = () => {
    const [form] = Form.useForm();
    const [fetching, setFetching] = useState(false);

    const onValidateFields = () => {
        form.validateFields();
    }
    const onFinishForm = async (values) => {
        setFetching(true);
        const { data } = await axios.post("https://api.reyapgroup.com/api/send-info", JSON.stringify(values));

        if (data.status === 200) {
            notification.success({
                message: 'İletiniz başarıyla gönderildi.',
                description: 'En kısa sürede sizinle iletişime geçeceğiz',
                placement: 'topRight'
            });
            setFetching(false);
        }
        else {
            notification.warning({
                message: 'İletiniz gönderilemedi',
                description: 'Lütfen daha sonra tekrar deneyin',
                placement: 'topRight'
            });
            setFetching(false);
        }
    }
    return (
        <div className="contact-container">
            <Row>
                <Col>
                    <div className='contact-body'>
                        <div className='contact-form'>
                            <Form
                                colon={false}
                                name='contact-form'
                                requiredMark
                                labelAlign='left'
                                form={form}
                                validateTrigger="onChange"
                                onValuesChange={() => onValidateFields()}
                                onFinish={onFinishForm}>
                                <Form.Item
                                    name="ad"
                                    rules={[
                                        {
                                            required: true,
                                            message: "The name is required",
                                        },
                                        {
                                            pattern: /^[a-zA-Z]+$/,
                                            message: 'Name can only include letters',
                                        },
                                    ]}>
                                    <Input placeholder={i18n.t("namesurname")} />
                                </Form.Item>
                                <Form.Item
                                    name="telefon"
                                    rules={[
                                        {
                                            required: true,
                                            message: "The phone number is required"
                                        },
                                        {
                                            pattern: /^[0-9]+$/,
                                            message: 'Name can only include numbers',
                                        },
                                    ]}>
                                    <Input placeholder={i18n.t("phone")} />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        }
                                    ]}>
                                    <Input placeholder={i18n.t("mailaddress")} />
                                </Form.Item>
                                <Form.Item
                                    name="konu">
                                    <Input placeholder={i18n.t("summary")} />
                                </Form.Item>
                                <Form.Item
                                    name="mesaj">
                                    <TextArea placeholder={i18n.t("message")} />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType='submit' loading={fetching}>{i18n.t("send")}</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}