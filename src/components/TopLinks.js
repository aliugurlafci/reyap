import React from 'react';
import { createFromIconfontCN, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import { Space } from 'antd'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export const TopLinks = () => {
    return (
        <div className='top-link'>
            <div className='top-link-content'>
                <span>Whatsapp sipariş hattı - 0 (555) 000 00 00</span>
                <div className='logo-container'>
                    <Space size={20}>
                        <FacebookOutlined style={{ fontSize: 22 }} />
                        <InstagramOutlined style={{ fontSize: 22 }} />
                    </Space>
                </div>
            </div>
        </div>
    );
}