import { Divider, Image, PageHeader, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlbum } from '../../api/albums/getAlbumService';

const imageStyles = {
  padding: '10px'
}

const Album = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  console.log(images)
  useEffect(() => {
    getAlbum(id)
      .then((res) => {
        setAlbum(res)
        setImages(res.image_set)
      })
      .catch((res) => { console.log('res in ERROR:', res) })
  }, [id])
  

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate('/gallery/')}
        title="Назад"
        subTitle=""
      />
      <Divider orientation="left">Responsive</Divider>
      <Image.PreviewGroup
          contentRender={{current: images.length, total:4}}
      >

        {images.length > 0 ?
          images.map((el) => (<Image style={imageStyles} width={500} height={500} src={el.image_file} />))
          : <h1>No Images!</h1>}
      </Image.PreviewGroup>

      <Divider orientation="left">Vertical</Divider>
      <Pagination current={current} onChange={onChange} total={12} />
    </>
  )
}

export default Album;

