import ClientInterface from "./ClinetInterface"

class MicroCmsClient implements ClientInterface {
  resource: string;

  constructor(resource: string) {
    this.resource = resource;
  }

  async findAll() {
    const key = {
      headers: {'X-API-KEY': process.env.CMS_API_KEY}
    }
    const endpoint = process.env.CMS_ENDPOINT;
    const res = await fetch(endpoint + this.resource, key)
    const json = await res.json();
    return json;
  }
}


export default MicroCmsClient

