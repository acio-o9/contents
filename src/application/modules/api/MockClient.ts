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
        body: "<h1 id=\"h8189c32b27\">構成だったり、苦労したことだったり、をつらつら書きます。</h1><p><br></p><ul><li>ほげ</li><li>ふが</li></ul><blockquote>ここは参照です</blockquote><p><u>あんだーらいん</u>を引いています<br>ここは<strong>重要</strong>です<br>こんな<em>引用</em>もしていたりします<br><s>訂正</s>します<br></p><h1 id=\"h4f8e1ebce5\">題目１</h1><h2 id=\"hb30eab9e7a\">さぶだいとる</h2><h3 id=\"h8d926f060a\">h3くらい</h3><p><br></p><pre><code>&lt;?php\n$list = [];\nforeach ($list as $content) {\n    echo $content;\n}</code></pre><p><br></p>"
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

