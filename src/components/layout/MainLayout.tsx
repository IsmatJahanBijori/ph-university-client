import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { adminSidebarRoutes } from '../../routes/admin.routes';

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//         key: String(index + 1),
//         icon: React.createElement(icon),
//         label: `nav ${index + 1}`,
//     }),
// );

// const items = [
//     {
//         key: "dashboard",
//         label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
//     },
//     {
//         key: "user-management",
//         label: "User Management",
//         children: [
//             {
//                 key: "create-admin",
//                 label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
//             },
//             {
//                 key: "create-faculty",
//                 label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
//             },
//             {
//                 key: "create-student",
//                 label: <NavLink to="/admin/create-student">Create Student</NavLink>
//             },
//         ]
//     }

// ]

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    // const {token: { colorBgContainer, borderRadiusLG },} = theme.useToken();
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{ color: "white", height: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1>pHero University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarRoutes} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            // minHeight: 470,
                            // background: colorBgContainer,
                            // borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default MainLayout