import './Urunler.css';
import React from 'react';
import { Layout } from 'antd';
import {
    FooterComponent,
    MenuComponent,
    ProductComponent
} from '../../src/components/index';
//import { useSelector } from 'react-redux';

const { Content } = Layout;

export default function Urunler() {
    //const config = useSelector(state => state.config.config);
    return (
        <Layout>
            <MenuComponent />
            <Content className='content'>
                <ProductComponent /*config={config.products}*/ />
            </Content>
            <FooterComponent />
        </Layout>
    );
}

/** VERİ ŞEMASI
 * 
 *  "products": {
        "categories": [
            {
                "key": 1,
                "name": "example"
            },
            {
                "key": 2,
                "name": "example"
            },
            {
                "key": 3,
                "name": "example"
            }
        ],
        "productList": [
            {
                "key": 1,
                "name": "example",
                "image": "example",
                "category": "example",
                "productCode": "example",
                "productDetails": [
                    {
                        "key": 1,
                        "title": "example",
                        "value": "example"
                    },
                    {
                        "key": 2,
                        "title": "example",
                        "value": "example"
                    },
                    {
                        "key": 3,
                        "title": "example",
                        "value": "example"
                    },
                    {
                        "key": 4,
                        "title": "example",
                        "value": "example"
                    }
                ],
                "bulkDetails": [
                    {
                        "key": 1,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    },
                    {
                        "key": 2,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    },
                    {
                        "key": 3,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    },
                    {
                        "key": 4,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    }
                ]
            },
            {
                "key": 2,
                "name": "example",
                "image": "example",
                "category": "example",
                "productCode": "example",
                "productDetails": [
                    {
                        "key": 1,
                        "title": "example",
                        "value": "example"
                    },
                    {
                        "key": 2,
                        "title": "example",
                        "value": "example"
                    },
                    {
                        "key": 3,
                        "title": "example",
                        "value": "example"
                    },
                    {
                        "key": 4,
                        "title": "example",
                        "value": "example"
                    }
                ],
                "bulkDetails": [
                    {
                        "key": 1,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    },
                    {
                        "key": 2,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    },
                    {
                        "key": 3,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    },
                    {
                        "key": 4,
                        "gap": "1-10",
                        "value": "20",
                        "currency": "TL yada $"
                    }
                ]
            }
        ]
    }
 * 
 */