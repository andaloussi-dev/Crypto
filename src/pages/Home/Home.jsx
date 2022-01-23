import React from 'react';
import { Layout , Typography} from 'antd';
const { Header, Content} = Layout;
const {Title} = Typography

function Home() {
  return (
    <div className='home'>
    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} > 
        <Title className='headerTitle'> Home </Title>
    </Header>
    <Content style={{ margin: '24px 16px 0' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        Home
      </div>
    </Content>
    </div>
  );
}

export default Home;
