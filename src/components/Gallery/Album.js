import { Divider, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { getAlbum } from '../../api/albums/getAlbumService';

const imageStyles = {
  padding: '10px',
  maxWidth: '500px',
  maxHeight: '500px'

}

const Album = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAlbum(id)
      .then((res) => {
        setAlbum(res)
        setImages(res.image_set)
      })
      .catch()
  }, [id])
  
  return (
    <>
      <Divider orientation="left">{`Снимки Албум: ${album.name}`} </Divider>
      <Image.PreviewGroup
          contentRender={{current: images.length, total:4}}
        >
        {images.length > 0 ?
          images.map((el) => (<Image style={imageStyles}  src={el.image_file} />))
          : <h1>No Images!</h1>}
      </Image.PreviewGroup>
      <Divider orientation="left"></Divider>
    </>
  )
}

export default Album;

