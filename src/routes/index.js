const query = `
  query {
    species(speciesID: "2") {
      name
      personConnection {
        people {
          name
          height
        }
      }
    }
  }
`

export async function GET() {
  const url = 'https://swapi-graphql.netlify.app/.netlify/functions/index'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  if (response.ok) {
    const json = await response.json()

    return {
      body: {
        repos: [],
      },
    }
  }

  return {
    status: 404,
  }
}
