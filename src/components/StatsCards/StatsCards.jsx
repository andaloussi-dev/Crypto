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
    console.log(totalMarketCap);
    return (
        <div className="statsCards-container">
            <Title className="mini-titles" level={3}>
                The global crypto market cap{" "}
            </Title>
            <Row gutter={16}>
                <Col span={24}>
                    <Card className="statsCard">
                        <Statistic
                            title="Total Coins"
                            value={millify(totalCoins)}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<DollarCircleOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card className="statsCard">
                        <Statistic
                            title="Total Market Cap"
                            value={millify(totalMarketCap)}
                            valueStyle={{ color: "#cf1322" }}
                            prefix={<UpCircleOutlined />}
                            suffix="$"
                        />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card className="statsCard">
                        <Statistic
                            title="Total 24 Volume"
                            value={millify(total24hVolume)}
                            valueStyle={{ color: "#cf1322" }}
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
