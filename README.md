Reddit Explorer

A responsive Reddit-style web application built with React, Redux Toolkit and Vite.

The application provides a clean interface for browsing posts, searching content, switching between categories, viewing post details, interacting with votes, viewing comments, and copying post links.

Features

Reddit-style post feed

Category navigation

Search posts by:

title

subreddit

author

post content

Post detail view

Upvote and downvote interactions

Mock comments

Share/copy post link functionality

Loading skeletons

Empty search states

Error state with retry functionality

Refresh posts button

Responsive desktop, tablet and mobile layouts

Redux Toolkit state management

Accessible interactive controls

ESLint configuration

Automated component testing

End-to-end testing with Playwright

Technology

React

Redux Toolkit

React Redux

JavaScript

Vite

CSS

Jest

React Testing Library

Playwright

ESLint

Data

The application uses locally mocked Reddit-style data rather than the Reddit API.

The mock posts are stored in:

src/services/mockPosts.js


The data-access logic is kept separate in:

src/services/redditApi.js


This allows the application to demonstrate the required frontend functionality without relying on external API credentials or live Reddit data.

Design

The application was designed in Figma before implementation, with separate desktop and mobile layouts.

The final interface is responsive and adapts across desktop, tablet and mobile viewport sizes.

Desktop

Mobile

Running the project

Install dependencies:

npm install


Start the development server:

npm run dev

Testing

Run the Jest component tests:

npm test


The current component test suite covers the PostCard, PostDetails and Search components.

Run the Playwright end-to-end test:

npm run test:e2e


The E2E test verifies the main application flow, including loading the application and interacting with posts.

Code quality

Run ESLint:

npm run lint


Create a production build:

npm run build


The project has been checked with ESLint and a production Vite build.

Lighthouse

The application was tested with Google Lighthouse on the production build.

Category	Score
Performance	99
Accessibility	95
Best Practices	100
SEO	91

The SEO audit initially identified a missing meta description, which was subsequently added to the application.

Project structure
src/
├── components/
│   ├── Footer/
│   ├── Header/
│   ├── PostCard/
│   ├── PostDetails/
│   ├── Search/
│   └── Sidebar/
├── redux/
│   └── postsSlice.js
├── services/
│   ├── mockPosts.js
│   └── redditApi.js
├── App.jsx
├── App.css
└── main.jsx

e2e/
└── app.spec.js

Development notes

The project was developed incrementally, with functionality tested throughout development.

Component tests use Jest and React Testing Library, while Playwright provides end-to-end browser testing.

The final application was also checked with ESLint and a production Vite build.

Future improvements

Potential future improvements include:

Real Reddit API integration if permitted by the project requirements

Real post images

Pagination or infinite scrolling

More subreddit categories

Persistent voting

Persistent saved posts

User authentication

Expanded comment functionality