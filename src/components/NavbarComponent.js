import React, { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import logo from '../assets/logo.png';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

export const NavbarComponent = () => {
    const navigate = useNavigate();
    const [showDrawer, setShowDrawer] = useState(false);

    const routes = [
        {
            key: 1,
            label: 'Anasayfa',
            onClick: () => navigate("/")
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
        <Header className='navbar flex-align-center' style={{ backgroundColor: 'white', height: 120 }}>
            <div className='logo-container flex-align-center'>
                <img src={logo} className="logo" alt="company-logo" />
            </div>
            <div className='menu-container'>
                <Menu
                    rootClassName='menu-root'
                    className='menu'
                    theme="light"
                    mode="horizontal"
                    overflowedIndicator={<MenuOutlined onMouseEnter={() => setShowDrawer(true)} />}
                    items={routes} />
            </div>
            <div className='mobileHsidden'>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={false}
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
        </Header>
    );
}