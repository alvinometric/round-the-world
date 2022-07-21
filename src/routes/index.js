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
    const { data } = await response.json()

    const { items } = data.noteCollection
    const formatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      weekday: 'long',
    }

    const notes = items.map((i) => {
      const date = new Date(i.date)
      date.setFullYear('1878') // hack because Contentful doesn't let me set a date in 1878
      const formattedDate = new Intl.DateTimeFormat(
        'en-US',
        formatOptions
      ).format(date)
      return {
        location: i.location,
        date: formattedDate,
      }
    })

    notes.sort((a, b) => a.date - b.date)

    return {
      body: {
        notes,
      },
    }
  }

  return {
    status: 404,
  }
}
