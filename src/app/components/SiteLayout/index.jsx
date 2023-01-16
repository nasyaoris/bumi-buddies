import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Container, WrapperContent } from './styles';


const SiteLayout = (props) => {
  return (
    <Container>
      <WrapperContent>
      <Navbar />
        {props.children}
      </WrapperContent>
    </Container>
  )
}

export default SiteLayout;