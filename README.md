Reddit Explorer

A Reddit-style web application built with React, Redux Toolkit and Vite.

The project provides a responsive interface for browsing posts, searching content, switching between categories, viewing post details, voting, viewing comments, and copying a post link.

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

Responsive desktop and mobile layouts

Redux Toolkit state management

ESLint configuration

Technology

React

Redux Toolkit

JavaScript

Vite

CSS

ESLint

Running the project

Install dependencies:

npm install


Start the development server:

npm run dev


Run the linter:

npm run lint

Reddit API note

The original implementation was intended to retrieve live Reddit posts through the Reddit API.

During development, Reddit's developer account/application registration process prevented the required automated account credentials from being created successfully. Requests through the Reddit API therefore returned HTTP 403 responses.

Rather than leaving the project non-functional, the application was adapted to use a local mock data service.

The mock data is stored in:

src/services/mockPosts.js


and is accessed through:

src/services/redditApi.js


This allows the application to demonstrate the required frontend functionality without depending on unavailable Reddit API credentials.

The application structure still keeps the data-access logic separated from the UI, so a real Reddit API implementation could be connected later.

Project structure
src/
├── components/
│   ├── Footer/
│   ├── Header/
│   ├── PostCard/
│   ├── PostDetails/
│   ├── Search/
│   └── Sidebar/
│
├── redux/
│   └── postsSlice.js
│
├── services/
│   ├── mockPosts.js
│   └── redditApi.js
│
├── App.jsx
├── App.css
└── main.jsx

Development notes

The project was developed incrementally, with functionality tested during each stage.

ESLint is used to catch common JavaScript and React issues:

npm run lint


The application currently uses mock Reddit data because live Reddit API access could not be completed due to the developer account/application authentication restriction described above.

Future improvements

If Reddit API access becomes available, the mock service can be replaced with live Reddit data while keeping the existing UI and Redux structure.

Potential future improvements include:

Live Reddit authentication

Real Reddit posts and comments

Persistent voting

Real post images

Pagination/infinite scrolling

More subreddit categories

User authentication

Persistent saved posts