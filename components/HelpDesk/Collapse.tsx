import { SettingOutlined } from '@ant-design/icons'
import { Collapse, Select } from 'antd'
import React, { useState } from 'react'

const { Panel } = Collapse

const text = `
Lorem Ipsum is simply dummy text of the printing and typesetting
industry Lorem Ipsum has been the industry s standard dummy text
ever since the 1500s when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leap into electronic typesetting
remaining essentially unchanged It was popularised in the 1960s
with the release of Letraset sheets containing Lorem Ipsum passages
and more recently with desktop publishing software like Aldus
PageMaker including versions of Lorem Ipsum
`

const CollapseComponent: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation()
      }}
    />
  )

  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={'end'}
      >
        <Panel header="การซื้อสินค้า" key="1">
          <div>{text}</div>
        </Panel>
        <Panel header="การคืนสินค้า" key="2">
          <div>{text}</div>
        </Panel>
        <Panel header="นโยบายสิ่งของต้องห้าม" key="3">
          <div>{text}</div>
        </Panel>
        <Panel header="ติดต่อแบ่งเบา" key="4">
          <div>{text}</div>
        </Panel>
      </Collapse>
    </>
  )
}

export default CollapseComponent
