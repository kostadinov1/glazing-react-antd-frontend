import React, { useEffect, useState } from 'react'
import { getCompanyInfo } from '../../api/companyInfo'

const aboutContainerStyles = {
  display: 'flex',
  width: '500px'
}

const infoDivStyles = {
  padding: ''
}

function AboutUs() {
  const [companyInfo, setCompanyInfo] = useState({})

  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)
})
    .catch()
  }, [])
  return (
    <>
    <div style={aboutContainerStyles}>
    <div style={infoDivStyles}>
      <h1>{companyInfo.name}</h1>
      <h1>{companyInfo.description}</h1>
      <h1>{companyInfo.address}</h1>
      <h1>{companyInfo.email}</h1>
      <h1>{companyInfo.phone}</h1>
      <h1>{companyInfo.mobile_phone}</h1>
    </div>
    </div>
  </>
  )
}

export default AboutUs
