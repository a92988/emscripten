/*
 * Copyright 2012 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for node's cluster module. Depends on the events module.
 * @see http://nodejs.org/api/cluster.html
 * @see https://github.com/joyent/node/blob/master/lib/cluster.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var cluster = require('cluster');
 END_NODE_INCLUDE
 */

/**
 * @type events.EventEmitter
 */
var cluster;

/**
 * @typedef {{exec: string, args: Array.<string>, silent: boolean}}
 */
cluster.Settings;

/**
 * @type {cluster.Settings}
 */
cluster.settings;

/**
 * @type {boolean}
 */
cluster.isMaster;

/**
 * @type {boolean}
 */
cluster.isWorker;

/**
 * @param {cluster.Settings=} settings
 */
cluster.setupMaster = function(settings) {};

/**
 * @param {Object.<string,*>} env
 * @return {cluster.Worker}
 */
cluster.fork = function(env) {};

/**
 * @param {function()=} callback
 */
cluster.disconnect = function(callback) {};

/**
 * @type {?cluster.Worker}
 */
cluster.worker;

/**
 * @type {?Object.<string,cluster.Worker>}
 */
cluster.workers;

/**
 * @constructor
 * @extends events.EventEmitter
 */
cluster.Worker = function() {};

/**
 * @type {string}
 */
cluster.Worker.prototype.id;

/**
 * @type {child_process.ChildProcess}
 */
cluster.Worker.prototype.process;

/**
 * @type {boolean}
 */
cluster.Worker.prototype.suicide;

/**
 * @param {Object} message
 * @param {*=} sendHandle
 */
cluster.Worker.prototype.send = function(message, sendHandle) {};

/**
 */
cluster.Worker.prototype.destroy = function() {};

/**
 */
cluster.Worker.prototype.disconnect = function() {};
