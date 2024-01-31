import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import markdownit from 'markdown-it'
const md = markdownit()

export const prerender = true

export function load() {
  let dir = './content'
  let files = fs.readdirSync(dir)

  files = files.filter((file) => path.extname(file) === '.md')

  if (files.length) {
    let items = files.map((file) => {
      let raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      let parsed = matter(raw)
      return {
        content: parsed.content,
        ...parsed.data,
      }
    })
    const formatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      weekday: 'long',
    }

    const notes = items
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
          text: md.render(i.content),
        }
      })

    return {
      notes,
    }
  }

  return {
    status: 404,
    errors: {
      message: 'Sorry, cannot find content',
    },
  }
}
