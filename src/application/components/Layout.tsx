import React, { Component } from 'react';
import Head  from 'next/head';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {
  constructor( {props, title} ) {
    super(props);
    this.title = title;
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.title}</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <Header title={this.title}/>

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

