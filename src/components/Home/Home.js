import { Carousel, Divider, Image, PageHeader } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, List } from 'antd';
import { useEffect, useState } from "react";
import { getAllAlbums } from "../../api/albums/getAllAlbumsService";

  function Home() {
    const navigate = useNavigate()
    const [albumsData, setAlbumData] = useState([])

    useEffect(() => {
      getAllAlbums()
      .then((res) => { 
        setAlbumData(res)
        console.log('res in SUCCES:', res)})
      .catch((res) => { console.log('res in ERROR:', res)})
  }, []);

    console.log(albumsData)
    return (
      <>
      {/* <Row>
        <Col span={24}>
        <PageHeader
          className="site-page-header"
          onBack={() => navigate('/')}
          title="Стил Комфорт М13"
          subTitle="dogramavarna.net"
        />
        </Col>
      </Row> */}
      <Row>
        <Col span={24}>
        <Image
          width={'100%'}
          height={'100%'}
          src="/images/banner2.png"
        />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider><h1>Добре Дошли!</h1></Divider>
          <h1>
            Company info description here!!             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            
          </h1>
          <Divider><h1></h1></Divider>

        </Col>
      </Row>
          <Divider><h1>Разгледайте Нашите Завършени Проекти</h1></Divider>
      <Row>
        <Col span={24}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={albumsData}
          renderItem={(item) => (
            <Link to={`/album/${item.id}`}>
              <List.Item>
                <Card title={item.name}>
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={item.cover_image}
                  />
                  </Card>
              </List.Item>
              </Link>
          )}
        />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Image
          width={'100%'}
          height={'100%'}
          src="/images/banner1.png"
        />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Divider>Contacts</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            
          </p>
        </Col>
        <Col span={8}>
          <Divider>Links</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista orem ipsum dolor sit amet,
             consectetur adipiscing elit. Sed nonne merninisti licere mihi ista            
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
             ed nonne merninisti licere mihi ista
          </p>
        </Col>        <Col span={8}>
          <Divider>Locations</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            probare, quae sunt a te dicta? Refert tamen, quo modo.
            probare, quae sunt a te dicta? Refert tamen, quo modo.    
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
        </Col>
      </Row>

    </>
  
    )
  }
  
  export default Home