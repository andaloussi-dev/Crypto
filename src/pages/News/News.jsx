import React from 'react';
import { Layout } from 'antd';
const { Header, Content} = Layout;


function Home() {
  return (
    <div className='home'>
    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
    <Content style={{ margin: '24px 16px 0' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        News
      </div>
    </Content>
    </div>
  );
}

export default Home;
