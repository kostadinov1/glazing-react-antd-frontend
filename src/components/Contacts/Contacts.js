import { Card, Col, Divider, Row, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import Font from 'react-font'
import { getCompanyInfo } from '../../api/companyInfo'
import SimpleMap from './Map'

function Contacts() {
  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)})
    .catch()
  }, [])

  return (
  <>
    <Font
      family='Roboto'>
      <Row>
      <Col span={24}>
      <Font
        family='Roboto'
        >
            <Divider><h2>Контакти</h2></Divider>
      </Font>
      <Card
        cover={                                 <Image 
          width={'100%'}
          height={'100%'}
          alt={'no image '}
          preview={false}
          src={'/images/dogramaBanner2.png'}
          />}
        style={{
        width: '100%',
        }}
        >
        <h2>Адрес: {companyInfo.address}</h2>
        <h2>Емейл: {companyInfo.email}</h2>
        <h2>Мобилен: {companyInfo.mobile_phone}</h2>
        <h2>Стационарен: {companyInfo.phone}</h2>
        </Card>
      </Col> 
      </Row>
      <Divider>Карта</Divider>
      <SimpleMap></SimpleMap>
      <Row>
        <Col span={24}>
          <Divider><h1>За Фирмата</h1></Divider>
           <p>{companyInfo.description}</p>
           <Divider></Divider>
          </Col>
        </Row>
  </Font>
  </>
  )
}

export default Contacts
