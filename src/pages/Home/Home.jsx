import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import { useGetNewsQuery } from "../../services/newsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { CarouselComp, StatsCards } from "../../components";

const { Header, Content } = Layout;
const { Title } = Typography;

function Home() {
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 24,
  });
  const { data: cryptosData } = useGetCryptosQuery(10);
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
          <Row gutter={16}>
            <Col  xs={24} s={24} lg={4}>
              <StatsCards
                totalCoins={cryptosData?.data?.stats?.totalCoins}
                totalMarketCap={cryptosData?.data?.stats?.totalMarketCap}
                total24hVolume={cryptosData?.data?.stats?.total24hVolume}
              ></StatsCards>
            </Col>
          </Row>

        </div>
      </Content>
    </div>
  );
}

export default Home;
