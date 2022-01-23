import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { CoffeeOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
const { Sider } = Layout;

function Navbar() {
    return (
        <div className="sider">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MoneyCollectOutlined />}>
                    <Link to="/cryptos">Crypto currencies</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CoffeeOutlined />}>
                    <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>

    );
}

export default Navbar;
