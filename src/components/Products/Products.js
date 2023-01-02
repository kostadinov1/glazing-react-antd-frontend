import { DollarOutlined } from '@ant-design/icons';
import { Card, List, Image, Space, Avatar,Divider, Row, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/products/getAllProductsService'
import NoImage from '../Elements/NoImage';
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      getAllProducts()
      .then((res) => { 
        setProducts(res)})
      .catch()
  }, []);
  
  return (
  <>
  <Divider></Divider>
  <Row>
    <Col span={24}>

  <div className="space-align-container" style={{marginTop:'21px'}}>
    <div className="space-align-block">
      <List
      itemLayout="horizontal"
      size="large"
        pagination={{
          onChange: (page) => {
          },
          pageSize: 6,
        }}
        grid={{
          gutter: {
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          },
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
          dataSource={products}
          renderItem={(item) => (
            <Space align="center">
            <List.Item key={item.id}>
              <Space align="center">
                <Card
                  style={{
                    maxWidth: '500px',
                    width: '100%',
                  }}
                  cover={item.image ?         
                  <Image 
                  style={{maxHeight:'500px=', maxWidth: '500px'}}
                  width={'100%'}
                  height={'100%'}
                  alt={'no image '}
                  preview={false}
                    src={item.image}
                    />                          
                    : <NoImage />}                  
                    actions={[
                    <IconText icon={DollarOutlined} text={`${item.price} лева`} key="list-vertical-star-o" />,
                    ]}
                    >
                  <Meta
                    avatar={<Avatar src={'/logo/dogramaLogoOnly.png'} />}
                    title={`${item.name}`}
                    description={`Описание: ${item.description}`}
                  />      
                </Card>
              </Space>
            </List.Item>
            </Space>
            )}>    
        </List>
      </div>
    </div>
    </Col>
  </Row>
  </>
)};

export default Products;