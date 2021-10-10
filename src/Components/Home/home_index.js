import React from 'react'
import { Container } from 'react-bootstrap'
import HomeBanner from './home-banner'
import HomeHeader from './home-header'
import Portfolio from './portfolio'
import Testamonial from './testamonial'
import WhyChoose from './why-choose'

function HomeIndex() {
    return (
        <div>
            <HomeHeader/>
            <Container>
            <WhyChoose/>
            <Portfolio/>
            <Testamonial/>
            </Container>
            <HomeBanner/>
           
        </div>
    )
}

export default HomeIndex
