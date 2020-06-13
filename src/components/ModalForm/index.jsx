import React, { useEffect } from 'react'
import { Modal, Form, Input, Button } from 'antd'

export default function ModalForm (props) {
  const [form] = Form.useForm()
  
  const { visible, id, onOk, onCancel, editData } = props

  useEffect(() => {
    form.setFieldsValue({
      name: editData.name,
      age: editData.age
    })
  })

  const onFinish = values => {
    onOk(values)
    form.resetFields()
  }

  const handCancel = () => {
    onCancel()
  }

  return (
    <div className="com-modal"> 
      <Modal
          title={id ? '修改' : '添加'}
          visible={visible}
          onOk={onOk}
          onCancel={onCancel}
          footer={null}
      >
        <Form form={form} onFinish={onFinish} >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handCancel}>
              关闭
            </Button>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

