import 'dotenv/config'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const { SPACE_ID, ACCESS_TOKEN } = process.env

console.log(
  `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/explore?access_token=${ACCESS_TOKEN}`
)

const query = `
{
  noteCollection{
    items{
      date
      location
      coordinates {
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

    const notes = items
      .map((i) => {
        const date = new Date(i.date)

        if (date.getFullYear() === 2001) {
          date.setFullYear('1878') // hack because Contentful doesn't let me set a date in 1878
        }

        i.date = date
        return i
      })
      .sort((a, b) => a.date - b.date)
      .map((i) => {
        const { coordinates, location, date } = i
        const formattedDate = new Intl.DateTimeFormat(
          'en-US',
          formatOptions
        ).format(date)

        return {
          coordinates,
          location,
          date: formattedDate,
          text: documentToHtmlString(i.content.json),
        }
      })

    // console.log(notes)

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
