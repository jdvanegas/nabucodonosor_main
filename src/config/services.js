
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
    url: 'http://nabuco-up.eastus.azurecontainer.io:8000/graphql',
    query: query
  },
  left: {
    url: 'http://nabuco-left.eastus.azurecontainer.io:8000/graphql',
    query: query
  },
  right: {
    url: 'http://nabuco-right.eastus.azurecontainer.io:8000/graphql',
    query: query
  },
  down: {
    url: 'http://nabuco-down.eastus.azurecontainer.io:8000/graphql',
    query: query
  },
}

export default Service;