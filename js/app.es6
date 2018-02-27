// require('./login');
// import {login} from './login';
//
// login('admin', 'radical');
//
// document.write("Welcome to Big Hair Concerts!");

console.log('App loaded');

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);

require('../css/bootstrap.css');

//with just css
// require('../css/app.css');

//with sass/scss
// require('../css/app.scss');

//with less
require('../css/app.less');