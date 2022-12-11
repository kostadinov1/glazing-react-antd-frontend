import React, { useEffect, useState } from 'react'
import { getCompanyInfo } from '../../api/companyInfo'
import SimpleMap from './Map';
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
function Contacts() {
  const [companyInfo, setCompanyInfo] = useState({})

  useEffect(() => {
    getCompanyInfo()
    .then((res) => { 
      setCompanyInfo(res)
      console.log(res);})
    .catch((res) => { console.log(res);})
  }, [])

  const WrappedMap = withScriptjs(withGoogleMap(SimpleMap))
  return (

    <div>
      <h1>{companyInfo.name}</h1>
      <h1>{companyInfo.description}</h1>
      <h1>{companyInfo.address}</h1>
      <h1>{companyInfo.email}</h1>
      <h1>{companyInfo.phone}</h1>
      <h1>{companyInfo.mobile_phone}</h1>

      <WrappedMap
        googleMapURL={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      ></WrappedMap>
    </div>
  )
}

export default Contacts
