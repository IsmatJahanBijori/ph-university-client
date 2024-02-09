// import React from 'react'
import { sidebarRoutesGenerator } from '../../utils/sidebarRoutesGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { Layout, Menu } from 'antd';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
const { Sider } = Layout

const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
}

const Sidebar = () => {
    const role = "faculty";
    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarRoutesGenerator(adminPaths, "admin");
            break;

        case userRole.FACULTY:
            sidebarItems =
                sidebarRoutesGenerator(facultyPaths, "faculty");
            break;

        case userRole.STUDENT:
            sidebarItems =
                sidebarRoutesGenerator(studentPaths, "student");
            break;

        default:
            break;
    }


    return (
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    )
}

export default Sidebar