import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message: 'Hi, how are you?', likes: 9},
    {id: 2, message: 'It\'s my first post', likes: 12},
    {id: 3, message: 'Its really your first project?', likes: 7},
    {id: 4, message: 'Yes, of course', likes: 25}
];
let dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Nikolay'},
    {id: 3, name: 'Tatyana'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Oleg'},
]
let messages = [
    {id: 1, textMessage: 'Hello'},
    {id: 2, textMessage: 'World'},
    {id: 3, textMessage: 'People'},
    {id: 4, textMessage: 'Yo'},
    {id: 5, textMessage: 'Yo'},
    {id: 6, textMessage: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
