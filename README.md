This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# A_SAFE

# Project description

## Task 1: Authentication with Next.js

Authentication was handled in two ways in this project:
One as username and password and one by GitHub.
If you need to test authentication with GitHub in development mode, you need to create an .env file. create the following variables in .env file:
GITHUB_SECRET
GITHUB_ID
That you can create here:
https://github.com/settings/apps

You also need a NEXTAUTH_SECRET, which you can create a string with "openssl rand -base64 32"
Also, if you need to log in with a username and password, due to not having a database, you must enter username: "Matin" and password "123456".

"dashboard" route, is protected by next-auth.

## Task 2: Component Development

In this project, the theme was set manually and no package was used. But if you need more compatibility in the project, you can use the next-themes package

I also used tailwindcss and its configuration to change the theme, for this purpose I wrote a custom hook that can change the theme.
Also, I put the custom UI KIT components in the component folder, which are reusable components

## Task 3: Dashboard Generation

To install fewer packages for more performance as well as server-side pages in Next JS, "fetch" is used directly for api calls in this project.

The dashboard includes a button to go to the chart page
The chart.js package is used here
To display the data in this chart, the "jsonplaceholder" site api is used, which takes the posts and shows how many posts each user has posted in this chart.

## Task 4: Large Data Set Handling

The data with the number of 1000 records was displayed with the API on the large-data page in such a way that it is displayed as paginated on the client side.
Pagination can be controlled using api, which is much easier, but according to the task, this filter was done on the client side.
Also, the page is displayed in the URL so that the desired page remains when it is refreshed
For this system, a hook named useSearchParams was defined in the hooks folder

The ability to search in the result can be tested on this page, the result is paginated on the front side
