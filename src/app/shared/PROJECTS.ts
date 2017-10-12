import { Project } from './project';

export const projects: Project[] = [
  {
    id: 101,
    type: 'app',
    name: 'Mobile Cards',
    stack: ['React Native', 'Redux'],
    repo: 'https://github.com/TWHou/mobile-cards',
    info: 'A flashcard study app for mobile devices',
    image: 'mobile_cards.png',
    detail:
      'Mobile Cards is a cross platform mobile flashcard study app built with \
      React Native. The app allows users to create multiple decks or cards \
      organized by topics. Users can quiz themselves on the different topics \
      using the quiz function.'
  }, {
    id: 102,
    type: 'app',
    name: 'Readable',
    stack: ['React', 'Redux', 'React Router'],
    repo: 'https://github.com/TWHou/mobile-cards',
    info: 'Simple reddit clone',
    image: 'readable.png',
    detail:
      'Readable is a simple single page app built on the react/redux front-end \
      framework. Users will be able to post and comment on posts. Users can \
      vote, edit, and delete posts and comments.'
  }, {
    id: 103,
    type: 'app',
    name: 'Nightlife',
    stack: ['Angular', 'Express', 'Mongoose', 'Passport', 'Material UI'],
    repo: 'https://github.com/TWHou/nightlife',
    info: 'Search for bars in your area',
    image: 'nightlife.png',
    detail:
      'Nightlife allows you to search the yelp database for bars in your area'
  }, {
    id: 104,
    type: 'app',
    name: 'Subreddit Viewer',
    stack: ['Angular'],
    repo: 'https://github.com/TWHou/subreddit-viewer',
    info: 'View a subreddit of your choice',
    image: 'subreddit.png',
    detail:
      'Simple interface to display a subreddit thread.'
  }, {
    id: 105,
    type: 'app',
    name: 'Pollster',
    stack: ['React', 'React Router', 'Express', 'Mongoose', 'Passport'],
    repo: 'https://github.com/TWHou/voting-app',
    info: 'Can\'t make a decision? Put it to a vote!',
    image: 'pollster.png',
    detail:
      'Pollster is a simple voting app that allows users to create, and vote \
      on polls. If there\'s not a suitable option, user can add their own \
      option to existing poll.'
  }, {
    id: 106,
    type: 'app',
    name: 'My Reads',
    stack: ['React', 'React Router'],
    repo: 'https://github.com/TWHou/my-reads',
    info: 'Keep track of your reading list',
    image: 'my_reads.png',
    detail:
      'My Reads allows user to save books in one of three categories: \
      Currently Reading, Want to Read, and Read. The user can also add new \
      books using the search page. On the search page, user can add multiple \
      books before returning to the booklist.'
  }, {
    id: 107,
    type: 'api',
    name: 'Image Search',
    stack: ['Express', 'MongoDB'],
    repo: 'https://github.com/TWHou/image-search',
    info: 'Image Search using Google custom search',
    url: 'https://twhou-image-search.herokuapp.com/',
    detail:
      'User provide a term, the api will return a list of image urls along \
      with the alt text and page urls'
  }, {
    id: 108,
    type: 'app',
    name: 'Twitch Status',
    stack: ['Angular'],
    repo: 'https://github.com/TWHou/twitch-json-api',
    info: 'See which channels are online',
    image: 'twitch.png',
    detail:
      'Shows the status of a predefined list of channels'
  }, {
    id: 109,
    type: 'app',
    name: 'Random Quote',
    stack: ['Angular'],
    repo: 'https://github.com/TWHou/random-quote',
    info: 'Things people said',
    image: 'random_quote.png',
    detail:
      'Gives a random quote and a button to tweet it out'
  }, {
    id: 110,
    type: 'api',
    name: 'URL Shortener',
    stack: ['Express', 'MongoDB'],
    repo: 'https://github.com/TWHou/shorturl-api',
    info: 'Takes long URLs and shorten them',
    url: 'https://twhou-shorturl.herokuapp.com/',
    detail:
      'Shortens long URLs and redirects to original website'
  }, {
    id: 111,
    type: 'api',
    name: 'Timestamp',
    stack: ['Express'],
    repo: 'https://github.com/TWHou/timestamp-api',
    info: 'Takes long URLs and shorten them',
    url: 'https://twhou-timestamp.herokuapp.com/',
    detail:
      'Shortens long URLs and redirects to original website'
  }, {
    id: 112,
    type: 'app',
    name: 'Museum Mile',
    stack: ['Knockout', 'Google Maps'],
    repo: 'https://github.com/TWHou/neighborhood-map',
    info: 'Museums of the Museum Mile',
    image: 'neighborhood_map.png',
    detail:
      'Map of Museum Mile provides some details about each museum'
  }, {
    id: 113,
    type: 'app',
    name: 'Puppy Shelter',
    stack: ['Flask', 'Sqlite', 'Google Sign-in'],
    repo: 'https://github.com/TWHou/catalog',
    info: 'Help a pal find a home',
    image: 'catalog.png',
    detail:
      'A simple CMS for users to add and manage their own puppy shelter.'
  }, {
    id: 114,
    type: 'app',
    name: 'Multi-user Blog',
    stack: ['Google App Engine', 'webapp2', 'jinja2'],
    repo: 'https://github.com/TWHou/multi-user-blog',
    info: 'Blog with your friends',
    image: 'catalog.png',
    detail:
      'A simple platform for people to post, comment and vote.'
  }
];
