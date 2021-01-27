import ClientInterface from "./ClinetInterface"

class ArticleMockClient implements ClientInterface {
  resource: string;

  constructor(resource: string) {
    this.resource = resource;
  }

  find(id: string) {
    let result: any = '';
    if (id == 'w8ywix2yy') {
      result = {
        id: 'w8ywix2yy',
        publishedAt: '2021-01-23T05:26:58.067Z',
        title: 'hogehoge',
        body: '<p>ほんぶんです</p>'
      };
    } else {
      result = {
        id: '5sa6f6jsc',
        publishedAt: '2020-10-27T14:46:35.326Z',
        title: 'テスト',
        body: '<p>記事テスト</p>'
      }
    }
    return result;
  }

  findAll() {
    return {
      contents: [
          {
            id: 'w8ywix2yy',
            publishedAt: '2021-01-23T05:26:58.067Z',
            title: 'hogehoge',
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
  }
}

export default ArticleMockClient

