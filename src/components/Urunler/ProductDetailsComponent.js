import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Image,
    Table,
    Button,
    Carousel,
    Form,
    Input,
    notification,
    InputNumber
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
    const [adet, setAdet] = useState(1);
    const [tutar, setTutar] = useState(product.bulkDetails[0].value + " " + product.bulkDetails[0].currency);

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
    useEffect(() => {
        if (adet > 0 && adet < 25) {
            const price = product.bulkDetails[0];
            return setTutar((parseFloat(price.value) * adet) + " " + price.currency);
        }
        if (adet > 24 && adet <= 100) {
            const price = product.bulkDetails[0];
            return setTutar((parseFloat(price.value) * adet) + " " + price.currency);
        }
        else if (adet > 100 && adet < 251) {
            const price = product.bulkDetails[1];
            return setTutar((parseFloat(price.value) * adet) + " " + price.currency);
        }
        else if (adet > 250 && adet < 501) {
            const price = product.bulkDetails[2];
            return setTutar((parseFloat(price.value) * adet) + " " + price.currency);
        }
        else if (adet > 500 && adet < 1001) {
            const price = product.bulkDetails[3];
            return setTutar((parseFloat(price.value) * adet) + " " + price.currency);
        }
        else if (adet > 1000 && adet < 5001) {
            const price = product.bulkDetails[4];
            return setTutar((parseFloat(price.value) * adet) + " " + price.currency);
        }
        else if (adet > 5001) {
            return setTutar("Please contact us");
        }
        else {
            return setTutar("");
        }
    }, [adet]);
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

                        adaptiveHeight
                        style={{ maxWidth: '100%' }}
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
                                    style={{ minWidth: '100%', maxHeight: 540 }}
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
                        style={{ marginBottom: 40 }} />
                    <span className='poppins-medium' style={{ fontSize: 16 }}>Tutar Hesapla</span>
                    <br />
                    <InputNumber
                        defaultValue={adet}
                        controls={false}
                        style={{ marginTop: 20 }}
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={value => setAdet(value)} />
                    {
                        tutar !== "" ?
                            <span className='poppins-regular' style={{ marginLeft: 20 }}>
                                Toplam Tutar <span className='poppins-bold' style={{ color: '#143d2b', marginLeft: 12 }}>{tutar}</span>
                            </span> : <></>
                    }
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