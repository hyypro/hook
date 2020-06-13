import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd'
import { getList, add, deleteData, updateData } from '@/action/home'
import ModalForm from '@@/ModalForm'
import './style.less'

function Home (props) {
  const [id, setId] = useState('')
  const [visible, setVisible] = useState(false)
  const [editData, setEditData] = useState([])
  const { getList, data, add, deleteData, updateData } = props

  useEffect(() => {
    getList()
  }, [])

  const onClick = () => {
    setId('')
    setVisible(true)
  }

  const onOk = values => {
    if (id) {
      updateData({ id, ...values })
    } else {
      add(values)
    }
    getList()
    setId('')
    setVisible(false)
  }

  const onCancel = () => {
    setId('')
    setVisible(false)
    setEditData([])
  }

  const deletes = (record) => {
    deleteData(record)
    getList()
  }

  const update = (record) => {
    setEditData(record)
    setId(record.id)
    setVisible(true)
  }
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: record => {
        return (
          <div>
            <Button onClick={() => update(record)} style={{ margin: "0 10px" }}>Update</Button>
            <Button onClick={() => deletes(record.id)}>Delete</Button>
          </div>
        )
      },
    }
  ]
  return (
    <div className="pages-home">
      <Button onClick={onClick}>添加</Button>      
      <Table columns={columns} dataSource={data} />
      <ModalForm
        id={id} 
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        editData={editData}
      />
    </div>
  )
}

export default connect(({ home }) => ({
  data: home.data
}), {
  getList,
  add,
  deleteData,
  updateData
})(Home)

