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

To retrieve a list of all Star Wars movies, you need to make a `GET` request to http://localhost:3000/api/movies.

To get information about a specific movie, you can provide the movie's ID as a parameter in the `GET` request to http://localhost:3000/api/movies/1. Replace 1 with the desired movie ID.

To update the `description` and `title` of a movie, you need to make a `POST` request to http://localhost:3000/api/movies/1, where `1` represents the movie ID you want to modify. Include the updated description and title as parameters in the request body.

#### Single Movie Response:

The single `movie` response provided is in JSON format and contains the following fields

```json
{
  "id": "1",
  "title": "The Phantom Menace",
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
}
```

### Actors

To retrieve a list of all Star Wars actors, you need to make a `GET` request to http://localhost:3000/api/actors.

To get information about a specific actor, you can provide the actor's ID as a parameter in the `GET` request to http://localhost:3000/api/actors/1. Replace 1 with the desired actor ID.

#### Single Actor Response:

The single `actor` response provided is in JSON format and contains the following fields

```json
{
  "id": "1",
  "name": "Mark Hamill",
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
