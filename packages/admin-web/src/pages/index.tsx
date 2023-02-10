import React from 'react';
import Head from 'next/head';
import type { MenuProps } from 'antd';
// import styles from '@/styles/Home.module.css'
import { Layout, Menu, theme, ConfigProvider } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic';

// import Table from '@/components/atoms/table';
const Table = dynamic(() => import("remote/table"), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] })
const { Header, Content, Footer, Sider } = Layout;


const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const defaultTheme = {
    "token": {
      "colorPrimary": "#fbb53d",
      "colorInfo": "#fbb53d"
    }
  }

  const data: any[] = [
    {
      key: '1',
      name: 'Change business',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <>
      <Head>
        <title>Admin Module</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider theme={defaultTheme}>
        <Layout hasSider>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              background: colorBgContainer
            }}
          >
            <div style={{ height: 32, margin: 16, background: defaultTheme.token.colorPrimary }} />
            <Menu mode="inline" defaultSelectedKeys={['4']} items={items} />
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200, minHeight: '100vh' }}>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                <Table data={data} theme={defaultTheme} />

                <p>long content</p>
                {
                  // indicates very long content
                  Array.from({ length: 100 }, (_, index) => (
                    <React.Fragment key={index}>
                      {index % 20 === 0 && index ? 'more' : '...'}
                      <br />
                    </React.Fragment>
                  ))
                }
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  )
}
