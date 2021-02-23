import {GetStaticPaths} from 'next';
import { FC } from 'react';
import Layout from '../../../components/Layout';
import ClientInterface from '../../../modules/api/ClinetInterface';
import MicroCmsClient from '../../../modules/api/MicroCmsClient';
import MockClient from '../../../modules/api/MockClient';

const Index: FC<{ article: any }> = ({article}) => {
  return (
    <Layout title={"maru34 - WEB系エンジニアの趣味ブログ"}>
      <h1>{article.title}</h1>
      <div>
        <span>Date: {article.publishedAt}</span>
        <div dangerouslySetInnerHTML={{__html: article.body}}></div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let client: ClientInterface = (process.env.NODE_ENV == 'development')
    ? new MockClient('articles')
    : new MicroCmsClient('articles');

  const result = await client.findAll();
  const paths = result.contents.map((content: any) => `/articles/${content.id}`)

  return { paths, fallback: false}
}

export async function getStaticProps(content: any) {
  const id = content.params.id
  let client: ClientInterface = (process.env.NODE_ENV == 'development')
    ? new MockClient('articles')
    : new MicroCmsClient('articles');

  const result = await client.find(id);

  return {
    props: {
      article: result
    },
  }
}

export default Index

