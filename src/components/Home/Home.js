import { Carousel, Divider, Image, PageHeader } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, List } from 'antd';
import { useEffect, useState } from "react";
import { getAllAlbums } from "../../api/albums/getAllAlbumsService";
import { getCompanyInfo } from "../../api/companyInfo";

  function Home() {
    const navigate = useNavigate()
    const [albumsData, setAlbumData] = useState([])
    const [companyInfo, setCompanyInfo] = useState({})

    useEffect(() => {
      getCompanyInfo()
      .then((res) => { 
        setCompanyInfo(res)
        console.log(res);})
      .catch((res) => { console.log(res);})
    }, [])

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
          src="/images/banner3.png"
        />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider><h1>Добре Дошли!</h1></Divider>
          <h1>{companyInfo.description}</h1>
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
      {/* <Row>
        <Col span={24}>
        <Image
          width={'100%'}
          height={'80%'}
          src="/images/coverImages/background-1.jpg"
        />
        </Col>
      </Row> */}
      <Row>
        <Col span={8}>
          <Divider>Контакти</Divider>
          <Card
            style={{
              width: 300,
            }}
          >
            <p>Емейл: {companyInfo.email}</p>
            <p>Мобилен: {companyInfo.mobile_phone}</p>
            <p>Стационарен: {companyInfo.phone}</p>
          </Card>
        </Col> 
        <Col span={16}>
          <Divider>Месторабота</Divider>
          <p>
              Фирмата извършва строителни дейности във Варна и околията. За точна информация звънете на посочените телефонни номера. Благодарим
          </p>
        </Col>
      </Row>

    </>
  
    )
  }
  
  export default Home