import { FC } from 'react';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import ClientInterface from '../modules/api/ClinetInterface';
import MicroCmsClient from '../modules/api/MicroCmsClient';
import MockClient from '../modules/api/MockClient';

const Index: FC<{ articles: Array<any> }> = ({articles}) => {
  return (
    <Layout title={"maru34 - WEB系エンジニアの趣味ブログ"}>
      <ArticleList articles={articles}/>
    </Layout>
  )
}

export async function getStaticProps() {
  let client: ClientInterface = (process.env.NODE_ENV == 'development')
    ? new MockClient('articles')
    : new MicroCmsClient('articles');

  const result = await client.findAll();

  return {
    props: {
      articles: result.contents
    },
  }
}

export default Index
