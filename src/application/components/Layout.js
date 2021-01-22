import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </div>
    )
  }
}

export default Layout;

