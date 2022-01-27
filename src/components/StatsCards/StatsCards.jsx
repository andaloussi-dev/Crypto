import React from "react";
import { Statistic, Card, Row, Col, Typography } from "antd";
import {
    DollarCircleOutlined,
    UpCircleOutlined,
    FieldTimeOutlined,
} from "@ant-design/icons";
import millify from "millify";
const { Title } = Typography;

function StatsCards({ totalCoins, totalMarketCap, total24hVolume }) {
    return (
        <div className="statsCards-container">
            <Title className="mini-titles" level={3}>
                The global crypto market cap{" "}
            </Title>
            <Row gutter={16}>
                <Col lg={8} s={24} xs={24} md={24}>
                    <Card className="statsCard">
                        <Statistic
                            title="Total Coins"
                            value={millify(totalCoins)}
                            valueStyle={{ color: "#ffff" }}
                            prefix={<DollarCircleOutlined />}
                        />
                    </Card>
                </Col>
                <Col lg={8} s={24} xs={24} md={24}>
                    <Card className="statsCard">
                        <Statistic
                            title="Total Market Cap"
                            value={millify(totalMarketCap)}
                            valueStyle={{ color: "#ffff" }}
                            prefix={<UpCircleOutlined />}
                            suffix="$"
                        />
                    </Card>
                </Col>

                <Col lg={8} s={24} xs={24} md={24}>
                    <Card className="statsCard">
                        <Statistic
                            title="Total 24 Volume"
                            value={millify(total24hVolume)}
                            valueStyle={{ color: "#ffff" }}
                            prefix={<FieldTimeOutlined />}
                            suffix="$"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default StatsCards;
