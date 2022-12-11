import { DollarOutlined,   LikeOutlined, } from '@ant-design/icons';
import { Card, List, Image, Space, Avatar, PageHeader } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../api/products/getAllProductsService'
import NoImage from '../Elements/NoImage';
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Products = () => {

  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
      getAllProducts()
      .then((res) => { 
        setProducts(res)
        console.log('res in SUCCES:', res)})
      .catch((res) => { console.log('res in ERROR:', res)})
  }, []);
  
  return (
  <>
        <PageHeader
        className="site-page-header"
        onBack={() => navigate('/')}
        title="Назад"
        subTitle=""
      />
  <div className="space-align-container" style={{marginTop:'21px'}}>
    <div className="space-align-block">
      <List
      // style={{ lineHeight:'20px', overflow:'hidden'}}
      itemLayout="horizontal"
      size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
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

                    width: '100%',
                  }}
                  cover={item.image ?         
                              <Image 
                            width={'100%'}
                            height={'100%'}
                                alt={'no image '}
                                src={item.image}
                                />
                          
                        : <NoImage />}
                  
                        actions={[
                          <IconText icon={DollarOutlined} text={`${item.price} лева`} key="list-vertical-star-o" />,
                          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        ]}>
                  <Meta
                    avatar={<Avatar src={item.image} />}
                    title={item.name}
                    description={item.description}
                  />      
                </Card>
              </Space>
            </List.Item>
            </Space>

            )}>    
        </List>
      </div>
    </div>
  </>
)};

export default Products;