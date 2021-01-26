import React, { FC } from 'react';
import Head  from 'next/head';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: FC<{ title: string }> = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Header title={title}/>

      <Container maxWidth="sm">
        <div>
          {children}
        </div>
      </Container>

      <Footer />
    </>
  )
}

export default Layout;

