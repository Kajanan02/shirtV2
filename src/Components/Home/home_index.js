import React from 'react'
import { Container } from 'react-bootstrap'
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
           
        </div>
    )
}

export default HomeIndex
