import { DownOutlined, UndoOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const PurchasingProducts = () => {
  const [expand, setExpand] = React.useState(false)

  return (
    <CardAll>
      <CardExpand>
        <Typography.Text style={{ marginLeft: 10 }}>
          PurchasingProducts
        </Typography.Text>
        <DownOutlined onClick={()=>{
            setExpand(!expand)
        }} />
      </CardExpand>
      {expand ? (
        <CardBody>
          <Typography.Text style={{}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography.Text>
        </CardBody>
      ) : null}
    </CardAll>
  )
}

export default PurchasingProducts

const CardExpand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  box-shadow: 0px 3px 34px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
`

const CardAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`
const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding: 10px;
`
