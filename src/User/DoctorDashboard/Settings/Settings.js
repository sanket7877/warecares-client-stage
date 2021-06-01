import React from 'react';
import { Row, Col, Typography, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

export interface NavBarProps {
    selectedPage: string;
    children: React.ReactNode;
}

export const Settings: React.FC<NavBarProps> = (props: NavBarProps) => {

    const gotoPage = (page: string) => {
        //GO TO MENU ITEM PAGE
    };

    return (
        <Row justify='center'>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Header className='header-fixed'>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={20} xs={20}>
                            <Title id='title-button' level={4}>
                                <a onClick={() => gotoPage('')}>My App</a>
                            </Title>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={4} xs={4}>
                            <Menu
                                theme='dark'
                                mode='horizontal'
                                defaultSelectedKeys={["item1"]}
                                overflowedIndicator={<MenuOutlined />}
                            >
                                <Menu.Item
                                    key="item1"
                                    onClick={() => gotoPage("item1")}
                                >
                                    item1
                                </Menu.Item>
                                <Menu.Item
                                    key={"item2"}
                                    onClick={() => gotoPage("item2")}
                                >
                                    item2
                                </Menu.Item>
                                <Menu.Item
                                    key={"item3"}
                                    onClick={() => gotoPage("item3")}
                                >
                                    item3
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Content>{props.children}</Content>
            </Col>
        </Row>
    );
};

export default  Settings;
