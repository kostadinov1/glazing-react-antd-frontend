import { Divider, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import { getAllServices } from '../../api/services/getAllServices';
const columns = [
  {
    title: 'Услуга',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
  },

  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
  },
];

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        getAllServices()
        .then((res) => {
            setServices(res)
        })
        .catch()
    }, [])

    return (
      <>
      <Font
        family='Roboto'>
      <Divider></Divider>
      <Table columns={columns} dataSource={services} />
      </Font>
      </>
    )
}

export default Services;