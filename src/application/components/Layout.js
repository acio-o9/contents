import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Container maxWidth="sm">
          <div>
            {this.props.children}
          </div>
        </Container>
        <Footer />
      </>
    )
  }
}

export default Layout;

