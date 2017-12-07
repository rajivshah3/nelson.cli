'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var node = require('./node').node;

// Some general TODOs:
// TODO: add changelog/history
// TODO: add linting
// TODO: add editor config

module.exports = _extends({
    initNode: function initNode(opts) {
        var _node = new node.Node(opts);
        var terminate = function terminate() {
            return _node.end().then(function () {
                return process.exit(0);
            });
        };

        process.on('SIGINT', terminate);
        process.on('SIGTERM', terminate);

        _node.start().then(function (n) {
            n.log('initialized!');
        });
    }
}, node);