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
 * @fileoverview Definitions for node's zlib module. Depends on the events and buffer modules.
 * @see http://nodejs.org/api/zlib.html
 * @see https://github.com/joyent/node/blob/master/lib/zlib.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var zlib = require('zlib');
 END_NODE_INCLUDE
 */

/**
 * @type {Object.<string,*>}
 */
var zlib = {};

/**
 * @typedef {{chunkSize: ?number, windowBits: ?number, level: ?number, memLevel: ?number, strategy: ?number, dictionary: ?Object}}
 */
zlib.Options;



/**
 * @constructor
 * @extends stream.Transform
 */
zlib.Zlib = function() {};

/**
 * @param {zlib.Options} options
 * @constructor
 * @extends zlib.Zlib
 */
zlib.Gzip = function(options) {};

/**
 * @param {zlib.Options} options
 * @constructor
 * @extends zlib.Zlib
 */
zlib.Gunzip = function(options) {};

/**
 * @param {zlib.Options} options
 * @constructor
 * @extends zlib.Zlib
 */
zlib.Deflate = function(options) {};

/**
 * @param {zlib.Options} options
 * @constructor
 * @extends zlib.Zlib
 */
zlib.Inflate = function(options) {};

/**
 * @param {zlib.Options} options
 * @constructor
 * @extends zlib.Zlib
 */
zlib.DeflateRaw = function(options) {};

/**
 * @param {zlib.Options} options
 * @constructor
 * @extends zlib.Zlib
 */
zlib.InflateRaw = function(options) {};

/**
 * @param {zlib.Options} options
 * @constructor
 * @extends zlib.Zlib
 */
zlib.Unzip = function(options) {};



/**
 * @param {zlib.Options} options
 * @return {zlib.Gzip}
 */
zlib.createGzip = function(options) {};

/**
 * @param {zlib.Options} options
 * @return {zlib.Gunzip}
 */
zlib.createGunzip = function(options) {};

/**
 * @param {zlib.Options} options
 * @return {zlib.Deflate}
 */
zlib.createDeflate = function(options) {};
/**
 * @param {zlib.Options} options
 * @return {zlib.Inflate}
 */
zlib.createInflate = function(options) {};

/**
 * @param {zlib.Options} options
 * @return {zlib.DeflateRaw}
 */
zlib.createDeflateRaw = function(options) {};

/**
 * @param {zlib.Options} options
 * @return {zlib.InflateRaw}
 */
zlib.createInflateRaw = function(options) {};

/**
 * @param {zlib.Options} options
 * @return {zlib.Unzip}
 */
zlib.createUnzip = function(options) {};



/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
zlib.deflate = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
zlib.deflateRaw = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
zlib.gzip = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
zlib.gunzip = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
zlib.inflate = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
zlib.inflateRaw = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
zlib.unzip = function(buf, callback) {};



/**
 * @type {number}
 * @const
 */
zlib.Z_NO_FLUSH = 0;

/**
 * @type {number}
 * @const
 */
zlib.Z_PARTIAL_FLUSH = 1;

/**
 * @type {number}
 * @const
 */
zlib.Z_SYNC_FLUSH = 2;

/**
 * @type {number}
 * @const
 */
zlib.Z_FULL_FLUSH = 3;

/**
 * @type {number}
 * @const
 */
zlib.Z_FINISH = 4;

/**
 * @type {number}
 * @const
 */
zlib.Z_BLOCK = 5;

/**
 * @type {number}
 * @const
 */
zlib.Z_TREES = 6;



/**
 * @type {number}
 * @const
 */
zlib.Z_OK = 0;

/**
 * @type {number}
 * @const
 */
zlib.Z_STREAM_END = 1;

/**
 * @type {number}
 * @const
 */
zlib.Z_NEED_DICT = 2;

/**
 * @type {number}
 * @const
 */
zlib.Z_ERRNO = -1;

/**
 * @type {number}
 * @const
 */
zlib.Z_STREAM_ERROR = -2;

/**
 * @type {number}
 * @const
 */
zlib.Z_DATA_ERROR = -3;

/**
 * @type {number}
 * @const
 */
zlib.Z_MEM_ERROR = -4;

/**
 * @type {number}
 * @const
 */
zlib.Z_BUF_ERROR = -5;

/**
 * @type {number}
 * @const
 */
zlib.Z_VERSION_ERROR = -6;



/**
 * @type {number}
 * @const
 */
zlib.Z_NO_COMPRESSION = 0;

/**
 * @type {number}
 * @const
 */
zlib.Z_BEST_SPEED = 1;

/**
 * @type {number}
 * @const
 */
zlib.Z_BEST_COMPRESSION = 9;

/**
 * @type {number}
 * @const
 */
zlib.Z_DEFAULT_COMPRESSION = -1;



/**
 * @type {number}
 * @const
 */
zlib.Z_FILTERED = 1;

/**
 * @type {number}
 * @const
 */
zlib.Z_HUFFMAN_ONLY = 2;

/**
 * @type {number}
 * @const
 */
zlib.Z_RLE = 3;

/**
 * @type {number}
 * @const
 */
zlib.Z_FIXED = 4;

/**
 * @type {number}
 * @const
 */
zlib.Z_DEFAULT_STRATEGY = 0;



/**
 * @type {number}
 * @const
 */
zlib.Z_BINARY = 0;

/**
 * @type {number}
 * @const
 */
zlib.Z_TEXT = 1;

/**
 * @type {number}
 * @const
 */
zlib.Z_ASCII = 1;

/**
 * @type {number}
 * @const
 */
zlib.Z_UNKNOWN = 2;



/**
 * @type {number}
 * @const
 */
zlib.Z_DEFLATED = 8;



/**
 * @type {number}
 * @const
 */
zlib.Z_NULL = 0;
