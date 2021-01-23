import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';

function Index( {articles} ) {
  return (
    <Layout>
      <ArticleList articles={articles}/>
    </Layout>
  )
}

export async function getStaticProps() {
  // TODO fetching resource using an external module
  const mock = {
    contents: [
      {
        id: 'w8ywix2yy',
        publishedAt: '2021-01-23T05:26:58.067Z',
        title: 'tetetest',
        body: '<p>ほんぶんです</p>'
      },
      {
        id: '5sa6f6jsc',
        publishedAt: '2020-10-27T14:46:35.326Z',
        title: 'テスト',
        body: '<p>記事テスト</p>'
      }
    ],
    totalCount: 2,
    offset: 0,
    limit: 10
  };
  return {
    props: {
      articles: mock.contents,
    },
  }
}

export default Index
