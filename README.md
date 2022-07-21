# Round the world

## 1. First steps

Create a barebones app looking at sveltekit concepts

Fetch from API
Create individual components
Pass props

## 2. Add graphql

Use star wars API? Sveltekit + GraphQL is ripe from a google search perspective?

```gql
query Query {
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
```

## 3. Grab graphql data from Contentful

Do the rest, add map, etc

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
