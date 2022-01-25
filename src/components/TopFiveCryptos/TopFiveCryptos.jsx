import React from "react";
import { Table, Tag, Typography } from "antd";
const { Title } = Typography;

function TopFiveCryptos({topFive}) {
    console.log(topFive);
  const columns = [
    {
      title: "#",
      dataIndex: "rank",
      key: "rank",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Change",
      key: "change",
      dataIndex: "change",
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div className="topFiveCryptos-container">
      <Title className="mini-titles" level={3}>
        Today's Top 5 Cryptos
      </Title>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
}

export default TopFiveCryptos;
