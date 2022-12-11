import { ClockCircleOutlined, IeSquareFilled, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, PageHeader, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllAlbums } from '../../api/albums/getAllAlbumsService'

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
            {/* <PageHeader
          className="site-page-header"
          onBack={() => navigate('/')}
          title="Назад"
          subTitle=""
        /> */}
  
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={albums}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[

            <IconText icon={ClockCircleOutlined} text={`Created on: ${item.created_on.slice(0, 10)}`} key="list-vertical-star-o" />,
            // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={230}
              height={200}
              alt="logo"
              src={`${item.cover_image}`}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.cover_image} />}
            title={<Link to={`/album/${item.id}`}>{`${item.name}`}</Link>}
            description={item.description}
          />
        </List.Item>
      )}
    />
        </>
        )};
  
  export default Gallery;