// example of css import
// use relative urls for images in css!
import './style.css';

// example of importing a js file
import logger from './logger.js'

$(function () {
    var socket = io();
    $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
        logger(msg)
        window.scrollTo(0, document.body.scrollHeight);
    });
});