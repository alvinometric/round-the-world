import 'dotenv/config'

const { SPACE_ID, ACCESS_TOKEN } = process.env

console.log(
  `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/explore?access_token=${ACCESS_TOKEN}`
)

const query = `
{
  noteCollection{
    items{
      date
      location {
        lat
        lon
      }
      content{
        json
      }
    }
  }
}
`

export async function GET() {
  const url = 'https://graphql.contentful.com/content/v1/spaces/' + SPACE_ID

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  })

  if (response.ok) {
    const json = await response.json()

    console.log(json)

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
