import { Divider,  PageHeader, Descriptions, Space, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../api/products/getProductService';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res)
      })
      .catch((res) => { console.log('res in ERROR:', res) })
  }, [id])
  

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate('/products/')}
        title="Назад"
        subTitle=""
      />
      <Divider orientation="left">{product.name}</Divider>
        <Space align='center'>
            <Image
                width={600}
                src='https://wallpapercave.com/wp/LP6DYJH.jpg'
            />
        </Space>
      <div>
    <Descriptions
      title="Responsive Descriptions"
      bordered
      size='small'
      column={{
        xxl: 1,
        xl: 1,
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Продукт">{product.name}</Descriptions.Item>
      <Descriptions.Item label="Цена">{`${product.price} лева`}</Descriptions.Item>
      {/* <Descriptions.Item label="Discount">{product.name}</Descriptions.Item> */}
      <Descriptions.Item label="Описание">{product.description}</Descriptions.Item>
    </Descriptions>
    <Divider orientation="left">{product.name}</Divider>

  </div>

    </>
  )
}

export default Product;

