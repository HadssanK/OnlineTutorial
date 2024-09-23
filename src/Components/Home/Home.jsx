import React from 'react'
import Section from '../Hero/Section'
import FetchApi from '../FetchApi/FetchApi'
import Vedio from '../PlayVedio/Vedio'
import SecondCards from '../FetchApi/SecondCards'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
   <Section/>
   <FetchApi/>
   <Vedio/>
   <SecondCards/>
    </>
  )
}

export default Home