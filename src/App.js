import { Layout, Menu, Image } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

import { Link, Route, Routes, useParams } from 'react-router-dom';

import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Album from './components/Gallery/Album';
import Products from './components/Products/Products';
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs'
import Product from './components/Products/Product';
import Services from './components/Services/Services';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBarsStaggered, faDiagramProject, faHouseChimney, faPhone,  faTable} from '@fortawesome/free-solid-svg-icons'

const { Header, Content, Footer } = Layout;

const layoutStyles = {
  minHeight: '280px',
  padding: '24px',
  background:'#fff',
}

const logoStyles = {
  float: 'left',
  width: '120px',
  height: '31px',
  margin: '0px 24px 16px 0px',
  background: '/dogramaLogo.png',
}


const App = () => {

  const { id } = useParams();

  const navItems = [
    {
                  key: 1,
                  label: <Link to='/'>Начало</Link>,
                  icon:<FontAwesomeIcon icon={faHouseChimney} />
                },
                {
                  key: 2,
                  label: <Link to='/gallery'>Проекти</Link>,
                  icon:<FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
  
                },
                {
                  key: 3,
                  label: <Link to='/products'>Продукти</Link>,
                  icon:<FontAwesomeIcon icon={faTable} />
  
                },
                {
                  key: 4,
                  label: <Link to='/services'>Услуги</Link>,
                  icon:<FontAwesomeIcon icon={faBarsStaggered} />
  
                },
                {
                  key: 5,
                  label: <Link to='/contacts'>Контакти</Link>,
                  icon:<FontAwesomeIcon icon={faPhone} />
                },
              ]
  return (
  
  <Layout style={layoutStyles}>
    <Header>
      <div style={logoStyles}>
        <img src='/dogramaLogo.ico' 
        width={90}
        height={55}
        alt='logo'/>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={navItems}
      />
    </Header>

    <Content       style={{
        padding: '0 50px',
      }} >

        <Routes >
          {/* Menu */}
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<Gallery />}/>

          <Route path='/album/:id/' element={<Album />}/> 

          {/* Products */}
           <Route path='/products' element={<Products />}/>
           <Route path='/product/:id/' element={<Product />}/>

          {/* Services */}
          <Route path='/services' element={<Services />}/>


          {/* <Route path='/services' element={<Services />}/> */}
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/about' element={<AboutUs />}/>
          {/* Redirect Links */}


        </Routes>
    </Content>
    <Footer style={{ textAlign: 'center', }}>Ant Design ©2018 Created by Ant UED </Footer>
  </Layout>
)};

export default App;