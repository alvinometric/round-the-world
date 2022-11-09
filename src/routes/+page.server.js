import { SPACE_ID, ACCESS_TOKEN } from '$env/static/private'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

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

export async function load() {
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

    return {
      notes,
    }
  }

  return {
    status: 404,
    errors: {
      message: 'Cannot Connect to the API',
    },
  }
}
