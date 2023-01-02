import { Avatar, Card, List, Space, Image, Divider, Row, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllAlbums } from '../../api/albums/getAllAlbumsService'
import NoImage from '../Elements/NoImage';

  const Gallery = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAllAlbums()
        .then((res) => { 
          setAlbums(res)})
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
                lg: 36,
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
                      minHeight={'100px'} 
                      style={{
                        width: '100%',
                        maxWidth: '500px'
                        
                      }}
                      cover={item.cover_image ?   
                        <Link to={`/album/${item.id}`}>            
                                  <Image 
                                    style={{maxHeight:'500px', maxWidth: '500px'}}
                                    width={'100%'}
                                    height={'100%'}
                                    alt={'no image '}
                                    preview={false}
                                    src={item.cover_image}
                                    />
                                    </Link>                              
                            : <NoImage />
                        }>
                      <Meta
                        avatar={<Avatar src={'/logo/dogramaLogoOnly.png'} />}
                        title={item.name}
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
  
  export default Gallery;