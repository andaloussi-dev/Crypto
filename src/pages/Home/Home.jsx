import React, { useState, useEffect } from "react";
import { Layout, Typography, Row, Col, Select } from "antd";
import { useGetNewsQuery } from "../../services/newsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { CarouselComp, StatsCards, TopFiveCryptos } from "../../components";

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

function Home() {
  const [timeperiod, setTimeperiod] = useState('24h');
  const [tokentype, setTokentype] = useState('');
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 24,
  });
  const { data: cryptosData } = useGetCryptosQuery({ count: 100, timePeriod: timeperiod, tokenType: tokentype });
  if (isFetching) return "loading ...";
  return (
    <div className="home">
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <Title className="headerTitle"> </Title>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Row>
            <Title level={2}>Today's Cryptocurrency Latest News</Title>
            <Col xs={24} s={24} lg={24}>
              <CarouselComp news={cryptoNews?.value}></CarouselComp>
            </Col>
          </Row>
          <StatsCards
            totalCoins={cryptosData?.data?.stats?.totalCoins}
            totalMarketCap={cryptosData?.data?.stats?.totalMarketCap}
            total24hVolume={cryptosData?.data?.stats?.total24hVolume}
          ></StatsCards>
          <Title style={{marginTop:'50px'}} level={2}>
            All cryptocurrency prices
          </Title>
          <div className="stats-options">
            <Select defaultValue="" style={{ width: 120 }} onChange={(value) => setTokentype(value)}>
              <Option value="">All coins</Option>
              <Option value="nft">NFT tokens</Option>
              <Option value="defi">DeFi tokens</Option>
              <Option value="stablecoin">Stablecoins</Option>
              <Option value="dex">DEC tokens</Option>
              <Option value="staking">Staking coins</Option>
              <Option value="dao">DAO tokens</Option>
              <Option value="meme">Meme coins</Option>
              <Option value="privacy">Privacy coins</Option>
            </Select>

            <Select className="timestamp-select" defaultValue="24h" style={{ width: 120 }} onChange={(value) => setTimeperiod(value)} >
              <Option value="24h">24 Hours</Option>
              <Option value="3h">3 Hours</Option>
              <Option value="7d">7 Days</Option>
              <Option value="30d">30 Days</Option>
              <Option value="3m">3 Months</Option>
              <Option value="1y">1 Year</Option>
              <Option value="3y">2 Years</Option>
              <Option value="5y">5 Years</Option>
            </Select>
          </div>
          <TopFiveCryptos topFive={cryptosData?.data?.coins}></TopFiveCryptos>

        </div>
      </Content>
    </div>
  );
}

export default Home;
