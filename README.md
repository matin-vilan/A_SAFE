# A.SAFE | Technical Test

This project is defined by A.SAFE company and is to verify capabilities.

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

### Users with their posts chart

The dashboard includes a button to go to the chart page
The chart.js package is used here
To display the data in this chart, the "jsonplaceholder" site api is used, which takes the posts and shows how many posts each user has posted in this chart.

### Gold chart

Another section was also dedicated to the chart.
This section shows the gold price
which must have a request period of 4 days (for a period of more than 4 days, an API purchase is required and the number of requests is limited to 100)
For testing in development mode, you also need to open an account on the site https://metalpriceapi.com/ and you must put the API key in the env file

## Task 4: Large Data Set Handling

The data with the number of 1000 records was displayed with the API on the large-data page in such a way that it is displayed as paginated on the client side.
Pagination can be controlled using api, which is much easier, but according to the task, this filter was done on the client side.
Also, the page is displayed in the URL so that the desired page remains when it is refreshed
For this system, a hook named useSearchParams was defined in the hooks folder

The ability to search in the result can be tested on this page, the result is paginated on the front side

## Task 5: Performance Optimisation

The "home page" and "post list" and "post content" pages are set as a server side and the information is transferred to the page through props
To test this page, you can go to the setting section through inspect and enable "Disable javascript"
Then you can still see the content of the page.

## Task 6: Testing

Unit testing for parts of the project was done using react testing library
Also, end to end testing was done for the project and Cypress was used for this

## env

Please use .env.example to create the .env file.

## Conclusion

I did not use state management in this project because the project was lightweight, but I worked with the state management of Redux, Redux Toolkit, Zustand, and also the context api with and without reduser hook and created a project.
I used React hook form to handle forms and developed many projects with it.
I also used zod for validation.
(I also worked with formik and yup and have experience using them)
I used the design systems Ant Design, Material UI, Chakra UI, Bootstrap, Atlassian Design System and had experience with many projects with them.
In terms of code optimization, if we have a good backend and clean Swagger, I use design patterns in my projects and arrange my structure based on the entities of the framework. In this project, because different APIs were used, it was not possible to customize the project much.
And finally, I tried to develop the project by installing the least packages. For example, the theme can be much better with next-themes. Handled but I handled it purely to show my abilities without using different packages
I tried to proceed according to the task's instructions
I hope this project will attract your attention
Thank you for taking the time to review the project
Regards
Matin Vilan

## Authors

- [@matin-vilan](https://www.github.com/matin-vilan)

## Optimizations

Tried to use reusable components

Tried to install few packages

Commits are done separately for each section

Separate pull request for each section

Typescript is used

## 🚀 About Me

Frontend Developer (ReactJS, NextJS) with a passion for teamwork, web software development, responsive design principles.
About four years of work experience

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matin-vilan-72288821a/)

## Running on the development:

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
