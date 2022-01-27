import React from "react";
import { Table, Avatar, Typography } from "antd";
import millify from "millify";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const { Title, Text } = Typography;

function TopFiveCryptos({ topFive }) {
    const columns = [
        {
            title: "#",
            dataIndex: "rank",
            key: "rank",
            width: 80,
            fixed: "left",
            responsive: ["md"],
            render: (rank) => (
                <>
                    <Text style={{ color: "#ffff" }} className="coin-info">
                        {rank}
                    </Text>
                </>
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            fixed: "left",
            ellipsis: true,
            render: (name) => (
                <>
                    <div className="coin-name-container">
                        <Avatar
                            className="coin-avatar"
                            size={{ xs: 25, sm: 25, md: 25, lg: 25, xl: 25, xxl: 30 }}
                            src={name.icon}
                        />

                        <Title level={5}>{name.name}</Title>
                        <Text className="coin-symbol" type="secondary">
                            {name.symbol}
                        </Text>
                    </div>
                </>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => (
                <>
                    <Text style={{ color: "#ffff" }} className="coin-info">
                        {" "}
                        $ {price != null ? millify(price) : "--"}
                    </Text>
                </>
            ),
        },
        {
            title: "Market Cap",
            dataIndex: "marketCap",
            key: "marketCap",
            render: (marketcap) => (
                <>
                    <Text style={{ color: "#ffff" }} className="coin-info">
                        {" "}
                        $ {marketcap != null ? millify(marketcap) : "--"}
                    </Text>
                </>
            ),
        },
        {
            title: "24H Volume",
            dataIndex: "volume",
            key: "volume",
            render: (volume) => (
                <>
                    <Text style={{ color: "#ffff" }} className="coin-info">
                        {" "}
                        $ {volume != null ? millify(volume) : "--"}
                    </Text>
                </>
            ),
        },
        {
            title: "Change 24H",
            key: "change",
            dataIndex: "change",
            render: (change) => {
                if (change) {
                    return (
                        <>
                            <Text
                                className="coin-info"
                                type={change[0] === "-" ? "danger" : "success"}
                            >
                                {" "}
                                {change[0] === "-" ? (
                                    <CaretDownOutlined />
                                ) : (
                                    <CaretUpOutlined />
                                )}{" "}
                                {change}%{" "}
                            </Text>
                        </>
                    );
                } else {
                    return (
                        <>
                            <Text className="coin-info" style={{ color: "#6e6d6d" }}>
                                {" "}
                                --%{" "}
                            </Text>
                        </>
                    );
                }
            },
        },
        {
            title: "Chart 24H",
            key: "chart",
            dataIndex: "chart",
            render: (chart) => {
                if (chart.change) {
                    return (
                        <>
                            <Sparklines data={chart.chart}>
                                <SparklinesLine
                                    color={chart.change[0] === "-" ? "#d1192e" : "#56b45d"}
                                />
                                <SparklinesSpots
                                    style={{
                                        fill: chart.change[0] === "-" ? "#d1192e" : "#56b45d9",
                                    }}
                                />
                            </Sparklines>
                        </>
                    );
                } else {
                    return (
                        <>
                            <Sparklines data={chart.chart}>
                                <SparklinesLine color="#6e6d6d" />
                                <SparklinesSpots style={{ fill: "#6e6d6d" }} />
                            </Sparklines>
                        </>
                    );
                }
            },
            width: 200,
        },
    ];

    const data = topFive.map((item, key) => ({
        key: key,
        rank: key + 1,
        name: { name: item?.name, icon: item?.iconUrl, symbol: item?.symbol },
        price: item?.price,
        marketCap: item?.marketCap,
        volume: item["24hVolume"],
        change: item?.change,
        chart: { chart: item.sparkline, change: item?.change },
    }));
    return (
        <div className="topFiveCryptos-container">
            <Table
                pagination={false}
                scroll={{ x: 1300 }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
}

export default TopFiveCryptos;
