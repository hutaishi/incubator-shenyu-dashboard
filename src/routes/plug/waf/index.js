import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import { connect } from 'dva';

@connect(({ waf }) => ({
  waf,
}))
export default class Waf extends Component {
  componentDidMount() { }

  render() {
    const selectColumns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '开启',
        dataIndex: 'open',
        key: 'open',
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
      },
    ];

    const rulesColumns = [
      {
        title: '规则名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '开启',
        dataIndex: 'open',
        key: 'open',
      },
      {
        title: '更新时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
      },
    ];

    return (
      <div>
        <Row gutter={20}>
          <Col span={7}>
            <Table
              bordered
              columns={selectColumns}
              dataSource={[]}
            />
          </Col>
          <Col span={17}>
            <Table
              bordered
              columns={rulesColumns}
              expandedRowRender={() => <p>111</p>}
              dataSource={[]}
            />
          </Col>
        </Row>
      </div>
    );
  }
}