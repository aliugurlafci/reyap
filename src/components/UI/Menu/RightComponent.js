import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

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
            label: 'Anasayfa',
            onClick: () => navigate('/')
        },
        {
            key: 2,
            label: 'Hakkımızda',
            onClick: () => navigate("/hakkimizda")
        },
        {
            key: 3,
            label: "Ürünler",
            onClick: () => navigate("/urunler")
        },
        {
            key: 4,
            label: 'İletişim',
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
                            onMouseEnter={() => setShowDrawer(true)}
                            onTouchStart={() => setShowDrawer(true)}
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