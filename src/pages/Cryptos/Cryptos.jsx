import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Layout } from 'antd';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const { Header, Content} = Layout;

function Home() {

  const { data: cryptosList, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return ('loading..')
  console.log(cryptosList); 

  return (
    <div className='home'>
    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
    <Content style={{ margin: '24px 16px 0' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        Cryptos
      </div>
    </Content>
    </div>
  );
}

export default Home;
