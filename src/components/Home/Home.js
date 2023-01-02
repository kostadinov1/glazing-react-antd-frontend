import { Divider, Image } from "antd";
import { Link } from "react-router-dom";
import { Col, Row, Card, List } from 'antd';
import { useEffect, useState } from "react";
import { getAllAlbums } from "../../api/albums/getAllAlbumsService";
import { getCompanyInfo } from "../../api/companyInfo";
import Font from "react-font";

  function Home() {
    const [albumsData, setAlbumData] = useState([])
    const [companyInfo, setCompanyInfo] = useState({})

    useEffect(() => {
      getCompanyInfo()
      .then((res) => { 
        setCompanyInfo(res)})
      .catch()
    }, [])

    useEffect(() => {
      getAllAlbums()
      .then((res) => { 
        setAlbumData(res)})
      .catch()
  }, []);


    return (
      <>
      <Font
        family="Roboto"
        >
      <Divider></Divider>
      <Row>
        <Col span={24}>
        <Image
          width={'100%'}
          height={'100%'}
          preview={false}
          src="/images/dogramaFinalBanner.png"
        />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider><h1 style={{ paddingTop: '20px' }}>Добре Дошли!</h1></Divider>
          <h1 style={{paddingLeft: '100px', paddingRight: '100px'}}>{companyInfo.description}</h1>
        </Col>
      </Row>
          <Divider><h1 style={{paddingTop: '10px', paddingBottom: '20px', }}>Завършени Проекти</h1></Divider>
      <Row>
        <Col span={24}>
        <List
            grid={{
              gutter: {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              },
              xs: 1,
              sm: 4,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
          dataSource={albumsData}
          renderItem={(item) => (
            <Link to={`/album/${item.id}`}>
              <List.Item>
                <Card
                  title={item.name}
                  style={{
                  // width: '100%',
                  maxWidth: '500px'
                  }}>
                <Image
                  style={{maxHeight:'370px', maxWidth: '450px'}}
                  width={'100%'}
                  preview={false}
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
          src="/"
        />
        </Col>
      </Row> */}
      <Row>
        <Col span={8}>
        <Divider><h3>Контакти</h3></Divider>
          <Card
            style={{
              width: 300,
            }}
          >
            <p>Адрес: {companyInfo.address}</p>
            <p>Емейл: {companyInfo.email}</p>
            <p>Мобилен: {companyInfo.mobile_phone}</p>
            <p>Стационарен: {companyInfo.phone}</p>
          </Card>
        </Col> 
        <Col span={16}>
          <Divider><h3>Месторабота</h3></Divider>
          <p>
              Фирмата извършва строителни дейности във Варна и околията.
               За точна информация звънете на посочените телефонни номера. Благодарим Ви, че избрахте Нас!
          </p>
        </Col>
      </Row>
      </Font>
    </>
   )
  }
  
  export default Home