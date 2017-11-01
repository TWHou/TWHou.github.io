import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    id: 101,
    type: 'app',
    name: 'Mobile Cards',
    stack: ['React Native', 'Redux'],
    repo: 'https://github.com/TWHou/mobile-cards',
    info: 'A flashcard study app for mobile devices',
    image: 'mobile_cards.png',
    detail: {
      current: 'Mobile Cards is a cross platform mobile flashcard study app \
      built with React Native. The app allows users to create multiple decks \
      or cards organized by topics. Users can quiz themselves on the different \
      topics using the quiz function.',
      future: 'I would like to add swipe function to allow users to edit or \
      delete the decks and questions. There could also be options for \
      different types of questions such as multiple choice or true/false. A \
      log of past scores could help users see their progress.'
    }
  }, {
    id: 102,
    type: 'app',
    name: 'Readable',
    stack: ['React', 'Redux', 'React Router'],
    repo: 'https://github.com/TWHou/readable',
    info: 'Simple reddit clone',
    image: 'readable.png',
    detail: {
      current: 'Readable is a simple single page app built on the react/redux \
      front-end framework. Users will be able to post and comment on posts. \
      Users can vote, edit, and delete posts and comments.',
      future: 'Currently, the server code is provided by Udacity as part of \
      the Nanodegree Program. Due to its simplicity, many workarounds were \
      needed in the front end implementation. I would like to rewrite the \
      server code so that the front end logic can be simplified.'
    }
  }, {
    id: 103,
    type: 'app',
    name: 'Nightlife',
    stack: ['Angular', 'Express', 'Mongoose', 'Passport', 'Material UI'],
    repo: 'https://github.com/TWHou/nightlife',
    info: 'Search for bars in your area',
    image: 'nightlife.png',
    detail: {
      current: 'Nightlife allows you to search the yelp database for bars in \
      your area. This is still very much a work in progress.',
      future: 'The end goal for this app is to allow users to indicate whether \
      or not they are going to a certain bar, and also see how many others are \
      planning to go. Possible features might include "groups" so that users \
      can see how many of their friends are going instead of the general \
      public.'
    }
  }, {
    id: 104,
    type: 'app',
    name: 'Subreddit Viewer',
    stack: ['Angular'],
    repo: 'https://github.com/TWHou/subreddit-viewer',
    info: 'View a subreddit of your choice',
    image: 'subreddit.png',
    url: 'https://twhou.github.io/subreddit-viewer/',
    detail: {
      current: 'Simple interface to display a subreddit thread. This project \
      came as a coding challenge for a job application. The UI design was \
      provided by the recruiter. Functional requirements were to let users favorite a post, and be able to delete from favorites',
      future: 'I would like to at least add a way to let user choose which \
      subreddit they want to read, possibly allowing them to save a few \
      favorite subreddits.'
    }
  }, {
    id: 105,
    type: 'app',
    name: 'Pollster',
    stack: ['React', 'React Router', 'Express', 'Mongoose', 'Passport'],
    repo: 'https://github.com/TWHou/voting-app',
    info: 'Can\'t make a decision? Put it to a vote!',
    image: 'pollster.png',
    url: 'https://twhou-vote.herokuapp.com/',
    detail: {
      current: 'Pollster is a simple voting app that allows users to create, \
      and vote on polls. If there\'s not a suitable option, user can add their \
      own option to existing poll. The poll results are displayed in chart \
      form using Chart.js.',
      future: 'This project is pretty much finished. The only possible changes \
      I might make is to use Redux for state management, and to allow users to \
      restrict others from adding new options.'
    }
  }, {
    id: 106,
    type: 'app',
    name: 'My Reads',
    stack: ['React', 'React Router'],
    repo: 'https://github.com/TWHou/my-reads',
    info: 'Keep track of your reading list',
    image: 'my_reads.png',
    detail: {
      current: 'My Reads allows user to save books in one of three categories: \
      Currently Reading, Want to Read, and Read. The user can also add new \
      books using the search page. On the search page, user can add multiple \
      books before returning to the booklist.',
      future: 'Since this was a project from Udacity React Nanodegree, the \
      backend was provided by Udacity. I would like to explore other books \
      database apis, see if I can adapt this project to a more robust backend.'
    }
  }, {
    id: 107,
    type: 'api',
    name: 'Image Search',
    stack: ['Express', 'MongoDB'],
    repo: 'https://github.com/TWHou/image-search',
    info: 'Image Search using Google custom search',
    url: 'https://twhou-image-search.herokuapp.com/',
    detail: {
      current: 'User provide a term, the api will return a list of image urls \
      along with the alt text and page urls',
      future: ''
    }
  }, {
    id: 108,
    type: 'app',
    name: 'Twitch Status',
    stack: ['Angular'],
    repo: 'https://github.com/TWHou/twitch-json-api',
    info: 'See which channels are online',
    image: 'twitch.png',
    url: 'https://twhou.github.io/twitch-json-api/',
    detail: {
      current: 'Shows the status of a predefined list of channels with the \
      option of showing only channels that are online/offline. Due to this \
      being a frontend project, I did not use the Twitch API for security \
      reasons. Instead I used a passthrough api provided by FreeCodeCamp. This \
      limits the information that is returned.',
      future: 'I would like to allow users to input the channel they want to \
      check, possibily a personalized list. Exploring and switching to the \
      actual Twitch API is also a possibility.'
    }
  }, {
    id: 109,
    type: 'app',
    name: 'Random Quote',
    stack: ['Angular'],
    repo: 'https://github.com/TWHou/random-quote',
    info: 'Things people said',
    image: 'random_quote.png',
    url: 'https://twhou.github.io/random-quote/',
    detail: {
      current: 'This was a fun little project that gives the visitor a random \
      quote and a button to tweet it out. Note: Will need CORS plugin to be \
      able to display quotes.',
      future: 'The API I\'m currently using is provided by a fellow \
      FreeCodeCamper and is not maintained. I will either have to find a \
      maintained API that allows CORS, or write my own.'
    }
  }, {
    id: 110,
    type: 'api',
    name: 'URL Shortener',
    stack: ['Express', 'MongoDB'],
    repo: 'https://github.com/TWHou/shorturl-api',
    info: 'Takes long URLs and shorten them',
    url: 'https://twhou-shorturl.herokuapp.com/',
    detail: {
      current: 'Shortens long URLs and redirects to original website',
      future: ''
    }
  }, {
    id: 111,
    type: 'api',
    name: 'Timestamp',
    stack: ['Express'],
    repo: 'https://github.com/TWHou/timestamp-api',
    info: 'Takes long URLs and shorten them',
    url: 'https://twhou-timestamp.herokuapp.com/',
    detail: {
      current: 'Shortens long URLs and redirects to original website',
      future: ''
    }
  }, {
    id: 112,
    type: 'app',
    name: 'Museum Mile',
    stack: ['Knockout', 'Google Maps'],
    repo: 'https://github.com/TWHou/neighborhood-map',
    info: 'Museums of the Museum Mile',
    image: 'neighborhood_map.png',
    url: 'https://twhou.github.io/neighborhood-map/',
    detail: {
      current: 'This was small project for practicing the MV* concept. The \
      requirements were to use the Knockout framework, use Google Maps API for \
      desplaying locations, and use a non Google API for more information \
      about the locations.',
      future: ''
    }
  }, {
    id: 113,
    type: 'app',
    name: 'Puppy Shelter',
    stack: ['Flask', 'Sqlite', 'Google Sign-in'],
    repo: 'https://github.com/TWHou/catalog',
    info: 'Help a pal find a home',
    image: 'catalog.png',
    detail: {
      current: 'A simple CMS for users to add and manage their own puppy \
      shelter. The flask code uses decorators for cleaner code and better \
      maintainability.',
      future: 'First order of business will be to refractor the project code \
      into modules. Currently the project is in a single file of 300+ lines. I \
      would like to break that up to increase maintainablity. This was a \
      backend focused project. Therefore, I would like to dress up the \
      frontend a little more. That would include adding more details about \
      each puppy and making the UI more pleasant.'
    }
  }, {
    id: 114,
    type: 'app',
    name: 'Multi-user Blog',
    stack: ['Google App Engine', 'webapp2', 'jinja2'],
    repo: 'https://github.com/TWHou/multi-user-blog',
    info: 'Blog with your friends',
    image: 'multi_user_blog.png',
    url: 'https://udacity-project-2-twhou.appspot.com/blog',
    detail: {
      current: 'A simple platform for people to post, comment and vote. \
      Handlers and models are in separate packages for clean and maintainable \
      code.',
      future: 'The UI definitely need more work. GAE had undergone some \
      changes since and this project is using an old framework. I would like \
      to look into the new version and decide if I want to update to new \
      version, or do a rewrite into Django or Flask.'
    }
  }
];
