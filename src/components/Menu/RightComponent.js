import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import i18n from '../../i18n';

export const RightComponent = ({ scrollY, isHome }) => {
    const navigate = useNavigate();
    const [showDrawer, setShowDrawer] = useState(false);

    const handleMenuColor = () => {
        if (isHome) {
            return scrollY > 30 ? '#000' : '#fff';
        }
        else {
            return '#000';
        }
    }
    const routes = [
        {
            key: 1,
            label: i18n.t('homepage'),
            onClick: () => navigate('/')
        },
        {
            key: 2,
            label: i18n.t('institutional'),
            onClick: () => navigate("/kurumsal")
        },
        {
            key: 3,
            label: i18n.t('products'),
            onClick: () => navigate("/urunler")
        },
        {
            key: 4,
            label: i18n.t('contact'),
            onClick: () => navigate("/iletisim")
        },
    ]
    return (
        <div className='menu-right-side'>
            <div className='menu-container'>
                <Menu
                    rootClassName='menu-root'
                    className='menu'
                    theme="light"
                    style={{ color: handleMenuColor() }}
                    mode="horizontal"
                    overflowedIndicatorPopupClassName='no-show'
                    selectable={false}
                    overflowedIndicator={
                        <MenuOutlined
                            onClick={() => setShowDrawer(true)}
                            style={{ fontSize: 24 }}
                        />}
                    items={routes}
                />
            </div>
            <div className='mobileHsidden'>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable
                    onClose={() => setShowDrawer(false)}
                    open={showDrawer}>
                    <Menu
                        rootClassName='menu-root'
                        className='menu'
                        theme="light"
                        mode="vertical"
                        overflowedIndicator={<></>}
                        items={routes} />
                </Drawer>
            </div>
        </div>
    );
}