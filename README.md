# Hitcount.app

Dynamically generates an image of a hitcounter that display page views for a particular webpage. Built with NextJs and UpStash Redis.

### Demo

[https://hitcount.app](https:/hitcount.app)

## `1` Clone the repo

```bash
git clone https://github.com/dasveloper/Hitcount.app.git hitcount-app
```

## `2` Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

## `3` Configuring Upstash

Go to the [Upstash Console](https://console.upstash.com/) and create a new database

#### Upstash environment

- `UPSTASH_REDIS_REST_URL`: Find the URL in the database details page in the REST API section.
- `UPSTASH_REDIS_REST_TOKEN`: Find the URL in the database details page in the REST API section.

## `4` Run the project

Start your local dev server

```bash
yarn dev
```

**Note:** Because of an issue with Node canvas on Vercel I've added this vercel-build step as a temporary solution.

"vercel-build": "yum install libuuid-devel libmount-devel && cp /lib64/{libuuid,libmount,libblkid}.so.1 node_modules/canvas/build/Release/ && next build"
