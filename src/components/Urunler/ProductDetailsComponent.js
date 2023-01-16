import React, { useState } from 'react';
import {
    Row,
    Col,
    Image,
    Table,
    Button,
    Carousel,
    Form,
    Input,
    notification
} from 'antd';
import i18n from '../../i18n';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const { TextArea } = Input;


export const ProductDetailsComponent = () => {
    const { state } = useLocation();
    const [form] = Form.useForm();
    const [product,] = useState(state.products[state.key - 1]);
    const [fetching, setFetching] = useState(false);

    const detailsColumns = [
        {
            title: 'Ürün Kodu',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Ölçü Tipi',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Ölçüler',
            dataIndex: 'value',
            key: 'value'
        }
    ];
    const bulkColums = [
        {
            title: 'Adet',
            key: 'gap',
            dataIndex: 'gap'
        },
        {
            title: 'Birim fiyatı',
            key: 'value',
            dataIndex: 'value'
        },
    ]
    const handleDetailsDataSource = () => {
        let newSoure = [];
        product.productDetails.map(item => {
            let source = {
                title: item.title,
                value: item.value,
                code: product.productCode
            };
            newSoure.push(source);
        });
        return newSoure;
    }

    const handleBulkDataSource = () => {
        let newSoure = [];
        product.bulkDetails.map(item => {
            let source = {
                gap: item.gap,
                value: item.value + " " + item.currency
            };
            newSoure.push(source);
        });
        return newSoure;
    }
    const onValidateFields = () => {
        form.validateFields();
    }
    const onFinishForm = async (values) => {
        setFetching(true);
        values["siparis_zamani"] = new Date().toLocaleString();
        values["urun_kodu"] = product.productCode;
        const { data } = await axios.post("https://api.reyapgroup.com/api/send-order", JSON.stringify(values));

        if (data.status === 200) {
            notification.success({
                message: 'Sipariş bilgileriniz başarıyla gönderildi.',
                description: 'En kısa sürede sizinle iletişime geçeceğiz',
                placement: 'topRight'
            });
            setFetching(false);
        }
        else {
            notification.warning({
                message: 'Sipariş bilgileriniz gönderilemedi',
                description: 'Lütfen daha sonra tekrar deneyin',
                placement: 'topRight'
            });
            setFetching(false);
        }
    }
    return (
        <div className="product-details">
            <Row justify="center" align="top" gutter={[16, 16]}>
                <Col xs={20} sm={18} md={16} lg={8}>
                    <Carousel
                        autoplay
                        pauseOnHover
                        dots={{ className: "dots" }}
                        autoplaySpeed={2000}
                        effect='scrollx'
                        lazyLoad='progressive'
                        swipe
                        centerMode
                        variableWidth
                        style={{ maxWidth: '100%', maxHeight: 540 }}
                        className='product-details-carousel'
                        draggable>
                        {
                            product.image.map(item => (
                                <Image
                                    key={item.key}
                                    src={item.url}
                                    alt='iaag'
                                    decoding='async'
                                    unselectable='on'
                                    style={{ maxWidth: 500, maxHeight: 540 }}
                                    loading='lazy' />
                            ))
                        }
                    </Carousel>
                </Col>
                <Col xs={20} sm={18} md={12} lg={8}>
                    <Table
                        dataSource={handleDetailsDataSource()}
                        columns={detailsColumns}
                        pagination={false}
                        bordered
                        expandable
                        size='large'
                        style={{ marginBottom: 40 }} />
                    <Table
                        dataSource={handleBulkDataSource()}
                        columns={bulkColums}
                        pagination={false}
                        bordered
                        expandable
                        size='large'
                    />
                </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                <div span={10}>
                    <Form
                        className='order-form'
                        colon={false}
                        name='contact-form'
                        requiredMark
                        labelAlign='left'
                        form={form}
                        validateTrigger="onChange"
                        onValuesChange={() => onValidateFields()}
                        onFinish={onFinishForm}>
                        <Row align="middle" gutter={10}>
                            <Col className='form-part' xs={24} sm={24} md={24} lg={5}>
                                <h3>{i18n.t('orderform')}</h3>
                                <Form.Item name="ad">
                                    <Input placeholder={i18n.t("namesurname")} />
                                </Form.Item>
                                <Form.Item name="telefon">
                                    <Input placeholder={i18n.t("phone")} />
                                </Form.Item>
                            </Col>
                            <Col className='form-part2' xs={24} sm={24} md={24} lg={5}>
                                <Form.Item name="email">
                                    <Input placeholder={i18n.t("mailaddress")} />
                                </Form.Item>
                                <Form.Item name="firma">
                                    <Input placeholder={i18n.t("companyname")} />
                                </Form.Item>
                            </Col>
                            <Col className='form-part3' xs={24} sm={24} md={24} lg={5}>
                                <Form.Item name="urun_adedi">
                                    <Input placeholder={i18n.t("pieces")} />
                                </Form.Item>
                                <Form.Item name="aciklama">
                                    <TextArea placeholder={i18n.t("ordernote")} />
                                </Form.Item>
                                <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button htmlType='submit' loading={fetching}>{i18n.t("order")}</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
}
/**
 * 
 * <div className='form-part'>
                            <h3>{i18n.t('orderform')}</h3>
                            <Form.Item name="ad">
                                <Input placeholder={i18n.t("namesurname")} />
                            </Form.Item>
                            <Form.Item name="telefon">
                                <Input placeholder={i18n.t("phone")} />
                            </Form.Item>
                        </div>
                        <div className='form-part2'>
                            <Form.Item name="email">
                                <Input placeholder={i18n.t("mailaddress")} />
                            </Form.Item>
                            <Form.Item name="firma">
                                <Input placeholder={i18n.t("companyname")} />
                            </Form.Item>
                        </div>
                        <div className='form-part3'>
                            <Form.Item name="urun_adedi">
                                <Input placeholder={i18n.t("pieces")} />
                            </Form.Item>
                            <Form.Item name="aciklama">
                                <TextArea placeholder={i18n.t("ordernote")} />
                            </Form.Item>
                            <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button htmlType='submit' loading={fetching}>{i18n.t("order")}</Button>
                            </Form.Item>
                        </div>
 */