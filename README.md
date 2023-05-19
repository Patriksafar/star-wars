This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## API

There is local API provided for getting movies and actors:

### Movies

You can get list of all Star Wars movies by fetching data from `GET` http://localhost:3000/api/movies

You can also provide movie's id to get info about single movie `GET` http://localhost:3000/api/movies/1

For mutation data you need to make `POST` request to http://localhost:3000/api/movies/1 where you also pass the `id` as a param. You can change `description` and `title`.

This is how single movie response looks like

```json
{
  "id": "1",
  "title": "The Phantom Menace",
  "poster": "http://localhost:3000/static/movies/episode-1.jpeg",
  "year": "1999",
  "rating": 2.5,
  "description": "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory."
  "actors": [
    {
      "id": "7"
    },
    {
      "id": "5"
    },
    {
      "id": "6"
    },
    {
      "id": "4"
    }
  ],
  "description": "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory."
}
```

### Actors

You can get list of all Star Wars actors by fetching data from http://localhost:3000/api/actors

You can also provide actor's id to get info about single actor http://localhost:3000/api/actors/1

This is how single actor response looks like

```json
{
  "id": "1",
  "name": "Mark Hamill",
  "photo": "http://localhost:3000/static/actors/1.jpeg",
  "movies": [
    {
      "id": "4"
    },
    {
      "id": "5"
    },
    {
      "id": "6"
    }
  ]
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
