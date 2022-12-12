import { ClockCircleOutlined, DollarOutlined, IeSquareFilled, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Card, List, PageHeader, Space, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllAlbums } from '../../api/albums/getAllAlbumsService'
import NoImage from '../Elements/NoImage';

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  
  
  const Gallery = () => {
    const navigate = useNavigate()
    const [albums, setAlbums] = useState([]);
    
  
    useEffect(() => {
        getAllAlbums()
        .then((res) => { 
          setAlbums(res)
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
        dataSource={albums}
        renderItem={(item) => (
          <Space align="center">

          <List.Item key={item.id}>
            <Space align="center">
              <Card
                style={{

                  width: '100%',
                }}
                cover={item.cover_image ?         
                            <Image 
                              width={'100%'}
                              height={'100%'}
                              alt={'no image '}
                              src={item.cover_image}
                              />
                        
                      : <NoImage />}
                >
                <Meta
                  avatar={<Avatar src={item.cover_image} />}
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
  
  export default Gallery;