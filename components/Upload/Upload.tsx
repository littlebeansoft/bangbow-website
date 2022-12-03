import React from 'react'
import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Button, message, Upload, Typography } from 'antd'

const { Paragraph } = Typography

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const UploadForm: React.FC = () => (
  <Upload {...props}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Paragraph style={{ color: '#C4C4C4' }}>อัพภาพสินค้า 3-10 รูป</Paragraph>
      <Button icon={<UploadOutlined />}>เพิ่มไฟล์</Button>
    </div>
  </Upload>
)

export default UploadForm
