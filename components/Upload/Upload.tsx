import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import type { UploadFile, UploadProps } from 'antd'
import { Button, message, Upload, Typography } from 'antd'
import { backendUrl } from '../../constants/config'

const { Paragraph } = Typography

type ImageList = {
  url?: string
  id?: string
}

interface UploadFormProps {
  disabled?: boolean
  value?: UploadFile[]
  isEdit?: boolean
  allowFileExtensions?: string
  maximumUploadItems: number
  onChange?: (value?: ImageList[]) => void
}

const props: UploadProps = {
  name: 'file',
  action: `${backendUrl}/files/upload`,
  headers: {
    //authorization: 'authorization-text',
  },
  // onChange(info) {
  //   if (info.file.status !== 'uploading') {
  //    // console.log(info.file, info.fileList)
  //   }
  //   if (info.file.status === 'done') {
  //     message.success(`${info.file.name} file uploaded successfully`)

  //   } else if (info.file.status === 'error') {
  //     message.error(`${info.file.name} file upload failed.`)
  //   }
  // },
}

const UploadForm: React.FC<UploadFormProps> = ({
  onChange,
  allowFileExtensions,
  maximumUploadItems,
  disabled,
  isEdit,
  value,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>()

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)

    const newFileListUrl = newFileList.map((item) => {
      console.log('item response->', item.response)
      if (item.response) {
        return {
          // url: item.response?.url,
          id: item.response?.id,
        }
      }
      return {
        id: item.uid,
      }
    })
    onChange?.(newFileListUrl)
  }

  return (
    <Upload
      {...props}
      onChange={handleChange}
      maxCount={maximumUploadItems}
      accept={allowFileExtensions}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Paragraph style={{ color: '#C4C4C4' }}>
          อัพภาพสินค้า 3-10 รูป
        </Paragraph>
        <Button icon={<UploadOutlined />}>เพิ่มไฟล์</Button>
      </div>
    </Upload>
  )
}

export default UploadForm
