import { Card, Col, Divider, Row, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { getCompanyInfo } from '../../api/companyInfo'
import SimpleMap from './Map'

function Contacts() {
  const [companyInfo, setCompanyInfo] = useState({})
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)
      console.log(res);})
    .catch((res) => { console.log(res);})
  }, [])

  return (

  <>
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
        <Col span={2}></Col>
        <Col span={20}>
          <Divider>Контакти</Divider>
          <Card
            style={{
              width: '100%',
            }}
          >
            <p>Адрес: {companyInfo.address}</p>
            <p>Емейл: {companyInfo.email}</p>
            <p>Мобилен: {companyInfo.mobile_phone}</p>
            <p>Стационарен: {companyInfo.phone}</p>
          </Card>
        </Col> 
        <Col span={2}></Col>
      </Row>

      <Divider>Карта</Divider>
      <SimpleMap></SimpleMap>
      <Row>
          <Col span={24}>
            <Divider><h1>За Фирмата</h1></Divider>
            <h1>{companyInfo.description}</h1>
            <Divider></Divider>

          </Col>
        </Row>
  </>
  )
}

export default Contacts
