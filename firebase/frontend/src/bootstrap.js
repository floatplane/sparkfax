import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap needs global jQuery and Popper loaded first. Use `require` to
// control load order and to put things in the global scope.
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap');
