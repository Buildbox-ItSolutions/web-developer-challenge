/*
  @license
	Rollup.js v2.67.2
	Thu, 10 Feb 2022 08:15:45 GMT - commit 60706c33073abe34cac170a92a17a1b166d348e3


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

require('fs');
require('path');
require('process');
require('url');
const loadConfigFile_js = require('./shared/loadConfigFile.js');
require('./shared/rollup.js');
require('./shared/mergeOptions.js');
require('tty');
require('perf_hooks');
require('crypto');
require('events');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
