
const query = `
  query {
    Movements {
      _id
      status
      created
      updated
    }
  }
`

const Service = {
  up: {
    url: 'http://34.68.168.208:8000/graphql',
    query: query
  },
  left: {
    url: 'http://34.68.168.208:8002/graphql',
    query: query
  },
  right: {
    url: 'http://34.68.168.208:8003/graphql',
    query: query
  },
  down: {
    url: 'http://34.68.168.208:8001/graphql',
    query: query
  },
}

export default Service;