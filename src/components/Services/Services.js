import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllServices } from '../../api/services/getAllServices';
const columns = [
  {
    title: 'Услуга',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to={'/'}>{text}</Link>,
  },
  {
    title: 'Продължителност',
    dataIndex: 'work_duration',
    key: 'duration',
    // responsive: ['md'],
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    // responsive: ['lg'],
  },
];


const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        getAllServices()
        .then((res) => {
            setServices(res)
            console.log(res);})
        .catch((res) => { console.log(res);})

    }, [])

    return (
    <Table columns={columns} dataSource={services} />
    )
}

export default Services;