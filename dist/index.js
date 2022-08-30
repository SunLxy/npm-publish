/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2302:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.issue = exports.issueCommand = void 0;

var os = __importStar(__webpack_require__(2037));

var utils_1 = __webpack_require__(9934);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */


function issueCommand(command, properties, message) {
  var cmd = new Command(command, properties, message);
  process.stdout.write(cmd.toString() + os.EOL);
}

exports.issueCommand = issueCommand;

function issue(name) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  issueCommand(name, {}, message);
}

exports.issue = issue;
var CMD_STRING = '::';

var Command = /*#__PURE__*/function () {
  function Command(command, properties, message) {
    _classCallCheck(this, Command);

    if (!command) {
      command = 'missing.command';
    }

    this.command = command;
    this.properties = properties;
    this.message = message;
  }

  _createClass(Command, [{
    key: "toString",
    value: function toString() {
      var cmdStr = CMD_STRING + this.command;

      if (this.properties && Object.keys(this.properties).length > 0) {
        cmdStr += ' ';
        var first = true;

        for (var key in this.properties) {
          if (this.properties.hasOwnProperty(key)) {
            var val = this.properties[key];

            if (val) {
              if (first) {
                first = false;
              } else {
                cmdStr += ',';
              }

              cmdStr += "".concat(key, "=").concat(escapeProperty(val));
            }
          }
        }
      }

      cmdStr += "".concat(CMD_STRING).concat(escapeData(this.message));
      return cmdStr;
    }
  }]);

  return Command;
}();

function escapeData(s) {
  return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}

function escapeProperty(s) {
  return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
}

/***/ }),

/***/ 4035:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;

var command_1 = __webpack_require__(2302);

var file_command_1 = __webpack_require__(349);

var utils_1 = __webpack_require__(9934);

var os = __importStar(__webpack_require__(2037));

var path = __importStar(__webpack_require__(1017));

var uuid_1 = __webpack_require__(1430);

var oidc_utils_1 = __webpack_require__(2660);
/**
 * The code to exit an action
 */


var ExitCode;

(function (ExitCode) {
  /**
   * A code indicating that the action was successful
   */
  ExitCode[ExitCode["Success"] = 0] = "Success";
  /**
   * A code indicating that the action was a failure
   */

  ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {})); //-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------

/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


function exportVariable(name, val) {
  var convertedVal = utils_1.toCommandValue(val);
  process.env[name] = convertedVal;
  var filePath = process.env['GITHUB_ENV'] || '';

  if (filePath) {
    var delimiter = "ghadelimiter_".concat(uuid_1.v4()); // These should realistically never happen, but just in case someone finds a way to exploit uuid generation let's not allow keys or values that contain the delimiter.

    if (name.includes(delimiter)) {
      throw new Error("Unexpected input: name should not contain the delimiter \"".concat(delimiter, "\""));
    }

    if (convertedVal.includes(delimiter)) {
      throw new Error("Unexpected input: value should not contain the delimiter \"".concat(delimiter, "\""));
    }

    var commandValue = "".concat(name, "<<").concat(delimiter).concat(os.EOL).concat(convertedVal).concat(os.EOL).concat(delimiter);
    file_command_1.issueCommand('ENV', commandValue);
  } else {
    command_1.issueCommand('set-env', {
      name: name
    }, convertedVal);
  }
}

exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */

function setSecret(secret) {
  command_1.issueCommand('add-mask', {}, secret);
}

exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */

function addPath(inputPath) {
  var filePath = process.env['GITHUB_PATH'] || '';

  if (filePath) {
    file_command_1.issueCommand('PATH', inputPath);
  } else {
    command_1.issueCommand('add-path', {}, inputPath);
  }

  process.env['PATH'] = "".concat(inputPath).concat(path.delimiter).concat(process.env['PATH']);
}

exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */

function getInput(name, options) {
  var val = process.env["INPUT_".concat(name.replace(/ /g, '_').toUpperCase())] || '';

  if (options && options.required && !val) {
    throw new Error("Input required and not supplied: ".concat(name));
  }

  if (options && options.trimWhitespace === false) {
    return val;
  }

  return val.trim();
}

exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */

function getMultilineInput(name, options) {
  var inputs = getInput(name, options).split('\n').filter(function (x) {
    return x !== '';
  });
  return inputs;
}

exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */

function getBooleanInput(name, options) {
  var trueValue = ['true', 'True', 'TRUE'];
  var falseValue = ['false', 'False', 'FALSE'];
  var val = getInput(name, options);
  if (trueValue.includes(val)) return true;
  if (falseValue.includes(val)) return false;
  throw new TypeError("Input does not meet YAML 1.2 \"Core Schema\" specification: ".concat(name, "\n") + "Support boolean input list: `true | True | TRUE | false | False | FALSE`");
}

exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function setOutput(name, value) {
  process.stdout.write(os.EOL);
  command_1.issueCommand('set-output', {
    name: name
  }, value);
}

exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */

function setCommandEcho(enabled) {
  command_1.issue('echo', enabled ? 'on' : 'off');
}

exports.setCommandEcho = setCommandEcho; //-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------

/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */

function setFailed(message) {
  process.exitCode = ExitCode.Failure;
  error(message);
}

exports.setFailed = setFailed; //-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------

/**
 * Gets whether Actions Step Debug is on or not
 */

function isDebug() {
  return process.env['RUNNER_DEBUG'] === '1';
}

exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */

function debug(message) {
  command_1.issueCommand('debug', {}, message);
}

exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function error(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function warning(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function notice(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */

function info(message) {
  process.stdout.write(message + os.EOL);
}

exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */

function startGroup(name) {
  command_1.issue('group', name);
}

exports.startGroup = startGroup;
/**
 * End an output group.
 */

function endGroup() {
  command_1.issue('endgroup');
}

exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */

function group(name, fn) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            startGroup(name);
            _context.prev = 1;
            _context.next = 4;
            return fn();

          case 4:
            result = _context.sent;

          case 5:
            _context.prev = 5;
            endGroup();
            return _context.finish(5);

          case 8:
            return _context.abrupt("return", result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1,, 5, 8]]);
  }));
}

exports.group = group; //-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------

/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function saveState(name, value) {
  command_1.issueCommand('save-state', {
    name: name
  }, value);
}

exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */

function getState(name) {
  return process.env["STATE_".concat(name)] || '';
}

exports.getState = getState;

function getIDToken(aud) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return oidc_utils_1.OidcClient.getIDToken(aud);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}

exports.getIDToken = getIDToken;
/**
 * Summary exports
 */

var summary_1 = __webpack_require__(4364);

Object.defineProperty(exports, "summary", ({
  enumerable: true,
  get: function get() {
    return summary_1.summary;
  }
}));
/**
 * @deprecated use core.summary
 */

var summary_2 = __webpack_require__(4364);

Object.defineProperty(exports, "markdownSummary", ({
  enumerable: true,
  get: function get() {
    return summary_2.markdownSummary;
  }
}));
/**
 * Path exports
 */

var path_utils_1 = __webpack_require__(2219);

Object.defineProperty(exports, "toPosixPath", ({
  enumerable: true,
  get: function get() {
    return path_utils_1.toPosixPath;
  }
}));
Object.defineProperty(exports, "toWin32Path", ({
  enumerable: true,
  get: function get() {
    return path_utils_1.toWin32Path;
  }
}));
Object.defineProperty(exports, "toPlatformPath", ({
  enumerable: true,
  get: function get() {
    return path_utils_1.toPlatformPath;
  }
}));

/***/ }),

/***/ 349:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
 // For internal use, subject to change.

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.issueCommand = void 0; // We use any as a valid input type

/* eslint-disable @typescript-eslint/no-explicit-any */

var fs = __importStar(__webpack_require__(7147));

var os = __importStar(__webpack_require__(2037));

var utils_1 = __webpack_require__(9934);

function issueCommand(command, message) {
  var filePath = process.env["GITHUB_".concat(command)];

  if (!filePath) {
    throw new Error("Unable to find environment variable for file command ".concat(command));
  }

  if (!fs.existsSync(filePath)) {
    throw new Error("Missing file at path: ".concat(filePath));
  }

  fs.appendFileSync(filePath, "".concat(utils_1.toCommandValue(message)).concat(os.EOL), {
    encoding: 'utf8'
  });
}

exports.issueCommand = issueCommand;

/***/ }),

/***/ 2660:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OidcClient = void 0;

var http_client_1 = __webpack_require__(4819);

var auth_1 = __webpack_require__(1068);

var core_1 = __webpack_require__(4035);

var OidcClient = /*#__PURE__*/function () {
  function OidcClient() {
    _classCallCheck(this, OidcClient);
  }

  _createClass(OidcClient, null, [{
    key: "createHttpClient",
    value: function createHttpClient() {
      var allowRetry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var maxRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var requestOptions = {
        allowRetries: allowRetry,
        maxRetries: maxRetry
      };
      return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
  }, {
    key: "getRequestToken",
    value: function getRequestToken() {
      var token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];

      if (!token) {
        throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
      }

      return token;
    }
  }, {
    key: "getIDTokenUrl",
    value: function getIDTokenUrl() {
      var runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];

      if (!runtimeUrl) {
        throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
      }

      return runtimeUrl;
    }
  }, {
    key: "getCall",
    value: function getCall(id_token_url) {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var httpclient, res, id_token;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                httpclient = OidcClient.createHttpClient();
                _context.next = 3;
                return httpclient.getJson(id_token_url)["catch"](function (error) {
                  throw new Error("Failed to get ID Token. \n \n        Error Code : ".concat(error.statusCode, "\n \n        Error Message: ").concat(error.result.message));
                });

              case 3:
                res = _context.sent;
                id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;

                if (id_token) {
                  _context.next = 7;
                  break;
                }

                throw new Error('Response json body do not have ID Token field');

              case 7:
                return _context.abrupt("return", id_token);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "getIDToken",
    value: function getIDToken(audience) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var id_token_url, encodedAudience, id_token;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                // New ID Token is requested from action service
                id_token_url = OidcClient.getIDTokenUrl();

                if (audience) {
                  encodedAudience = encodeURIComponent(audience);
                  id_token_url = "".concat(id_token_url, "&audience=").concat(encodedAudience);
                }

                core_1.debug("ID token url is ".concat(id_token_url));
                _context2.next = 6;
                return OidcClient.getCall(id_token_url);

              case 6:
                id_token = _context2.sent;
                core_1.setSecret(id_token);
                return _context2.abrupt("return", id_token);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                throw new Error("Error message: ".concat(_context2.t0.message));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));
    }
  }]);

  return OidcClient;
}();

exports.OidcClient = OidcClient;

/***/ }),

/***/ 2219:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;

var path = __importStar(__webpack_require__(1017));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */


function toPosixPath(pth) {
  return pth.replace(/[\\]/g, '/');
}

exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */

function toWin32Path(pth) {
  return pth.replace(/[/]/g, '\\');
}

exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */

function toPlatformPath(pth) {
  return pth.replace(/[/\\]/g, path.sep);
}

exports.toPlatformPath = toPlatformPath;

/***/ }),

/***/ 4364:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = (__webpack_require__(6686)["default"]);

var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;

var os_1 = __webpack_require__(2037);

var fs_1 = __webpack_require__(7147);

var _fs_1$promises = fs_1.promises,
    access = _fs_1$promises.access,
    appendFile = _fs_1$promises.appendFile,
    writeFile = _fs_1$promises.writeFile;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';

var Summary = /*#__PURE__*/function () {
  function Summary() {
    _classCallCheck(this, Summary);

    this._buffer = '';
  }
  /**
   * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
   * Also checks r/w permissions.
   *
   * @returns step summary file path
   */


  _createClass(Summary, [{
    key: "filePath",
    value: function filePath() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var pathFromEnv;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._filePath) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this._filePath);

              case 2:
                pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];

                if (pathFromEnv) {
                  _context.next = 5;
                  break;
                }

                throw new Error("Unable to find environment variable for $".concat(exports.SUMMARY_ENV_VAR, ". Check if your runtime environment supports job summaries."));

              case 5:
                _context.prev = 5;
                _context.next = 8;
                return access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](5);
                throw new Error("Unable to access summary file: '".concat(pathFromEnv, "'. Check if the file has correct read/write permissions."));

              case 13:
                this._filePath = pathFromEnv;
                return _context.abrupt("return", this._filePath);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 10]]);
      }));
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */

  }, {
    key: "wrap",
    value: function wrap(tag, content) {
      var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var htmlAttrs = Object.entries(attrs).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return " ".concat(key, "=\"").concat(value, "\"");
      }).join('');

      if (!content) {
        return "<".concat(tag).concat(htmlAttrs, ">");
      }

      return "<".concat(tag).concat(htmlAttrs, ">").concat(content, "</").concat(tag, ">");
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */

  }, {
    key: "write",
    value: function write(options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var overwrite, filePath, writeFunc;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
                _context2.next = 3;
                return this.filePath();

              case 3:
                filePath = _context2.sent;
                writeFunc = overwrite ? writeFile : appendFile;
                _context2.next = 7;
                return writeFunc(filePath, this._buffer, {
                  encoding: 'utf8'
                });

              case 7:
                return _context2.abrupt("return", this.emptyBuffer());

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "clear",
    value: function clear() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.emptyBuffer().write({
                  overwrite: true
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */

  }, {
    key: "stringify",
    value: function stringify() {
      return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */

  }, {
    key: "isEmptyBuffer",
    value: function isEmptyBuffer() {
      return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "emptyBuffer",
    value: function emptyBuffer() {
      this._buffer = '';
      return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addRaw",
    value: function addRaw(text) {
      var addEOL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this._buffer += text;
      return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addEOL",
    value: function addEOL() {
      return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addCodeBlock",
    value: function addCodeBlock(code, lang) {
      var attrs = Object.assign({}, lang && {
        lang: lang
      });
      var element = this.wrap('pre', this.wrap('code', code), attrs);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addList",
    value: function addList(items) {
      var _this = this;

      var ordered = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tag = ordered ? 'ol' : 'ul';
      var listItems = items.map(function (item) {
        return _this.wrap('li', item);
      }).join('');
      var element = this.wrap(tag, listItems);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addTable",
    value: function addTable(rows) {
      var _this2 = this;

      var tableBody = rows.map(function (row) {
        var cells = row.map(function (cell) {
          if (typeof cell === 'string') {
            return _this2.wrap('td', cell);
          }

          var header = cell.header,
              data = cell.data,
              colspan = cell.colspan,
              rowspan = cell.rowspan;
          var tag = header ? 'th' : 'td';
          var attrs = Object.assign(Object.assign({}, colspan && {
            colspan: colspan
          }), rowspan && {
            rowspan: rowspan
          });
          return _this2.wrap(tag, data, attrs);
        }).join('');
        return _this2.wrap('tr', cells);
      }).join('');
      var element = this.wrap('table', tableBody);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addDetails",
    value: function addDetails(label, content) {
      var element = this.wrap('details', this.wrap('summary', label) + content);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addImage",
    value: function addImage(src, alt, options) {
      var _ref3 = options || {},
          width = _ref3.width,
          height = _ref3.height;

      var attrs = Object.assign(Object.assign({}, width && {
        width: width
      }), height && {
        height: height
      });
      var element = this.wrap('img', null, Object.assign({
        src: src,
        alt: alt
      }, attrs));
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addHeading",
    value: function addHeading(text, level) {
      var tag = "h".concat(level);
      var allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag) ? tag : 'h1';
      var element = this.wrap(allowedTag, text);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addSeparator",
    value: function addSeparator() {
      var element = this.wrap('hr', null);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addBreak",
    value: function addBreak() {
      var element = this.wrap('br', null);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addQuote",
    value: function addQuote(text, cite) {
      var attrs = Object.assign({}, cite && {
        cite: cite
      });
      var element = this.wrap('blockquote', text, attrs);
      return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */

  }, {
    key: "addLink",
    value: function addLink(text, href) {
      var element = this.wrap('a', text, {
        href: href
      });
      return this.addRaw(element).addEOL();
    }
  }]);

  return Summary;
}();

var _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */


exports.markdownSummary = _summary;
exports.summary = _summary;

/***/ }),

/***/ 9934:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
 // We use any as a valid input type

/* eslint-disable @typescript-eslint/no-explicit-any */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */

function toCommandValue(input) {
  if (input === null || input === undefined) {
    return '';
  } else if (typeof input === 'string' || input instanceof String) {
    return input;
  }

  return JSON.stringify(input);
}

exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */

function toCommandProperties(annotationProperties) {
  if (!Object.keys(annotationProperties).length) {
    return {};
  }

  return {
    title: annotationProperties.title,
    file: annotationProperties.file,
    line: annotationProperties.startLine,
    endLine: annotationProperties.endLine,
    col: annotationProperties.startColumn,
    endColumn: annotationProperties.endColumn
  };
}

exports.toCommandProperties = toCommandProperties;

/***/ }),

/***/ 1068:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;

var BasicCredentialHandler = /*#__PURE__*/function () {
  function BasicCredentialHandler(username, password) {
    _classCallCheck(this, BasicCredentialHandler);

    this.username = username;
    this.password = password;
  }

  _createClass(BasicCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      if (!options.headers) {
        throw Error('The request has no headers');
      }

      options.headers['Authorization'] = "Basic ".concat(Buffer.from("".concat(this.username, ":").concat(this.password)).toString('base64'));
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication() {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                throw new Error('not implemented');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }]);

  return BasicCredentialHandler;
}();

exports.BasicCredentialHandler = BasicCredentialHandler;

var BearerCredentialHandler = /*#__PURE__*/function () {
  function BearerCredentialHandler(token) {
    _classCallCheck(this, BearerCredentialHandler);

    this.token = token;
  } // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401


  _createClass(BearerCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      if (!options.headers) {
        throw Error('The request has no headers');
      }

      options.headers['Authorization'] = "Bearer ".concat(this.token);
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication() {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                throw new Error('not implemented');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }]);

  return BearerCredentialHandler;
}();

exports.BearerCredentialHandler = BearerCredentialHandler;

var PersonalAccessTokenCredentialHandler = /*#__PURE__*/function () {
  function PersonalAccessTokenCredentialHandler(token) {
    _classCallCheck(this, PersonalAccessTokenCredentialHandler);

    this.token = token;
  } // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401


  _createClass(PersonalAccessTokenCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      if (!options.headers) {
        throw Error('The request has no headers');
      }

      options.headers['Authorization'] = "Basic ".concat(Buffer.from("PAT:".concat(this.token)).toString('base64'));
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication() {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                throw new Error('not implemented');

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }]);

  return PersonalAccessTokenCredentialHandler;
}();

exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;

/***/ }),

/***/ 4819:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _assertThisInitialized = (__webpack_require__(7722)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

var _wrapNativeSuper = (__webpack_require__(3210)["default"]);

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;

var http = __importStar(__webpack_require__(3685));

var https = __importStar(__webpack_require__(5687));

var pm = __importStar(__webpack_require__(3924));

var tunnel = __importStar(__webpack_require__(4306));

var HttpCodes;

(function (HttpCodes) {
  HttpCodes[HttpCodes["OK"] = 200] = "OK";
  HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
  HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
  HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
  HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
  HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
  HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
  HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
  HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
  HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
  HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
  HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
  HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
  HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
  HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
  HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
  HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
  HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
  HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
  HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
  HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
  HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));

var Headers;

(function (Headers) {
  Headers["Accept"] = "accept";
  Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));

var MediaTypes;

(function (MediaTypes) {
  MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */


function getProxyUrl(serverUrl) {
  var proxyUrl = pm.getProxyUrl(new URL(serverUrl));
  return proxyUrl ? proxyUrl.href : '';
}

exports.getProxyUrl = getProxyUrl;
var HttpRedirectCodes = [HttpCodes.MovedPermanently, HttpCodes.ResourceMoved, HttpCodes.SeeOther, HttpCodes.TemporaryRedirect, HttpCodes.PermanentRedirect];
var HttpResponseRetryCodes = [HttpCodes.BadGateway, HttpCodes.ServiceUnavailable, HttpCodes.GatewayTimeout];
var RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
var ExponentialBackoffCeiling = 10;
var ExponentialBackoffTimeSlice = 5;

var HttpClientError = /*#__PURE__*/function (_Error) {
  _inherits(HttpClientError, _Error);

  var _super = _createSuper(HttpClientError);

  function HttpClientError(message, statusCode) {
    var _this;

    _classCallCheck(this, HttpClientError);

    _this = _super.call(this, message);
    _this.name = 'HttpClientError';
    _this.statusCode = statusCode;
    Object.setPrototypeOf(_assertThisInitialized(_this), HttpClientError.prototype);
    return _this;
  }

  return _createClass(HttpClientError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.HttpClientError = HttpClientError;

var HttpClientResponse = /*#__PURE__*/function () {
  function HttpClientResponse(message) {
    _classCallCheck(this, HttpClientResponse);

    this.message = message;
  }

  _createClass(HttpClientResponse, [{
    key: "readBody",
    value: function readBody() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var output;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            output = Buffer.alloc(0);
                            this.message.on('data', function (chunk) {
                              output = Buffer.concat([output, chunk]);
                            });
                            this.message.on('end', function () {
                              resolve(output.toString());
                            });

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }]);

  return HttpClientResponse;
}();

exports.HttpClientResponse = HttpClientResponse;

function isHttps(requestUrl) {
  var parsedUrl = new URL(requestUrl);
  return parsedUrl.protocol === 'https:';
}

exports.isHttps = isHttps;

var HttpClient = /*#__PURE__*/function () {
  function HttpClient(userAgent, handlers, requestOptions) {
    _classCallCheck(this, HttpClient);

    this._ignoreSslError = false;
    this._allowRedirects = true;
    this._allowRedirectDowngrade = false;
    this._maxRedirects = 50;
    this._allowRetries = false;
    this._maxRetries = 1;
    this._keepAlive = false;
    this._disposed = false;
    this.userAgent = userAgent;
    this.handlers = handlers || [];
    this.requestOptions = requestOptions;

    if (requestOptions) {
      if (requestOptions.ignoreSslError != null) {
        this._ignoreSslError = requestOptions.ignoreSslError;
      }

      this._socketTimeout = requestOptions.socketTimeout;

      if (requestOptions.allowRedirects != null) {
        this._allowRedirects = requestOptions.allowRedirects;
      }

      if (requestOptions.allowRedirectDowngrade != null) {
        this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
      }

      if (requestOptions.maxRedirects != null) {
        this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
      }

      if (requestOptions.keepAlive != null) {
        this._keepAlive = requestOptions.keepAlive;
      }

      if (requestOptions.allowRetries != null) {
        this._allowRetries = requestOptions.allowRetries;
      }

      if (requestOptions.maxRetries != null) {
        this._maxRetries = requestOptions.maxRetries;
      }
    }
  }

  _createClass(HttpClient, [{
    key: "options",
    value: function options(requestUrl, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.request('OPTIONS', requestUrl, null, additionalHeaders || {}));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "get",
    value: function get(requestUrl, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.request('GET', requestUrl, null, additionalHeaders || {}));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "del",
    value: function del(requestUrl, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.request('DELETE', requestUrl, null, additionalHeaders || {}));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "post",
    value: function post(requestUrl, data, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.request('POST', requestUrl, data, additionalHeaders || {}));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "patch",
    value: function patch(requestUrl, data, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.request('PATCH', requestUrl, data, additionalHeaders || {}));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "put",
    value: function put(requestUrl, data, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.request('PUT', requestUrl, data, additionalHeaders || {}));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "head",
    value: function head(requestUrl, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.request('HEAD', requestUrl, null, additionalHeaders || {}));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "sendStream",
    value: function sendStream(verb, requestUrl, stream, additionalHeaders) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.request(verb, requestUrl, stream, additionalHeaders));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */

  }, {
    key: "getJson",
    value: function getJson(requestUrl) {
      var additionalHeaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var res;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                _context11.next = 3;
                return this.get(requestUrl, additionalHeaders);

              case 3:
                res = _context11.sent;
                return _context11.abrupt("return", this._processResponse(res, this.requestOptions));

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "postJson",
    value: function postJson(requestUrl, obj) {
      var additionalHeaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var data, res;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context12.next = 5;
                return this.post(requestUrl, data, additionalHeaders);

              case 5:
                res = _context12.sent;
                return _context12.abrupt("return", this._processResponse(res, this.requestOptions));

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "putJson",
    value: function putJson(requestUrl, obj) {
      var additionalHeaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var data, res;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context13.next = 5;
                return this.put(requestUrl, data, additionalHeaders);

              case 5:
                res = _context13.sent;
                return _context13.abrupt("return", this._processResponse(res, this.requestOptions));

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "patchJson",
    value: function patchJson(requestUrl, obj) {
      var additionalHeaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var data, res;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context14.next = 5;
                return this.patch(requestUrl, data, additionalHeaders);

              case 5:
                res = _context14.sent;
                return _context14.abrupt("return", this._processResponse(res, this.requestOptions));

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */

  }, {
    key: "request",
    value: function request(verb, requestUrl, data, headers) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var parsedUrl, info, maxTries, numTries, response, authenticationHandler, _iterator, _step, handler, redirectsRemaining, redirectUrl, parsedRedirectUrl, header;

        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!this._disposed) {
                  _context15.next = 2;
                  break;
                }

                throw new Error('Client has already been disposed.');

              case 2:
                parsedUrl = new URL(requestUrl);
                info = this._prepareRequest(verb, parsedUrl, headers); // Only perform retries on reads since writes may not be idempotent.

                maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb) ? this._maxRetries + 1 : 1;
                numTries = 0;

              case 6:
                _context15.next = 8;
                return this.requestRaw(info, data);

              case 8:
                response = _context15.sent;

                if (!(response && response.message && response.message.statusCode === HttpCodes.Unauthorized)) {
                  _context15.next = 34;
                  break;
                }

                authenticationHandler = void 0;
                _iterator = _createForOfIteratorHelper(this.handlers);
                _context15.prev = 12;

                _iterator.s();

              case 14:
                if ((_step = _iterator.n()).done) {
                  _context15.next = 21;
                  break;
                }

                handler = _step.value;

                if (!handler.canHandleAuthentication(response)) {
                  _context15.next = 19;
                  break;
                }

                authenticationHandler = handler;
                return _context15.abrupt("break", 21);

              case 19:
                _context15.next = 14;
                break;

              case 21:
                _context15.next = 26;
                break;

              case 23:
                _context15.prev = 23;
                _context15.t0 = _context15["catch"](12);

                _iterator.e(_context15.t0);

              case 26:
                _context15.prev = 26;

                _iterator.f();

                return _context15.finish(26);

              case 29:
                if (!authenticationHandler) {
                  _context15.next = 33;
                  break;
                }

                return _context15.abrupt("return", authenticationHandler.handleAuthentication(this, info, data));

              case 33:
                return _context15.abrupt("return", response);

              case 34:
                redirectsRemaining = this._maxRedirects;

              case 35:
                if (!(response.message.statusCode && HttpRedirectCodes.includes(response.message.statusCode) && this._allowRedirects && redirectsRemaining > 0)) {
                  _context15.next = 52;
                  break;
                }

                redirectUrl = response.message.headers['location'];

                if (redirectUrl) {
                  _context15.next = 39;
                  break;
                }

                return _context15.abrupt("break", 52);

              case 39:
                parsedRedirectUrl = new URL(redirectUrl);

                if (!(parsedUrl.protocol === 'https:' && parsedUrl.protocol !== parsedRedirectUrl.protocol && !this._allowRedirectDowngrade)) {
                  _context15.next = 42;
                  break;
                }

                throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');

              case 42:
                _context15.next = 44;
                return response.readBody();

              case 44:
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                  for (header in headers) {
                    // header names are case insensitive
                    if (header.toLowerCase() === 'authorization') {
                      delete headers[header];
                    }
                  }
                } // let's make the request with the new redirectUrl


                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                _context15.next = 48;
                return this.requestRaw(info, data);

              case 48:
                response = _context15.sent;
                redirectsRemaining--;
                _context15.next = 35;
                break;

              case 52:
                if (!(!response.message.statusCode || !HttpResponseRetryCodes.includes(response.message.statusCode))) {
                  _context15.next = 54;
                  break;
                }

                return _context15.abrupt("return", response);

              case 54:
                numTries += 1;

                if (!(numTries < maxTries)) {
                  _context15.next = 60;
                  break;
                }

                _context15.next = 58;
                return response.readBody();

              case 58:
                _context15.next = 60;
                return this._performExponentialBackoff(numTries);

              case 60:
                if (numTries < maxTries) {
                  _context15.next = 6;
                  break;
                }

              case 61:
                return _context15.abrupt("return", response);

              case 62:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[12, 23, 26, 29]]);
      }));
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (this._agent) {
        this._agent.destroy();
      }

      this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */

  }, {
    key: "requestRaw",
    value: function requestRaw(info, data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        var _this3 = this;

        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", new Promise(function (resolve, reject) {
                  function callbackForResult(err, res) {
                    if (err) {
                      reject(err);
                    } else if (!res) {
                      // If `err` is not passed, then `res` must be passed.
                      reject(new Error('Unknown error'));
                    } else {
                      resolve(res);
                    }
                  }

                  _this3.requestRawWithCallback(info, data, callbackForResult);
                }));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */

  }, {
    key: "requestRawWithCallback",
    value: function requestRawWithCallback(info, data, onResult) {
      if (typeof data === 'string') {
        if (!info.options.headers) {
          info.options.headers = {};
        }

        info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
      }

      var callbackCalled = false;

      function handleResult(err, res) {
        if (!callbackCalled) {
          callbackCalled = true;
          onResult(err, res);
        }
      }

      var req = info.httpModule.request(info.options, function (msg) {
        var res = new HttpClientResponse(msg);
        handleResult(undefined, res);
      });
      var socket;
      req.on('socket', function (sock) {
        socket = sock;
      }); // If we ever get disconnected, we want the socket to timeout eventually

      req.setTimeout(this._socketTimeout || 3 * 60000, function () {
        if (socket) {
          socket.end();
        }

        handleResult(new Error("Request timeout: ".concat(info.options.path)));
      });
      req.on('error', function (err) {
        // err has statusCode property
        // res should have headers
        handleResult(err);
      });

      if (data && typeof data === 'string') {
        req.write(data, 'utf8');
      }

      if (data && typeof data !== 'string') {
        data.on('close', function () {
          req.end();
        });
        data.pipe(req);
      } else {
        req.end();
      }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */

  }, {
    key: "getAgent",
    value: function getAgent(serverUrl) {
      var parsedUrl = new URL(serverUrl);
      return this._getAgent(parsedUrl);
    }
  }, {
    key: "_prepareRequest",
    value: function _prepareRequest(method, requestUrl, headers) {
      var info = {};
      info.parsedUrl = requestUrl;
      var usingSsl = info.parsedUrl.protocol === 'https:';
      info.httpModule = usingSsl ? https : http;
      var defaultPort = usingSsl ? 443 : 80;
      info.options = {};
      info.options.host = info.parsedUrl.hostname;
      info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
      info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
      info.options.method = method;
      info.options.headers = this._mergeHeaders(headers);

      if (this.userAgent != null) {
        info.options.headers['user-agent'] = this.userAgent;
      }

      info.options.agent = this._getAgent(info.parsedUrl); // gives handlers an opportunity to participate

      if (this.handlers) {
        var _iterator2 = _createForOfIteratorHelper(this.handlers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var handler = _step2.value;
            handler.prepareRequest(info.options);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return info;
    }
  }, {
    key: "_mergeHeaders",
    value: function _mergeHeaders(headers) {
      if (this.requestOptions && this.requestOptions.headers) {
        return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
      }

      return lowercaseKeys(headers || {});
    }
  }, {
    key: "_getExistingOrDefaultHeader",
    value: function _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
      var clientHeader;

      if (this.requestOptions && this.requestOptions.headers) {
        clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
      }

      return additionalHeaders[header] || clientHeader || _default;
    }
  }, {
    key: "_getAgent",
    value: function _getAgent(parsedUrl) {
      var agent;
      var proxyUrl = pm.getProxyUrl(parsedUrl);
      var useProxy = proxyUrl && proxyUrl.hostname;

      if (this._keepAlive && useProxy) {
        agent = this._proxyAgent;
      }

      if (this._keepAlive && !useProxy) {
        agent = this._agent;
      } // if agent is already assigned use that agent.


      if (agent) {
        return agent;
      }

      var usingSsl = parsedUrl.protocol === 'https:';
      var maxSockets = 100;

      if (this.requestOptions) {
        maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
      } // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.


      if (proxyUrl && proxyUrl.hostname) {
        var agentOptions = {
          maxSockets: maxSockets,
          keepAlive: this._keepAlive,
          proxy: Object.assign(Object.assign({}, (proxyUrl.username || proxyUrl.password) && {
            proxyAuth: "".concat(proxyUrl.username, ":").concat(proxyUrl.password)
          }), {
            host: proxyUrl.hostname,
            port: proxyUrl.port
          })
        };
        var tunnelAgent;
        var overHttps = proxyUrl.protocol === 'https:';

        if (usingSsl) {
          tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
        } else {
          tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
        }

        agent = tunnelAgent(agentOptions);
        this._proxyAgent = agent;
      } // if reusing agent across request and tunneling agent isn't assigned create a new agent


      if (this._keepAlive && !agent) {
        var options = {
          keepAlive: this._keepAlive,
          maxSockets: maxSockets
        };
        agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
        this._agent = agent;
      } // if not using private agent and tunnel agent isn't setup then use global agent


      if (!agent) {
        agent = usingSsl ? https.globalAgent : http.globalAgent;
      }

      if (usingSsl && this._ignoreSslError) {
        // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
        // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
        // we have to cast it to any and change it directly
        agent.options = Object.assign(agent.options || {}, {
          rejectUnauthorized: false
        });
      }

      return agent;
    }
  }, {
    key: "_performExponentialBackoff",
    value: function _performExponentialBackoff(retryNumber) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var ms;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
                ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
                return _context17.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve();
                  }, ms);
                }));

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));
    }
  }, {
    key: "_processResponse",
    value: function _processResponse(res, options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
        var _this4 = this;

        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", new Promise(function (resolve, reject) {
                  return __awaiter(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                    var statusCode, response, dateTimeDeserializer, obj, contents, msg, err;
                    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                      while (1) {
                        switch (_context18.prev = _context18.next) {
                          case 0:
                            dateTimeDeserializer = function _dateTimeDeserializer(key, value) {
                              if (typeof value === 'string') {
                                var a = new Date(value);

                                if (!isNaN(a.valueOf())) {
                                  return a;
                                }
                              }

                              return value;
                            };

                            statusCode = res.message.statusCode || 0;
                            response = {
                              statusCode: statusCode,
                              result: null,
                              headers: {}
                            }; // not found leads to null obj returned

                            if (statusCode === HttpCodes.NotFound) {
                              resolve(response);
                            } // get the result from the body


                            _context18.prev = 4;
                            _context18.next = 7;
                            return res.readBody();

                          case 7:
                            contents = _context18.sent;

                            if (contents && contents.length > 0) {
                              if (options && options.deserializeDates) {
                                obj = JSON.parse(contents, dateTimeDeserializer);
                              } else {
                                obj = JSON.parse(contents);
                              }

                              response.result = obj;
                            }

                            response.headers = res.message.headers;
                            _context18.next = 14;
                            break;

                          case 12:
                            _context18.prev = 12;
                            _context18.t0 = _context18["catch"](4);

                          case 14:
                            // note that 3xx redirects are handled by the http layer.
                            if (statusCode > 299) {
                              // if exception/error in body, attempt to get better error
                              if (obj && obj.message) {
                                msg = obj.message;
                              } else if (contents && contents.length > 0) {
                                // it may be the case that the exception is in the body message as string
                                msg = contents;
                              } else {
                                msg = "Failed request: (".concat(statusCode, ")");
                              }

                              err = new HttpClientError(msg, statusCode);
                              err.result = response.result;
                              reject(err);
                            } else {
                              resolve(response);
                            }

                          case 15:
                          case "end":
                            return _context18.stop();
                        }
                      }
                    }, _callee18, null, [[4, 12]]);
                  }));
                }));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));
    }
  }]);

  return HttpClient;
}();

exports.HttpClient = HttpClient;

var lowercaseKeys = function lowercaseKeys(obj) {
  return Object.keys(obj).reduce(function (c, k) {
    return c[k.toLowerCase()] = obj[k], c;
  }, {});
};

/***/ }),

/***/ 3924:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkBypass = exports.getProxyUrl = void 0;

function getProxyUrl(reqUrl) {
  var usingSsl = reqUrl.protocol === 'https:';

  if (checkBypass(reqUrl)) {
    return undefined;
  }

  var proxyVar = function () {
    if (usingSsl) {
      return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    } else {
      return process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
  }();

  if (proxyVar) {
    return new URL(proxyVar);
  } else {
    return undefined;
  }
}

exports.getProxyUrl = getProxyUrl;

function checkBypass(reqUrl) {
  if (!reqUrl.hostname) {
    return false;
  }

  var noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';

  if (!noProxy) {
    return false;
  } // Determine the request port


  var reqPort;

  if (reqUrl.port) {
    reqPort = Number(reqUrl.port);
  } else if (reqUrl.protocol === 'http:') {
    reqPort = 80;
  } else if (reqUrl.protocol === 'https:') {
    reqPort = 443;
  } // Format the request hostname and hostname with port


  var upperReqHosts = [reqUrl.hostname.toUpperCase()];

  if (typeof reqPort === 'number') {
    upperReqHosts.push("".concat(upperReqHosts[0], ":").concat(reqPort));
  } // Compare request host against noproxy


  var _iterator = _createForOfIteratorHelper(noProxy.split(',').map(function (x) {
    return x.trim().toUpperCase();
  }).filter(function (x) {
    return x;
  })),
      _step;

  try {
    var _loop = function _loop() {
      var upperNoProxyItem = _step.value;

      if (upperReqHosts.some(function (x) {
        return x === upperNoProxyItem;
      })) {
        return {
          v: true
        };
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (typeof _ret === "object") return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}

exports.checkBypass = checkBypass;

/***/ }),

/***/ 6360:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalizeArgs = __webpack_require__(6590);

var normalizeResult = __webpack_require__(706);

var maybe = __webpack_require__(570);

var spawn = __webpack_require__(9594);

module.exports = async;
/**
 * Executes the given command asynchronously, and returns the buffered
 * results via a callback or Promise.
 *
 * @param {string|string[]} command - The command to run
 * @param {string|string[]} [args] - The command arguments
 * @param {object} [options] - options
 * @param {function} [callback] - callback that will receive the results
 *
 * @returns {Promise<Process>|undefined}
 * Returns a Promise if no callback is given. The promise resolves with
 * a {@link Process} object.
 *
 * @see {@link normalizeArgs} for argument details
 */

function async() {
  // Normalize the function arguments
  var _normalizeArgs = normalizeArgs(arguments),
      command = _normalizeArgs.command,
      args = _normalizeArgs.args,
      options = _normalizeArgs.options,
      callback = _normalizeArgs.callback,
      error = _normalizeArgs.error;

  return maybe(callback, new Promise(function (resolve, reject) {
    if (error) {
      // Invalid arguments
      normalizeResult({
        command: command,
        args: args,
        options: options,
        error: error
      });
    } else {
      var spawnedProcess;

      try {
        // Spawn the program
        spawnedProcess = spawn(command, args, options);
      } catch (error) {
        // An error occurred while spawning the process
        normalizeResult({
          error: error,
          command: command,
          args: args,
          options: options
        });
      }

      var pid = spawnedProcess.pid;
      var stdout = options.encoding === "buffer" ? Buffer.from([]) : "";
      var stderr = options.encoding === "buffer" ? Buffer.from([]) : "";
      spawnedProcess.stdout && spawnedProcess.stdout.on("data", function (data) {
        if (typeof stdout === "string") {
          stdout += data.toString();
        } else {
          stdout = Buffer.concat([stdout, data]);
        }
      });
      spawnedProcess.stderr && spawnedProcess.stderr.on("data", function (data) {
        if (typeof stderr === "string") {
          stderr += data.toString();
        } else {
          stderr = Buffer.concat([stderr, data]);
        }
      });
      spawnedProcess.on("error", function (error) {
        try {
          normalizeResult({
            error: error,
            command: command,
            args: args,
            options: options,
            pid: pid,
            stdout: stdout,
            stderr: stderr
          });
        } catch (error) {
          reject(error);
        }
      });
      spawnedProcess.on("exit", function (status, signal) {
        try {
          resolve(normalizeResult({
            command: command,
            args: args,
            options: options,
            pid: pid,
            stdout: stdout,
            stderr: stderr,
            status: status,
            signal: signal
          }));
        } catch (error) {
          reject(error);
        }
      });
    }
  }));
}

/***/ }),

/***/ 9710:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports.sync = __webpack_require__(2011);
module.exports.async = __webpack_require__(6360);

/***/ }),

/***/ 6590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(4774),
    parseArgsStringToArgv = _require.parseArgsStringToArgv; // possible alternative: parse-spawn-args


var detectType = __webpack_require__(8792);

module.exports = normalizeArgs;
/**
 * This function normalizes the arguments of the {@link sync} and {@link async}
 * so they can be passed to Node's {@link child_process.spawn} or
 * {@link child_process.spawn} functions.
 *
 * @param {string|string[]} command
 * The command to run (e.g. "git"), or the command and its arguments as a string
 * (e.g. "git commit -a -m fixed_stuff"), or the command and its arguments as an
 * array (e.g. ["git", "commit", "-a", "-m", "fixed stuff"]).
 *
 * @param {string|string[]} [args]
 * The command arguments as a string (e.g. "git commit -a -m fixed_stuff") or as an array
 * (e.g. ["git", "commit", "-a", "-m", "fixed stuff"]).
 *
 * @param {object} [options]
 * The same options as {@link child_process.spawn} or {@link child_process.spawnSync}.
 *
 * @param {function} [callback]
 * The callback that will receive the results, if applicable.
 *
 * @returns {object}
 */

function normalizeArgs(params) {
  var command, args, options, callback, error;

  try {
    // Shift the arguments, if necessary
    var _shiftArgs = shiftArgs(params);

    command = _shiftArgs.command;
    args = _shiftArgs.args;
    options = _shiftArgs.options;
    callback = _shiftArgs.callback;
    var commandArgs = [];

    if (typeof command === "string" && args === undefined) {
      // The command parameter is actually the command AND arguments,
      // so split the string into an array
      command = splitArgString(command);
    }

    if (Array.isArray(command)) {
      // Split the command from the arguments
      commandArgs = command.slice(1);
      command = command[0];
    }

    if (typeof args === "string") {
      // Convert the `args` argument from a string an array
      args = splitArgString(args);
    }

    if (Array.isArray(args)) {
      // Add these arguments to any arguments from above
      args = commandArgs.concat(args);
    }

    if (args === undefined || args === null) {
      args = commandArgs;
    }

    if (options === undefined || options === null) {
      options = {};
    } // Set default options


    options.encoding = options.encoding || "utf8"; // Validate all arguments

    validateArgs(command, args, options, callback);
  } catch (err) {
    error = err; // Sanitize args that are used as output

    command = String(command || "");
    args = (Array.isArray(args) ? args : []).map(function (arg) {
      return String(arg || "");
    });
  }

  return {
    command: command,
    args: args,
    options: options,
    callback: callback,
    error: error
  };
}
/**
 * Detects whether any optional arguments have been omitted,
 * and shifts the other arguments as needed.
 *
 * @param {string|string[]} command
 * @param {string|string[]} [args]
 * @param {object} [options]
 * @param {function} [callback]
 * @returns {object}
 */


function shiftArgs(params) {
  params = Array.prototype.slice.call(params);
  var command, args, options, callback; // Check for a callback as the final parameter

  var lastParam = params[params.length - 1];

  if (typeof lastParam === "function") {
    callback = lastParam;
    params.pop();
  } // Check for an options object as the second-to-last parameter


  lastParam = params[params.length - 1];

  if (lastParam === null || lastParam === undefined || typeof lastParam === "object" && !Array.isArray(lastParam)) {
    options = lastParam;
    params.pop();
  } // The first parameter is the command


  command = params.shift(); // All remaining parameters are the args

  if (params.length === 0) {
    args = undefined;
  } else if (params.length === 1 && Array.isArray(params[0])) {
    args = params[0];
  } else if (params.length === 1 && params[0] === "") {
    args = [];
  } else {
    args = params;
  }

  return {
    command: command,
    args: args,
    options: options,
    callback: callback
  };
}
/**
 * Validates all arguments, and throws an error if any are invalid.
 *
 * @param {string} command
 * @param {string[]} args
 * @param {object} options
 * @param {function} [callback]
 */


function validateArgs(command, args, options, callback) {
  if (command === undefined || command === null) {
    throw new Error("The command to execute is missing.");
  }

  if (typeof command !== "string") {
    throw new Error("The command to execute should be a string, not " + friendlyType(command));
  }

  if (!Array.isArray(args)) {
    throw new Error("The command arguments should be a string or an array, not " + friendlyType(args));
  }

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];

    if (typeof arg !== "string") {
      throw new Error("The command arguments should be strings, but argument #".concat(i + 1, " is ") + friendlyType(arg));
    }
  }

  if (typeof options !== "object") {
    throw new Error("The options should be an object, not " + friendlyType(options));
  }

  if (callback !== undefined && callback !== null) {
    if (typeof callback !== "function") {
      throw new Error("The callback should be a function, not " + friendlyType(callback));
    }
  }
}
/**
 * Splits an argument string (e.g. git commit -a -m "fixed stuff")
 * into an array (e.g. ["git", "commit", "-a", "-m", "fixed stuff"]).
 *
 * @param {string} argString
 * @returns {string[]}
 */


function splitArgString(argString) {
  try {
    return parseArgsStringToArgv(argString);
  } catch (error) {
    throw new Error("Could not parse the string: ".concat(argString, "\n").concat(error.message));
  }
}
/**
 * Returns the friendly type name of the given value, for use in error messages.
 *
 * @param {*} val
 * @returns {string}
 */


function friendlyType(val) {
  var type = detectType(val);
  var firstChar = String(type)[0].toLowerCase();

  if (["a", "e", "i", "o", "u"].indexOf(firstChar) === -1) {
    return "a ".concat(type, ".");
  } else {
    return "an ".concat(type, ".");
  }
}

/***/ }),

/***/ 706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Process = __webpack_require__(2386);

var ProcessError = __webpack_require__(5441);

module.exports = normalizeResult;
/**
 * @param {string} [command] - The command used to run the process
 * @param {string[]} [args] - The command-line arguments that were passed to the process
 * @param {number} [pid] - The process ID
 * @param {string|Buffer} [stdout] - The process's stdout
 * @param {string|Buffer} [stderr] - The process's stderr
 * @param {string[]|Buffer[]} [output] - The process's stdio
 * @param {number} [status] - The process's status code
 * @param {string} [signal] - The signal that was used to kill the process, if any
 * @param {object} [options] - The options used to run the process
 * @param {Error} [error] - An error, if one occurred
 * @returns {Process}
 */

function normalizeResult(_ref) {
  var command = _ref.command,
      args = _ref.args,
      pid = _ref.pid,
      stdout = _ref.stdout,
      stderr = _ref.stderr,
      output = _ref.output,
      status = _ref.status,
      signal = _ref.signal,
      options = _ref.options,
      error = _ref.error;
  var process = new Process({
    command: command,
    args: args,
    pid: pid,
    stdout: stdout,
    stderr: stderr,
    output: output,
    status: status,
    signal: signal,
    options: options
  });

  if (error) {
    if (process.status === undefined) {
      process.status = null;
    }

    throw Object.assign(error, process);
  } else if (process.status) {
    throw new ProcessError(process);
  } else {
    return process;
  }
}

/***/ }),

/***/ 5441:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * An instance of this class is returned by {@link sync} and {@link async} when the process exits
 * with a non-zero status code.
 */

var _createClass = (__webpack_require__(8482)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _assertThisInitialized = (__webpack_require__(7722)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

var _wrapNativeSuper = (__webpack_require__(3210)["default"]);

module.exports = /*#__PURE__*/function (_Error) {
  _inherits(ProcessError, _Error);

  var _super = _createSuper(ProcessError);

  function ProcessError(process) {
    var _this;

    _classCallCheck(this, ProcessError);

    var message = "".concat(process.toString(), " exited with a status of ").concat(process.status, ".");

    if (process.stderr.length > 0) {
      message += "\n\n" + process.stderr.toString().trim();
    }

    _this = _super.call(this, message);
    Object.assign(_assertThisInitialized(_this), process);
    _this.name = ProcessError.name;
    return _this;
  }

  return _createClass(ProcessError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ 2386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * An instance of this class is returned by {@link sync} and {@link async}.
 * It contains information about how the process was spawned, how it exited, and its output.
 */

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

module.exports = /*#__PURE__*/function () {
  /**
   * @param {object} props - Initial property values
   */
  function Process(_ref) {
    var command = _ref.command,
        args = _ref.args,
        pid = _ref.pid,
        stdout = _ref.stdout,
        stderr = _ref.stderr,
        output = _ref.output,
        status = _ref.status,
        signal = _ref.signal,
        options = _ref.options;

    _classCallCheck(this, Process);

    options = options || {};
    stdout = stdout || (options.encoding === "buffer" ? Buffer.from([]) : "");
    stderr = stderr || (options.encoding === "buffer" ? Buffer.from([]) : "");
    output = output || [options.input || null, stdout, stderr];
    /**
     * The command that was used to spawn the process
     *
     * @type {string}
     */

    this.command = command || "";
    /**
     * The command-line arguments that were passed to the process.
     *
     * @type {string[]}
     */

    this.args = args || [];
    /**
     * The numeric process ID assigned by the operating system
     *
     * @type {number}
     */

    this.pid = pid || 0;
    /**
     * The process's standard output
     *
     * @type {Buffer|string}
     */

    this.stdout = output[1];
    /**
     * The process's error output
     *
     * @type {Buffer|string}
     */

    this.stderr = output[2];
    /**
     * The process's stdio [stdin, stdout, stderr]
     *
     * @type {Buffer[]|string[]}
     */

    this.output = output;
    /**
     * The process's status code
     *
     * @type {number}
     */

    this.status = status;
    /**
     * The signal used to kill the process, if applicable
     *
     * @type {string}
     */

    this.signal = signal || null;
  }
  /**
   * Returns the full command and arguments used to spawn the process
   *
   * @type {string}
   */


  _createClass(Process, [{
    key: "toString",
    value: function toString() {
      var string = this.command;

      var _iterator = _createForOfIteratorHelper(this.args),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var arg = _step.value;
          // Escape quotes
          arg = arg.replace(/"/g, '\\"');

          if (arg.indexOf(" ") >= 0) {
            // Add quotes if the arg contains whitespace
            string += " \"".concat(arg, "\"");
          } else {
            string += " ".concat(arg);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return string;
    }
  }]);

  return Process;
}();

/***/ }),

/***/ 2011:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalizeArgs = __webpack_require__(6590);

var normalizeResult = __webpack_require__(706);

var spawnSync = (__webpack_require__(9594).sync);

module.exports = sync;
/**
 * Executes the given command synchronously, and returns the buffered results.
 *
 * @param {string|string[]} command - The command to run
 * @param {string|string[]} [args] - The command arguments
 * @param {object} [options] - options
 * @returns {Process}
 *
 * @see {@link normalizeArgs} for argument details
 */

function sync() {
  // Normalize the function arguments
  var _normalizeArgs = normalizeArgs(arguments),
      command = _normalizeArgs.command,
      args = _normalizeArgs.args,
      options = _normalizeArgs.options,
      error = _normalizeArgs.error;

  if (error) {
    // Invalid arguments
    normalizeResult({
      command: command,
      args: args,
      options: options,
      error: error
    });
  } else {
    var result;

    try {
      // Run the program
      result = spawnSync(command, args, options);
    } catch (error) {
      // An error occurred while spawning or killing the process
      normalizeResult({
        error: error,
        command: command,
        args: args,
        options: options
      });
    } // Return the results or throw an error


    return normalizeResult(Object.assign({}, result, {
      command: command,
      args: args,
      options: options
    }));
  }
}

/***/ }),

/***/ 7959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.npmPublish = void 0;

var npm_publish_1 = __webpack_require__(9521);

Object.defineProperty(exports, "npmPublish", ({
  enumerable: true,
  get: function get() {
    return npm_publish_1.npmPublish;
  }
})); // Export the external type definitions as named exports

__exportStar(__webpack_require__(2822), exports);

__exportStar(__webpack_require__(2194), exports);

exports["default"] = npm_publish_1.npmPublish; // CommonJS default export hack

if ( true && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports["default"], module.exports);
}

/***/ }),

/***/ 296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeOptions = void 0;

var url_1 = __webpack_require__(7310);
/**
 * Normalizes and sanitizes options, and fills-in any default values.
 * @internal
 */


function normalizeOptions(options) {
  var registryURL = typeof options.registry === "string" ? new url_1.URL(options.registry) : options.registry;
  return {
    token: options.token || "",
    registry: registryURL || new url_1.URL("https://registry.npmjs.org/"),
    "package": options["package"] || "package.json",
    tag: options.tag || "latest",
    access: options.access,
    dryRun: options.dryRun || false,
    checkVersion: options.checkVersion === undefined ? true : Boolean(options.checkVersion),
    quiet: options.quiet || false,
    debug: options.debug || function () {
      return undefined;
    }
  };
}

exports.normalizeOptions = normalizeOptions;

/***/ }),

/***/ 5747:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _asyncToGenerator = (__webpack_require__(411)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setNpmConfig = void 0;

var ezSpawn = __webpack_require__(9710);

var ono_1 = __webpack_require__(2930);

var fs_1 = __webpack_require__(7147);

var os_1 = __webpack_require__(2037);

var path_1 = __webpack_require__(1017);

var npm_env_1 = __webpack_require__(509);
/**
 * Sets/updates the NPM config based on the options.
 * @internal
 */


function setNpmConfig(_x) {
  return _setNpmConfig.apply(this, arguments);
}

function _setNpmConfig() {
  _setNpmConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
    var configPath, config;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getNpmConfigPath(options);

          case 2:
            configPath = _context.sent;
            _context.next = 5;
            return readNpmConfig(configPath, options);

          case 5:
            config = _context.sent;
            // Update the config
            config = updateConfig(config, options); // Save the new config

            _context.next = 9;
            return writeNpmConfig(configPath, config, options);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setNpmConfig.apply(this, arguments);
}

exports.setNpmConfig = setNpmConfig;
/**
 * Updates the given NPM config with the specified options.
 */

function updateConfig(config, _ref) {
  var registry = _ref.registry,
      debug = _ref.debug;
  var authDomain = registry.origin.slice(registry.protocol.length);
  var lines = config.split(/\r?\n/); // Remove any existing lines that set the registry or token

  lines = lines.filter(function (line) {
    return !(line.startsWith("registry=") || line.includes("_authToken="));
  }); // Append the new registry and token to the end of the file

  lines.push("".concat(authDomain, "/:_authToken=${INPUT_TOKEN}"));
  lines.push("registry=".concat(registry.href));
  config = lines.join(os_1.EOL).trim() + os_1.EOL;
  debug("NEW NPM CONFIG: \n".concat(config));
  return config;
}
/**
 * Gets the path of the NPM config file.
 */


function getNpmConfigPath(_x2) {
  return _getNpmConfigPath.apply(this, arguments);
}
/**
 * Reads the NPM config file.
 */


function _getNpmConfigPath() {
  _getNpmConfigPath = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(options) {
    var env, process;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // Get the environment variables to pass to NPM
            env = npm_env_1.getNpmEnvironment(options);
            options.debug("Running command: npm config get userconfig");
            _context2.next = 5;
            return ezSpawn.async("npm", "config", "get", "userconfig", {
              env: env
            });

          case 5:
            process = _context2.sent;
            return _context2.abrupt("return", process.stdout.trim());

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            throw ono_1.ono(_context2.t0, "Unable to determine the NPM config file path.");

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _getNpmConfigPath.apply(this, arguments);
}

function readNpmConfig(_x3, _x4) {
  return _readNpmConfig.apply(this, arguments);
}
/**
 * Writes the NPM config file.
 */


function _readNpmConfig() {
  _readNpmConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(configPath, _ref2) {
    var debug, config;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            debug = _ref2.debug;
            _context3.prev = 1;
            debug("Reading NPM config from ".concat(configPath));
            _context3.next = 5;
            return fs_1.promises.readFile(configPath, "utf-8");

          case 5:
            config = _context3.sent;
            debug("OLD NPM CONFIG: \n".concat(config));
            return _context3.abrupt("return", config);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);

            if (!(_context3.t0.code === "ENOENT")) {
              _context3.next = 15;
              break;
            }

            debug("OLD NPM CONFIG: <none>");
            return _context3.abrupt("return", "");

          case 15:
            throw ono_1.ono(_context3.t0, "Unable to read the NPM config file: ".concat(configPath));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return _readNpmConfig.apply(this, arguments);
}

function writeNpmConfig(_x5, _x6, _x7) {
  return _writeNpmConfig.apply(this, arguments);
}

function _writeNpmConfig() {
  _writeNpmConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(configPath, config, _ref3) {
    var debug;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            debug = _ref3.debug;
            _context4.prev = 1;
            debug("Writing new NPM config to ".concat(configPath));
            _context4.next = 5;
            return fs_1.promises.mkdir(path_1.dirname(configPath), {
              recursive: true
            });

          case 5:
            _context4.next = 7;
            return fs_1.promises.writeFile(configPath, config);

          case 7:
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            throw ono_1.ono(_context4.t0, "Unable to update the NPM config file: ".concat(configPath));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return _writeNpmConfig.apply(this, arguments);
}

/***/ }),

/***/ 509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _objectSpread = (__webpack_require__(279)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNpmEnvironment = void 0;
/**
 * Returns the environment variables that should be passed to NPM, based on the given options.
 */

function getNpmEnvironment(options) {
  /* eslint-disable @typescript-eslint/naming-convention */
  var env = _objectSpread(_objectSpread({}, process.env), {}, {
    // Don't pass Node.js runtime variables to NPM
    NODE_ENV: "",
    NODE_OPTIONS: ""
  }); // Determine if we need to set the NPM token


  var needsToken = Boolean(options.token && process.env.INPUT_TOKEN !== options.token);

  if (needsToken) {
    env.INPUT_TOKEN = options.token;
  }

  return env;
}

exports.getNpmEnvironment = getNpmEnvironment;

/***/ }),

/***/ 9521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _asyncToGenerator = (__webpack_require__(411)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.npmPublish = void 0;

var semver = __webpack_require__(1266);

var normalize_options_1 = __webpack_require__(296);

var npm_1 = __webpack_require__(9675);

var read_manifest_1 = __webpack_require__(8294);
/**
 * Publishes a package to NPM, if its version has changed
 */


function npmPublish() {
  return _npmPublish.apply(this, arguments);
}

function _npmPublish() {
  _npmPublish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var opts,
        options,
        manifest,
        publishedVersion,
        diff,
        results,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            options = normalize_options_1.normalizeOptions(opts); // Get the old and new version numbers

            _context.next = 4;
            return read_manifest_1.readManifest(options["package"], options.debug);

          case 4:
            manifest = _context.sent;
            _context.next = 7;
            return npm_1.npm.getLatestVersion(manifest.name, options);

          case 7:
            publishedVersion = _context.sent;
            // Determine if/how the version has changed
            diff = semver.diff(manifest.version, publishedVersion);

            if (!(diff || !options.checkVersion)) {
              _context.next = 12;
              break;
            }

            _context.next = 12;
            return npm_1.npm.publish(manifest, options);

          case 12:
            results = {
              "package": manifest.name,
              type: diff || "none",
              version: manifest.version.raw,
              oldVersion: publishedVersion.raw,
              tag: options.tag,
              access: options.access || (manifest.name.startsWith("@") ? "restricted" : "public"),
              dryRun: options.dryRun
            };
            options.debug("OUTPUT:", results);
            return _context.abrupt("return", results);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _npmPublish.apply(this, arguments);
}

exports.npmPublish = npmPublish;

/***/ }),

/***/ 9675:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _asyncToGenerator = (__webpack_require__(411)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.npm = void 0;

var ezSpawn = __webpack_require__(9710);

var ono_1 = __webpack_require__(2930);

var path_1 = __webpack_require__(1017);

var semver_1 = __webpack_require__(1266);

var npm_config_1 = __webpack_require__(5747);

var npm_env_1 = __webpack_require__(509);
/**
 * Runs NPM commands.
 * @internal
 */


exports.npm = {
  /**
   * Gets the latest published version of the specified package.
   */
  getLatestVersion: function getLatestVersion(name, options) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var command, env, result, version, error, status, semver;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return npm_config_1.setNpmConfig(options);

            case 2:
              _context.prev = 2;
              command = ["npm", "view"];

              if (options.tag === "latest") {
                command.push(name);
              } else {
                command.push("".concat(name, "@").concat(options.tag));
              }

              command.push("version"); // Get the environment variables to pass to NPM

              env = npm_env_1.getNpmEnvironment(options); // Run NPM to get the latest published version of the package

              options.debug("Running command: npm view ".concat(name, " version"), {
                command: command,
                env: env
              });
              _context.prev = 8;
              _context.next = 11;
              return ezSpawn.async(command, {
                env: env
              });

            case 11:
              result = _context.sent;
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](8);
              // In case ezSpawn.async throws, it still has stdout and stderr properties.
              result = _context.t0;

            case 17:
              version = result.stdout.trim();
              error = result.stderr.trim();
              status = result.status || 0; // If the package was not previously published, return version 0.0.0.

              if (!(status === 0 && !version || error.includes("E404"))) {
                _context.next = 25;
                break;
              }

              options.debug("The latest version of ".concat(name, " is at v0.0.0, as it was never published."));
              return _context.abrupt("return", new semver_1.SemVer("0.0.0"));

            case 25:
              if (!(result instanceof Error)) {
                _context.next = 27;
                break;
              }

              throw result;

            case 27:
              // Parse/validate the version number
              semver = new semver_1.SemVer(version);
              options.debug("The latest version of ".concat(name, " is at v").concat(semver));
              return _context.abrupt("return", semver);

            case 32:
              _context.prev = 32;
              _context.t1 = _context["catch"](2);
              throw ono_1.ono(_context.t1, "Unable to determine the current version of ".concat(name, " on NPM."));

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 32], [8, 14]]);
    }))();
  },

  /**
   * Publishes the specified package to NPM
   */
  publish: function publish(_ref, options) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var name, version, command, cwd, stdio, env;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = _ref.name, version = _ref.version;
              _context2.next = 3;
              return npm_config_1.setNpmConfig(options);

            case 3:
              _context2.prev = 3;
              command = ["npm", "publish"];

              if (options.tag !== "latest") {
                command.push("--tag", options.tag);
              }

              if (options.access) {
                command.push("--access", options.access);
              }

              if (options.dryRun) {
                command.push("--dry-run");
              } // Run "npm publish" in the package.json directory


              cwd = path_1.resolve(path_1.dirname(options["package"])); // Determine whether to suppress NPM's output

              stdio = options.quiet ? "pipe" : "inherit"; // Get the environment variables to pass to NPM

              env = npm_env_1.getNpmEnvironment(options); // Run NPM to publish the package

              options.debug("Running command: npm publish", {
                command: command,
                stdio: stdio,
                cwd: cwd,
                env: env
              });
              _context2.next = 14;
              return ezSpawn.async(command, {
                cwd: cwd,
                stdio: stdio,
                env: env
              });

            case 14:
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](3);
              throw ono_1.ono(_context2.t0, "Unable to publish ".concat(name, " v").concat(version, " to NPM."));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 16]]);
    }))();
  }
};

/***/ }),

/***/ 2822:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 8294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _asyncToGenerator = (__webpack_require__(411)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.readManifest = void 0;

var ono_1 = __webpack_require__(2930);

var fs_1 = __webpack_require__(7147);

var path_1 = __webpack_require__(1017);

var semver_1 = __webpack_require__(1266);
/**
 * Reads the package manifest (package.json) and returns its parsed contents
 * @internal
 */


function readManifest(_x, _x2) {
  return _readManifest.apply(this, arguments);
}

function _readManifest() {
  _readManifest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path, debug) {
    var json, _JSON$parse, name, version, manifest;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            debug && debug("Reading package manifest from ".concat(path_1.resolve(path)));
            _context.prev = 1;
            _context.next = 4;
            return fs_1.promises.readFile(path, "utf-8");

          case 4:
            json = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            throw ono_1.ono(_context.t0, "Unable to read ".concat(path));

          case 10:
            _context.prev = 10;
            _JSON$parse = JSON.parse(json), name = _JSON$parse.name, version = _JSON$parse.version;

            if (!(typeof name !== "string" || name.trim().length === 0)) {
              _context.next = 14;
              break;
            }

            throw new TypeError("Invalid package name");

          case 14:
            manifest = {
              name: name,
              version: new semver_1.SemVer(version)
            };
            debug && debug("MANIFEST:", manifest);
            return _context.abrupt("return", manifest);

          case 19:
            _context.prev = 19;
            _context.t1 = _context["catch"](10);
            throw ono_1.ono(_context.t1, "Unable to parse ".concat(path));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7], [10, 19]]);
  }));
  return _readManifest.apply(this, arguments);
}

exports.readManifest = readManifest;

/***/ }),

/***/ 2194:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 2930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ono": () => (/* reexport */ constructor_constructor),
  "default": () => (/* binding */ esm),
  "ono": () => (/* reexport */ singleton)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(3837);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/to-json.js

var nonJsonTypes = ["function", "symbol", "undefined"];
var protectedProps = ["constructor", "prototype", "__proto__"];
var objectPrototype = Object.getPrototypeOf({});
/**
 * Custom JSON serializer for Error objects.
 * Returns all built-in error properties, as well as extended properties.
 */

function to_json_toJSON() {
  // HACK: We have to cast the objects to `any` so we can use symbol indexers.
  // see https://github.com/Microsoft/TypeScript/issues/1863
  var pojo = {};
  var error = this;

  var _iterator = _createForOfIteratorHelper(getDeepKeys(error)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (typeof key === "string") {
        var value = error[key];
        var type = typeof value;

        if (!nonJsonTypes.includes(type)) {
          pojo[key] = value;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return pojo;
}
/**
 * Returns own, inherited, enumerable, non-enumerable, string, and symbol keys of `obj`.
 * Does NOT return members of the base Object prototype, or the specified omitted keys.
 */

function getDeepKeys(obj) {
  var omit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var keys = []; // Crawl the prototype chain, finding all the string and symbol keys

  while (obj && obj !== objectPrototype) {
    keys = keys.concat(Object.getOwnPropertyNames(obj), Object.getOwnPropertySymbols(obj));
    obj = Object.getPrototypeOf(obj);
  } // De-duplicate the list of keys


  var uniqueKeys = new Set(keys); // Remove any omitted keys

  var _iterator2 = _createForOfIteratorHelper(omit.concat(protectedProps)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var key = _step2.value;
      uniqueKeys["delete"](key);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return uniqueKeys;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/isomorphic.node.js


 // The `inspect()` method is actually a Symbol, not a string key.
// https://nodejs.org/api/util.html#util_util_inspect_custom

var inspectMethod = external_util_.inspect.custom || Symbol["for"]("nodejs.util.inspect.custom");
/**
 * Ono supports Node's `util.format()` formatting for error messages.
 *
 * @see https://nodejs.org/api/util.html#util_util_format_format_args
 */

var format = external_util_.format;
/**
 * Adds an `inspect()` method to support Node's `util.inspect()` function.
 *
 * @see https://nodejs.org/api/util.html#util_util_inspect_custom
 */

function addInspectMethod(newError) {
  // @ts-expect-error - TypeScript doesn't support symbol indexers
  newError[inspectMethod] = inspect;
}
/**
 * Returns a representation of the error for Node's `util.inspect()` method.
 *
 * @see https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects
 */

function inspect() {
  // HACK: We have to cast the objects to `any` so we can use symbol indexers.
  // see https://github.com/Microsoft/TypeScript/issues/1863
  var pojo = {};
  var error = this;

  var _iterator = _createForOfIteratorHelper(getDeepKeys(error)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var value = error[key];
      pojo[key] = value;
    } // Don't include the `inspect()` method on the output object,
    // otherwise it will cause `util.inspect()` to go into an infinite loop
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  delete pojo[inspectMethod];
  return pojo;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/stack.js
var newline = /\r?\n/;
var onoCall = /\bono[ @]/;
/**
 * Is the property lazily computed?
 */

function isLazyStack(stackProp) {
  return Boolean(stackProp && stackProp.configurable && typeof stackProp.get === "function");
}
/**
 * Is the stack property writable?
 */

function isWritableStack(stackProp) {
  return Boolean( // If there is no stack property, then it's writable, since assigning it will create it
  !stackProp || stackProp.writable || typeof stackProp.set === "function");
}
/**
 * Appends the original `Error.stack` property to the new Error's stack.
 */

function joinStacks(newError, originalError) {
  var newStack = popStack(newError.stack);
  var originalStack = originalError ? originalError.stack : undefined;

  if (newStack && originalStack) {
    return newStack + "\n\n" + originalStack;
  } else {
    return newStack || originalStack;
  }
}
/**
 * Calls `joinStacks` lazily, when the `Error.stack` property is accessed.
 */

function lazyJoinStacks(lazyStack, newError, originalError) {
  if (originalError) {
    Object.defineProperty(newError, "stack", {
      get: function get() {
        var newStack = lazyStack.get.apply(newError);
        return joinStacks({
          stack: newStack
        }, originalError);
      },
      enumerable: false,
      configurable: true
    });
  } else {
    lazyPopStack(newError, lazyStack);
  }
}
/**
 * Removes Ono from the stack, so that the stack starts at the original error location
 */

function popStack(stack) {
  if (stack) {
    var lines = stack.split(newline); // Find the Ono call(s) in the stack, and remove them

    var onoStart;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      if (onoCall.test(line)) {
        if (onoStart === undefined) {
          // We found the first Ono call in the stack trace.
          // There may be other subsequent Ono calls as well.
          onoStart = i;
        }
      } else if (onoStart !== undefined) {
        // We found the first non-Ono call after one or more Ono calls.
        // So remove the Ono call lines from the stack trace
        lines.splice(onoStart, i - onoStart);
        break;
      }
    }

    if (lines.length > 0) {
      return lines.join("\n");
    }
  } // If we get here, then the stack doesn't contain a call to `ono`.
  // This may be due to minification or some optimization of the JS engine.
  // So just return the stack as-is.


  return stack;
}
/**
 * Calls `popStack` lazily, when the `Error.stack` property is accessed.
 */


function lazyPopStack(error, lazyStack) {
  Object.defineProperty(error, "stack", {
    get: function get() {
      return popStack(lazyStack.get.apply(error));
    },
    enumerable: false,
    configurable: true
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/extend-error.js




var extend_error_protectedProps = ["name", "message", "stack"];
/**
 * Extends the new error with the properties of the original error and the `props` object.
 *
 * @param newError - The error object to extend
 * @param originalError - The original error object, if any
 * @param props - Additional properties to add, if any
 */

function extendError(error, originalError, props) {
  var onoError = error;
  extendStack(onoError, originalError); // Copy properties from the original error

  if (originalError && typeof originalError === "object") {
    mergeErrors(onoError, originalError);
  } // The default `toJSON` method doesn't output props like `name`, `message`, `stack`, etc.
  // So replace it with one that outputs every property of the error.


  onoError.toJSON = to_json_toJSON; // On Node.js, add support for the `util.inspect()` method
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

  if (addInspectMethod) {
    addInspectMethod(onoError);
  } // Finally, copy custom properties that were specified by the user.
  // These props OVERWRITE any previous props


  if (props && typeof props === "object") {
    Object.assign(onoError, props);
  }

  return onoError;
}
/**
 * Extend the error stack to include its cause
 */

function extendStack(newError, originalError) {
  var stackProp = Object.getOwnPropertyDescriptor(newError, "stack");

  if (isLazyStack(stackProp)) {
    lazyJoinStacks(stackProp, newError, originalError);
  } else if (isWritableStack(stackProp)) {
    newError.stack = joinStacks(newError, originalError);
  }
}
/**
 * Merges properties of the original error with the new error.
 *
 * @param newError - The error object to extend
 * @param originalError - The original error object, if any
 */


function mergeErrors(newError, originalError) {
  // Get the original error's keys
  // NOTE: We specifically exclude properties that we have already set on the new error.
  // This is _especially_ important for the `stack` property, because this property has
  // a lazy getter in some environments
  var keys = getDeepKeys(originalError, extend_error_protectedProps); // HACK: We have to cast the errors to `any` so we can use symbol indexers.
  // see https://github.com/Microsoft/TypeScript/issues/1863

  var _newError = newError;
  var _originalError = originalError;

  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (_newError[key] === undefined) {
        try {
          _newError[key] = _originalError[key];
        } catch (e) {// This property is read-only, so it can't be copied
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/normalize.js

/**
 * Normalizes Ono options, accounting for defaults and optional options.
 */

function normalizeOptions(options) {
  options = options || {};
  return {
    concatMessages: options.concatMessages === undefined ? true : Boolean(options.concatMessages),
    format: options.format === undefined ? format : typeof options.format === "function" ? options.format : false
  };
}
/**
 * Normalizes the Ono arguments, accounting for defaults, options, and optional arguments.
 */

function normalizeArgs(args, options) {
  var originalError;
  var props;
  var formatArgs;
  var message = ""; // Determine which arguments were actually specified

  if (typeof args[0] === "string") {
    formatArgs = args;
  } else if (typeof args[1] === "string") {
    if (args[0] instanceof Error) {
      originalError = args[0];
    } else {
      props = args[0];
    }

    formatArgs = args.slice(1);
  } else {
    originalError = args[0];
    props = args[1];
    formatArgs = args.slice(2);
  } // If there are any format arguments, then format the error message


  if (formatArgs.length > 0) {
    if (options.format) {
      message = options.format.apply(undefined, formatArgs);
    } else {
      message = formatArgs.join(" ");
    }
  }

  if (options.concatMessages && originalError && originalError.message) {
    // The inner-error's message will be added to the new message
    message += (message ? " \n" : "") + originalError.message;
  }

  return {
    originalError: originalError,
    props: props,
    message: message
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/constructor.js



var constructor_constructor = Ono;

/**
 * Creates an `Ono` instance for a specifc error type.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention

function Ono(ErrorConstructor, options) {
  options = normalizeOptions(options);

  function ono() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _normalizeArgs = normalizeArgs(args, options),
        originalError = _normalizeArgs.originalError,
        props = _normalizeArgs.props,
        message = _normalizeArgs.message; // Create a new error of the specified type


    var newError = new ErrorConstructor(message); // Extend the error with the properties of the original error and the `props` object

    return extendError(newError, originalError, props);
  }

  ono[Symbol.species] = ErrorConstructor;
  return ono;
}
/**
 * Returns an object containing all properties of the given Error object,
 * which can be used with `JSON.stringify()`.
 */


Ono.toJSON = function toJSON(error) {
  return to_json_toJSON.call(error);
};
/**
 * Extends the given Error object with enhanced Ono functionality, such as nested stack traces,
 * additional properties, and improved support for `JSON.stringify()`.
 */


Ono.extend = function extend(error, originalError, props) {
  if (props || originalError instanceof Error) {
    return extendError(error, originalError, props);
  } else if (originalError) {
    return extendError(error, undefined, originalError);
  } else {
    return extendError(error);
  }
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/singleton.js

var singleton = ono;

ono.error = new constructor_constructor(Error);
ono.eval = new constructor_constructor(EvalError);
ono.range = new constructor_constructor(RangeError);
ono.reference = new constructor_constructor(ReferenceError);
ono.syntax = new constructor_constructor(SyntaxError);
ono.type = new constructor_constructor(TypeError);
ono.uri = new constructor_constructor(URIError);
var onoMap = ono;
/**
 * Creates a new error with the specified message, properties, and/or inner error.
 * If an inner error is provided, then the new error will match its type, if possible.
 */

function ono() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var originalError = args[0]; // Is the first argument an Error-like object?

  if (typeof originalError === "object" && typeof originalError.name === "string") {
    // Try to find an Ono singleton method that matches this error type
    for (var _i = 0, _Object$values = Object.values(onoMap); _i < _Object$values.length; _i++) {
      var typedOno = _Object$values[_i];

      if (typeof typedOno === "function" && typedOno.name === "ono") {
        var species = typedOno[Symbol.species];

        if (species && species !== Error && (originalError instanceof species || originalError.name === species.name)) {
          // Create an error of the same type
          return typedOno.apply(undefined, args);
        }
      }
    }
  } // By default, create a base Error object


  return ono.error.apply(undefined, args);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/types.js

;// CONCATENATED MODULE: ./node_modules/.pnpm/@jsdevtools+ono@7.1.3/node_modules/@jsdevtools/ono/esm/index.js
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-env commonjs */




/* harmony default export */ const esm = (singleton); // CommonJS default export hack

if ( true && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports["default"], module.exports);
}

/***/ }),

/***/ 4187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;

var fs = __webpack_require__(7147);

exports.FILE_SYSTEM_ADAPTER = {
  lstat: fs.lstat,
  stat: fs.stat,
  lstatSync: fs.lstatSync,
  statSync: fs.statSync,
  readdir: fs.readdir,
  readdirSync: fs.readdirSync
};

function createFileSystemAdapter(fsMethods) {
  if (fsMethods === undefined) {
    return exports.FILE_SYSTEM_ADAPTER;
  }

  return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}

exports.createFileSystemAdapter = createFileSystemAdapter;

/***/ }),

/***/ 2209:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
var NODE_PROCESS_VERSION_PARTS = process.versions.node.split('.');

if (NODE_PROCESS_VERSION_PARTS[0] === undefined || NODE_PROCESS_VERSION_PARTS[1] === undefined) {
  throw new Error("Unexpected behavior. The 'process.versions.node' variable has invalid value: ".concat(process.versions.node));
}

var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
var SUPPORTED_MAJOR_VERSION = 10;
var SUPPORTED_MINOR_VERSION = 10;
var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
/**
 * IS `true` for Node.js 10.10 and greater.
 */

exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;

/***/ }),

/***/ 8689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Settings = exports.scandirSync = exports.scandir = void 0;

var async = __webpack_require__(9004);

var sync = __webpack_require__(343);

var settings_1 = __webpack_require__(6124);

exports.Settings = settings_1["default"];

function scandir(path, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === 'function') {
    async.read(path, getSettings(), optionsOrSettingsOrCallback);
    return;
  }

  async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}

exports.scandir = scandir;

function scandirSync(path, optionsOrSettings) {
  var settings = getSettings(optionsOrSettings);
  return sync.read(path, settings);
}

exports.scandirSync = scandirSync;

function getSettings() {
  var settingsOrOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (settingsOrOptions instanceof settings_1["default"]) {
    return settingsOrOptions;
  }

  return new settings_1["default"](settingsOrOptions);
}

/***/ }),

/***/ 9004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;

var fsStat = __webpack_require__(1440);

var rpl = __webpack_require__(5088);

var constants_1 = __webpack_require__(2209);

var utils = __webpack_require__(621);

var common = __webpack_require__(6123);

function read(directory, settings, callback) {
  if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
    readdirWithFileTypes(directory, settings, callback);
    return;
  }

  readdir(directory, settings, callback);
}

exports.read = read;

function readdirWithFileTypes(directory, settings, callback) {
  settings.fs.readdir(directory, {
    withFileTypes: true
  }, function (readdirError, dirents) {
    if (readdirError !== null) {
      callFailureCallback(callback, readdirError);
      return;
    }

    var entries = dirents.map(function (dirent) {
      return {
        dirent: dirent,
        name: dirent.name,
        path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
      };
    });

    if (!settings.followSymbolicLinks) {
      callSuccessCallback(callback, entries);
      return;
    }

    var tasks = entries.map(function (entry) {
      return makeRplTaskEntry(entry, settings);
    });
    rpl(tasks, function (rplError, rplEntries) {
      if (rplError !== null) {
        callFailureCallback(callback, rplError);
        return;
      }

      callSuccessCallback(callback, rplEntries);
    });
  });
}

exports.readdirWithFileTypes = readdirWithFileTypes;

function makeRplTaskEntry(entry, settings) {
  return function (done) {
    if (!entry.dirent.isSymbolicLink()) {
      done(null, entry);
      return;
    }

    settings.fs.stat(entry.path, function (statError, stats) {
      if (statError !== null) {
        if (settings.throwErrorOnBrokenSymbolicLink) {
          done(statError);
          return;
        }

        done(null, entry);
        return;
      }

      entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
      done(null, entry);
    });
  };
}

function readdir(directory, settings, callback) {
  settings.fs.readdir(directory, function (readdirError, names) {
    if (readdirError !== null) {
      callFailureCallback(callback, readdirError);
      return;
    }

    var tasks = names.map(function (name) {
      var path = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
      return function (done) {
        fsStat.stat(path, settings.fsStatSettings, function (error, stats) {
          if (error !== null) {
            done(error);
            return;
          }

          var entry = {
            name: name,
            path: path,
            dirent: utils.fs.createDirentFromStats(name, stats)
          };

          if (settings.stats) {
            entry.stats = stats;
          }

          done(null, entry);
        });
      };
    });
    rpl(tasks, function (rplError, entries) {
      if (rplError !== null) {
        callFailureCallback(callback, rplError);
        return;
      }

      callSuccessCallback(callback, entries);
    });
  });
}

exports.readdir = readdir;

function callFailureCallback(callback, error) {
  callback(error);
}

function callSuccessCallback(callback, result) {
  callback(null, result);
}

/***/ }),

/***/ 6123:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.joinPathSegments = void 0;

function joinPathSegments(a, b, separator) {
  /**
   * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
   */
  if (a.endsWith(separator)) {
    return a + b;
  }

  return a + separator + b;
}

exports.joinPathSegments = joinPathSegments;

/***/ }),

/***/ 343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;

var fsStat = __webpack_require__(1440);

var constants_1 = __webpack_require__(2209);

var utils = __webpack_require__(621);

var common = __webpack_require__(6123);

function read(directory, settings) {
  if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
    return readdirWithFileTypes(directory, settings);
  }

  return readdir(directory, settings);
}

exports.read = read;

function readdirWithFileTypes(directory, settings) {
  var dirents = settings.fs.readdirSync(directory, {
    withFileTypes: true
  });
  return dirents.map(function (dirent) {
    var entry = {
      dirent: dirent,
      name: dirent.name,
      path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
    };

    if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
      try {
        var stats = settings.fs.statSync(entry.path);
        entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
      } catch (error) {
        if (settings.throwErrorOnBrokenSymbolicLink) {
          throw error;
        }
      }
    }

    return entry;
  });
}

exports.readdirWithFileTypes = readdirWithFileTypes;

function readdir(directory, settings) {
  var names = settings.fs.readdirSync(directory);
  return names.map(function (name) {
    var entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
    var stats = fsStat.statSync(entryPath, settings.fsStatSettings);
    var entry = {
      name: name,
      path: entryPath,
      dirent: utils.fs.createDirentFromStats(name, stats)
    };

    if (settings.stats) {
      entry.stats = stats;
    }

    return entry;
  });
}

exports.readdir = readdir;

/***/ }),

/***/ 6124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var path = __webpack_require__(1017);

var fsStat = __webpack_require__(1440);

var fs = __webpack_require__(4187);

var Settings = /*#__PURE__*/function () {
  function Settings() {
    var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Settings);

    this._options = _options;
    this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
    this.fs = fs.createFileSystemAdapter(this._options.fs);
    this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
    this.stats = this._getValue(this._options.stats, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
    this.fsStatSettings = new fsStat.Settings({
      followSymbolicLink: this.followSymbolicLinks,
      fs: this.fs,
      throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
    });
  }

  _createClass(Settings, [{
    key: "_getValue",
    value: function _getValue(option, value) {
      return option !== null && option !== void 0 ? option : value;
    }
  }]);

  return Settings;
}();

exports["default"] = Settings;

/***/ }),

/***/ 4002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createClass = (__webpack_require__(8482)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createDirentFromStats = void 0;

var DirentFromStats = /*#__PURE__*/_createClass(function DirentFromStats(name, stats) {
  _classCallCheck(this, DirentFromStats);

  this.name = name;
  this.isBlockDevice = stats.isBlockDevice.bind(stats);
  this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
  this.isDirectory = stats.isDirectory.bind(stats);
  this.isFIFO = stats.isFIFO.bind(stats);
  this.isFile = stats.isFile.bind(stats);
  this.isSocket = stats.isSocket.bind(stats);
  this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
});

function createDirentFromStats(name, stats) {
  return new DirentFromStats(name, stats);
}

exports.createDirentFromStats = createDirentFromStats;

/***/ }),

/***/ 621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fs = void 0;

var fs = __webpack_require__(4002);

exports.fs = fs;

/***/ }),

/***/ 2816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;

var fs = __webpack_require__(7147);

exports.FILE_SYSTEM_ADAPTER = {
  lstat: fs.lstat,
  stat: fs.stat,
  lstatSync: fs.lstatSync,
  statSync: fs.statSync
};

function createFileSystemAdapter(fsMethods) {
  if (fsMethods === undefined) {
    return exports.FILE_SYSTEM_ADAPTER;
  }

  return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}

exports.createFileSystemAdapter = createFileSystemAdapter;

/***/ }),

/***/ 1440:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.statSync = exports.stat = exports.Settings = void 0;

var async = __webpack_require__(1386);

var sync = __webpack_require__(8916);

var settings_1 = __webpack_require__(8993);

exports.Settings = settings_1["default"];

function stat(path, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === 'function') {
    async.read(path, getSettings(), optionsOrSettingsOrCallback);
    return;
  }

  async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}

exports.stat = stat;

function statSync(path, optionsOrSettings) {
  var settings = getSettings(optionsOrSettings);
  return sync.read(path, settings);
}

exports.statSync = statSync;

function getSettings() {
  var settingsOrOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (settingsOrOptions instanceof settings_1["default"]) {
    return settingsOrOptions;
  }

  return new settings_1["default"](settingsOrOptions);
}

/***/ }),

/***/ 1386:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.read = void 0;

function read(path, settings, callback) {
  settings.fs.lstat(path, function (lstatError, lstat) {
    if (lstatError !== null) {
      callFailureCallback(callback, lstatError);
      return;
    }

    if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
      callSuccessCallback(callback, lstat);
      return;
    }

    settings.fs.stat(path, function (statError, stat) {
      if (statError !== null) {
        if (settings.throwErrorOnBrokenSymbolicLink) {
          callFailureCallback(callback, statError);
          return;
        }

        callSuccessCallback(callback, lstat);
        return;
      }

      if (settings.markSymbolicLink) {
        stat.isSymbolicLink = function () {
          return true;
        };
      }

      callSuccessCallback(callback, stat);
    });
  });
}

exports.read = read;

function callFailureCallback(callback, error) {
  callback(error);
}

function callSuccessCallback(callback, result) {
  callback(null, result);
}

/***/ }),

/***/ 8916:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.read = void 0;

function read(path, settings) {
  var lstat = settings.fs.lstatSync(path);

  if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
    return lstat;
  }

  try {
    var stat = settings.fs.statSync(path);

    if (settings.markSymbolicLink) {
      stat.isSymbolicLink = function () {
        return true;
      };
    }

    return stat;
  } catch (error) {
    if (!settings.throwErrorOnBrokenSymbolicLink) {
      return lstat;
    }

    throw error;
  }
}

exports.read = read;

/***/ }),

/***/ 8993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var fs = __webpack_require__(2816);

var Settings = /*#__PURE__*/function () {
  function Settings() {
    var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Settings);

    this._options = _options;
    this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
    this.fs = fs.createFileSystemAdapter(this._options.fs);
    this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
  }

  _createClass(Settings, [{
    key: "_getValue",
    value: function _getValue(option, value) {
      return option !== null && option !== void 0 ? option : value;
    }
  }]);

  return Settings;
}();

exports["default"] = Settings;

/***/ }),

/***/ 5110:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;

var async_1 = __webpack_require__(2693);

var stream_1 = __webpack_require__(2954);

var sync_1 = __webpack_require__(9350);

var settings_1 = __webpack_require__(9910);

exports.Settings = settings_1["default"];

function walk(directory, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === 'function') {
    new async_1["default"](directory, getSettings()).read(optionsOrSettingsOrCallback);
    return;
  }

  new async_1["default"](directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
}

exports.walk = walk;

function walkSync(directory, optionsOrSettings) {
  var settings = getSettings(optionsOrSettings);
  var provider = new sync_1["default"](directory, settings);
  return provider.read();
}

exports.walkSync = walkSync;

function walkStream(directory, optionsOrSettings) {
  var settings = getSettings(optionsOrSettings);
  var provider = new stream_1["default"](directory, settings);
  return provider.read();
}

exports.walkStream = walkStream;

function getSettings() {
  var settingsOrOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (settingsOrOptions instanceof settings_1["default"]) {
    return settingsOrOptions;
  }

  return new settings_1["default"](settingsOrOptions);
}

/***/ }),

/***/ 2693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var async_1 = __webpack_require__(6728);

var AsyncProvider = /*#__PURE__*/function () {
  function AsyncProvider(_root, _settings) {
    _classCallCheck(this, AsyncProvider);

    this._root = _root;
    this._settings = _settings;
    this._reader = new async_1["default"](this._root, this._settings);
    this._storage = [];
  }

  _createClass(AsyncProvider, [{
    key: "read",
    value: function read(callback) {
      var _this = this;

      this._reader.onError(function (error) {
        callFailureCallback(callback, error);
      });

      this._reader.onEntry(function (entry) {
        _this._storage.push(entry);
      });

      this._reader.onEnd(function () {
        callSuccessCallback(callback, _this._storage);
      });

      this._reader.read();
    }
  }]);

  return AsyncProvider;
}();

exports["default"] = AsyncProvider;

function callFailureCallback(callback, error) {
  callback(error);
}

function callSuccessCallback(callback, entries) {
  callback(null, entries);
}

/***/ }),

/***/ 2954:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var stream_1 = __webpack_require__(2781);

var async_1 = __webpack_require__(6728);

var StreamProvider = /*#__PURE__*/function () {
  function StreamProvider(_root, _settings) {
    var _this = this;

    _classCallCheck(this, StreamProvider);

    this._root = _root;
    this._settings = _settings;
    this._reader = new async_1["default"](this._root, this._settings);
    this._stream = new stream_1.Readable({
      objectMode: true,
      read: function read() {},
      destroy: function destroy() {
        if (!_this._reader.isDestroyed) {
          _this._reader.destroy();
        }
      }
    });
  }

  _createClass(StreamProvider, [{
    key: "read",
    value: function read() {
      var _this2 = this;

      this._reader.onError(function (error) {
        _this2._stream.emit('error', error);
      });

      this._reader.onEntry(function (entry) {
        _this2._stream.push(entry);
      });

      this._reader.onEnd(function () {
        _this2._stream.push(null);
      });

      this._reader.read();

      return this._stream;
    }
  }]);

  return StreamProvider;
}();

exports["default"] = StreamProvider;

/***/ }),

/***/ 9350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var sync_1 = __webpack_require__(6129);

var SyncProvider = /*#__PURE__*/function () {
  function SyncProvider(_root, _settings) {
    _classCallCheck(this, SyncProvider);

    this._root = _root;
    this._settings = _settings;
    this._reader = new sync_1["default"](this._root, this._settings);
  }

  _createClass(SyncProvider, [{
    key: "read",
    value: function read() {
      return this._reader.read();
    }
  }]);

  return SyncProvider;
}();

exports["default"] = SyncProvider;

/***/ }),

/***/ 6728:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _assertThisInitialized = (__webpack_require__(7722)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var events_1 = __webpack_require__(2361);

var fsScandir = __webpack_require__(8689);

var fastq = __webpack_require__(610);

var common = __webpack_require__(7177);

var reader_1 = __webpack_require__(6965);

var AsyncReader = /*#__PURE__*/function (_reader_1$default) {
  _inherits(AsyncReader, _reader_1$default);

  var _super = _createSuper(AsyncReader);

  function AsyncReader(_root, _settings) {
    var _this;

    _classCallCheck(this, AsyncReader);

    _this = _super.call(this, _root, _settings);
    _this._settings = _settings;
    _this._scandir = fsScandir.scandir;
    _this._emitter = new events_1.EventEmitter();
    _this._queue = fastq(_this._worker.bind(_assertThisInitialized(_this)), _this._settings.concurrency);
    _this._isFatalError = false;
    _this._isDestroyed = false;

    _this._queue.drain = function () {
      if (!_this._isFatalError) {
        _this._emitter.emit('end');
      }
    };

    return _this;
  }

  _createClass(AsyncReader, [{
    key: "read",
    value: function read() {
      var _this2 = this;

      this._isFatalError = false;
      this._isDestroyed = false;
      setImmediate(function () {
        _this2._pushToQueue(_this2._root, _this2._settings.basePath);
      });
      return this._emitter;
    }
  }, {
    key: "isDestroyed",
    get: function get() {
      return this._isDestroyed;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._isDestroyed) {
        throw new Error('The reader is already destroyed');
      }

      this._isDestroyed = true;

      this._queue.killAndDrain();
    }
  }, {
    key: "onEntry",
    value: function onEntry(callback) {
      this._emitter.on('entry', callback);
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      this._emitter.once('error', callback);
    }
  }, {
    key: "onEnd",
    value: function onEnd(callback) {
      this._emitter.once('end', callback);
    }
  }, {
    key: "_pushToQueue",
    value: function _pushToQueue(directory, base) {
      var _this3 = this;

      var queueItem = {
        directory: directory,
        base: base
      };

      this._queue.push(queueItem, function (error) {
        if (error !== null) {
          _this3._handleError(error);
        }
      });
    }
  }, {
    key: "_worker",
    value: function _worker(item, done) {
      var _this4 = this;

      this._scandir(item.directory, this._settings.fsScandirSettings, function (error, entries) {
        if (error !== null) {
          done(error, undefined);
          return;
        }

        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            _this4._handleEntry(entry, item.base);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        done(null, undefined);
      });
    }
  }, {
    key: "_handleError",
    value: function _handleError(error) {
      if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
        return;
      }

      this._isFatalError = true;
      this._isDestroyed = true;

      this._emitter.emit('error', error);
    }
  }, {
    key: "_handleEntry",
    value: function _handleEntry(entry, base) {
      if (this._isDestroyed || this._isFatalError) {
        return;
      }

      var fullpath = entry.path;

      if (base !== undefined) {
        entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
      }

      if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
        this._emitEntry(entry);
      }

      if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
        this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
      }
    }
  }, {
    key: "_emitEntry",
    value: function _emitEntry(entry) {
      this._emitter.emit('entry', entry);
    }
  }]);

  return AsyncReader;
}(reader_1["default"]);

exports["default"] = AsyncReader;

/***/ }),

/***/ 7177:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;

function isFatalError(settings, error) {
  if (settings.errorFilter === null) {
    return true;
  }

  return !settings.errorFilter(error);
}

exports.isFatalError = isFatalError;

function isAppliedFilter(filter, value) {
  return filter === null || filter(value);
}

exports.isAppliedFilter = isAppliedFilter;

function replacePathSegmentSeparator(filepath, separator) {
  return filepath.split(/[/\\]/).join(separator);
}

exports.replacePathSegmentSeparator = replacePathSegmentSeparator;

function joinPathSegments(a, b, separator) {
  if (a === '') {
    return b;
  }
  /**
   * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
   */


  if (a.endsWith(separator)) {
    return a + b;
  }

  return a + separator + b;
}

exports.joinPathSegments = joinPathSegments;

/***/ }),

/***/ 6965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createClass = (__webpack_require__(8482)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var common = __webpack_require__(7177);

var Reader = /*#__PURE__*/_createClass(function Reader(_root, _settings) {
  _classCallCheck(this, Reader);

  this._root = _root;
  this._settings = _settings;
  this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
});

exports["default"] = Reader;

/***/ }),

/***/ 6129:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var fsScandir = __webpack_require__(8689);

var common = __webpack_require__(7177);

var reader_1 = __webpack_require__(6965);

var SyncReader = /*#__PURE__*/function (_reader_1$default) {
  _inherits(SyncReader, _reader_1$default);

  var _super = _createSuper(SyncReader);

  function SyncReader() {
    var _this;

    _classCallCheck(this, SyncReader);

    _this = _super.apply(this, arguments);
    _this._scandir = fsScandir.scandirSync;
    _this._storage = [];
    _this._queue = new Set();
    return _this;
  }

  _createClass(SyncReader, [{
    key: "read",
    value: function read() {
      this._pushToQueue(this._root, this._settings.basePath);

      this._handleQueue();

      return this._storage;
    }
  }, {
    key: "_pushToQueue",
    value: function _pushToQueue(directory, base) {
      this._queue.add({
        directory: directory,
        base: base
      });
    }
  }, {
    key: "_handleQueue",
    value: function _handleQueue() {
      var _iterator = _createForOfIteratorHelper(this._queue.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          this._handleDirectory(item.directory, item.base);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_handleDirectory",
    value: function _handleDirectory(directory, base) {
      try {
        var entries = this._scandir(directory, this._settings.fsScandirSettings);

        var _iterator2 = _createForOfIteratorHelper(entries),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var entry = _step2.value;

            this._handleEntry(entry, base);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } catch (error) {
        this._handleError(error);
      }
    }
  }, {
    key: "_handleError",
    value: function _handleError(error) {
      if (!common.isFatalError(this._settings, error)) {
        return;
      }

      throw error;
    }
  }, {
    key: "_handleEntry",
    value: function _handleEntry(entry, base) {
      var fullpath = entry.path;

      if (base !== undefined) {
        entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
      }

      if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
        this._pushToStorage(entry);
      }

      if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
        this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
      }
    }
  }, {
    key: "_pushToStorage",
    value: function _pushToStorage(entry) {
      this._storage.push(entry);
    }
  }]);

  return SyncReader;
}(reader_1["default"]);

exports["default"] = SyncReader;

/***/ }),

/***/ 9910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var path = __webpack_require__(1017);

var fsScandir = __webpack_require__(8689);

var Settings = /*#__PURE__*/function () {
  function Settings() {
    var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Settings);

    this._options = _options;
    this.basePath = this._getValue(this._options.basePath, undefined);
    this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
    this.deepFilter = this._getValue(this._options.deepFilter, null);
    this.entryFilter = this._getValue(this._options.entryFilter, null);
    this.errorFilter = this._getValue(this._options.errorFilter, null);
    this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
    this.fsScandirSettings = new fsScandir.Settings({
      followSymbolicLinks: this._options.followSymbolicLinks,
      fs: this._options.fs,
      pathSegmentSeparator: this._options.pathSegmentSeparator,
      stats: this._options.stats,
      throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
    });
  }

  _createClass(Settings, [{
    key: "_getValue",
    value: function _getValue(option, value) {
      return option !== null && option !== void 0 ? option : value;
    }
  }]);

  return Settings;
}();

exports["default"] = Settings;

/***/ }),

/***/ 3540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _toConsumableArray = (__webpack_require__(4434)["default"]);

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var stringify = __webpack_require__(1235);

var compile = __webpack_require__(2430);

var expand = __webpack_require__(5762);

var parse = __webpack_require__(3610);
/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */


var braces = function braces(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var output = [];

  if (Array.isArray(input)) {
    var _iterator = _createForOfIteratorHelper(input),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pattern = _step.value;
        var result = braces.create(pattern, options);

        if (Array.isArray(result)) {
          var _output;

          (_output = output).push.apply(_output, _toConsumableArray(result));
        } else {
          output.push(result);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    output = [].concat(braces.create(input, options));
  }

  if (options && options.expand === true && options.nodupes === true) {
    output = _toConsumableArray(new Set(output));
  }

  return output;
};
/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */


braces.parse = function (input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return parse(input, options);
};
/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.stringify = function (input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof input === 'string') {
    return stringify(braces.parse(input, options), options);
  }

  return stringify(input, options);
};
/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.compile = function (input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof input === 'string') {
    input = braces.parse(input, options);
  }

  return compile(input, options);
};
/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.expand = function (input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof input === 'string') {
    input = braces.parse(input, options);
  }

  var result = expand(input, options); // filter out empty strings if specified

  if (options.noempty === true) {
    result = result.filter(Boolean);
  } // filter out duplicates if specified


  if (options.nodupes === true) {
    result = _toConsumableArray(new Set(result));
  }

  return result;
};
/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.create = function (input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (input === '' || input.length < 3) {
    return [input];
  }

  return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
};
/**
 * Expose "braces"
 */


module.exports = braces;

/***/ }),

/***/ 2430:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _objectSpread = (__webpack_require__(279)["default"]);

var _toConsumableArray = (__webpack_require__(4434)["default"]);

var fill = __webpack_require__(4902);

var utils = __webpack_require__(8811);

var compile = function compile(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var walk = function walk(node) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var invalidBlock = utils.isInvalidBrace(parent);
    var invalidNode = node.invalid === true && options.escapeInvalid === true;
    var invalid = invalidBlock === true || invalidNode === true;
    var prefix = options.escapeInvalid === true ? '\\' : '';
    var output = '';

    if (node.isOpen === true) {
      return prefix + node.value;
    }

    if (node.isClose === true) {
      return prefix + node.value;
    }

    if (node.type === 'open') {
      return invalid ? prefix + node.value : '(';
    }

    if (node.type === 'close') {
      return invalid ? prefix + node.value : ')';
    }

    if (node.type === 'comma') {
      return node.prev.type === 'comma' ? '' : invalid ? node.value : '|';
    }

    if (node.value) {
      return node.value;
    }

    if (node.nodes && node.ranges > 0) {
      var args = utils.reduce(node.nodes);
      var range = fill.apply(void 0, _toConsumableArray(args).concat([_objectSpread(_objectSpread({}, options), {}, {
        wrap: false,
        toRegex: true
      })]));

      if (range.length !== 0) {
        return args.length > 1 && range.length > 1 ? "(".concat(range, ")") : range;
      }
    }

    if (node.nodes) {
      var _iterator = _createForOfIteratorHelper(node.nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          output += walk(child, node);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return output;
  };

  return walk(ast);
};

module.exports = compile;

/***/ }),

/***/ 6650:
/***/ ((module) => {

"use strict";


module.exports = {
  MAX_LENGTH: 1024 * 64,
  // Digits
  CHAR_0: '0',

  /* 0 */
  CHAR_9: '9',

  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 'A',

  /* A */
  CHAR_LOWERCASE_A: 'a',

  /* a */
  CHAR_UPPERCASE_Z: 'Z',

  /* Z */
  CHAR_LOWERCASE_Z: 'z',

  /* z */
  CHAR_LEFT_PARENTHESES: '(',

  /* ( */
  CHAR_RIGHT_PARENTHESES: ')',

  /* ) */
  CHAR_ASTERISK: '*',

  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: '&',

  /* & */
  CHAR_AT: '@',

  /* @ */
  CHAR_BACKSLASH: '\\',

  /* \ */
  CHAR_BACKTICK: '`',

  /* ` */
  CHAR_CARRIAGE_RETURN: '\r',

  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: '^',

  /* ^ */
  CHAR_COLON: ':',

  /* : */
  CHAR_COMMA: ',',

  /* , */
  CHAR_DOLLAR: '$',

  /* . */
  CHAR_DOT: '.',

  /* . */
  CHAR_DOUBLE_QUOTE: '"',

  /* " */
  CHAR_EQUAL: '=',

  /* = */
  CHAR_EXCLAMATION_MARK: '!',

  /* ! */
  CHAR_FORM_FEED: '\f',

  /* \f */
  CHAR_FORWARD_SLASH: '/',

  /* / */
  CHAR_HASH: '#',

  /* # */
  CHAR_HYPHEN_MINUS: '-',

  /* - */
  CHAR_LEFT_ANGLE_BRACKET: '<',

  /* < */
  CHAR_LEFT_CURLY_BRACE: '{',

  /* { */
  CHAR_LEFT_SQUARE_BRACKET: '[',

  /* [ */
  CHAR_LINE_FEED: '\n',

  /* \n */
  CHAR_NO_BREAK_SPACE: "\xA0",

  /* \u00A0 */
  CHAR_PERCENT: '%',

  /* % */
  CHAR_PLUS: '+',

  /* + */
  CHAR_QUESTION_MARK: '?',

  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: '>',

  /* > */
  CHAR_RIGHT_CURLY_BRACE: '}',

  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: ']',

  /* ] */
  CHAR_SEMICOLON: ';',

  /* ; */
  CHAR_SINGLE_QUOTE: '\'',

  /* ' */
  CHAR_SPACE: ' ',

  /*   */
  CHAR_TAB: '\t',

  /* \t */
  CHAR_UNDERSCORE: '_',

  /* _ */
  CHAR_VERTICAL_LINE: '|',

  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
  /* \uFEFF */

};

/***/ }),

/***/ 5762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _toConsumableArray = (__webpack_require__(4434)["default"]);

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var fill = __webpack_require__(4902);

var stringify = __webpack_require__(1235);

var utils = __webpack_require__(8811);

var append = function append() {
  var queue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var stash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var enclose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var result = [];
  queue = [].concat(queue);
  stash = [].concat(stash);
  if (!stash.length) return queue;

  if (!queue.length) {
    return enclose ? utils.flatten(stash).map(function (ele) {
      return "{".concat(ele, "}");
    }) : stash;
  }

  var _iterator = _createForOfIteratorHelper(queue),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (Array.isArray(item)) {
        var _iterator2 = _createForOfIteratorHelper(item),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var value = _step2.value;
            result.push(append(value, stash, enclose));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        var _iterator3 = _createForOfIteratorHelper(stash),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var ele = _step3.value;
            if (enclose === true && typeof ele === 'string') ele = "{".concat(ele, "}");
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return utils.flatten(result);
};

var expand = function expand(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var rangeLimit = options.rangeLimit === void 0 ? 1000 : options.rangeLimit;

  var walk = function walk(node) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    node.queue = [];
    var p = parent;
    var q = parent.queue;

    while (p.type !== 'brace' && p.type !== 'root' && p.parent) {
      p = p.parent;
      q = p.queue;
    }

    if (node.invalid || node.dollar) {
      q.push(append(q.pop(), stringify(node, options)));
      return;
    }

    if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
      q.push(append(q.pop(), ['{}']));
      return;
    }

    if (node.nodes && node.ranges > 0) {
      var args = utils.reduce(node.nodes);

      if (utils.exceedsLimit.apply(utils, _toConsumableArray(args).concat([options.step, rangeLimit]))) {
        throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
      }

      var range = fill.apply(void 0, _toConsumableArray(args).concat([options]));

      if (range.length === 0) {
        range = stringify(node, options);
      }

      q.push(append(q.pop(), range));
      node.nodes = [];
      return;
    }

    var enclose = utils.encloseBrace(node);
    var queue = node.queue;
    var block = node;

    while (block.type !== 'brace' && block.type !== 'root' && block.parent) {
      block = block.parent;
      queue = block.queue;
    }

    for (var i = 0; i < node.nodes.length; i++) {
      var child = node.nodes[i];

      if (child.type === 'comma' && node.type === 'brace') {
        if (i === 1) queue.push('');
        queue.push('');
        continue;
      }

      if (child.type === 'close') {
        q.push(append(q.pop(), queue, enclose));
        continue;
      }

      if (child.value && child.type !== 'open') {
        queue.push(append(queue.pop(), child.value));
        continue;
      }

      if (child.nodes) {
        walk(child, node);
      }
    }

    return queue;
  };

  return utils.flatten(walk(ast));
};

module.exports = expand;

/***/ }),

/***/ 3610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _toConsumableArray = (__webpack_require__(4434)["default"]);

var stringify = __webpack_require__(1235);
/**
 * Constants
 */


var _require = __webpack_require__(6650),
    MAX_LENGTH = _require.MAX_LENGTH,
    CHAR_BACKSLASH = _require.CHAR_BACKSLASH,
    CHAR_BACKTICK = _require.CHAR_BACKTICK,
    CHAR_COMMA = _require.CHAR_COMMA,
    CHAR_DOT = _require.CHAR_DOT,
    CHAR_LEFT_PARENTHESES = _require.CHAR_LEFT_PARENTHESES,
    CHAR_RIGHT_PARENTHESES = _require.CHAR_RIGHT_PARENTHESES,
    CHAR_LEFT_CURLY_BRACE = _require.CHAR_LEFT_CURLY_BRACE,
    CHAR_RIGHT_CURLY_BRACE = _require.CHAR_RIGHT_CURLY_BRACE,
    CHAR_LEFT_SQUARE_BRACKET = _require.CHAR_LEFT_SQUARE_BRACKET,
    CHAR_RIGHT_SQUARE_BRACKET = _require.CHAR_RIGHT_SQUARE_BRACKET,
    CHAR_DOUBLE_QUOTE = _require.CHAR_DOUBLE_QUOTE,
    CHAR_SINGLE_QUOTE = _require.CHAR_SINGLE_QUOTE,
    CHAR_NO_BREAK_SPACE = _require.CHAR_NO_BREAK_SPACE,
    CHAR_ZERO_WIDTH_NOBREAK_SPACE = _require.CHAR_ZERO_WIDTH_NOBREAK_SPACE;
/**
 * parse
 */


var parse = function parse(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }

  var opts = options || {};
  var max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;

  if (input.length > max) {
    throw new SyntaxError("Input length (".concat(input.length, "), exceeds max characters (").concat(max, ")"));
  }

  var ast = {
    type: 'root',
    input: input,
    nodes: []
  };
  var stack = [ast];
  var block = ast;
  var prev = ast;
  var brackets = 0;
  var length = input.length;
  var index = 0;
  var depth = 0;
  var value;
  var memo = {};
  /**
   * Helpers
   */

  var advance = function advance() {
    return input[index++];
  };

  var push = function push(node) {
    if (node.type === 'text' && prev.type === 'dot') {
      prev.type = 'text';
    }

    if (prev && prev.type === 'text' && node.type === 'text') {
      prev.value += node.value;
      return;
    }

    block.nodes.push(node);
    node.parent = block;
    node.prev = prev;
    prev = node;
    return node;
  };

  push({
    type: 'bos'
  });

  while (index < length) {
    block = stack[stack.length - 1];
    value = advance();
    /**
     * Invalid chars
     */

    if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
      continue;
    }
    /**
     * Escaped chars
     */


    if (value === CHAR_BACKSLASH) {
      push({
        type: 'text',
        value: (options.keepEscaping ? value : '') + advance()
      });
      continue;
    }
    /**
     * Right square bracket (literal): ']'
     */


    if (value === CHAR_RIGHT_SQUARE_BRACKET) {
      push({
        type: 'text',
        value: '\\' + value
      });
      continue;
    }
    /**
     * Left square bracket: '['
     */


    if (value === CHAR_LEFT_SQUARE_BRACKET) {
      brackets++;
      var closed = true;
      var next = void 0;

      while (index < length && (next = advance())) {
        value += next;

        if (next === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          continue;
        }

        if (next === CHAR_BACKSLASH) {
          value += advance();
          continue;
        }

        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          brackets--;

          if (brackets === 0) {
            break;
          }
        }
      }

      push({
        type: 'text',
        value: value
      });
      continue;
    }
    /**
     * Parentheses
     */


    if (value === CHAR_LEFT_PARENTHESES) {
      block = push({
        type: 'paren',
        nodes: []
      });
      stack.push(block);
      push({
        type: 'text',
        value: value
      });
      continue;
    }

    if (value === CHAR_RIGHT_PARENTHESES) {
      if (block.type !== 'paren') {
        push({
          type: 'text',
          value: value
        });
        continue;
      }

      block = stack.pop();
      push({
        type: 'text',
        value: value
      });
      block = stack[stack.length - 1];
      continue;
    }
    /**
     * Quotes: '|"|`
     */


    if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
      var open = value;

      var _next = void 0;

      if (options.keepQuotes !== true) {
        value = '';
      }

      while (index < length && (_next = advance())) {
        if (_next === CHAR_BACKSLASH) {
          value += _next + advance();
          continue;
        }

        if (_next === open) {
          if (options.keepQuotes === true) value += _next;
          break;
        }

        value += _next;
      }

      push({
        type: 'text',
        value: value
      });
      continue;
    }
    /**
     * Left curly brace: '{'
     */


    if (value === CHAR_LEFT_CURLY_BRACE) {
      depth++;
      var dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
      var brace = {
        type: 'brace',
        open: true,
        close: false,
        dollar: dollar,
        depth: depth,
        commas: 0,
        ranges: 0,
        nodes: []
      };
      block = push(brace);
      stack.push(block);
      push({
        type: 'open',
        value: value
      });
      continue;
    }
    /**
     * Right curly brace: '}'
     */


    if (value === CHAR_RIGHT_CURLY_BRACE) {
      if (block.type !== 'brace') {
        push({
          type: 'text',
          value: value
        });
        continue;
      }

      var type = 'close';
      block = stack.pop();
      block.close = true;
      push({
        type: type,
        value: value
      });
      depth--;
      block = stack[stack.length - 1];
      continue;
    }
    /**
     * Comma: ','
     */


    if (value === CHAR_COMMA && depth > 0) {
      if (block.ranges > 0) {
        block.ranges = 0;

        var _open = block.nodes.shift();

        block.nodes = [_open, {
          type: 'text',
          value: stringify(block)
        }];
      }

      push({
        type: 'comma',
        value: value
      });
      block.commas++;
      continue;
    }
    /**
     * Dot: '.'
     */


    if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
      var siblings = block.nodes;

      if (depth === 0 || siblings.length === 0) {
        push({
          type: 'text',
          value: value
        });
        continue;
      }

      if (prev.type === 'dot') {
        block.range = [];
        prev.value += value;
        prev.type = 'range';

        if (block.nodes.length !== 3 && block.nodes.length !== 5) {
          block.invalid = true;
          block.ranges = 0;
          prev.type = 'text';
          continue;
        }

        block.ranges++;
        block.args = [];
        continue;
      }

      if (prev.type === 'range') {
        siblings.pop();
        var before = siblings[siblings.length - 1];
        before.value += prev.value + value;
        prev = before;
        block.ranges--;
        continue;
      }

      push({
        type: 'dot',
        value: value
      });
      continue;
    }
    /**
     * Text
     */


    push({
      type: 'text',
      value: value
    });
  } // Mark imbalanced braces and brackets as invalid


  do {
    block = stack.pop();

    if (block.type !== 'root') {
      var _parent$nodes;

      block.nodes.forEach(function (node) {
        if (!node.nodes) {
          if (node.type === 'open') node.isOpen = true;
          if (node.type === 'close') node.isClose = true;
          if (!node.nodes) node.type = 'text';
          node.invalid = true;
        }
      }); // get the location of the block on parent.nodes (block's siblings)

      var parent = stack[stack.length - 1];

      var _index = parent.nodes.indexOf(block); // replace the (invalid) block with it's nodes


      (_parent$nodes = parent.nodes).splice.apply(_parent$nodes, [_index, 1].concat(_toConsumableArray(block.nodes)));
    }
  } while (stack.length > 0);

  push({
    type: 'eos'
  });
  return ast;
};

module.exports = parse;

/***/ }),

/***/ 1235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var utils = __webpack_require__(8811);

module.exports = function (ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var stringify = function stringify(node) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
    var invalidNode = node.invalid === true && options.escapeInvalid === true;
    var output = '';

    if (node.value) {
      if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
        return '\\' + node.value;
      }

      return node.value;
    }

    if (node.value) {
      return node.value;
    }

    if (node.nodes) {
      var _iterator = _createForOfIteratorHelper(node.nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          output += stringify(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return output;
  };

  return stringify(ast);
};

/***/ }),

/***/ 8811:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.isInteger = function (num) {
  if (typeof num === 'number') {
    return Number.isInteger(num);
  }

  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isInteger(Number(num));
  }

  return false;
};
/**
 * Find a node of the given type
 */


exports.find = function (node, type) {
  return node.nodes.find(function (node) {
    return node.type === type;
  });
};
/**
 * Find a node of the given type
 */


exports.exceedsLimit = function (min, max) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var limit = arguments.length > 3 ? arguments[3] : undefined;
  if (limit === false) return false;
  if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
  return (Number(max) - Number(min)) / Number(step) >= limit;
};
/**
 * Escape the given node with '\\' before node.value
 */


exports.escapeNode = function (block) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var type = arguments.length > 2 ? arguments[2] : undefined;
  var node = block.nodes[n];
  if (!node) return;

  if (type && node.type === type || node.type === 'open' || node.type === 'close') {
    if (node.escaped !== true) {
      node.value = '\\' + node.value;
      node.escaped = true;
    }
  }
};
/**
 * Returns true if the given brace node should be enclosed in literal braces
 */


exports.encloseBrace = function (node) {
  if (node.type !== 'brace') return false;

  if (node.commas >> 0 + node.ranges >> 0 === 0) {
    node.invalid = true;
    return true;
  }

  return false;
};
/**
 * Returns true if a brace node is invalid.
 */


exports.isInvalidBrace = function (block) {
  if (block.type !== 'brace') return false;
  if (block.invalid === true || block.dollar) return true;

  if (block.commas >> 0 + block.ranges >> 0 === 0) {
    block.invalid = true;
    return true;
  }

  if (block.open !== true || block.close !== true) {
    block.invalid = true;
    return true;
  }

  return false;
};
/**
 * Returns true if a node is an open or close node
 */


exports.isOpenOrClose = function (node) {
  if (node.type === 'open' || node.type === 'close') {
    return true;
  }

  return node.open === true || node.close === true;
};
/**
 * Reduce an array of text nodes.
 */


exports.reduce = function (nodes) {
  return nodes.reduce(function (acc, node) {
    if (node.type === 'text') acc.push(node.value);
    if (node.type === 'range') node.type = 'text';
    return acc;
  }, []);
};
/**
 * Flatten an array
 */


exports.flatten = function () {
  var result = [];

  var flat = function flat(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
    }

    return result;
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  flat(args);
  return result;
};

/***/ }),

/***/ 570:
/***/ ((module) => {

"use strict";


var next = global.process && process.nextTick || global.setImmediate || function (f) {
  setTimeout(f, 0);
};

module.exports = function maybe(cb, promise) {
  if (cb) {
    promise.then(function (result) {
      next(function () {
        cb(null, result);
      });
    }, function (err) {
      next(function () {
        cb(err);
      });
    });
    return undefined;
  } else {
    return promise;
  }
};

/***/ }),

/***/ 9594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var cp = __webpack_require__(2081);

var parse = __webpack_require__(9729);

var enoent = __webpack_require__(3384);

function spawn(command, args, options) {
  // Parse the arguments
  var parsed = parse(command, args, options); // Spawn the child process

  var spawned = cp.spawn(parsed.command, parsed.args, parsed.options); // Hook into child process "exit" event to emit an error if the command
  // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

  enoent.hookChildProcess(spawned, parsed);
  return spawned;
}

function spawnSync(command, args, options) {
  // Parse the arguments
  var parsed = parse(command, args, options); // Spawn the child process

  var result = cp.spawnSync(parsed.command, parsed.args, parsed.options); // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

  result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
  return result;
}

module.exports = spawn;
module.exports.spawn = spawn;
module.exports.sync = spawnSync;
module.exports._parse = parse;
module.exports._enoent = enoent;

/***/ }),

/***/ 3384:
/***/ ((module) => {

"use strict";


var isWin = process.platform === 'win32';

function notFoundError(original, syscall) {
  return Object.assign(new Error("".concat(syscall, " ").concat(original.command, " ENOENT")), {
    code: 'ENOENT',
    errno: 'ENOENT',
    syscall: "".concat(syscall, " ").concat(original.command),
    path: original.command,
    spawnargs: original.args
  });
}

function hookChildProcess(cp, parsed) {
  if (!isWin) {
    return;
  }

  var originalEmit = cp.emit;

  cp.emit = function (name, arg1) {
    // If emitting "exit" event and exit code is 1, we need to check if
    // the command exists and emit an "error" instead
    // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
    if (name === 'exit') {
      var err = verifyENOENT(arg1, parsed, 'spawn');

      if (err) {
        return originalEmit.call(cp, 'error', err);
      }
    }

    return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
  };
}

function verifyENOENT(status, parsed) {
  if (isWin && status === 1 && !parsed.file) {
    return notFoundError(parsed.original, 'spawn');
  }

  return null;
}

function verifyENOENTSync(status, parsed) {
  if (isWin && status === 1 && !parsed.file) {
    return notFoundError(parsed.original, 'spawnSync');
  }

  return null;
}

module.exports = {
  hookChildProcess: hookChildProcess,
  verifyENOENT: verifyENOENT,
  verifyENOENTSync: verifyENOENTSync,
  notFoundError: notFoundError
};

/***/ }),

/***/ 9729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var path = __webpack_require__(1017);

var resolveCommand = __webpack_require__(2040);

var escape = __webpack_require__(5354);

var readShebang = __webpack_require__(7439);

var isWin = process.platform === 'win32';
var isExecutableRegExp = /\.(?:com|exe)$/i;
var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

function detectShebang(parsed) {
  parsed.file = resolveCommand(parsed);
  var shebang = parsed.file && readShebang(parsed.file);

  if (shebang) {
    parsed.args.unshift(parsed.file);
    parsed.command = shebang;
    return resolveCommand(parsed);
  }

  return parsed.file;
}

function parseNonShell(parsed) {
  if (!isWin) {
    return parsed;
  } // Detect & add support for shebangs


  var commandFile = detectShebang(parsed); // We don't need a shell if the command filename is an executable

  var needsShell = !isExecutableRegExp.test(commandFile); // If a shell is required, use cmd.exe and take care of escaping everything correctly
  // Note that `forceShell` is an hidden option used only in tests

  if (parsed.options.forceShell || needsShell) {
    // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
    // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
    // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
    // we need to double escape them
    var needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile); // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
    // This is necessary otherwise it will always fail with ENOENT in those cases

    parsed.command = path.normalize(parsed.command); // Escape command & arguments

    parsed.command = escape.command(parsed.command);
    parsed.args = parsed.args.map(function (arg) {
      return escape.argument(arg, needsDoubleEscapeMetaChars);
    });
    var shellCommand = [parsed.command].concat(parsed.args).join(' ');
    parsed.args = ['/d', '/s', '/c', "\"".concat(shellCommand, "\"")];
    parsed.command = process.env.comspec || 'cmd.exe';
    parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
  }

  return parsed;
}

function parse(command, args, options) {
  // Normalize arguments, similar to nodejs
  if (args && !Array.isArray(args)) {
    options = args;
    args = null;
  }

  args = args ? args.slice(0) : []; // Clone array to avoid changing the original

  options = Object.assign({}, options); // Clone object to avoid changing the original
  // Build our parsed object

  var parsed = {
    command: command,
    args: args,
    options: options,
    file: undefined,
    original: {
      command: command,
      args: args
    }
  }; // Delegate further parsing to shell or non-shell

  return options.shell ? parsed : parseNonShell(parsed);
}

module.exports = parse;

/***/ }),

/***/ 5354:
/***/ ((module) => {

"use strict";
 // See http://www.robvanderwoude.com/escapechars.php

var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;

function escapeCommand(arg) {
  // Escape meta chars
  arg = arg.replace(metaCharsRegExp, '^$1');
  return arg;
}

function escapeArgument(arg, doubleEscapeMetaChars) {
  // Convert to string
  arg = "".concat(arg); // Algorithm below is based on https://qntm.org/cmd
  // Sequence of backslashes followed by a double quote:
  // double up all the backslashes and escape the double quote

  arg = arg.replace(/(\\*)"/g, '$1$1\\"'); // Sequence of backslashes followed by the end of the string
  // (which will become a double quote later):
  // double up all the backslashes

  arg = arg.replace(/(\\*)$/, '$1$1'); // All other backslashes occur literally
  // Quote the whole thing:

  arg = "\"".concat(arg, "\""); // Escape meta chars

  arg = arg.replace(metaCharsRegExp, '^$1'); // Double escape meta chars if necessary

  if (doubleEscapeMetaChars) {
    arg = arg.replace(metaCharsRegExp, '^$1');
  }

  return arg;
}

module.exports.command = escapeCommand;
module.exports.argument = escapeArgument;

/***/ }),

/***/ 7439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fs = __webpack_require__(7147);

var shebangCommand = __webpack_require__(950);

function readShebang(command) {
  // Read the first 150 bytes from the file
  var size = 150;
  var buffer = Buffer.alloc(size);
  var fd;

  try {
    fd = fs.openSync(command, 'r');
    fs.readSync(fd, buffer, 0, size, 0);
    fs.closeSync(fd);
  } catch (e) {
    /* Empty */
  } // Attempt to extract shebang (null is returned if not a shebang)


  return shebangCommand(buffer.toString());
}

module.exports = readShebang;

/***/ }),

/***/ 2040:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var path = __webpack_require__(1017);

var which = __webpack_require__(4407);

var getPathKey = __webpack_require__(2645);

function resolveCommandAttempt(parsed, withoutPathExt) {
  var env = parsed.options.env || process.env;
  var cwd = process.cwd();
  var hasCustomCwd = parsed.options.cwd != null; // Worker threads do not have process.chdir()

  var shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled; // If a custom `cwd` was specified, we need to change the process cwd
  // because `which` will do stat calls but does not support a custom cwd

  if (shouldSwitchCwd) {
    try {
      process.chdir(parsed.options.cwd);
    } catch (err) {
      /* Empty */
    }
  }

  var resolved;

  try {
    resolved = which.sync(parsed.command, {
      path: env[getPathKey({
        env: env
      })],
      pathExt: withoutPathExt ? path.delimiter : undefined
    });
  } catch (e) {
    /* Empty */
  } finally {
    if (shouldSwitchCwd) {
      process.chdir(cwd);
    }
  } // If we successfully resolved, ensure that an absolute path is returned
  // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it


  if (resolved) {
    resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
  }

  return resolved;
}

function resolveCommand(parsed) {
  return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}

module.exports = resolveCommand;

/***/ }),

/***/ 6246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

var _asyncToGenerator = (__webpack_require__(411)["default"]);

var taskManager = __webpack_require__(3450);

var patternManager = __webpack_require__(9722);

var async_1 = __webpack_require__(2);

var stream_1 = __webpack_require__(8951);

var sync_1 = __webpack_require__(1337);

var settings_1 = __webpack_require__(5295);

var utils = __webpack_require__(499);

function FastGlob(_x, _x2) {
  return _FastGlob.apply(this, arguments);
} // https://github.com/typescript-eslint/typescript-eslint/issues/60
// eslint-disable-next-line no-redeclare


function _FastGlob() {
  _FastGlob = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(source, options) {
    var works, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            assertPatternsInput(source);
            works = getWorks(source, async_1["default"], options);
            _context.next = 4;
            return Promise.all(works);

          case 4:
            result = _context.sent;
            return _context.abrupt("return", utils.array.flatten(result));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _FastGlob.apply(this, arguments);
}

(function (FastGlob) {
  function sync(source, options) {
    assertPatternsInput(source);
    var works = getWorks(source, sync_1["default"], options);
    return utils.array.flatten(works);
  }

  FastGlob.sync = sync;

  function stream(source, options) {
    assertPatternsInput(source);
    var works = getWorks(source, stream_1["default"], options);
    /**
     * The stream returned by the provider cannot work with an asynchronous iterator.
     * To support asynchronous iterators, regardless of the number of tasks, we always multiplex streams.
     * This affects performance (+25%). I don't see best solution right now.
     */

    return utils.stream.merge(works);
  }

  FastGlob.stream = stream;

  function generateTasks(source, options) {
    assertPatternsInput(source);
    var patterns = patternManager.transform([].concat(source));
    var settings = new settings_1["default"](options);
    return taskManager.generate(patterns, settings);
  }

  FastGlob.generateTasks = generateTasks;

  function isDynamicPattern(source, options) {
    assertPatternsInput(source);
    var settings = new settings_1["default"](options);
    return utils.pattern.isDynamicPattern(source, settings);
  }

  FastGlob.isDynamicPattern = isDynamicPattern;

  function escapePath(source) {
    assertPatternsInput(source);
    return utils.path.escape(source);
  }

  FastGlob.escapePath = escapePath;
})(FastGlob || (FastGlob = {}));

function getWorks(source, _Provider, options) {
  var patterns = patternManager.transform([].concat(source));
  var settings = new settings_1["default"](options);
  var tasks = taskManager.generate(patterns, settings);
  var provider = new _Provider(settings);
  return tasks.map(provider.read, provider);
}

function assertPatternsInput(input) {
  var source = [].concat(input);
  var isValidSource = source.every(function (item) {
    return utils.string.isString(item) && !utils.string.isEmpty(item);
  });

  if (!isValidSource) {
    throw new TypeError('Patterns must be a string (non empty) or an array of strings');
  }
}

module.exports = FastGlob;

/***/ }),

/***/ 9722:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeDuplicateSlashes = exports.transform = void 0;
/**
 * Matches a sequence of two or more consecutive slashes, excluding the first two slashes at the beginning of the string.
 * The latter is due to the presence of the device path at the beginning of the UNC path.
 * @todo rewrite to negative lookbehind with the next major release.
 */

var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;

function transform(patterns) {
  return patterns.map(function (pattern) {
    return removeDuplicateSlashes(pattern);
  });
}

exports.transform = transform;
/**
 * This package only works with forward slashes as a path separator.
 * Because of this, we cannot use the standard `path.normalize` method, because on Windows platform it will use of backslashes.
 */

function removeDuplicateSlashes(pattern) {
  return pattern.replace(DOUBLE_SLASH_RE, '/');
}

exports.removeDuplicateSlashes = removeDuplicateSlashes;

/***/ }),

/***/ 3450:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _toConsumableArray = (__webpack_require__(4434)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;

var utils = __webpack_require__(499);

function generate(patterns, settings) {
  var positivePatterns = getPositivePatterns(patterns);
  var negativePatterns = getNegativePatternsAsPositive(patterns, settings.ignore);
  var staticPatterns = positivePatterns.filter(function (pattern) {
    return utils.pattern.isStaticPattern(pattern, settings);
  });
  var dynamicPatterns = positivePatterns.filter(function (pattern) {
    return utils.pattern.isDynamicPattern(pattern, settings);
  });
  var staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns,
  /* dynamic */
  false);
  var dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns,
  /* dynamic */
  true);
  return staticTasks.concat(dynamicTasks);
}

exports.generate = generate;
/**
 * Returns tasks grouped by basic pattern directories.
 *
 * Patterns that can be found inside (`./`) and outside (`../`) the current directory are handled separately.
 * This is necessary because directory traversal starts at the base directory and goes deeper.
 */

function convertPatternsToTasks(positive, negative, dynamic) {
  var tasks = [];
  var patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
  var patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
  var outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
  var insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
  tasks.push.apply(tasks, _toConsumableArray(convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic)));
  /*
   * For the sake of reducing future accesses to the file system, we merge all tasks within the current directory
   * into a global task, if at least one pattern refers to the root (`.`). In this case, the global task covers the rest.
   */

  if ('.' in insideCurrentDirectoryGroup) {
    tasks.push(convertPatternGroupToTask('.', patternsInsideCurrentDirectory, negative, dynamic));
  } else {
    tasks.push.apply(tasks, _toConsumableArray(convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic)));
  }

  return tasks;
}

exports.convertPatternsToTasks = convertPatternsToTasks;

function getPositivePatterns(patterns) {
  return utils.pattern.getPositivePatterns(patterns);
}

exports.getPositivePatterns = getPositivePatterns;

function getNegativePatternsAsPositive(patterns, ignore) {
  var negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
  var positive = negative.map(utils.pattern.convertToPositivePattern);
  return positive;
}

exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;

function groupPatternsByBaseDirectory(patterns) {
  var group = {};
  return patterns.reduce(function (collection, pattern) {
    var base = utils.pattern.getBaseDirectory(pattern);

    if (base in collection) {
      collection[base].push(pattern);
    } else {
      collection[base] = [pattern];
    }

    return collection;
  }, group);
}

exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;

function convertPatternGroupsToTasks(positive, negative, dynamic) {
  return Object.keys(positive).map(function (base) {
    return convertPatternGroupToTask(base, positive[base], negative, dynamic);
  });
}

exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;

function convertPatternGroupToTask(base, positive, negative, dynamic) {
  return {
    dynamic: dynamic,
    positive: positive,
    negative: negative,
    base: base,
    patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
  };
}

exports.convertPatternGroupToTask = convertPatternGroupToTask;

/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var stream_1 = __webpack_require__(7078);

var provider_1 = __webpack_require__(8025);

var ProviderAsync = /*#__PURE__*/function (_provider_1$default) {
  _inherits(ProviderAsync, _provider_1$default);

  var _super = _createSuper(ProviderAsync);

  function ProviderAsync() {
    var _this;

    _classCallCheck(this, ProviderAsync);

    _this = _super.apply(this, arguments);
    _this._reader = new stream_1["default"](_this._settings);
    return _this;
  }

  _createClass(ProviderAsync, [{
    key: "read",
    value: function read(task) {
      var _this2 = this;

      var root = this._getRootDirectory(task);

      var options = this._getReaderOptions(task);

      var entries = [];
      return new Promise(function (resolve, reject) {
        var stream = _this2.api(root, task, options);

        stream.once('error', reject);
        stream.on('data', function (entry) {
          return entries.push(options.transform(entry));
        });
        stream.once('end', function () {
          return resolve(entries);
        });
      });
    }
  }, {
    key: "api",
    value: function api(root, task, options) {
      if (task.dynamic) {
        return this._reader.dynamic(root, options);
      }

      return this._reader["static"](task.patterns, options);
    }
  }]);

  return ProviderAsync;
}(provider_1["default"]);

exports["default"] = ProviderAsync;

/***/ }),

/***/ 8475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var utils = __webpack_require__(499);

var partial_1 = __webpack_require__(1575);

var DeepFilter = /*#__PURE__*/function () {
  function DeepFilter(_settings, _micromatchOptions) {
    _classCallCheck(this, DeepFilter);

    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
  }

  _createClass(DeepFilter, [{
    key: "getFilter",
    value: function getFilter(basePath, positive, negative) {
      var _this = this;

      var matcher = this._getMatcher(positive);

      var negativeRe = this._getNegativePatternsRe(negative);

      return function (entry) {
        return _this._filter(basePath, entry, matcher, negativeRe);
      };
    }
  }, {
    key: "_getMatcher",
    value: function _getMatcher(patterns) {
      return new partial_1["default"](patterns, this._settings, this._micromatchOptions);
    }
  }, {
    key: "_getNegativePatternsRe",
    value: function _getNegativePatternsRe(patterns) {
      var affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
      return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
    }
  }, {
    key: "_filter",
    value: function _filter(basePath, entry, matcher, negativeRe) {
      if (this._isSkippedByDeep(basePath, entry.path)) {
        return false;
      }

      if (this._isSkippedSymbolicLink(entry)) {
        return false;
      }

      var filepath = utils.path.removeLeadingDotSegment(entry.path);

      if (this._isSkippedByPositivePatterns(filepath, matcher)) {
        return false;
      }

      return this._isSkippedByNegativePatterns(filepath, negativeRe);
    }
  }, {
    key: "_isSkippedByDeep",
    value: function _isSkippedByDeep(basePath, entryPath) {
      /**
       * Avoid unnecessary depth calculations when it doesn't matter.
       */
      if (this._settings.deep === Infinity) {
        return false;
      }

      return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
    }
  }, {
    key: "_getEntryLevel",
    value: function _getEntryLevel(basePath, entryPath) {
      var entryPathDepth = entryPath.split('/').length;

      if (basePath === '') {
        return entryPathDepth;
      }

      var basePathDepth = basePath.split('/').length;
      return entryPathDepth - basePathDepth;
    }
  }, {
    key: "_isSkippedSymbolicLink",
    value: function _isSkippedSymbolicLink(entry) {
      return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
    }
  }, {
    key: "_isSkippedByPositivePatterns",
    value: function _isSkippedByPositivePatterns(entryPath, matcher) {
      return !this._settings.baseNameMatch && !matcher.match(entryPath);
    }
  }, {
    key: "_isSkippedByNegativePatterns",
    value: function _isSkippedByNegativePatterns(entryPath, patternsRe) {
      return !utils.pattern.matchAny(entryPath, patternsRe);
    }
  }]);

  return DeepFilter;
}();

exports["default"] = DeepFilter;

/***/ }),

/***/ 625:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var utils = __webpack_require__(499);

var EntryFilter = /*#__PURE__*/function () {
  function EntryFilter(_settings, _micromatchOptions) {
    _classCallCheck(this, EntryFilter);

    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
    this.index = new Map();
  }

  _createClass(EntryFilter, [{
    key: "getFilter",
    value: function getFilter(positive, negative) {
      var _this = this;

      var positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
      var negativeRe = utils.pattern.convertPatternsToRe(negative, this._micromatchOptions);
      return function (entry) {
        return _this._filter(entry, positiveRe, negativeRe);
      };
    }
  }, {
    key: "_filter",
    value: function _filter(entry, positiveRe, negativeRe) {
      if (this._settings.unique && this._isDuplicateEntry(entry)) {
        return false;
      }

      if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
        return false;
      }

      if (this._isSkippedByAbsoluteNegativePatterns(entry.path, negativeRe)) {
        return false;
      }

      var filepath = this._settings.baseNameMatch ? entry.name : entry.path;
      var isMatched = this._isMatchToPatterns(filepath, positiveRe) && !this._isMatchToPatterns(entry.path, negativeRe);

      if (this._settings.unique && isMatched) {
        this._createIndexRecord(entry);
      }

      return isMatched;
    }
  }, {
    key: "_isDuplicateEntry",
    value: function _isDuplicateEntry(entry) {
      return this.index.has(entry.path);
    }
  }, {
    key: "_createIndexRecord",
    value: function _createIndexRecord(entry) {
      this.index.set(entry.path, undefined);
    }
  }, {
    key: "_onlyFileFilter",
    value: function _onlyFileFilter(entry) {
      return this._settings.onlyFiles && !entry.dirent.isFile();
    }
  }, {
    key: "_onlyDirectoryFilter",
    value: function _onlyDirectoryFilter(entry) {
      return this._settings.onlyDirectories && !entry.dirent.isDirectory();
    }
  }, {
    key: "_isSkippedByAbsoluteNegativePatterns",
    value: function _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
      if (!this._settings.absolute) {
        return false;
      }

      var fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
      return utils.pattern.matchAny(fullpath, patternsRe);
    }
    /**
     * First, just trying to apply patterns to the path.
     * Second, trying to apply patterns to the path with final slash.
     */

  }, {
    key: "_isMatchToPatterns",
    value: function _isMatchToPatterns(entryPath, patternsRe) {
      var filepath = utils.path.removeLeadingDotSegment(entryPath);
      return utils.pattern.matchAny(filepath, patternsRe) || utils.pattern.matchAny(filepath + '/', patternsRe);
    }
  }]);

  return EntryFilter;
}();

exports["default"] = EntryFilter;

/***/ }),

/***/ 4776:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var utils = __webpack_require__(499);

var ErrorFilter = /*#__PURE__*/function () {
  function ErrorFilter(_settings) {
    _classCallCheck(this, ErrorFilter);

    this._settings = _settings;
  }

  _createClass(ErrorFilter, [{
    key: "getFilter",
    value: function getFilter() {
      var _this = this;

      return function (error) {
        return _this._isNonFatalError(error);
      };
    }
  }, {
    key: "_isNonFatalError",
    value: function _isNonFatalError(error) {
      return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
    }
  }]);

  return ErrorFilter;
}();

exports["default"] = ErrorFilter;

/***/ }),

/***/ 7793:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var utils = __webpack_require__(499);

var Matcher = /*#__PURE__*/function () {
  function Matcher(_patterns, _settings, _micromatchOptions) {
    _classCallCheck(this, Matcher);

    this._patterns = _patterns;
    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
    this._storage = [];

    this._fillStorage();
  }

  _createClass(Matcher, [{
    key: "_fillStorage",
    value: function _fillStorage() {
      /**
       * The original pattern may include `{,*,**,a/*}`, which will lead to problems with matching (unresolved level).
       * So, before expand patterns with brace expansion into separated patterns.
       */
      var patterns = utils.pattern.expandPatternsWithBraceExpansion(this._patterns);

      var _iterator = _createForOfIteratorHelper(patterns),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pattern = _step.value;

          var segments = this._getPatternSegments(pattern);

          var sections = this._splitSegmentsIntoSections(segments);

          this._storage.push({
            complete: sections.length <= 1,
            pattern: pattern,
            segments: segments,
            sections: sections
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_getPatternSegments",
    value: function _getPatternSegments(pattern) {
      var _this = this;

      var parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
      return parts.map(function (part) {
        var dynamic = utils.pattern.isDynamicPattern(part, _this._settings);

        if (!dynamic) {
          return {
            dynamic: false,
            pattern: part
          };
        }

        return {
          dynamic: true,
          pattern: part,
          patternRe: utils.pattern.makeRe(part, _this._micromatchOptions)
        };
      });
    }
  }, {
    key: "_splitSegmentsIntoSections",
    value: function _splitSegmentsIntoSections(segments) {
      return utils.array.splitWhen(segments, function (segment) {
        return segment.dynamic && utils.pattern.hasGlobStar(segment.pattern);
      });
    }
  }]);

  return Matcher;
}();

exports["default"] = Matcher;

/***/ }),

/***/ 1575:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var matcher_1 = __webpack_require__(7793);

var PartialMatcher = /*#__PURE__*/function (_matcher_1$default) {
  _inherits(PartialMatcher, _matcher_1$default);

  var _super = _createSuper(PartialMatcher);

  function PartialMatcher() {
    _classCallCheck(this, PartialMatcher);

    return _super.apply(this, arguments);
  }

  _createClass(PartialMatcher, [{
    key: "match",
    value: function match(filepath) {
      var parts = filepath.split('/');
      var levels = parts.length;

      var patterns = this._storage.filter(function (info) {
        return !info.complete || info.segments.length > levels;
      });

      var _iterator = _createForOfIteratorHelper(patterns),
          _step;

      try {
        var _loop = function _loop() {
          var pattern = _step.value;
          var section = pattern.sections[0];
          /**
           * In this case, the pattern has a globstar and we must read all directories unconditionally,
           * but only if the level has reached the end of the first group.
           *
           * fixtures/{a,b}/**
           *  ^ true/false  ^ always true
          */

          if (!pattern.complete && levels > section.length) {
            return {
              v: true
            };
          }

          var match = parts.every(function (part, index) {
            var segment = pattern.segments[index];

            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }

            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }

            return false;
          });

          if (match) {
            return {
              v: true
            };
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (typeof _ret === "object") return _ret.v;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }]);

  return PartialMatcher;
}(matcher_1["default"]);

exports["default"] = PartialMatcher;

/***/ }),

/***/ 8025:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var path = __webpack_require__(1017);

var deep_1 = __webpack_require__(8475);

var entry_1 = __webpack_require__(625);

var error_1 = __webpack_require__(4776);

var entry_2 = __webpack_require__(6845);

var Provider = /*#__PURE__*/function () {
  function Provider(_settings) {
    _classCallCheck(this, Provider);

    this._settings = _settings;
    this.errorFilter = new error_1["default"](this._settings);
    this.entryFilter = new entry_1["default"](this._settings, this._getMicromatchOptions());
    this.deepFilter = new deep_1["default"](this._settings, this._getMicromatchOptions());
    this.entryTransformer = new entry_2["default"](this._settings);
  }

  _createClass(Provider, [{
    key: "_getRootDirectory",
    value: function _getRootDirectory(task) {
      return path.resolve(this._settings.cwd, task.base);
    }
  }, {
    key: "_getReaderOptions",
    value: function _getReaderOptions(task) {
      var basePath = task.base === '.' ? '' : task.base;
      return {
        basePath: basePath,
        pathSegmentSeparator: '/',
        concurrency: this._settings.concurrency,
        deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
        entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
        errorFilter: this.errorFilter.getFilter(),
        followSymbolicLinks: this._settings.followSymbolicLinks,
        fs: this._settings.fs,
        stats: this._settings.stats,
        throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
        transform: this.entryTransformer.getTransformer()
      };
    }
  }, {
    key: "_getMicromatchOptions",
    value: function _getMicromatchOptions() {
      return {
        dot: this._settings.dot,
        matchBase: this._settings.baseNameMatch,
        nobrace: !this._settings.braceExpansion,
        nocase: !this._settings.caseSensitiveMatch,
        noext: !this._settings.extglob,
        noglobstar: !this._settings.globstar,
        posix: true,
        strictSlashes: false
      };
    }
  }]);

  return Provider;
}();

exports["default"] = Provider;

/***/ }),

/***/ 8951:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var stream_1 = __webpack_require__(2781);

var stream_2 = __webpack_require__(7078);

var provider_1 = __webpack_require__(8025);

var ProviderStream = /*#__PURE__*/function (_provider_1$default) {
  _inherits(ProviderStream, _provider_1$default);

  var _super = _createSuper(ProviderStream);

  function ProviderStream() {
    var _this;

    _classCallCheck(this, ProviderStream);

    _this = _super.apply(this, arguments);
    _this._reader = new stream_2["default"](_this._settings);
    return _this;
  }

  _createClass(ProviderStream, [{
    key: "read",
    value: function read(task) {
      var root = this._getRootDirectory(task);

      var options = this._getReaderOptions(task);

      var source = this.api(root, task, options);
      var destination = new stream_1.Readable({
        objectMode: true,
        read: function read() {}
      });
      source.once('error', function (error) {
        return destination.emit('error', error);
      }).on('data', function (entry) {
        return destination.emit('data', options.transform(entry));
      }).once('end', function () {
        return destination.emit('end');
      });
      destination.once('close', function () {
        return source.destroy();
      });
      return destination;
    }
  }, {
    key: "api",
    value: function api(root, task, options) {
      if (task.dynamic) {
        return this._reader.dynamic(root, options);
      }

      return this._reader["static"](task.patterns, options);
    }
  }]);

  return ProviderStream;
}(provider_1["default"]);

exports["default"] = ProviderStream;

/***/ }),

/***/ 1337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var sync_1 = __webpack_require__(4889);

var provider_1 = __webpack_require__(8025);

var ProviderSync = /*#__PURE__*/function (_provider_1$default) {
  _inherits(ProviderSync, _provider_1$default);

  var _super = _createSuper(ProviderSync);

  function ProviderSync() {
    var _this;

    _classCallCheck(this, ProviderSync);

    _this = _super.apply(this, arguments);
    _this._reader = new sync_1["default"](_this._settings);
    return _this;
  }

  _createClass(ProviderSync, [{
    key: "read",
    value: function read(task) {
      var root = this._getRootDirectory(task);

      var options = this._getReaderOptions(task);

      var entries = this.api(root, task, options);
      return entries.map(options.transform);
    }
  }, {
    key: "api",
    value: function api(root, task, options) {
      if (task.dynamic) {
        return this._reader.dynamic(root, options);
      }

      return this._reader["static"](task.patterns, options);
    }
  }]);

  return ProviderSync;
}(provider_1["default"]);

exports["default"] = ProviderSync;

/***/ }),

/***/ 6845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var utils = __webpack_require__(499);

var EntryTransformer = /*#__PURE__*/function () {
  function EntryTransformer(_settings) {
    _classCallCheck(this, EntryTransformer);

    this._settings = _settings;
  }

  _createClass(EntryTransformer, [{
    key: "getTransformer",
    value: function getTransformer() {
      var _this = this;

      return function (entry) {
        return _this._transform(entry);
      };
    }
  }, {
    key: "_transform",
    value: function _transform(entry) {
      var filepath = entry.path;

      if (this._settings.absolute) {
        filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
        filepath = utils.path.unixify(filepath);
      }

      if (this._settings.markDirectories && entry.dirent.isDirectory()) {
        filepath += '/';
      }

      if (!this._settings.objectMode) {
        return filepath;
      }

      return Object.assign(Object.assign({}, entry), {
        path: filepath
      });
    }
  }]);

  return EntryTransformer;
}();

exports["default"] = EntryTransformer;

/***/ }),

/***/ 4375:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var path = __webpack_require__(1017);

var fsStat = __webpack_require__(1440);

var utils = __webpack_require__(499);

var Reader = /*#__PURE__*/function () {
  function Reader(_settings) {
    _classCallCheck(this, Reader);

    this._settings = _settings;
    this._fsStatSettings = new fsStat.Settings({
      followSymbolicLink: this._settings.followSymbolicLinks,
      fs: this._settings.fs,
      throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
    });
  }

  _createClass(Reader, [{
    key: "_getFullEntryPath",
    value: function _getFullEntryPath(filepath) {
      return path.resolve(this._settings.cwd, filepath);
    }
  }, {
    key: "_makeEntry",
    value: function _makeEntry(stats, pattern) {
      var entry = {
        name: pattern,
        path: pattern,
        dirent: utils.fs.createDirentFromStats(pattern, stats)
      };

      if (this._settings.stats) {
        entry.stats = stats;
      }

      return entry;
    }
  }, {
    key: "_isFatalError",
    value: function _isFatalError(error) {
      return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
    }
  }]);

  return Reader;
}();

exports["default"] = Reader;

/***/ }),

/***/ 7078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var stream_1 = __webpack_require__(2781);

var fsStat = __webpack_require__(1440);

var fsWalk = __webpack_require__(5110);

var reader_1 = __webpack_require__(4375);

var ReaderStream = /*#__PURE__*/function (_reader_1$default) {
  _inherits(ReaderStream, _reader_1$default);

  var _super = _createSuper(ReaderStream);

  function ReaderStream() {
    var _this;

    _classCallCheck(this, ReaderStream);

    _this = _super.apply(this, arguments);
    _this._walkStream = fsWalk.walkStream;
    _this._stat = fsStat.stat;
    return _this;
  }

  _createClass(ReaderStream, [{
    key: "dynamic",
    value: function dynamic(root, options) {
      return this._walkStream(root, options);
    }
  }, {
    key: "static",
    value: function _static(patterns, options) {
      var _this2 = this;

      var filepaths = patterns.map(this._getFullEntryPath, this);
      var stream = new stream_1.PassThrough({
        objectMode: true
      });

      stream._write = function (index, _enc, done) {
        return _this2._getEntry(filepaths[index], patterns[index], options).then(function (entry) {
          if (entry !== null && options.entryFilter(entry)) {
            stream.push(entry);
          }

          if (index === filepaths.length - 1) {
            stream.end();
          }

          done();
        })["catch"](done);
      };

      for (var i = 0; i < filepaths.length; i++) {
        stream.write(i);
      }

      return stream;
    }
  }, {
    key: "_getEntry",
    value: function _getEntry(filepath, pattern, options) {
      var _this3 = this;

      return this._getStat(filepath).then(function (stats) {
        return _this3._makeEntry(stats, pattern);
      })["catch"](function (error) {
        if (options.errorFilter(error)) {
          return null;
        }

        throw error;
      });
    }
  }, {
    key: "_getStat",
    value: function _getStat(filepath) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4._stat(filepath, _this4._fsStatSettings, function (error, stats) {
          return error === null ? resolve(stats) : reject(error);
        });
      });
    }
  }]);

  return ReaderStream;
}(reader_1["default"]);

exports["default"] = ReaderStream;

/***/ }),

/***/ 4889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var _inherits = (__webpack_require__(6779)["default"]);

var _createSuper = (__webpack_require__(6332)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var fsStat = __webpack_require__(1440);

var fsWalk = __webpack_require__(5110);

var reader_1 = __webpack_require__(4375);

var ReaderSync = /*#__PURE__*/function (_reader_1$default) {
  _inherits(ReaderSync, _reader_1$default);

  var _super = _createSuper(ReaderSync);

  function ReaderSync() {
    var _this;

    _classCallCheck(this, ReaderSync);

    _this = _super.apply(this, arguments);
    _this._walkSync = fsWalk.walkSync;
    _this._statSync = fsStat.statSync;
    return _this;
  }

  _createClass(ReaderSync, [{
    key: "dynamic",
    value: function dynamic(root, options) {
      return this._walkSync(root, options);
    }
  }, {
    key: "static",
    value: function _static(patterns, options) {
      var entries = [];

      var _iterator = _createForOfIteratorHelper(patterns),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pattern = _step.value;

          var filepath = this._getFullEntryPath(pattern);

          var entry = this._getEntry(filepath, pattern, options);

          if (entry === null || !options.entryFilter(entry)) {
            continue;
          }

          entries.push(entry);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return entries;
    }
  }, {
    key: "_getEntry",
    value: function _getEntry(filepath, pattern, options) {
      try {
        var stats = this._getStat(filepath);

        return this._makeEntry(stats, pattern);
      } catch (error) {
        if (options.errorFilter(error)) {
          return null;
        }

        throw error;
      }
    }
  }, {
    key: "_getStat",
    value: function _getStat(filepath) {
      return this._statSync(filepath, this._fsStatSettings);
    }
  }]);

  return ReaderSync;
}(reader_1["default"]);

exports["default"] = ReaderSync;

/***/ }),

/***/ 5295:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;

var fs = __webpack_require__(7147);

var os = __webpack_require__(2037);
/**
 * The `os.cpus` method can return zero. We expect the number of cores to be greater than zero.
 * https://github.com/nodejs/node/blob/7faeddf23a98c53896f8b574a6e66589e8fb1eb8/lib/os.js#L106-L107
 */


var CPU_COUNT = Math.max(os.cpus().length, 1);
exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
  lstat: fs.lstat,
  lstatSync: fs.lstatSync,
  stat: fs.stat,
  statSync: fs.statSync,
  readdir: fs.readdir,
  readdirSync: fs.readdirSync
};

var Settings = /*#__PURE__*/function () {
  function Settings() {
    var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Settings);

    this._options = _options;
    this.absolute = this._getValue(this._options.absolute, false);
    this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
    this.braceExpansion = this._getValue(this._options.braceExpansion, true);
    this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
    this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
    this.cwd = this._getValue(this._options.cwd, process.cwd());
    this.deep = this._getValue(this._options.deep, Infinity);
    this.dot = this._getValue(this._options.dot, false);
    this.extglob = this._getValue(this._options.extglob, true);
    this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
    this.fs = this._getFileSystemMethods(this._options.fs);
    this.globstar = this._getValue(this._options.globstar, true);
    this.ignore = this._getValue(this._options.ignore, []);
    this.markDirectories = this._getValue(this._options.markDirectories, false);
    this.objectMode = this._getValue(this._options.objectMode, false);
    this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
    this.onlyFiles = this._getValue(this._options.onlyFiles, true);
    this.stats = this._getValue(this._options.stats, false);
    this.suppressErrors = this._getValue(this._options.suppressErrors, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
    this.unique = this._getValue(this._options.unique, true);

    if (this.onlyDirectories) {
      this.onlyFiles = false;
    }

    if (this.stats) {
      this.objectMode = true;
    }
  }

  _createClass(Settings, [{
    key: "_getValue",
    value: function _getValue(option, value) {
      return option === undefined ? value : option;
    }
  }, {
    key: "_getFileSystemMethods",
    value: function _getFileSystemMethods() {
      var methods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
    }
  }]);

  return Settings;
}();

exports["default"] = Settings;

/***/ }),

/***/ 1962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.splitWhen = exports.flatten = void 0;

function flatten(items) {
  return items.reduce(function (collection, item) {
    return [].concat(collection, item);
  }, []);
}

exports.flatten = flatten;

function splitWhen(items, predicate) {
  var result = [[]];
  var groupIndex = 0;

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (predicate(item)) {
        groupIndex++;
        result[groupIndex] = [];
      } else {
        result[groupIndex].push(item);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

exports.splitWhen = splitWhen;

/***/ }),

/***/ 1554:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isEnoentCodeError = void 0;

function isEnoentCodeError(error) {
  return error.code === 'ENOENT';
}

exports.isEnoentCodeError = isEnoentCodeError;

/***/ }),

/***/ 1173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createClass = (__webpack_require__(8482)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createDirentFromStats = void 0;

var DirentFromStats = /*#__PURE__*/_createClass(function DirentFromStats(name, stats) {
  _classCallCheck(this, DirentFromStats);

  this.name = name;
  this.isBlockDevice = stats.isBlockDevice.bind(stats);
  this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
  this.isDirectory = stats.isDirectory.bind(stats);
  this.isFIFO = stats.isFIFO.bind(stats);
  this.isFile = stats.isFile.bind(stats);
  this.isSocket = stats.isSocket.bind(stats);
  this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
});

function createDirentFromStats(name, stats) {
  return new DirentFromStats(name, stats);
}

exports.createDirentFromStats = createDirentFromStats;

/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;

var array = __webpack_require__(1962);

exports.array = array;

var errno = __webpack_require__(1554);

exports.errno = errno;

var fs = __webpack_require__(1173);

exports.fs = fs;

var path = __webpack_require__(6344);

exports.path = path;

var pattern = __webpack_require__(330);

exports.pattern = pattern;

var stream = __webpack_require__(2634);

exports.stream = stream;

var string = __webpack_require__(7540);

exports.string = string;

/***/ }),

/***/ 6344:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeLeadingDotSegment = exports.escape = exports.makeAbsolute = exports.unixify = void 0;

var path = __webpack_require__(1017);

var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2; // ./ or .\\

var UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
/**
 * Designed to work only with simple paths: `dir\\file`.
 */

function unixify(filepath) {
  return filepath.replace(/\\/g, '/');
}

exports.unixify = unixify;

function makeAbsolute(cwd, filepath) {
  return path.resolve(cwd, filepath);
}

exports.makeAbsolute = makeAbsolute;

function escape(pattern) {
  return pattern.replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
}

exports.escape = escape;

function removeLeadingDotSegment(entry) {
  // We do not use `startsWith` because this is 10x slower than current implementation for some cases.
  // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
  if (entry.charAt(0) === '.') {
    var secondCharactery = entry.charAt(1);

    if (secondCharactery === '/' || secondCharactery === '\\') {
      return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
    }
  }

  return entry;
}

exports.removeLeadingDotSegment = removeLeadingDotSegment;

/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;

var path = __webpack_require__(1017);

var globParent = __webpack_require__(9511);

var micromatch = __webpack_require__(9356);

var GLOBSTAR = '**';
var ESCAPE_SYMBOL = '\\';
var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;

function isStaticPattern(pattern) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return !isDynamicPattern(pattern, options);
}

exports.isStaticPattern = isStaticPattern;

function isDynamicPattern(pattern) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /**
   * A special case with an empty string is necessary for matching patterns that start with a forward slash.
   * An empty string cannot be a dynamic pattern.
   * For example, the pattern `/lib/*` will be spread into parts: '', 'lib', '*'.
   */
  if (pattern === '') {
    return false;
  }
  /**
   * When the `caseSensitiveMatch` option is disabled, all patterns must be marked as dynamic, because we cannot check
   * filepath directly (without read directory).
   */


  if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
    return true;
  }

  if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
    return true;
  }

  if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
    return true;
  }

  if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
    return true;
  }

  return false;
}

exports.isDynamicPattern = isDynamicPattern;

function hasBraceExpansion(pattern) {
  var openingBraceIndex = pattern.indexOf('{');

  if (openingBraceIndex === -1) {
    return false;
  }

  var closingBraceIndex = pattern.indexOf('}', openingBraceIndex + 1);

  if (closingBraceIndex === -1) {
    return false;
  }

  var braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
  return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
}

function convertToPositivePattern(pattern) {
  return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
}

exports.convertToPositivePattern = convertToPositivePattern;

function convertToNegativePattern(pattern) {
  return '!' + pattern;
}

exports.convertToNegativePattern = convertToNegativePattern;

function isNegativePattern(pattern) {
  return pattern.startsWith('!') && pattern[1] !== '(';
}

exports.isNegativePattern = isNegativePattern;

function isPositivePattern(pattern) {
  return !isNegativePattern(pattern);
}

exports.isPositivePattern = isPositivePattern;

function getNegativePatterns(patterns) {
  return patterns.filter(isNegativePattern);
}

exports.getNegativePatterns = getNegativePatterns;

function getPositivePatterns(patterns) {
  return patterns.filter(isPositivePattern);
}

exports.getPositivePatterns = getPositivePatterns;
/**
 * Returns patterns that can be applied inside the current directory.
 *
 * @example
 * // ['./*', '*', 'a/*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */

function getPatternsInsideCurrentDirectory(patterns) {
  return patterns.filter(function (pattern) {
    return !isPatternRelatedToParentDirectory(pattern);
  });
}

exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
/**
 * Returns patterns to be expanded relative to (outside) the current directory.
 *
 * @example
 * // ['../*', './../*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */

function getPatternsOutsideCurrentDirectory(patterns) {
  return patterns.filter(isPatternRelatedToParentDirectory);
}

exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;

function isPatternRelatedToParentDirectory(pattern) {
  return pattern.startsWith('..') || pattern.startsWith('./..');
}

exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;

function getBaseDirectory(pattern) {
  return globParent(pattern, {
    flipBackslashes: false
  });
}

exports.getBaseDirectory = getBaseDirectory;

function hasGlobStar(pattern) {
  return pattern.includes(GLOBSTAR);
}

exports.hasGlobStar = hasGlobStar;

function endsWithSlashGlobStar(pattern) {
  return pattern.endsWith('/' + GLOBSTAR);
}

exports.endsWithSlashGlobStar = endsWithSlashGlobStar;

function isAffectDepthOfReadingPattern(pattern) {
  var basename = path.basename(pattern);
  return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
}

exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;

function expandPatternsWithBraceExpansion(patterns) {
  return patterns.reduce(function (collection, pattern) {
    return collection.concat(expandBraceExpansion(pattern));
  }, []);
}

exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;

function expandBraceExpansion(pattern) {
  return micromatch.braces(pattern, {
    expand: true,
    nodupes: true
  });
}

exports.expandBraceExpansion = expandBraceExpansion;

function getPatternParts(pattern, options) {
  var _micromatch$scan = micromatch.scan(pattern, Object.assign(Object.assign({}, options), {
    parts: true
  })),
      parts = _micromatch$scan.parts;
  /**
   * The scan method returns an empty array in some cases.
   * See micromatch/picomatch#58 for more details.
   */


  if (parts.length === 0) {
    parts = [pattern];
  }
  /**
   * The scan method does not return an empty part for the pattern with a forward slash.
   * This is another part of micromatch/picomatch#58.
   */


  if (parts[0].startsWith('/')) {
    parts[0] = parts[0].slice(1);
    parts.unshift('');
  }

  return parts;
}

exports.getPatternParts = getPatternParts;

function makeRe(pattern, options) {
  return micromatch.makeRe(pattern, options);
}

exports.makeRe = makeRe;

function convertPatternsToRe(patterns, options) {
  return patterns.map(function (pattern) {
    return makeRe(pattern, options);
  });
}

exports.convertPatternsToRe = convertPatternsToRe;

function matchAny(entry, patternsRe) {
  return patternsRe.some(function (patternRe) {
    return patternRe.test(entry);
  });
}

exports.matchAny = matchAny;

/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.merge = void 0;

var merge2 = __webpack_require__(9978);

function merge(streams) {
  var mergedStream = merge2(streams);
  streams.forEach(function (stream) {
    stream.once('error', function (error) {
      return mergedStream.emit('error', error);
    });
  });
  mergedStream.once('close', function () {
    return propagateCloseEventToSources(streams);
  });
  mergedStream.once('end', function () {
    return propagateCloseEventToSources(streams);
  });
  return mergedStream;
}

exports.merge = merge;

function propagateCloseEventToSources(streams) {
  streams.forEach(function (stream) {
    return stream.emit('close');
  });
}

/***/ }),

/***/ 7540:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isEmpty = exports.isString = void 0;

function isString(input) {
  return typeof input === 'string';
}

exports.isString = isString;

function isEmpty(input) {
  return input === '';
}

exports.isEmpty = isEmpty;

/***/ }),

/***/ 610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-var */

var reusify = __webpack_require__(4157);

function fastqueue(context, worker, concurrency) {
  if (typeof context === 'function') {
    concurrency = worker;
    worker = context;
    context = null;
  }

  if (concurrency < 1) {
    throw new Error('fastqueue concurrency must be greater than 1');
  }

  var cache = reusify(Task);
  var queueHead = null;
  var queueTail = null;
  var _running = 0;
  var errorHandler = null;
  var self = {
    push: push,
    drain: noop,
    saturated: noop,
    pause: pause,
    paused: false,
    concurrency: concurrency,
    running: running,
    resume: resume,
    idle: idle,
    length: length,
    getQueue: getQueue,
    unshift: unshift,
    empty: noop,
    kill: kill,
    killAndDrain: killAndDrain,
    error: error
  };
  return self;

  function running() {
    return _running;
  }

  function pause() {
    self.paused = true;
  }

  function length() {
    var current = queueHead;
    var counter = 0;

    while (current) {
      current = current.next;
      counter++;
    }

    return counter;
  }

  function getQueue() {
    var current = queueHead;
    var tasks = [];

    while (current) {
      tasks.push(current.value);
      current = current.next;
    }

    return tasks;
  }

  function resume() {
    if (!self.paused) return;
    self.paused = false;

    for (var i = 0; i < self.concurrency; i++) {
      _running++;
      release();
    }
  }

  function idle() {
    return _running === 0 && self.length() === 0;
  }

  function push(value, done) {
    var current = cache.get();
    current.context = context;
    current.release = release;
    current.value = value;
    current.callback = done || noop;
    current.errorHandler = errorHandler;

    if (_running === self.concurrency || self.paused) {
      if (queueTail) {
        queueTail.next = current;
        queueTail = current;
      } else {
        queueHead = current;
        queueTail = current;
        self.saturated();
      }
    } else {
      _running++;
      worker.call(context, current.value, current.worked);
    }
  }

  function unshift(value, done) {
    var current = cache.get();
    current.context = context;
    current.release = release;
    current.value = value;
    current.callback = done || noop;

    if (_running === self.concurrency || self.paused) {
      if (queueHead) {
        current.next = queueHead;
        queueHead = current;
      } else {
        queueHead = current;
        queueTail = current;
        self.saturated();
      }
    } else {
      _running++;
      worker.call(context, current.value, current.worked);
    }
  }

  function release(holder) {
    if (holder) {
      cache.release(holder);
    }

    var next = queueHead;

    if (next) {
      if (!self.paused) {
        if (queueTail === queueHead) {
          queueTail = null;
        }

        queueHead = next.next;
        next.next = null;
        worker.call(context, next.value, next.worked);

        if (queueTail === null) {
          self.empty();
        }
      } else {
        _running--;
      }
    } else if (--_running === 0) {
      self.drain();
    }
  }

  function kill() {
    queueHead = null;
    queueTail = null;
    self.drain = noop;
  }

  function killAndDrain() {
    queueHead = null;
    queueTail = null;
    self.drain();
    self.drain = noop;
  }

  function error(handler) {
    errorHandler = handler;
  }
}

function noop() {}

function Task() {
  this.value = null;
  this.callback = noop;
  this.next = null;
  this.release = noop;
  this.context = null;
  this.errorHandler = null;
  var self = this;

  this.worked = function worked(err, result) {
    var callback = self.callback;
    var errorHandler = self.errorHandler;
    var val = self.value;
    self.value = null;
    self.callback = noop;

    if (self.errorHandler) {
      errorHandler(err, val);
    }

    callback.call(self.context, err, result);
    self.release(self);
  };
}

function queueAsPromised(context, worker, concurrency) {
  if (typeof context === 'function') {
    concurrency = worker;
    worker = context;
    context = null;
  }

  function asyncWrapper(arg, cb) {
    worker.call(this, arg).then(function (res) {
      cb(null, res);
    }, cb);
  }

  var queue = fastqueue(context, asyncWrapper, concurrency);
  var pushCb = queue.push;
  var unshiftCb = queue.unshift;
  queue.push = push;
  queue.unshift = unshift;
  queue.drained = drained;
  return queue;

  function push(value) {
    var p = new Promise(function (resolve, reject) {
      pushCb(value, function (err, result) {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    }); // Let's fork the promise chain to
    // make the error bubble up to the user but
    // not lead to a unhandledRejection

    p["catch"](noop);
    return p;
  }

  function unshift(value) {
    var p = new Promise(function (resolve, reject) {
      unshiftCb(value, function (err, result) {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    }); // Let's fork the promise chain to
    // make the error bubble up to the user but
    // not lead to a unhandledRejection

    p["catch"](noop);
    return p;
  }

  function drained() {
    var previousDrain = queue.drain;
    var p = new Promise(function (resolve) {
      queue.drain = function () {
        previousDrain();
        resolve();
      };
    });
    return p;
  }
}

module.exports = fastqueue;
module.exports.promise = queueAsPromised;

/***/ }),

/***/ 4902:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */


var _objectSpread = (__webpack_require__(279)["default"]);

var util = __webpack_require__(3837);

var toRegexRange = __webpack_require__(4482);

var isObject = function isObject(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
};

var transform = function transform(toNumber) {
  return function (value) {
    return toNumber === true ? Number(value) : String(value);
  };
};

var isValidValue = function isValidValue(value) {
  return typeof value === 'number' || typeof value === 'string' && value !== '';
};

var isNumber = function isNumber(num) {
  return Number.isInteger(+num);
};

var zeros = function zeros(input) {
  var value = "".concat(input);
  var index = -1;
  if (value[0] === '-') value = value.slice(1);
  if (value === '0') return false;

  while (value[++index] === '0') {
    ;
  }

  return index > 0;
};

var stringify = function stringify(start, end, options) {
  if (typeof start === 'string' || typeof end === 'string') {
    return true;
  }

  return options.stringify === true;
};

var pad = function pad(input, maxLength, toNumber) {
  if (maxLength > 0) {
    var dash = input[0] === '-' ? '-' : '';
    if (dash) input = input.slice(1);
    input = dash + input.padStart(dash ? maxLength - 1 : maxLength, '0');
  }

  if (toNumber === false) {
    return String(input);
  }

  return input;
};

var toMaxLen = function toMaxLen(input, maxLength) {
  var negative = input[0] === '-' ? '-' : '';

  if (negative) {
    input = input.slice(1);
    maxLength--;
  }

  while (input.length < maxLength) {
    input = '0' + input;
  }

  return negative ? '-' + input : input;
};

var toSequence = function toSequence(parts, options) {
  parts.negatives.sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  parts.positives.sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  var prefix = options.capture ? '' : '?:';
  var positives = '';
  var negatives = '';
  var result;

  if (parts.positives.length) {
    positives = parts.positives.join('|');
  }

  if (parts.negatives.length) {
    negatives = "-(".concat(prefix).concat(parts.negatives.join('|'), ")");
  }

  if (positives && negatives) {
    result = "".concat(positives, "|").concat(negatives);
  } else {
    result = positives || negatives;
  }

  if (options.wrap) {
    return "(".concat(prefix).concat(result, ")");
  }

  return result;
};

var toRange = function toRange(a, b, isNumbers, options) {
  if (isNumbers) {
    return toRegexRange(a, b, _objectSpread({
      wrap: false
    }, options));
  }

  var start = String.fromCharCode(a);
  if (a === b) return start;
  var stop = String.fromCharCode(b);
  return "[".concat(start, "-").concat(stop, "]");
};

var toRegex = function toRegex(start, end, options) {
  if (Array.isArray(start)) {
    var wrap = options.wrap === true;
    var prefix = options.capture ? '' : '?:';
    return wrap ? "(".concat(prefix).concat(start.join('|'), ")") : start.join('|');
  }

  return toRegexRange(start, end, options);
};

var rangeError = function rangeError() {
  return new RangeError('Invalid range arguments: ' + util.inspect.apply(util, arguments));
};

var invalidRange = function invalidRange(start, end, options) {
  if (options.strictRanges === true) throw rangeError([start, end]);
  return [];
};

var invalidStep = function invalidStep(step, options) {
  if (options.strictRanges === true) {
    throw new TypeError("Expected step \"".concat(step, "\" to be a number"));
  }

  return [];
};

var fillNumbers = function fillNumbers(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var a = Number(start);
  var b = Number(end);

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    if (options.strictRanges === true) throw rangeError([start, end]);
    return [];
  } // fix negative zero


  if (a === 0) a = 0;
  if (b === 0) b = 0;
  var descending = a > b;
  var startString = String(start);
  var endString = String(end);
  var stepString = String(step);
  step = Math.max(Math.abs(step), 1);
  var padded = zeros(startString) || zeros(endString) || zeros(stepString);
  var maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
  var toNumber = padded === false && stringify(start, end, options) === false;
  var format = options.transform || transform(toNumber);

  if (options.toRegex && step === 1) {
    return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
  }

  var parts = {
    negatives: [],
    positives: []
  };

  var push = function push(num) {
    return parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num));
  };

  var range = [];
  var index = 0;

  while (descending ? a >= b : a <= b) {
    if (options.toRegex === true && step > 1) {
      push(a);
    } else {
      range.push(pad(format(a, index), maxLen, toNumber));
    }

    a = descending ? a - step : a + step;
    index++;
  }

  if (options.toRegex === true) {
    return step > 1 ? toSequence(parts, options) : toRegex(range, null, _objectSpread({
      wrap: false
    }, options));
  }

  return range;
};

var fillLetters = function fillLetters(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
    return invalidRange(start, end, options);
  }

  var format = options.transform || function (val) {
    return String.fromCharCode(val);
  };

  var a = "".concat(start).charCodeAt(0);
  var b = "".concat(end).charCodeAt(0);
  var descending = a > b;
  var min = Math.min(a, b);
  var max = Math.max(a, b);

  if (options.toRegex && step === 1) {
    return toRange(min, max, false, options);
  }

  var range = [];
  var index = 0;

  while (descending ? a >= b : a <= b) {
    range.push(format(a, index));
    a = descending ? a - step : a + step;
    index++;
  }

  if (options.toRegex === true) {
    return toRegex(range, null, {
      wrap: false,
      options: options
    });
  }

  return range;
};

var fill = function fill(start, end, step) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (end == null && isValidValue(start)) {
    return [start];
  }

  if (!isValidValue(start) || !isValidValue(end)) {
    return invalidRange(start, end, options);
  }

  if (typeof step === 'function') {
    return fill(start, end, 1, {
      transform: step
    });
  }

  if (isObject(step)) {
    return fill(start, end, 0, step);
  }

  var opts = _objectSpread({}, options);

  if (opts.capture === true) opts.wrap = true;
  step = step || opts.step || 1;

  if (!isNumber(step)) {
    if (step != null && !isObject(step)) return invalidStep(step, opts);
    return fill(start, end, 1, step);
  }

  if (isNumber(start) && isNumber(end)) {
    return fillNumbers(start, end, step, opts);
  }

  return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};

module.exports = fill;

/***/ }),

/***/ 9511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isGlob = __webpack_require__(526);

var pathPosixDirname = (__webpack_require__(1017).posix.dirname);

var isWin32 = (__webpack_require__(2037).platform)() === 'win32';
var slash = '/';
var backslash = /\\/g;
var enclosure = /[\{\[].*[\}\]]$/;
var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
/**
 * @param {string} str
 * @param {Object} opts
 * @param {boolean} [opts.flipBackslashes=true]
 * @returns {string}
 */

module.exports = function globParent(str, opts) {
  var options = Object.assign({
    flipBackslashes: true
  }, opts); // flip windows path separators

  if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
    str = str.replace(backslash, slash);
  } // special case for strings ending in enclosure containing path separator


  if (enclosure.test(str)) {
    str += slash;
  } // preserves full path in case of trailing path separator


  str += 'a'; // remove path parts that are globby

  do {
    str = pathPosixDirname(str);
  } while (isGlob(str) || globby.test(str)); // remove escape chars and return result


  return str.replace(escaped, '$1');
};

/***/ }),

/***/ 7532:
/***/ ((module) => {

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
module.exports = function isExtglob(str) {
  if (typeof str !== 'string' || str === '') {
    return false;
  }

  var match;

  while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
    if (match[2]) return true;
    str = str.slice(match.index + match[0].length);
  }

  return false;
};

/***/ }),

/***/ 526:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var isExtglob = __webpack_require__(7532);

var chars = {
  '{': '}',
  '(': ')',
  '[': ']'
};

var strictCheck = function strictCheck(str) {
  if (str[0] === '!') {
    return true;
  }

  var index = 0;
  var pipeIndex = -2;
  var closeSquareIndex = -2;
  var closeCurlyIndex = -2;
  var closeParenIndex = -2;
  var backSlashIndex = -2;

  while (index < str.length) {
    if (str[index] === '*') {
      return true;
    }

    if (str[index + 1] === '?' && /[\].+)]/.test(str[index])) {
      return true;
    }

    if (closeSquareIndex !== -1 && str[index] === '[' && str[index + 1] !== ']') {
      if (closeSquareIndex < index) {
        closeSquareIndex = str.indexOf(']', index);
      }

      if (closeSquareIndex > index) {
        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
          return true;
        }

        backSlashIndex = str.indexOf('\\', index);

        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
          return true;
        }
      }
    }

    if (closeCurlyIndex !== -1 && str[index] === '{' && str[index + 1] !== '}') {
      closeCurlyIndex = str.indexOf('}', index);

      if (closeCurlyIndex > index) {
        backSlashIndex = str.indexOf('\\', index);

        if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
          return true;
        }
      }
    }

    if (closeParenIndex !== -1 && str[index] === '(' && str[index + 1] === '?' && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ')') {
      closeParenIndex = str.indexOf(')', index);

      if (closeParenIndex > index) {
        backSlashIndex = str.indexOf('\\', index);

        if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
          return true;
        }
      }
    }

    if (pipeIndex !== -1 && str[index] === '(' && str[index + 1] !== '|') {
      if (pipeIndex < index) {
        pipeIndex = str.indexOf('|', index);
      }

      if (pipeIndex !== -1 && str[pipeIndex + 1] !== ')') {
        closeParenIndex = str.indexOf(')', pipeIndex);

        if (closeParenIndex > pipeIndex) {
          backSlashIndex = str.indexOf('\\', pipeIndex);

          if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
            return true;
          }
        }
      }
    }

    if (str[index] === '\\') {
      var open = str[index + 1];
      index += 2;
      var close = chars[open];

      if (close) {
        var n = str.indexOf(close, index);

        if (n !== -1) {
          index = n + 1;
        }
      }

      if (str[index] === '!') {
        return true;
      }
    } else {
      index++;
    }
  }

  return false;
};

var relaxedCheck = function relaxedCheck(str) {
  if (str[0] === '!') {
    return true;
  }

  var index = 0;

  while (index < str.length) {
    if (/[*?{}()[\]]/.test(str[index])) {
      return true;
    }

    if (str[index] === '\\') {
      var open = str[index + 1];
      index += 2;
      var close = chars[open];

      if (close) {
        var n = str.indexOf(close, index);

        if (n !== -1) {
          index = n + 1;
        }
      }

      if (str[index] === '!') {
        return true;
      }
    } else {
      index++;
    }
  }

  return false;
};

module.exports = function isGlob(str, options) {
  if (typeof str !== 'string' || str === '') {
    return false;
  }

  if (isExtglob(str)) {
    return true;
  }

  var check = strictCheck; // optionally relax check

  if (options && options.strict === false) {
    check = relaxedCheck;
  }

  return check(str);
};

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */


module.exports = function (num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }

  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }

  return false;
};

/***/ }),

/***/ 1676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fs = __webpack_require__(7147);

var core;

if (process.platform === 'win32' || global.TESTING_WINDOWS) {
  core = __webpack_require__(3649);
} else {
  core = __webpack_require__(6628);
}

module.exports = isexe;
isexe.sync = sync;

function isexe(path, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided');
    }

    return new Promise(function (resolve, reject) {
      isexe(path, options || {}, function (er, is) {
        if (er) {
          reject(er);
        } else {
          resolve(is);
        }
      });
    });
  }

  core(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null;
        is = false;
      }
    }

    cb(er, is);
  });
}

function sync(path, options) {
  // my kingdom for a filtered catch
  try {
    return core.sync(path, options || {});
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false;
    } else {
      throw er;
    }
  }
}

/***/ }),

/***/ 6628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = isexe;
isexe.sync = sync;

var fs = __webpack_require__(7147);

function isexe(path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, options));
  });
}

function sync(path, options) {
  return checkStat(fs.statSync(path), options);
}

function checkStat(stat, options) {
  return stat.isFile() && checkMode(stat, options);
}

function checkMode(stat, options) {
  var mod = stat.mode;
  var uid = stat.uid;
  var gid = stat.gid;
  var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
  var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
  var u = parseInt('100', 8);
  var g = parseInt('010', 8);
  var o = parseInt('001', 8);
  var ug = u | g;
  var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
  return ret;
}

/***/ }),

/***/ 3649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = isexe;
isexe.sync = sync;

var fs = __webpack_require__(7147);

function checkPathExt(path, options) {
  var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;

  if (!pathext) {
    return true;
  }

  pathext = pathext.split(';');

  if (pathext.indexOf('') !== -1) {
    return true;
  }

  for (var i = 0; i < pathext.length; i++) {
    var p = pathext[i].toLowerCase();

    if (p && path.substr(-p.length).toLowerCase() === p) {
      return true;
    }
  }

  return false;
}

function checkStat(stat, path, options) {
  if (!stat.isSymbolicLink() && !stat.isFile()) {
    return false;
  }

  return checkPathExt(path, options);
}

function isexe(path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, path, options));
  });
}

function sync(path, options) {
  return checkStat(fs.statSync(path), path, options);
}

/***/ }),

/***/ 4389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // A linked list to keep track of recently-used-ness

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var Yallist = __webpack_require__(9237);

var MAX = Symbol('max');
var LENGTH = Symbol('length');
var LENGTH_CALCULATOR = Symbol('lengthCalculator');
var ALLOW_STALE = Symbol('allowStale');
var MAX_AGE = Symbol('maxAge');
var DISPOSE = Symbol('dispose');
var NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
var LRU_LIST = Symbol('lruList');
var CACHE = Symbol('cache');
var UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');

var naiveLength = function naiveLength() {
  return 1;
}; // lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.


var LRUCache = /*#__PURE__*/function () {
  function LRUCache(options) {
    _classCallCheck(this, LRUCache);

    if (typeof options === 'number') options = {
      max: options
    };
    if (!options) options = {};
    if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number'); // Kind of weird to have a default max of Infinity, but oh well.

    var max = this[MAX] = options.max || Infinity;
    var lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  } // resize the cache when the max changes.


  _createClass(LRUCache, [{
    key: "max",
    get: function get() {
      return this[MAX];
    },
    set: function set(mL) {
      if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
      this[MAX] = mL || Infinity;
      trim(this);
    }
  }, {
    key: "allowStale",
    get: function get() {
      return this[ALLOW_STALE];
    },
    set: function set(allowStale) {
      this[ALLOW_STALE] = !!allowStale;
    }
  }, {
    key: "maxAge",
    get: function get() {
      return this[MAX_AGE];
    } // resize the cache when the lengthCalculator changes.
    ,
    set: function set(mA) {
      if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
      this[MAX_AGE] = mA;
      trim(this);
    }
  }, {
    key: "lengthCalculator",
    get: function get() {
      return this[LENGTH_CALCULATOR];
    },
    set: function set(lC) {
      var _this = this;

      if (typeof lC !== 'function') lC = naiveLength;

      if (lC !== this[LENGTH_CALCULATOR]) {
        this[LENGTH_CALCULATOR] = lC;
        this[LENGTH] = 0;
        this[LRU_LIST].forEach(function (hit) {
          hit.length = _this[LENGTH_CALCULATOR](hit.value, hit.key);
          _this[LENGTH] += hit.length;
        });
      }

      trim(this);
    }
  }, {
    key: "length",
    get: function get() {
      return this[LENGTH];
    }
  }, {
    key: "itemCount",
    get: function get() {
      return this[LRU_LIST].length;
    }
  }, {
    key: "rforEach",
    value: function rforEach(fn, thisp) {
      thisp = thisp || this;

      for (var walker = this[LRU_LIST].tail; walker !== null;) {
        var prev = walker.prev;
        forEachStep(this, fn, walker, thisp);
        walker = prev;
      }
    }
  }, {
    key: "forEach",
    value: function forEach(fn, thisp) {
      thisp = thisp || this;

      for (var walker = this[LRU_LIST].head; walker !== null;) {
        var next = walker.next;
        forEachStep(this, fn, walker, thisp);
        walker = next;
      }
    }
  }, {
    key: "keys",
    value: function keys() {
      return this[LRU_LIST].toArray().map(function (k) {
        return k.key;
      });
    }
  }, {
    key: "values",
    value: function values() {
      return this[LRU_LIST].toArray().map(function (k) {
        return k.value;
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;

      if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
        this[LRU_LIST].forEach(function (hit) {
          return _this2[DISPOSE](hit.key, hit.value);
        });
      }

      this[CACHE] = new Map(); // hash of items by key

      this[LRU_LIST] = new Yallist(); // list of items in order of use recency

      this[LENGTH] = 0; // length of items in the list
    }
  }, {
    key: "dump",
    value: function dump() {
      var _this3 = this;

      return this[LRU_LIST].map(function (hit) {
        return isStale(_this3, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        };
      }).toArray().filter(function (h) {
        return h;
      });
    }
  }, {
    key: "dumpLru",
    value: function dumpLru() {
      return this[LRU_LIST];
    }
  }, {
    key: "set",
    value: function set(key, value, maxAge) {
      maxAge = maxAge || this[MAX_AGE];
      if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
      var now = maxAge ? Date.now() : 0;
      var len = this[LENGTH_CALCULATOR](value, key);

      if (this[CACHE].has(key)) {
        if (len > this[MAX]) {
          _del(this, this[CACHE].get(key));

          return false;
        }

        var node = this[CACHE].get(key);
        var item = node.value; // dispose of the old one before overwriting
        // split out into 2 ifs for better coverage tracking

        if (this[DISPOSE]) {
          if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
        }

        item.now = now;
        item.maxAge = maxAge;
        item.value = value;
        this[LENGTH] += len - item.length;
        item.length = len;
        this.get(key);
        trim(this);
        return true;
      }

      var hit = new Entry(key, value, len, now, maxAge); // oversized objects fall out of cache automatically.

      if (hit.length > this[MAX]) {
        if (this[DISPOSE]) this[DISPOSE](key, value);
        return false;
      }

      this[LENGTH] += hit.length;
      this[LRU_LIST].unshift(hit);
      this[CACHE].set(key, this[LRU_LIST].head);
      trim(this);
      return true;
    }
  }, {
    key: "has",
    value: function has(key) {
      if (!this[CACHE].has(key)) return false;
      var hit = this[CACHE].get(key).value;
      return !isStale(this, hit);
    }
  }, {
    key: "get",
    value: function get(key) {
      return _get(this, key, true);
    }
  }, {
    key: "peek",
    value: function peek(key) {
      return _get(this, key, false);
    }
  }, {
    key: "pop",
    value: function pop() {
      var node = this[LRU_LIST].tail;
      if (!node) return null;

      _del(this, node);

      return node.value;
    }
  }, {
    key: "del",
    value: function del(key) {
      _del(this, this[CACHE].get(key));
    }
  }, {
    key: "load",
    value: function load(arr) {
      // reset the cache
      this.reset();
      var now = Date.now(); // A previous serialized cache has the most recent items first

      for (var l = arr.length - 1; l >= 0; l--) {
        var hit = arr[l];
        var expiresAt = hit.e || 0;
        if (expiresAt === 0) // the item was created without expiration in a non aged cache
          this.set(hit.k, hit.v);else {
          var maxAge = expiresAt - now; // dont add already expired items

          if (maxAge > 0) {
            this.set(hit.k, hit.v, maxAge);
          }
        }
      }
    }
  }, {
    key: "prune",
    value: function prune() {
      var _this4 = this;

      this[CACHE].forEach(function (value, key) {
        return _get(_this4, key, false);
      });
    }
  }]);

  return LRUCache;
}();

var _get = function _get(self, key, doUse) {
  var node = self[CACHE].get(key);

  if (node) {
    var hit = node.value;

    if (isStale(self, hit)) {
      _del(self, node);

      if (!self[ALLOW_STALE]) return undefined;
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }

    return hit.value;
  }
};

var isStale = function isStale(self, hit) {
  if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
  var diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};

var trim = function trim(self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev;

      _del(self, walker);

      walker = prev;
    }
  }
};

var _del = function _del(self, node) {
  if (node) {
    var hit = node.value;
    if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
    self[LENGTH] -= hit.length;
    self[CACHE]["delete"](hit.key);
    self[LRU_LIST].removeNode(node);
  }
};

var Entry = /*#__PURE__*/_createClass(function Entry(key, value, length, now, maxAge) {
  _classCallCheck(this, Entry);

  this.key = key;
  this.value = value;
  this.length = length;
  this.now = now;
  this.maxAge = maxAge || 0;
});

var forEachStep = function forEachStep(self, fn, node, thisp) {
  var hit = node.value;

  if (isStale(self, hit)) {
    _del(self, node);

    if (!self[ALLOW_STALE]) hit = undefined;
  }

  if (hit) fn.call(thisp, hit.value, hit.key, self);
};

module.exports = LRUCache;

/***/ }),

/***/ 9978:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/*
 * merge2
 * https://github.com/teambition/merge2
 *
 * Copyright (c) 2014-2020 Teambition
 * Licensed under the MIT license.
 */

var Stream = __webpack_require__(2781);

var PassThrough = Stream.PassThrough;
var slice = Array.prototype.slice;
module.exports = merge2;

function merge2() {
  var streamsQueue = [];
  var args = slice.call(arguments);
  var merging = false;
  var options = args[args.length - 1];

  if (options && !Array.isArray(options) && options.pipe == null) {
    args.pop();
  } else {
    options = {};
  }

  var doEnd = options.end !== false;
  var doPipeError = options.pipeError === true;

  if (options.objectMode == null) {
    options.objectMode = true;
  }

  if (options.highWaterMark == null) {
    options.highWaterMark = 64 * 1024;
  }

  var mergedStream = PassThrough(options);

  function addStream() {
    for (var i = 0, len = arguments.length; i < len; i++) {
      streamsQueue.push(pauseStreams(arguments[i], options));
    }

    mergeStream();
    return this;
  }

  function mergeStream() {
    if (merging) {
      return;
    }

    merging = true;
    var streams = streamsQueue.shift();

    if (!streams) {
      process.nextTick(endStream);
      return;
    }

    if (!Array.isArray(streams)) {
      streams = [streams];
    }

    var pipesCount = streams.length + 1;

    function next() {
      if (--pipesCount > 0) {
        return;
      }

      merging = false;
      mergeStream();
    }

    function pipe(stream) {
      function onend() {
        stream.removeListener('merge2UnpipeEnd', onend);
        stream.removeListener('end', onend);

        if (doPipeError) {
          stream.removeListener('error', onerror);
        }

        next();
      }

      function onerror(err) {
        mergedStream.emit('error', err);
      } // skip ended stream


      if (stream._readableState.endEmitted) {
        return next();
      }

      stream.on('merge2UnpipeEnd', onend);
      stream.on('end', onend);

      if (doPipeError) {
        stream.on('error', onerror);
      }

      stream.pipe(mergedStream, {
        end: false
      }); // compatible for old stream

      stream.resume();
    }

    for (var i = 0; i < streams.length; i++) {
      pipe(streams[i]);
    }

    next();
  }

  function endStream() {
    merging = false; // emit 'queueDrain' when all streams merged.

    mergedStream.emit('queueDrain');

    if (doEnd) {
      mergedStream.end();
    }
  }

  mergedStream.setMaxListeners(0);
  mergedStream.add = addStream;
  mergedStream.on('unpipe', function (stream) {
    stream.emit('merge2UnpipeEnd');
  });

  if (args.length) {
    addStream.apply(null, args);
  }

  return mergedStream;
} // check and pause streams for pipe.


function pauseStreams(streams, options) {
  if (!Array.isArray(streams)) {
    // Backwards-compat with old-style streams
    if (!streams._readableState && streams.pipe) {
      streams = streams.pipe(PassThrough(options));
    }

    if (!streams._readableState || !streams.pause || !streams.pipe) {
      throw new Error('Only readable stream can be merged.');
    }

    streams.pause();
  } else {
    for (var i = 0, len = streams.length; i < len; i++) {
      streams[i] = pauseStreams(streams[i], options);
    }
  }

  return streams;
}

/***/ }),

/***/ 9356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _toConsumableArray = (__webpack_require__(4434)["default"]);

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _objectSpread = (__webpack_require__(279)["default"]);

var util = __webpack_require__(3837);

var braces = __webpack_require__(3540);

var picomatch = __webpack_require__(6968);

var utils = __webpack_require__(8595);

var isEmptyString = function isEmptyString(val) {
  return val === '' || val === './';
};
/**
 * Returns an array of strings that match one or more glob patterns.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm(list, patterns[, options]);
 *
 * console.log(mm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {String|Array<string>} `list` List of strings to match.
 * @param {String|Array<string>} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options)
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */


var micromatch = function micromatch(list, patterns, options) {
  patterns = [].concat(patterns);
  list = [].concat(list);
  var omit = new Set();
  var keep = new Set();
  var items = new Set();
  var negatives = 0;

  var onResult = function onResult(state) {
    items.add(state.output);

    if (options && options.onResult) {
      options.onResult(state);
    }
  };

  for (var i = 0; i < patterns.length; i++) {
    var isMatch = picomatch(String(patterns[i]), _objectSpread(_objectSpread({}, options), {}, {
      onResult: onResult
    }), true);
    var negated = isMatch.state.negated || isMatch.state.negatedExtglob;
    if (negated) negatives++;

    var _iterator = _createForOfIteratorHelper(list),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var matched = isMatch(item, true);
        var match = negated ? !matched.isMatch : matched.isMatch;
        if (!match) continue;

        if (negated) {
          omit.add(matched.output);
        } else {
          omit["delete"](matched.output);
          keep.add(matched.output);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var result = negatives === patterns.length ? _toConsumableArray(items) : _toConsumableArray(keep);
  var matches = result.filter(function (item) {
    return !omit.has(item);
  });

  if (options && matches.length === 0) {
    if (options.failglob === true) {
      throw new Error("No matches found for \"".concat(patterns.join(', '), "\""));
    }

    if (options.nonull === true || options.nullglob === true) {
      return options.unescape ? patterns.map(function (p) {
        return p.replace(/\\/g, '');
      }) : patterns;
    }
  }

  return matches;
};
/**
 * Backwards compatibility
 */


micromatch.match = micromatch;
/**
 * Returns a matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matcher(pattern[, options]);
 *
 * const isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options`
 * @return {Function} Returns a matcher function.
 * @api public
 */

micromatch.matcher = function (pattern, options) {
  return picomatch(pattern, options);
};
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.isMatch(string, patterns[, options]);
 *
 * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(mm.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `[options]` See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */


micromatch.isMatch = function (str, patterns, options) {
  return picomatch(patterns, options)(str);
};
/**
 * Backwards compatibility
 */


micromatch.any = micromatch.isMatch;
/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */

micromatch.not = function (list, patterns) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  patterns = [].concat(patterns).map(String);
  var result = new Set();
  var items = [];

  var onResult = function onResult(state) {
    if (options.onResult) options.onResult(state);
    items.push(state.output);
  };

  var matches = new Set(micromatch(list, patterns, _objectSpread(_objectSpread({}, options), {}, {
    onResult: onResult
  })));

  for (var _i = 0, _items = items; _i < _items.length; _i++) {
    var item = _items[_i];

    if (!matches.has(item)) {
      result.add(item);
    }
  }

  return _toConsumableArray(result);
};
/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * // mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any of the patterns matches any part of `str`.
 * @api public
 */


micromatch.contains = function (str, pattern, options) {
  if (typeof str !== 'string') {
    throw new TypeError("Expected a string: \"".concat(util.inspect(str), "\""));
  }

  if (Array.isArray(pattern)) {
    return pattern.some(function (p) {
      return micromatch.contains(str, p, options);
    });
  }

  if (typeof pattern === 'string') {
    if (isEmptyString(str) || isEmptyString(pattern)) {
      return false;
    }

    if (str.includes(pattern) || str.startsWith('./') && str.slice(2).includes(pattern)) {
      return true;
    }
  }

  return micromatch.isMatch(str, pattern, _objectSpread(_objectSpread({}, options), {}, {
    contains: true
  }));
};
/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matchKeys(object, patterns[, options]);
 *
 * const obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */


micromatch.matchKeys = function (obj, patterns, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('Expected the first argument to be an object');
  }

  var keys = micromatch(Object.keys(obj), patterns, options);
  var res = {};

  var _iterator2 = _createForOfIteratorHelper(keys),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var key = _step2.value;
      res[key] = obj[key];
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return res;
};
/**
 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any `patterns` matches any of the strings in `list`
 * @api public
 */


micromatch.some = function (list, patterns, options) {
  var items = [].concat(list);

  var _iterator3 = _createForOfIteratorHelper([].concat(patterns)),
      _step3;

  try {
    var _loop = function _loop() {
      var pattern = _step3.value;
      var isMatch = picomatch(String(pattern), options);

      if (items.some(function (item) {
        return isMatch(item);
      })) {
        return {
          v: true
        };
      }
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _ret = _loop();

      if (typeof _ret === "object") return _ret.v;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return false;
};
/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if all `patterns` matches all of the strings in `list`
 * @api public
 */


micromatch.every = function (list, patterns, options) {
  var items = [].concat(list);

  var _iterator4 = _createForOfIteratorHelper([].concat(patterns)),
      _step4;

  try {
    var _loop2 = function _loop2() {
      var pattern = _step4.value;
      var isMatch = picomatch(String(pattern), options);

      if (!items.every(function (item) {
        return isMatch(item);
      })) {
        return {
          v: false
        };
      }
    };

    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _ret2 = _loop2();

      if (typeof _ret2 === "object") return _ret2.v;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return true;
};
/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */


micromatch.all = function (str, patterns, options) {
  if (typeof str !== 'string') {
    throw new TypeError("Expected a string: \"".concat(util.inspect(str), "\""));
  }

  return [].concat(patterns).every(function (p) {
    return picomatch(p, options)(str);
  });
};
/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `glob` Glob pattern to use for matching.
 * @param {String} `input` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array|null} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
 * @api public
 */


micromatch.capture = function (glob, input, options) {
  var posix = utils.isWindows(options);
  var regex = picomatch.makeRe(String(glob), _objectSpread(_objectSpread({}, options), {}, {
    capture: true
  }));
  var match = regex.exec(posix ? utils.toPosixSlashes(input) : input);

  if (match) {
    return match.slice(1).map(function (v) {
      return v === void 0 ? '' : v;
    });
  }
};
/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */


micromatch.makeRe = function () {
  return picomatch.makeRe.apply(picomatch, arguments);
};
/**
 * Scan a glob pattern to separate the pattern into segments. Used
 * by the [split](#split) method.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.scan(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */


micromatch.scan = function () {
  return picomatch.scan.apply(picomatch, arguments);
};
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.parse(pattern[, options]);
 * ```
 * @param {String} `glob`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as regex source string.
 * @api public
 */


micromatch.parse = function (patterns, options) {
  var res = [];

  var _iterator5 = _createForOfIteratorHelper([].concat(patterns || [])),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var pattern = _step5.value;

      var _iterator6 = _createForOfIteratorHelper(braces(String(pattern), options)),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var str = _step6.value;
          res.push(picomatch.parse(str, options));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return res;
};
/**
 * Process the given brace `pattern`.
 *
 * ```js
 * const { braces } = require('micromatch');
 * console.log(braces('foo/{a,b,c}/bar'));
 * //=> [ 'foo/(a|b|c)/bar' ]
 *
 * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
 * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
 * ```
 * @param {String} `pattern` String with brace pattern to process.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */


micromatch.braces = function (pattern, options) {
  if (typeof pattern !== 'string') throw new TypeError('Expected a string');

  if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
    return [pattern];
  }

  return braces(pattern, options);
};
/**
 * Expand braces
 */


micromatch.braceExpand = function (pattern, options) {
  if (typeof pattern !== 'string') throw new TypeError('Expected a string');
  return micromatch.braces(pattern, _objectSpread(_objectSpread({}, options), {}, {
    expand: true
  }));
};
/**
 * Expose micromatch
 */


module.exports = micromatch;

/***/ }),

/***/ 2645:
/***/ ((module) => {

"use strict";


var pathKey = function pathKey() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var environment = options.env || process.env;
  var platform = options.platform || process.platform;

  if (platform !== 'win32') {
    return 'PATH';
  }

  return Object.keys(environment).reverse().find(function (key) {
    return key.toUpperCase() === 'PATH';
  }) || 'Path';
};

module.exports = pathKey; // TODO: Remove this for the next major release

module.exports["default"] = pathKey;

/***/ }),

/***/ 6968:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(8282);

/***/ }),

/***/ 4746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _objectSpread = (__webpack_require__(279)["default"]);

var path = __webpack_require__(1017);

var WIN_SLASH = '\\\\/';
var WIN_NO_SLASH = "[^".concat(WIN_SLASH, "]");
/**
 * Posix glob regex
 */

var DOT_LITERAL = '\\.';
var PLUS_LITERAL = '\\+';
var QMARK_LITERAL = '\\?';
var SLASH_LITERAL = '\\/';
var ONE_CHAR = '(?=.)';
var QMARK = '[^/]';
var END_ANCHOR = "(?:".concat(SLASH_LITERAL, "|$)");
var START_ANCHOR = "(?:^|".concat(SLASH_LITERAL, ")");
var DOTS_SLASH = "".concat(DOT_LITERAL, "{1,2}").concat(END_ANCHOR);
var NO_DOT = "(?!".concat(DOT_LITERAL, ")");
var NO_DOTS = "(?!".concat(START_ANCHOR).concat(DOTS_SLASH, ")");
var NO_DOT_SLASH = "(?!".concat(DOT_LITERAL, "{0,1}").concat(END_ANCHOR, ")");
var NO_DOTS_SLASH = "(?!".concat(DOTS_SLASH, ")");
var QMARK_NO_DOT = "[^.".concat(SLASH_LITERAL, "]");
var STAR = "".concat(QMARK, "*?");
var POSIX_CHARS = {
  DOT_LITERAL: DOT_LITERAL,
  PLUS_LITERAL: PLUS_LITERAL,
  QMARK_LITERAL: QMARK_LITERAL,
  SLASH_LITERAL: SLASH_LITERAL,
  ONE_CHAR: ONE_CHAR,
  QMARK: QMARK,
  END_ANCHOR: END_ANCHOR,
  DOTS_SLASH: DOTS_SLASH,
  NO_DOT: NO_DOT,
  NO_DOTS: NO_DOTS,
  NO_DOT_SLASH: NO_DOT_SLASH,
  NO_DOTS_SLASH: NO_DOTS_SLASH,
  QMARK_NO_DOT: QMARK_NO_DOT,
  STAR: STAR,
  START_ANCHOR: START_ANCHOR
};
/**
 * Windows glob regex
 */

var WINDOWS_CHARS = _objectSpread(_objectSpread({}, POSIX_CHARS), {}, {
  SLASH_LITERAL: "[".concat(WIN_SLASH, "]"),
  QMARK: WIN_NO_SLASH,
  STAR: "".concat(WIN_NO_SLASH, "*?"),
  DOTS_SLASH: "".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$)"),
  NO_DOT: "(?!".concat(DOT_LITERAL, ")"),
  NO_DOTS: "(?!(?:^|[".concat(WIN_SLASH, "])").concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
  NO_DOT_SLASH: "(?!".concat(DOT_LITERAL, "{0,1}(?:[").concat(WIN_SLASH, "]|$))"),
  NO_DOTS_SLASH: "(?!".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
  QMARK_NO_DOT: "[^.".concat(WIN_SLASH, "]"),
  START_ANCHOR: "(?:^|[".concat(WIN_SLASH, "])"),
  END_ANCHOR: "(?:[".concat(WIN_SLASH, "]|$)")
});
/**
 * POSIX Bracket Regex
 */


var POSIX_REGEX_SOURCE = {
  alnum: 'a-zA-Z0-9',
  alpha: 'a-zA-Z',
  ascii: '\\x00-\\x7F',
  blank: ' \\t',
  cntrl: '\\x00-\\x1F\\x7F',
  digit: '0-9',
  graph: '\\x21-\\x7E',
  lower: 'a-z',
  print: '\\x20-\\x7E ',
  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
  space: ' \\t\\r\\n\\v\\f',
  upper: 'A-Z',
  word: 'A-Za-z0-9_',
  xdigit: 'A-Fa-f0-9'
};
module.exports = {
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE,
  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    '***': '*',
    '**/**': '**',
    '**/**/**': '**'
  },
  // Digits
  CHAR_0: 48,

  /* 0 */
  CHAR_9: 57,

  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 65,

  /* A */
  CHAR_LOWERCASE_A: 97,

  /* a */
  CHAR_UPPERCASE_Z: 90,

  /* Z */
  CHAR_LOWERCASE_Z: 122,

  /* z */
  CHAR_LEFT_PARENTHESES: 40,

  /* ( */
  CHAR_RIGHT_PARENTHESES: 41,

  /* ) */
  CHAR_ASTERISK: 42,

  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38,

  /* & */
  CHAR_AT: 64,

  /* @ */
  CHAR_BACKWARD_SLASH: 92,

  /* \ */
  CHAR_CARRIAGE_RETURN: 13,

  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94,

  /* ^ */
  CHAR_COLON: 58,

  /* : */
  CHAR_COMMA: 44,

  /* , */
  CHAR_DOT: 46,

  /* . */
  CHAR_DOUBLE_QUOTE: 34,

  /* " */
  CHAR_EQUAL: 61,

  /* = */
  CHAR_EXCLAMATION_MARK: 33,

  /* ! */
  CHAR_FORM_FEED: 12,

  /* \f */
  CHAR_FORWARD_SLASH: 47,

  /* / */
  CHAR_GRAVE_ACCENT: 96,

  /* ` */
  CHAR_HASH: 35,

  /* # */
  CHAR_HYPHEN_MINUS: 45,

  /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60,

  /* < */
  CHAR_LEFT_CURLY_BRACE: 123,

  /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91,

  /* [ */
  CHAR_LINE_FEED: 10,

  /* \n */
  CHAR_NO_BREAK_SPACE: 160,

  /* \u00A0 */
  CHAR_PERCENT: 37,

  /* % */
  CHAR_PLUS: 43,

  /* + */
  CHAR_QUESTION_MARK: 63,

  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62,

  /* > */
  CHAR_RIGHT_CURLY_BRACE: 125,

  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93,

  /* ] */
  CHAR_SEMICOLON: 59,

  /* ; */
  CHAR_SINGLE_QUOTE: 39,

  /* ' */
  CHAR_SPACE: 32,

  /*   */
  CHAR_TAB: 9,

  /* \t */
  CHAR_UNDERSCORE: 95,

  /* _ */
  CHAR_VERTICAL_LINE: 124,

  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,

  /* \uFEFF */
  SEP: path.sep,

  /**
   * Create EXTGLOB_CHARS
   */
  extglobChars: function extglobChars(chars) {
    return {
      '!': {
        type: 'negate',
        open: '(?:(?!(?:',
        close: "))".concat(chars.STAR, ")")
      },
      '?': {
        type: 'qmark',
        open: '(?:',
        close: ')?'
      },
      '+': {
        type: 'plus',
        open: '(?:',
        close: ')+'
      },
      '*': {
        type: 'star',
        open: '(?:',
        close: ')*'
      },
      '@': {
        type: 'at',
        open: '(?:',
        close: ')'
      }
    };
  },

  /**
   * Create GLOB_CHARS
   */
  globChars: function globChars(win32) {
    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
  }
};

/***/ }),

/***/ 1932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _objectSpread = (__webpack_require__(279)["default"]);

var _toConsumableArray = (__webpack_require__(4434)["default"]);

var constants = __webpack_require__(4746);

var utils = __webpack_require__(8595);
/**
 * Constants
 */


var MAX_LENGTH = constants.MAX_LENGTH,
    POSIX_REGEX_SOURCE = constants.POSIX_REGEX_SOURCE,
    REGEX_NON_SPECIAL_CHARS = constants.REGEX_NON_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_BACKREF = constants.REGEX_SPECIAL_CHARS_BACKREF,
    REPLACEMENTS = constants.REPLACEMENTS;
/**
 * Helpers
 */

var expandRange = function expandRange(args, options) {
  if (typeof options.expandRange === 'function') {
    return options.expandRange.apply(options, _toConsumableArray(args).concat([options]));
  }

  args.sort();
  var value = "[".concat(args.join('-'), "]");

  try {
    /* eslint-disable-next-line no-new */
    new RegExp(value);
  } catch (ex) {
    return args.map(function (v) {
      return utils.escapeRegex(v);
    }).join('..');
  }

  return value;
};
/**
 * Create the message for a syntax error
 */


var syntaxError = function syntaxError(type, _char) {
  return "Missing ".concat(type, ": \"").concat(_char, "\" - use \"\\\\").concat(_char, "\" to match literal characters");
};
/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */


var parse = function parse(input, options) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }

  input = REPLACEMENTS[input] || input;

  var opts = _objectSpread({}, options);

  var max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  var len = input.length;

  if (len > max) {
    throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
  }

  var bos = {
    type: 'bos',
    value: '',
    output: opts.prepend || ''
  };
  var tokens = [bos];
  var capture = opts.capture ? '' : '?:';
  var win32 = utils.isWindows(options); // create constants based on platform, for windows or posix

  var PLATFORM_CHARS = constants.globChars(win32);
  var EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
  var DOT_LITERAL = PLATFORM_CHARS.DOT_LITERAL,
      PLUS_LITERAL = PLATFORM_CHARS.PLUS_LITERAL,
      SLASH_LITERAL = PLATFORM_CHARS.SLASH_LITERAL,
      ONE_CHAR = PLATFORM_CHARS.ONE_CHAR,
      DOTS_SLASH = PLATFORM_CHARS.DOTS_SLASH,
      NO_DOT = PLATFORM_CHARS.NO_DOT,
      NO_DOT_SLASH = PLATFORM_CHARS.NO_DOT_SLASH,
      NO_DOTS_SLASH = PLATFORM_CHARS.NO_DOTS_SLASH,
      QMARK = PLATFORM_CHARS.QMARK,
      QMARK_NO_DOT = PLATFORM_CHARS.QMARK_NO_DOT,
      STAR = PLATFORM_CHARS.STAR,
      START_ANCHOR = PLATFORM_CHARS.START_ANCHOR;

  var globstar = function globstar(opts) {
    return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
  };

  var nodot = opts.dot ? '' : NO_DOT;
  var qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
  var star = opts.bash === true ? globstar(opts) : STAR;

  if (opts.capture) {
    star = "(".concat(star, ")");
  } // minimatch options support


  if (typeof opts.noext === 'boolean') {
    opts.noextglob = opts.noext;
  }

  var state = {
    input: input,
    index: -1,
    start: 0,
    dot: opts.dot === true,
    consumed: '',
    output: '',
    prefix: '',
    backtrack: false,
    negated: false,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: false,
    tokens: tokens
  };
  input = utils.removePrefix(input, state);
  len = input.length;
  var extglobs = [];
  var braces = [];
  var stack = [];
  var prev = bos;
  var value;
  /**
   * Tokenizing helpers
   */

  var eos = function eos() {
    return state.index === len - 1;
  };

  var peek = state.peek = function () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return input[state.index + n];
  };

  var advance = state.advance = function () {
    return input[++state.index] || '';
  };

  var remaining = function remaining() {
    return input.slice(state.index + 1);
  };

  var consume = function consume() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    state.consumed += value;
    state.index += num;
  };

  var append = function append(token) {
    state.output += token.output != null ? token.output : token.value;
    consume(token.value);
  };

  var negate = function negate() {
    var count = 1;

    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
      advance();
      state.start++;
      count++;
    }

    if (count % 2 === 0) {
      return false;
    }

    state.negated = true;
    state.start++;
    return true;
  };

  var increment = function increment(type) {
    state[type]++;
    stack.push(type);
  };

  var decrement = function decrement(type) {
    state[type]--;
    stack.pop();
  };
  /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */


  var push = function push(tok) {
    if (prev.type === 'globstar') {
      var isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
      var isExtglob = tok.extglob === true || extglobs.length && (tok.type === 'pipe' || tok.type === 'paren');

      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = 'star';
        prev.value = '*';
        prev.output = star;
        state.output += prev.output;
      }
    }

    if (extglobs.length && tok.type !== 'paren') {
      extglobs[extglobs.length - 1].inner += tok.value;
    }

    if (tok.value || tok.output) append(tok);

    if (prev && prev.type === 'text' && tok.type === 'text') {
      prev.value += tok.value;
      prev.output = (prev.output || '') + tok.value;
      return;
    }

    tok.prev = prev;
    tokens.push(tok);
    prev = tok;
  };

  var extglobOpen = function extglobOpen(type, value) {
    var token = _objectSpread(_objectSpread({}, EXTGLOB_CHARS[value]), {}, {
      conditions: 1,
      inner: ''
    });

    token.prev = prev;
    token.parens = state.parens;
    token.output = state.output;
    var output = (opts.capture ? '(' : '') + token.open;
    increment('parens');
    push({
      type: type,
      value: value,
      output: state.output ? '' : ONE_CHAR
    });
    push({
      type: 'paren',
      extglob: true,
      value: advance(),
      output: output
    });
    extglobs.push(token);
  };

  var extglobClose = function extglobClose(token) {
    var output = token.close + (opts.capture ? ')' : '');
    var rest;

    if (token.type === 'negate') {
      var extglobStar = star;

      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
        extglobStar = globstar(opts);
      }

      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
        output = token.close = ")$))".concat(extglobStar);
      }

      if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
        // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
        // In this case, we need to parse the string and use it in the output of the original pattern.
        // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
        //
        // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
        var expression = parse(rest, _objectSpread(_objectSpread({}, options), {}, {
          fastpaths: false
        })).output;
        output = token.close = ")".concat(expression, ")").concat(extglobStar, ")");
      }

      if (token.prev.type === 'bos') {
        state.negatedExtglob = true;
      }
    }

    push({
      type: 'paren',
      extglob: true,
      value: value,
      output: output
    });
    decrement('parens');
  };
  /**
   * Fast paths
   */


  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
    var backslashes = false;
    var output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, function (m, esc, chars, first, rest, index) {
      if (first === '\\') {
        backslashes = true;
        return m;
      }

      if (first === '?') {
        if (esc) {
          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
        }

        if (index === 0) {
          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
        }

        return QMARK.repeat(chars.length);
      }

      if (first === '.') {
        return DOT_LITERAL.repeat(chars.length);
      }

      if (first === '*') {
        if (esc) {
          return esc + first + (rest ? star : '');
        }

        return star;
      }

      return esc ? m : "\\".concat(m);
    });

    if (backslashes === true) {
      if (opts.unescape === true) {
        output = output.replace(/\\/g, '');
      } else {
        output = output.replace(/\\+/g, function (m) {
          return m.length % 2 === 0 ? '\\\\' : m ? '\\' : '';
        });
      }
    }

    if (output === input && opts.contains === true) {
      state.output = input;
      return state;
    }

    state.output = utils.wrapOutput(output, state, options);
    return state;
  }
  /**
   * Tokenize input until we reach end-of-string
   */


  while (!eos()) {
    value = advance();

    if (value === "\0") {
      continue;
    }
    /**
     * Escaped characters
     */


    if (value === '\\') {
      var next = peek();

      if (next === '/' && opts.bash !== true) {
        continue;
      }

      if (next === '.' || next === ';') {
        continue;
      }

      if (!next) {
        value += '\\';
        push({
          type: 'text',
          value: value
        });
        continue;
      } // collapse slashes to reduce potential for exploits


      var match = /^\\+/.exec(remaining());
      var slashes = 0;

      if (match && match[0].length > 2) {
        slashes = match[0].length;
        state.index += slashes;

        if (slashes % 2 !== 0) {
          value += '\\';
        }
      }

      if (opts.unescape === true) {
        value = advance();
      } else {
        value += advance();
      }

      if (state.brackets === 0) {
        push({
          type: 'text',
          value: value
        });
        continue;
      }
    }
    /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */


    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
      if (opts.posix !== false && value === ':') {
        var inner = prev.value.slice(1);

        if (inner.includes('[')) {
          prev.posix = true;

          if (inner.includes(':')) {
            var idx = prev.value.lastIndexOf('[');
            var pre = prev.value.slice(0, idx);

            var _rest = prev.value.slice(idx + 2);

            var posix = POSIX_REGEX_SOURCE[_rest];

            if (posix) {
              prev.value = pre + posix;
              state.backtrack = true;
              advance();

              if (!bos.output && tokens.indexOf(prev) === 1) {
                bos.output = ONE_CHAR;
              }

              continue;
            }
          }
        }
      }

      if (value === '[' && peek() !== ':' || value === '-' && peek() === ']') {
        value = "\\".concat(value);
      }

      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
        value = "\\".concat(value);
      }

      if (opts.posix === true && value === '!' && prev.value === '[') {
        value = '^';
      }

      prev.value += value;
      append({
        value: value
      });
      continue;
    }
    /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */


    if (state.quotes === 1 && value !== '"') {
      value = utils.escapeRegex(value);
      prev.value += value;
      append({
        value: value
      });
      continue;
    }
    /**
     * Double quotes
     */


    if (value === '"') {
      state.quotes = state.quotes === 1 ? 0 : 1;

      if (opts.keepQuotes === true) {
        push({
          type: 'text',
          value: value
        });
      }

      continue;
    }
    /**
     * Parentheses
     */


    if (value === '(') {
      increment('parens');
      push({
        type: 'paren',
        value: value
      });
      continue;
    }

    if (value === ')') {
      if (state.parens === 0 && opts.strictBrackets === true) {
        throw new SyntaxError(syntaxError('opening', '('));
      }

      var extglob = extglobs[extglobs.length - 1];

      if (extglob && state.parens === extglob.parens + 1) {
        extglobClose(extglobs.pop());
        continue;
      }

      push({
        type: 'paren',
        value: value,
        output: state.parens ? ')' : '\\)'
      });
      decrement('parens');
      continue;
    }
    /**
     * Square brackets
     */


    if (value === '[') {
      if (opts.nobracket === true || !remaining().includes(']')) {
        if (opts.nobracket !== true && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('closing', ']'));
        }

        value = "\\".concat(value);
      } else {
        increment('brackets');
      }

      push({
        type: 'bracket',
        value: value
      });
      continue;
    }

    if (value === ']') {
      if (opts.nobracket === true || prev && prev.type === 'bracket' && prev.value.length === 1) {
        push({
          type: 'text',
          value: value,
          output: "\\".concat(value)
        });
        continue;
      }

      if (state.brackets === 0) {
        if (opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('opening', '['));
        }

        push({
          type: 'text',
          value: value,
          output: "\\".concat(value)
        });
        continue;
      }

      decrement('brackets');
      var prevValue = prev.value.slice(1);

      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
        value = "/".concat(value);
      }

      prev.value += value;
      append({
        value: value
      }); // when literal brackets are explicitly disabled
      // assume we should match with a regex character class

      if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
        continue;
      }

      var escaped = utils.escapeRegex(prev.value);
      state.output = state.output.slice(0, -prev.value.length); // when literal brackets are explicitly enabled
      // assume we should escape the brackets to match literal characters

      if (opts.literalBrackets === true) {
        state.output += escaped;
        prev.value = escaped;
        continue;
      } // when the user specifies nothing, try to match both


      prev.value = "(".concat(capture).concat(escaped, "|").concat(prev.value, ")");
      state.output += prev.value;
      continue;
    }
    /**
     * Braces
     */


    if (value === '{' && opts.nobrace !== true) {
      increment('braces');
      var open = {
        type: 'brace',
        value: value,
        output: '(',
        outputIndex: state.output.length,
        tokensIndex: state.tokens.length
      };
      braces.push(open);
      push(open);
      continue;
    }

    if (value === '}') {
      var brace = braces[braces.length - 1];

      if (opts.nobrace === true || !brace) {
        push({
          type: 'text',
          value: value,
          output: value
        });
        continue;
      }

      var _output = ')';

      if (brace.dots === true) {
        var arr = tokens.slice();
        var range = [];

        for (var i = arr.length - 1; i >= 0; i--) {
          tokens.pop();

          if (arr[i].type === 'brace') {
            break;
          }

          if (arr[i].type !== 'dots') {
            range.unshift(arr[i].value);
          }
        }

        _output = expandRange(range, opts);
        state.backtrack = true;
      }

      if (brace.comma !== true && brace.dots !== true) {
        var out = state.output.slice(0, brace.outputIndex);
        var toks = state.tokens.slice(brace.tokensIndex);
        brace.value = brace.output = '\\{';
        value = _output = '\\}';
        state.output = out;

        var _iterator = _createForOfIteratorHelper(toks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var t = _step.value;
            state.output += t.output || t.value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      push({
        type: 'brace',
        value: value,
        output: _output
      });
      decrement('braces');
      braces.pop();
      continue;
    }
    /**
     * Pipes
     */


    if (value === '|') {
      if (extglobs.length > 0) {
        extglobs[extglobs.length - 1].conditions++;
      }

      push({
        type: 'text',
        value: value
      });
      continue;
    }
    /**
     * Commas
     */


    if (value === ',') {
      var _output2 = value;
      var _brace = braces[braces.length - 1];

      if (_brace && stack[stack.length - 1] === 'braces') {
        _brace.comma = true;
        _output2 = '|';
      }

      push({
        type: 'comma',
        value: value,
        output: _output2
      });
      continue;
    }
    /**
     * Slashes
     */


    if (value === '/') {
      // if the beginning of the glob is "./", advance the start
      // to the current index, and don't add the "./" characters
      // to the state. This greatly simplifies lookbehinds when
      // checking for BOS characters like "!" and "." (not "./")
      if (prev.type === 'dot' && state.index === state.start + 1) {
        state.start = state.index + 1;
        state.consumed = '';
        state.output = '';
        tokens.pop();
        prev = bos; // reset "prev" to the first token

        continue;
      }

      push({
        type: 'slash',
        value: value,
        output: SLASH_LITERAL
      });
      continue;
    }
    /**
     * Dots
     */


    if (value === '.') {
      if (state.braces > 0 && prev.type === 'dot') {
        if (prev.value === '.') prev.output = DOT_LITERAL;
        var _brace2 = braces[braces.length - 1];
        prev.type = 'dots';
        prev.output += value;
        prev.value += value;
        _brace2.dots = true;
        continue;
      }

      if (state.braces + state.parens === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
        push({
          type: 'text',
          value: value,
          output: DOT_LITERAL
        });
        continue;
      }

      push({
        type: 'dot',
        value: value,
        output: DOT_LITERAL
      });
      continue;
    }
    /**
     * Question marks
     */


    if (value === '?') {
      var isGroup = prev && prev.value === '(';

      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('qmark', value);
        continue;
      }

      if (prev && prev.type === 'paren') {
        var _next = peek();

        var _output3 = value;

        if (_next === '<' && !utils.supportsLookbehinds()) {
          throw new Error('Node.js v10 or higher is required for regex lookbehinds');
        }

        if (prev.value === '(' && !/[!=<:]/.test(_next) || _next === '<' && !/<([!=]|\w+>)/.test(remaining())) {
          _output3 = "\\".concat(value);
        }

        push({
          type: 'text',
          value: value,
          output: _output3
        });
        continue;
      }

      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
        push({
          type: 'qmark',
          value: value,
          output: QMARK_NO_DOT
        });
        continue;
      }

      push({
        type: 'qmark',
        value: value,
        output: QMARK
      });
      continue;
    }
    /**
     * Exclamation
     */


    if (value === '!') {
      if (opts.noextglob !== true && peek() === '(') {
        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
          extglobOpen('negate', value);
          continue;
        }
      }

      if (opts.nonegate !== true && state.index === 0) {
        negate();
        continue;
      }
    }
    /**
     * Plus
     */


    if (value === '+') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('plus', value);
        continue;
      }

      if (prev && prev.value === '(' || opts.regex === false) {
        push({
          type: 'plus',
          value: value,
          output: PLUS_LITERAL
        });
        continue;
      }

      if (prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace') || state.parens > 0) {
        push({
          type: 'plus',
          value: value
        });
        continue;
      }

      push({
        type: 'plus',
        value: PLUS_LITERAL
      });
      continue;
    }
    /**
     * Plain text
     */


    if (value === '@') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        push({
          type: 'at',
          extglob: true,
          value: value,
          output: ''
        });
        continue;
      }

      push({
        type: 'text',
        value: value
      });
      continue;
    }
    /**
     * Plain text
     */


    if (value !== '*') {
      if (value === '$' || value === '^') {
        value = "\\".concat(value);
      }

      var _match = REGEX_NON_SPECIAL_CHARS.exec(remaining());

      if (_match) {
        value += _match[0];
        state.index += _match[0].length;
      }

      push({
        type: 'text',
        value: value
      });
      continue;
    }
    /**
     * Stars
     */


    if (prev && (prev.type === 'globstar' || prev.star === true)) {
      prev.type = 'star';
      prev.star = true;
      prev.value += value;
      prev.output = star;
      state.backtrack = true;
      state.globstar = true;
      consume(value);
      continue;
    }

    var rest = remaining();

    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
      extglobOpen('star', value);
      continue;
    }

    if (prev.type === 'star') {
      if (opts.noglobstar === true) {
        consume(value);
        continue;
      }

      var prior = prev.prev;
      var before = prior.prev;
      var isStart = prior.type === 'slash' || prior.type === 'bos';
      var afterStar = before && (before.type === 'star' || before.type === 'globstar');

      if (opts.bash === true && (!isStart || rest[0] && rest[0] !== '/')) {
        push({
          type: 'star',
          value: value,
          output: ''
        });
        continue;
      }

      var isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
      var isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');

      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
        push({
          type: 'star',
          value: value,
          output: ''
        });
        continue;
      } // strip consecutive `/**/`


      while (rest.slice(0, 3) === '/**') {
        var after = input[state.index + 4];

        if (after && after !== '/') {
          break;
        }

        rest = rest.slice(3);
        consume('/**', 3);
      }

      if (prior.type === 'bos' && eos()) {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = globstar(opts);
        state.output = prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = "(?:".concat(prior.output);
        prev.type = 'globstar';
        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
        prev.value += value;
        state.globstar = true;
        state.output += prior.output + prev.output;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
        var end = rest[1] !== void 0 ? '|$' : '';
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = "(?:".concat(prior.output);
        prev.type = 'globstar';
        prev.output = "".concat(globstar(opts)).concat(SLASH_LITERAL, "|").concat(SLASH_LITERAL).concat(end, ")");
        prev.value += value;
        state.output += prior.output + prev.output;
        state.globstar = true;
        consume(value + advance());
        push({
          type: 'slash',
          value: '/',
          output: ''
        });
        continue;
      }

      if (prior.type === 'bos' && rest[0] === '/') {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = "(?:^|".concat(SLASH_LITERAL, "|").concat(globstar(opts)).concat(SLASH_LITERAL, ")");
        state.output = prev.output;
        state.globstar = true;
        consume(value + advance());
        push({
          type: 'slash',
          value: '/',
          output: ''
        });
        continue;
      } // remove single star from output


      state.output = state.output.slice(0, -prev.output.length); // reset previous token to globstar

      prev.type = 'globstar';
      prev.output = globstar(opts);
      prev.value += value; // reset output with globstar

      state.output += prev.output;
      state.globstar = true;
      consume(value);
      continue;
    }

    var token = {
      type: 'star',
      value: value,
      output: star
    };

    if (opts.bash === true) {
      token.output = '.*?';

      if (prev.type === 'bos' || prev.type === 'slash') {
        token.output = nodot + token.output;
      }

      push(token);
      continue;
    }

    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
      token.output = value;
      push(token);
      continue;
    }

    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
      if (prev.type === 'dot') {
        state.output += NO_DOT_SLASH;
        prev.output += NO_DOT_SLASH;
      } else if (opts.dot === true) {
        state.output += NO_DOTS_SLASH;
        prev.output += NO_DOTS_SLASH;
      } else {
        state.output += nodot;
        prev.output += nodot;
      }

      if (peek() !== '*') {
        state.output += ONE_CHAR;
        prev.output += ONE_CHAR;
      }
    }

    push(token);
  }

  while (state.brackets > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
    state.output = utils.escapeLast(state.output, '[');
    decrement('brackets');
  }

  while (state.parens > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
    state.output = utils.escapeLast(state.output, '(');
    decrement('parens');
  }

  while (state.braces > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
    state.output = utils.escapeLast(state.output, '{');
    decrement('braces');
  }

  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
    push({
      type: 'maybe_slash',
      value: '',
      output: "".concat(SLASH_LITERAL, "?")
    });
  } // rebuild the output if we had to backtrack at any point


  if (state.backtrack === true) {
    state.output = '';

    var _iterator2 = _createForOfIteratorHelper(state.tokens),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _token = _step2.value;
        state.output += _token.output != null ? _token.output : _token.value;

        if (_token.suffix) {
          state.output += _token.suffix;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return state;
};
/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */


parse.fastpaths = function (input, options) {
  var opts = _objectSpread({}, options);

  var max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  var len = input.length;

  if (len > max) {
    throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
  }

  input = REPLACEMENTS[input] || input;
  var win32 = utils.isWindows(options); // create constants based on platform, for windows or posix

  var _constants$globChars = constants.globChars(win32),
      DOT_LITERAL = _constants$globChars.DOT_LITERAL,
      SLASH_LITERAL = _constants$globChars.SLASH_LITERAL,
      ONE_CHAR = _constants$globChars.ONE_CHAR,
      DOTS_SLASH = _constants$globChars.DOTS_SLASH,
      NO_DOT = _constants$globChars.NO_DOT,
      NO_DOTS = _constants$globChars.NO_DOTS,
      NO_DOTS_SLASH = _constants$globChars.NO_DOTS_SLASH,
      STAR = _constants$globChars.STAR,
      START_ANCHOR = _constants$globChars.START_ANCHOR;

  var nodot = opts.dot ? NO_DOTS : NO_DOT;
  var slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
  var capture = opts.capture ? '' : '?:';
  var state = {
    negated: false,
    prefix: ''
  };
  var star = opts.bash === true ? '.*?' : STAR;

  if (opts.capture) {
    star = "(".concat(star, ")");
  }

  var globstar = function globstar(opts) {
    if (opts.noglobstar === true) return star;
    return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
  };

  var create = function create(str) {
    switch (str) {
      case '*':
        return "".concat(nodot).concat(ONE_CHAR).concat(star);

      case '.*':
        return "".concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

      case '*.*':
        return "".concat(nodot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

      case '*/*':
        return "".concat(nodot).concat(star).concat(SLASH_LITERAL).concat(ONE_CHAR).concat(slashDot).concat(star);

      case '**':
        return nodot + globstar(opts);

      case '**/*':
        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(ONE_CHAR).concat(star);

      case '**/*.*':
        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

      case '**/.*':
        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);

      default:
        {
          var match = /^(.*?)\.(\w+)$/.exec(str);
          if (!match) return;

          var _source = create(match[1]);

          if (!_source) return;
          return _source + DOT_LITERAL + match[2];
        }
    }
  };

  var output = utils.removePrefix(input, state);
  var source = create(output);

  if (source && opts.strictSlashes !== true) {
    source += "".concat(SLASH_LITERAL, "?");
  }

  return source;
};

module.exports = parse;

/***/ }),

/***/ 8282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _objectSpread = (__webpack_require__(279)["default"]);

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var path = __webpack_require__(1017);

var scan = __webpack_require__(6797);

var parse = __webpack_require__(1932);

var utils = __webpack_require__(8595);

var constants = __webpack_require__(4746);

var isObject = function isObject(val) {
  return val && typeof val === 'object' && !Array.isArray(val);
};
/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */


var picomatch = function picomatch(glob, options) {
  var returnState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (Array.isArray(glob)) {
    var fns = glob.map(function (input) {
      return picomatch(input, options, returnState);
    });

    var arrayMatcher = function arrayMatcher(str) {
      var _iterator = _createForOfIteratorHelper(fns),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var isMatch = _step.value;

          var _state = isMatch(str);

          if (_state) return _state;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    };

    return arrayMatcher;
  }

  var isState = isObject(glob) && glob.tokens && glob.input;

  if (glob === '' || typeof glob !== 'string' && !isState) {
    throw new TypeError('Expected pattern to be a non-empty string');
  }

  var opts = options || {};
  var posix = utils.isWindows(options);
  var regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
  var state = regex.state;
  delete regex.state;

  var isIgnored = function isIgnored() {
    return false;
  };

  if (opts.ignore) {
    var ignoreOpts = _objectSpread(_objectSpread({}, options), {}, {
      ignore: null,
      onMatch: null,
      onResult: null
    });

    isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
  }

  var matcher = function matcher(input) {
    var returnObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _picomatch$test = picomatch.test(input, regex, options, {
      glob: glob,
      posix: posix
    }),
        isMatch = _picomatch$test.isMatch,
        match = _picomatch$test.match,
        output = _picomatch$test.output;

    var result = {
      glob: glob,
      state: state,
      regex: regex,
      posix: posix,
      input: input,
      output: output,
      match: match,
      isMatch: isMatch
    };

    if (typeof opts.onResult === 'function') {
      opts.onResult(result);
    }

    if (isMatch === false) {
      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (isIgnored(input)) {
      if (typeof opts.onIgnore === 'function') {
        opts.onIgnore(result);
      }

      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (typeof opts.onMatch === 'function') {
      opts.onMatch(result);
    }

    return returnObject ? result : true;
  };

  if (returnState) {
    matcher.state = state;
  }

  return matcher;
};
/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */


picomatch.test = function (input, regex, options) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      glob = _ref.glob,
      posix = _ref.posix;

  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be a string');
  }

  if (input === '') {
    return {
      isMatch: false,
      output: ''
    };
  }

  var opts = options || {};
  var format = opts.format || (posix ? utils.toPosixSlashes : null);
  var match = input === glob;
  var output = match && format ? format(input) : input;

  if (match === false) {
    output = format ? format(input) : input;
    match = output === glob;
  }

  if (match === false || opts.capture === true) {
    if (opts.matchBase === true || opts.basename === true) {
      match = picomatch.matchBase(input, regex, options, posix);
    } else {
      match = regex.exec(output);
    }
  }

  return {
    isMatch: Boolean(match),
    match: match,
    output: output
  };
};
/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */


picomatch.matchBase = function (input, glob, options) {
  var posix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : utils.isWindows(options);
  var regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
  return regex.test(path.basename(input));
};
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */


picomatch.isMatch = function (str, patterns, options) {
  return picomatch(patterns, options)(str);
};
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */


picomatch.parse = function (pattern, options) {
  if (Array.isArray(pattern)) return pattern.map(function (p) {
    return picomatch.parse(p, options);
  });
  return parse(pattern, _objectSpread(_objectSpread({}, options), {}, {
    fastpaths: false
  }));
};
/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */


picomatch.scan = function (input, options) {
  return scan(input, options);
};
/**
 * Compile a regular expression from the `state` object returned by the
 * [parse()](#parse) method.
 *
 * @param {Object} `state`
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
 * @return {RegExp}
 * @api public
 */


picomatch.compileRe = function (state, options) {
  var returnOutput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var returnState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (returnOutput === true) {
    return state.output;
  }

  var opts = options || {};
  var prepend = opts.contains ? '' : '^';
  var append = opts.contains ? '' : '$';
  var source = "".concat(prepend, "(?:").concat(state.output, ")").concat(append);

  if (state && state.negated === true) {
    source = "^(?!".concat(source, ").*$");
  }

  var regex = picomatch.toRegex(source, options);

  if (returnState === true) {
    regex.state = state;
  }

  return regex;
};
/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */


picomatch.makeRe = function (input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var returnOutput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var returnState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!input || typeof input !== 'string') {
    throw new TypeError('Expected a non-empty string');
  }

  var parsed = {
    negated: false,
    fastpaths: true
  };

  if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
    parsed.output = parse.fastpaths(input, options);
  }

  if (!parsed.output) {
    parsed = parse(input, options);
  }

  return picomatch.compileRe(parsed, options, returnOutput, returnState);
};
/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */


picomatch.toRegex = function (source, options) {
  try {
    var opts = options || {};
    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
  } catch (err) {
    if (options && options.debug === true) throw err;
    return /$^/;
  }
};
/**
 * Picomatch constants.
 * @return {Object}
 */


picomatch.constants = constants;
/**
 * Expose "picomatch"
 */

module.exports = picomatch;

/***/ }),

/***/ 6797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(8595);

var _require = __webpack_require__(4746),
    CHAR_ASTERISK = _require.CHAR_ASTERISK,
    CHAR_AT = _require.CHAR_AT,
    CHAR_BACKWARD_SLASH = _require.CHAR_BACKWARD_SLASH,
    CHAR_COMMA = _require.CHAR_COMMA,
    CHAR_DOT = _require.CHAR_DOT,
    CHAR_EXCLAMATION_MARK = _require.CHAR_EXCLAMATION_MARK,
    CHAR_FORWARD_SLASH = _require.CHAR_FORWARD_SLASH,
    CHAR_LEFT_CURLY_BRACE = _require.CHAR_LEFT_CURLY_BRACE,
    CHAR_LEFT_PARENTHESES = _require.CHAR_LEFT_PARENTHESES,
    CHAR_LEFT_SQUARE_BRACKET = _require.CHAR_LEFT_SQUARE_BRACKET,
    CHAR_PLUS = _require.CHAR_PLUS,
    CHAR_QUESTION_MARK = _require.CHAR_QUESTION_MARK,
    CHAR_RIGHT_CURLY_BRACE = _require.CHAR_RIGHT_CURLY_BRACE,
    CHAR_RIGHT_PARENTHESES = _require.CHAR_RIGHT_PARENTHESES,
    CHAR_RIGHT_SQUARE_BRACKET = _require.CHAR_RIGHT_SQUARE_BRACKET;

var isPathSeparator = function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};

var depth = function depth(token) {
  if (token.isPrefix !== true) {
    token.depth = token.isGlobstar ? Infinity : 1;
  }
};
/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */


var scan = function scan(input, options) {
  var opts = options || {};
  var length = input.length - 1;
  var scanToEnd = opts.parts === true || opts.scanToEnd === true;
  var slashes = [];
  var tokens = [];
  var parts = [];
  var str = input;
  var index = -1;
  var start = 0;
  var lastIndex = 0;
  var isBrace = false;
  var isBracket = false;
  var isGlob = false;
  var isExtglob = false;
  var isGlobstar = false;
  var braceEscaped = false;
  var backslashes = false;
  var negated = false;
  var negatedExtglob = false;
  var finished = false;
  var braces = 0;
  var prev;
  var code;
  var token = {
    value: '',
    depth: 0,
    isGlob: false
  };

  var eos = function eos() {
    return index >= length;
  };

  var peek = function peek() {
    return str.charCodeAt(index + 1);
  };

  var advance = function advance() {
    prev = code;
    return str.charCodeAt(++index);
  };

  while (index < length) {
    code = advance();
    var next = void 0;

    if (code === CHAR_BACKWARD_SLASH) {
      backslashes = token.backslashes = true;
      code = advance();

      if (code === CHAR_LEFT_CURLY_BRACE) {
        braceEscaped = true;
      }

      continue;
    }

    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
      braces++;

      while (eos() !== true && (code = advance())) {
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          continue;
        }

        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (braceEscaped !== true && code === CHAR_COMMA) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (code === CHAR_RIGHT_CURLY_BRACE) {
          braces--;

          if (braces === 0) {
            braceEscaped = false;
            isBrace = token.isBrace = true;
            finished = true;
            break;
          }
        }
      }

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_FORWARD_SLASH) {
      slashes.push(index);
      tokens.push(token);
      token = {
        value: '',
        depth: 0,
        isGlob: false
      };
      if (finished === true) continue;

      if (prev === CHAR_DOT && index === start + 1) {
        start += 2;
        continue;
      }

      lastIndex = index + 1;
      continue;
    }

    if (opts.noext !== true) {
      var isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;

      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
        isGlob = token.isGlob = true;
        isExtglob = token.isExtglob = true;
        finished = true;

        if (code === CHAR_EXCLAMATION_MARK && index === start) {
          negatedExtglob = true;
        }

        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }

            if (code === CHAR_RIGHT_PARENTHESES) {
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }

          continue;
        }

        break;
      }
    }

    if (code === CHAR_ASTERISK) {
      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_QUESTION_MARK) {
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_LEFT_SQUARE_BRACKET) {
      while (eos() !== true && (next = advance())) {
        if (next === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          isBracket = token.isBracket = true;
          isGlob = token.isGlob = true;
          finished = true;
          break;
        }
      }

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
      negated = token.negated = true;
      start++;
      continue;
    }

    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
      isGlob = token.isGlob = true;

      if (scanToEnd === true) {
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_LEFT_PARENTHESES) {
            backslashes = token.backslashes = true;
            code = advance();
            continue;
          }

          if (code === CHAR_RIGHT_PARENTHESES) {
            finished = true;
            break;
          }
        }

        continue;
      }

      break;
    }

    if (isGlob === true) {
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }
  }

  if (opts.noext === true) {
    isExtglob = false;
    isGlob = false;
  }

  var base = str;
  var prefix = '';
  var glob = '';

  if (start > 0) {
    prefix = str.slice(0, start);
    str = str.slice(start);
    lastIndex -= start;
  }

  if (base && isGlob === true && lastIndex > 0) {
    base = str.slice(0, lastIndex);
    glob = str.slice(lastIndex);
  } else if (isGlob === true) {
    base = '';
    glob = str;
  } else {
    base = str;
  }

  if (base && base !== '' && base !== '/' && base !== str) {
    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
      base = base.slice(0, -1);
    }
  }

  if (opts.unescape === true) {
    if (glob) glob = utils.removeBackslashes(glob);

    if (base && backslashes === true) {
      base = utils.removeBackslashes(base);
    }
  }

  var state = {
    prefix: prefix,
    input: input,
    start: start,
    base: base,
    glob: glob,
    isBrace: isBrace,
    isBracket: isBracket,
    isGlob: isGlob,
    isExtglob: isExtglob,
    isGlobstar: isGlobstar,
    negated: negated,
    negatedExtglob: negatedExtglob
  };

  if (opts.tokens === true) {
    state.maxDepth = 0;

    if (!isPathSeparator(code)) {
      tokens.push(token);
    }

    state.tokens = tokens;
  }

  if (opts.parts === true || opts.tokens === true) {
    var prevIndex;

    for (var idx = 0; idx < slashes.length; idx++) {
      var n = prevIndex ? prevIndex + 1 : start;
      var i = slashes[idx];
      var value = input.slice(n, i);

      if (opts.tokens) {
        if (idx === 0 && start !== 0) {
          tokens[idx].isPrefix = true;
          tokens[idx].value = prefix;
        } else {
          tokens[idx].value = value;
        }

        depth(tokens[idx]);
        state.maxDepth += tokens[idx].depth;
      }

      if (idx !== 0 || value !== '') {
        parts.push(value);
      }

      prevIndex = i;
    }

    if (prevIndex && prevIndex + 1 < input.length) {
      var _value = input.slice(prevIndex + 1);

      parts.push(_value);

      if (opts.tokens) {
        tokens[tokens.length - 1].value = _value;
        depth(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
    }

    state.slashes = slashes;
    state.parts = parts;
  }

  return state;
};

module.exports = scan;

/***/ }),

/***/ 8595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var path = __webpack_require__(1017);

var win32 = process.platform === 'win32';

var _require = __webpack_require__(4746),
    REGEX_BACKSLASH = _require.REGEX_BACKSLASH,
    REGEX_REMOVE_BACKSLASH = _require.REGEX_REMOVE_BACKSLASH,
    REGEX_SPECIAL_CHARS = _require.REGEX_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_GLOBAL = _require.REGEX_SPECIAL_CHARS_GLOBAL;

exports.isObject = function (val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
};

exports.hasRegexChars = function (str) {
  return REGEX_SPECIAL_CHARS.test(str);
};

exports.isRegexChar = function (str) {
  return str.length === 1 && exports.hasRegexChars(str);
};

exports.escapeRegex = function (str) {
  return str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
};

exports.toPosixSlashes = function (str) {
  return str.replace(REGEX_BACKSLASH, '/');
};

exports.removeBackslashes = function (str) {
  return str.replace(REGEX_REMOVE_BACKSLASH, function (match) {
    return match === '\\' ? '' : match;
  });
};

exports.supportsLookbehinds = function () {
  var segs = process.version.slice(1).split('.').map(Number);

  if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
    return true;
  }

  return false;
};

exports.isWindows = function (options) {
  if (options && typeof options.windows === 'boolean') {
    return options.windows;
  }

  return win32 === true || path.sep === '\\';
};

exports.escapeLast = function (input, _char, lastIdx) {
  var idx = input.lastIndexOf(_char, lastIdx);
  if (idx === -1) return input;
  if (input[idx - 1] === '\\') return exports.escapeLast(input, _char, idx - 1);
  return "".concat(input.slice(0, idx), "\\").concat(input.slice(idx));
};

exports.removePrefix = function (input) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var output = input;

  if (output.startsWith('./')) {
    output = output.slice(2);
    state.prefix = './';
  }

  return output;
};

exports.wrapOutput = function (input) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var prepend = options.contains ? '' : '^';
  var append = options.contains ? '' : '$';
  var output = "".concat(prepend, "(?:").concat(input, ")").concat(append);

  if (state.negated === true) {
    output = "(?:^(?!".concat(output, ").*$)");
  }

  return output;
};

/***/ }),

/***/ 8141:
/***/ ((module) => {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var promise;
module.exports = typeof queueMicrotask === 'function' ? queueMicrotask.bind(typeof window !== 'undefined' ? window : global) // reuse resolved promise, and allocate it lazily
: function (cb) {
  return (promise || (promise = Promise.resolve())).then(cb)["catch"](function (err) {
    return setTimeout(function () {
      throw err;
    }, 0);
  });
};

/***/ }),

/***/ 4157:
/***/ ((module) => {

"use strict";


function reusify(Constructor) {
  var head = new Constructor();
  var tail = head;

  function get() {
    var current = head;

    if (current.next) {
      head = current.next;
    } else {
      head = new Constructor();
      tail = head;
    }

    current.next = null;
    return current;
  }

  function release(obj) {
    tail.next = obj;
    tail = obj;
  }

  return {
    get: get,
    release: release
  };
}

module.exports = reusify;

/***/ }),

/***/ 5088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = runParallel;

var queueMicrotask = __webpack_require__(8141);

function runParallel(tasks, cb) {
  var results, pending, keys;
  var isSync = true;

  if (Array.isArray(tasks)) {
    results = [];
    pending = tasks.length;
  } else {
    keys = Object.keys(tasks);
    results = {};
    pending = keys.length;
  }

  function done(err) {
    function end() {
      if (cb) cb(err, results);
      cb = null;
    }

    if (isSync) queueMicrotask(end);else end();
  }

  function each(i, err, result) {
    results[i] = result;

    if (--pending === 0 || err) {
      done(err);
    }
  }

  if (!pending) {
    // empty
    done(null);
  } else if (keys) {
    // object
    keys.forEach(function (key) {
      tasks[key](function (err, result) {
        each(key, err, result);
      });
    });
  } else {
    // array
    tasks.forEach(function (task, i) {
      task(function (err, result) {
        each(i, err, result);
      });
    });
  }

  isSync = false;
}

/***/ }),

/***/ 1348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var ANY = Symbol('SemVer ANY'); // hoisted class for cyclic dependency

var Comparator = /*#__PURE__*/function () {
  "use strict";

  function Comparator(comp, options) {
    _classCallCheck(this, Comparator);

    options = parseOptions(options);

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }

    debug('comparator', comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);

    if (this.semver === ANY) {
      this.value = '';
    } else {
      this.value = this.operator + this.semver.version;
    }

    debug('comp', this);
  }

  _createClass(Comparator, [{
    key: "parse",
    value: function parse(comp) {
      var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
      var m = comp.match(r);

      if (!m) {
        throw new TypeError("Invalid comparator: ".concat(comp));
      }

      this.operator = m[1] !== undefined ? m[1] : '';

      if (this.operator === '=') {
        this.operator = '';
      } // if it literally is just '>' or '' then allow anything.


      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "test",
    value: function test(version) {
      debug('Comparator.test', version, this.options.loose);

      if (this.semver === ANY || version === ANY) {
        return true;
      }

      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }

      return cmp(version, this.operator, this.semver, this.options);
    }
  }, {
    key: "intersects",
    value: function intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError('a Comparator is required');
      }

      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }

      if (this.operator === '') {
        if (this.value === '') {
          return true;
        }

        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === '') {
        if (comp.value === '') {
          return true;
        }

        return new Range(this.value, options).test(comp.semver);
      }

      var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
      var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
      var sameSemVer = this.semver.version === comp.semver.version;
      var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
      var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
      var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
      return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
    }
  }], [{
    key: "ANY",
    get: function get() {
      return ANY;
    }
  }]);

  return Comparator;
}();

module.exports = Comparator;

var parseOptions = __webpack_require__(8526);

var _require = __webpack_require__(947),
    re = _require.re,
    t = _require.t;

var cmp = __webpack_require__(7759);

var debug = __webpack_require__(6530);

var SemVer = __webpack_require__(310);

var Range = __webpack_require__(3893);

/***/ }),

/***/ 3893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _toConsumableArray = (__webpack_require__(4434)["default"]);

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

// hoisted class for cyclic dependency
var Range = /*#__PURE__*/function () {
  "use strict";

  function Range(range, options) {
    var _this = this;

    _classCallCheck(this, Range);

    options = parseOptions(options);

    if (range instanceof Range) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value;
      this.set = [[range]];
      this.format();
      return this;
    }

    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

    this.raw = range;
    this.set = range.split('||') // map the range to a 2d array of comparators
    .map(function (r) {
      return _this.parseRange(r.trim());
    }) // throw out any comparator lists that are empty
    // this generally means that it was not a valid range, which is allowed
    // in loose mode, but will still throw if the WHOLE range is invalid.
    .filter(function (c) {
      return c.length;
    });

    if (!this.set.length) {
      throw new TypeError("Invalid SemVer Range: ".concat(range));
    } // if we have any that are not the null set, throw out null sets.


    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      var first = this.set[0];
      this.set = this.set.filter(function (c) {
        return !isNullSet(c[0]);
      });

      if (this.set.length === 0) {
        this.set = [first];
      } else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        var _iterator = _createForOfIteratorHelper(this.set),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var c = _step.value;

            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }

    this.format();
  }

  _createClass(Range, [{
    key: "format",
    value: function format() {
      this.range = this.set.map(function (comps) {
        return comps.join(' ').trim();
      }).join('||').trim();
      return this.range;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.range;
    }
  }, {
    key: "parseRange",
    value: function parseRange(range) {
      var _this2 = this;

      range = range.trim(); // memoize range parsing for performance.
      // this is a very hot path, and fully deterministic.

      var memoOpts = Object.keys(this.options).join(',');
      var memoKey = "parseRange:".concat(memoOpts, ":").concat(range);
      var cached = cache.get(memoKey);

      if (cached) {
        return cached;
      }

      var loose = this.options.loose; // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

      var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
      range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

      range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
      debug('comparator trim', range); // `~ 1.2.3` => `~1.2.3`

      range = range.replace(re[t.TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

      range = range.replace(re[t.CARETTRIM], caretTrimReplace); // normalize spaces

      range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
      // ready to be split into comparators.

      var rangeList = range.split(' ').map(function (comp) {
        return parseComparator(comp, _this2.options);
      }).join(' ').split(/\s+/) // >=0.0.0 is equivalent to *
      .map(function (comp) {
        return replaceGTE0(comp, _this2.options);
      });

      if (loose) {
        // in loose mode, throw out any that are not valid comparators
        rangeList = rangeList.filter(function (comp) {
          debug('loose invalid filter', comp, _this2.options);
          return !!comp.match(re[t.COMPARATORLOOSE]);
        });
      }

      debug('range list', rangeList); // if any comparators are the null set, then replace with JUST null set
      // if more than one comparator, remove any * comparators
      // also, don't include the same comparator more than once

      var rangeMap = new Map();
      var comparators = rangeList.map(function (comp) {
        return new Comparator(comp, _this2.options);
      });

      var _iterator2 = _createForOfIteratorHelper(comparators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var comp = _step2.value;

          if (isNullSet(comp)) {
            return [comp];
          }

          rangeMap.set(comp.value, comp);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (rangeMap.size > 1 && rangeMap.has('')) {
        rangeMap["delete"]('');
      }

      var result = _toConsumableArray(rangeMap.values());

      cache.set(memoKey, result);
      return result;
    }
  }, {
    key: "intersects",
    value: function intersects(range, options) {
      if (!(range instanceof Range)) {
        throw new TypeError('a Range is required');
      }

      return this.set.some(function (thisComparators) {
        return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
          return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
            return rangeComparators.every(function (rangeComparator) {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    } // if ANY of the sets match ALL of its comparators, then pass

  }, {
    key: "test",
    value: function test(version) {
      if (!version) {
        return false;
      }

      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }

      for (var i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Range;
}();

module.exports = Range;

var LRU = __webpack_require__(4389);

var cache = new LRU({
  max: 1000
});

var parseOptions = __webpack_require__(8526);

var Comparator = __webpack_require__(1348);

var debug = __webpack_require__(6530);

var SemVer = __webpack_require__(310);

var _require = __webpack_require__(947),
    re = _require.re,
    t = _require.t,
    comparatorTrimReplace = _require.comparatorTrimReplace,
    tildeTrimReplace = _require.tildeTrimReplace,
    caretTrimReplace = _require.caretTrimReplace;

var isNullSet = function isNullSet(c) {
  return c.value === '<0.0.0-0';
};

var isAny = function isAny(c) {
  return c.value === '';
}; // take a set of comparators and determine whether there
// exists a version which can satisfy it


var isSatisfiable = function isSatisfiable(comparators, options) {
  var result = true;
  var remainingComparators = comparators.slice();
  var testComparator = remainingComparators.pop();

  while (result && remainingComparators.length) {
    result = remainingComparators.every(function (otherComparator) {
      return testComparator.intersects(otherComparator, options);
    });
    testComparator = remainingComparators.pop();
  }

  return result;
}; // comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.


var parseComparator = function parseComparator(comp, options) {
  debug('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug('caret', comp);
  comp = replaceTildes(comp, options);
  debug('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug('xrange', comp);
  comp = replaceStars(comp, options);
  debug('stars', comp);
  return comp;
};

var isX = function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}; // ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0


var replaceTildes = function replaceTildes(comp, options) {
  return comp.trim().split(/\s+/).map(function (c) {
    return replaceTilde(c, options);
  }).join(' ');
};

var replaceTilde = function replaceTilde(comp, options) {
  var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = ">=".concat(M, ".0.0 <").concat(+M + 1, ".0.0-0");
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = ">=".concat(M, ".").concat(m, ".0 <").concat(M, ".").concat(+m + 1, ".0-0");
    } else if (pr) {
      debug('replaceTilde pr', pr);
      ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(M, ".").concat(+m + 1, ".0-0");
    }

    debug('tilde return', ret);
    return ret;
  });
}; // ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0


var replaceCarets = function replaceCarets(comp, options) {
  return comp.trim().split(/\s+/).map(function (c) {
    return replaceCaret(c, options);
  }).join(' ');
};

var replaceCaret = function replaceCaret(comp, options) {
  debug('caret', comp, options);
  var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
  var z = options.includePrerelease ? '-0' : '';
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = ">=".concat(M, ".0.0").concat(z, " <").concat(+M + 1, ".0.0-0");
    } else if (isX(p)) {
      if (M === '0') {
        ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
      } else {
        ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(+M + 1, ".0.0-0");
      }
    } else if (pr) {
      debug('replaceCaret pr', pr);

      if (M === '0') {
        if (m === '0') {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
        } else {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
        }
      } else {
        ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(+M + 1, ".0.0-0");
      }
    } else {
      debug('no pr');

      if (M === '0') {
        if (m === '0') {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
        } else {
          ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
        }
      } else {
        ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(+M + 1, ".0.0-0");
      }
    }

    debug('caret return', ret);
    return ret;
  });
};

var replaceXRanges = function replaceXRanges(comp, options) {
  debug('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(function (c) {
    return replaceXRange(c, options);
  }).join(' ');
};

var replaceXRange = function replaceXRange(comp, options) {
  comp = comp.trim();
  var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX) {
      gtlt = '';
    } // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value


    pr = options.includePrerelease ? '-0' : '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0;
      }

      p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>=';

        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';

        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }

      if (gtlt === '<') {
        pr = '-0';
      }

      ret = "".concat(gtlt + M, ".").concat(m, ".").concat(p).concat(pr);
    } else if (xm) {
      ret = ">=".concat(M, ".0.0").concat(pr, " <").concat(+M + 1, ".0.0-0");
    } else if (xp) {
      ret = ">=".concat(M, ".").concat(m, ".0").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
    }

    debug('xRange return', ret);
    return ret;
  });
}; // Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.


var replaceStars = function replaceStars(comp, options) {
  debug('replaceStars', comp, options); // Looseness is ignored here.  star is always as loose as it gets!

  return comp.trim().replace(re[t.STAR], '');
};

var replaceGTE0 = function replaceGTE0(comp, options) {
  debug('replaceGTE0', comp, options);
  return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
}; // This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0


var hyphenReplace = function hyphenReplace(incPr) {
  return function ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) {
      from = '';
    } else if (isX(fm)) {
      from = ">=".concat(fM, ".0.0").concat(incPr ? '-0' : '');
    } else if (isX(fp)) {
      from = ">=".concat(fM, ".").concat(fm, ".0").concat(incPr ? '-0' : '');
    } else if (fpr) {
      from = ">=".concat(from);
    } else {
      from = ">=".concat(from).concat(incPr ? '-0' : '');
    }

    if (isX(tM)) {
      to = '';
    } else if (isX(tm)) {
      to = "<".concat(+tM + 1, ".0.0-0");
    } else if (isX(tp)) {
      to = "<".concat(tM, ".").concat(+tm + 1, ".0-0");
    } else if (tpr) {
      to = "<=".concat(tM, ".").concat(tm, ".").concat(tp, "-").concat(tpr);
    } else if (incPr) {
      to = "<".concat(tM, ".").concat(tm, ".").concat(+tp + 1, "-0");
    } else {
      to = "<=".concat(to);
    }

    return "".concat(from, " ").concat(to).trim();
  };
};

var testSet = function testSet(set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false;
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var _i = 0; _i < set.length; _i++) {
      debug(set[_i].semver);

      if (set[_i].semver === Comparator.ANY) {
        continue;
      }

      if (set[_i].semver.prerelease.length > 0) {
        var allowed = set[_i].semver;

        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
          return true;
        }
      }
    } // Version has a -pre, but it's not one of the ones we like.


    return false;
  }

  return true;
};

/***/ }),

/***/ 310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _classCallCheck = (__webpack_require__(9189)["default"]);

var _createClass = (__webpack_require__(8482)["default"]);

var debug = __webpack_require__(6530);

var _require = __webpack_require__(5494),
    MAX_LENGTH = _require.MAX_LENGTH,
    MAX_SAFE_INTEGER = _require.MAX_SAFE_INTEGER;

var _require2 = __webpack_require__(947),
    re = _require2.re,
    t = _require2.t;

var parseOptions = __webpack_require__(8526);

var _require3 = __webpack_require__(9506),
    compareIdentifiers = _require3.compareIdentifiers;

var SemVer = /*#__PURE__*/function () {
  "use strict";

  function SemVer(version, options) {
    _classCallCheck(this, SemVer);

    options = parseOptions(options);

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError("Invalid Version: ".concat(version));
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError("version is longer than ".concat(MAX_LENGTH, " characters"));
    }

    debug('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose; // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.

    this.includePrerelease = !!options.includePrerelease;
    var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

    if (!m) {
      throw new TypeError("Invalid Version: ".concat(version));
    }

    this.raw = version; // these are actually numbers

    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version');
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version');
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version');
    } // numberify any prerelease numeric ids


    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map(function (id) {
        if (/^[0-9]+$/.test(id)) {
          var num = +id;

          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }

        return id;
      });
    }

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  _createClass(SemVer, [{
    key: "format",
    value: function format() {
      this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);

      if (this.prerelease.length) {
        this.version += "-".concat(this.prerelease.join('.'));
      }

      return this.version;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.version;
    }
  }, {
    key: "compare",
    value: function compare(other) {
      debug('SemVer.compare', this.version, this.options, other);

      if (!(other instanceof SemVer)) {
        if (typeof other === 'string' && other === this.version) {
          return 0;
        }

        other = new SemVer(other, this.options);
      }

      if (other.version === this.version) {
        return 0;
      }

      return this.compareMain(other) || this.comparePre(other);
    }
  }, {
    key: "compareMain",
    value: function compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
  }, {
    key: "comparePre",
    value: function comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      } // NOT having a prerelease is > having one


      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }

      var i = 0;

      do {
        var a = this.prerelease[i];
        var b = other.prerelease[i];
        debug('prerelease compare', i, a, b);

        if (a === undefined && b === undefined) {
          return 0;
        } else if (b === undefined) {
          return 1;
        } else if (a === undefined) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
  }, {
    key: "compareBuild",
    value: function compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      var i = 0;

      do {
        var a = this.build[i];
        var b = other.build[i];
        debug('prerelease compare', i, a, b);

        if (a === undefined && b === undefined) {
          return 0;
        } else if (b === undefined) {
          return 1;
        } else if (a === undefined) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    } // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.

  }, {
    key: "inc",
    value: function inc(release, identifier) {
      switch (release) {
        case 'premajor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc('pre', identifier);
          break;

        case 'preminor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc('pre', identifier);
          break;

        case 'prepatch':
          // If this is already a prerelease, it will bump to the next version
          // drop any prereleases that might already exist, since they are not
          // relevant at this point.
          this.prerelease.length = 0;
          this.inc('patch', identifier);
          this.inc('pre', identifier);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.

        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', identifier);
          }

          this.inc('pre', identifier);
          break;

        case 'major':
          // If this is a pre-major version, bump up to the same major version.
          // Otherwise increment major.
          // 1.0.0-5 bumps to 1.0.0
          // 1.1.0 bumps to 2.0.0
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }

          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;

        case 'minor':
          // If this is a pre-minor version, bump up to the same minor version.
          // Otherwise increment minor.
          // 1.2.0-5 bumps to 1.2.0
          // 1.2.1 bumps to 1.3.0
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }

          this.patch = 0;
          this.prerelease = [];
          break;

        case 'patch':
          // If this is not a pre-release version, it will increment the patch.
          // If it is a pre-release it will bump up to the same patch version.
          // 1.2.0-5 patches to 1.2.0
          // 1.2.0 patches to 1.2.1
          if (this.prerelease.length === 0) {
            this.patch++;
          }

          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.

        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0];
          } else {
            var i = this.prerelease.length;

            while (--i >= 0) {
              if (typeof this.prerelease[i] === 'number') {
                this.prerelease[i]++;
                i = -2;
              }
            }

            if (i === -1) {
              // didn't increment anything
              this.prerelease.push(0);
            }
          }

          if (identifier) {
            // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
            // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [identifier, 0];
              }
            } else {
              this.prerelease = [identifier, 0];
            }
          }

          break;

        default:
          throw new Error("invalid increment argument: ".concat(release));
      }

      this.format();
      this.raw = this.version;
      return this;
    }
  }]);

  return SemVer;
}();

module.exports = SemVer;

/***/ }),

/***/ 8870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(5337);

var clean = function clean(version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
};

module.exports = clean;

/***/ }),

/***/ 7759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(2051);

var neq = __webpack_require__(3003);

var gt = __webpack_require__(2661);

var gte = __webpack_require__(5690);

var lt = __webpack_require__(1999);

var lte = __webpack_require__(1763);

var cmp = function cmp(a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version;
      }

      if (typeof b === 'object') {
        b = b.version;
      }

      return a === b;

    case '!==':
      if (typeof a === 'object') {
        a = a.version;
      }

      if (typeof b === 'object') {
        b = b.version;
      }

      return a !== b;

    case '':
    case '=':
    case '==':
      return eq(a, b, loose);

    case '!=':
      return neq(a, b, loose);

    case '>':
      return gt(a, b, loose);

    case '>=':
      return gte(a, b, loose);

    case '<':
      return lt(a, b, loose);

    case '<=':
      return lte(a, b, loose);

    default:
      throw new TypeError("Invalid operator: ".concat(op));
  }
};

module.exports = cmp;

/***/ }),

/***/ 9400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var parse = __webpack_require__(5337);

var _require = __webpack_require__(947),
    re = _require.re,
    t = _require.t;

var coerce = function coerce(version, options) {
  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null;
  }

  options = options || {};
  var match = null;

  if (!options.rtl) {
    match = version.match(re[t.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    var next;

    while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }

      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    } // leave it in a clean state


    re[t.COERCERTL].lastIndex = -1;
  }

  if (match === null) {
    return null;
  }

  return parse("".concat(match[2], ".").concat(match[3] || '0', ".").concat(match[4] || '0'), options);
};

module.exports = coerce;

/***/ }),

/***/ 8791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var compareBuild = function compareBuild(a, b, loose) {
  var versionA = new SemVer(a, loose);
  var versionB = new SemVer(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};

module.exports = compareBuild;

/***/ }),

/***/ 2068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var compareLoose = function compareLoose(a, b) {
  return compare(a, b, true);
};

module.exports = compareLoose;

/***/ }),

/***/ 7163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var compare = function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
};

module.exports = compare;

/***/ }),

/***/ 5250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(5337);

var eq = __webpack_require__(2051);

var diff = function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    var hasPre = v1.prerelease.length || v2.prerelease.length;
    var prefix = hasPre ? 'pre' : '';
    var defaultResult = hasPre ? 'prerelease' : '';

    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key;
        }
      }
    }

    return defaultResult; // may be undefined
  }
};

module.exports = diff;

/***/ }),

/***/ 2051:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var eq = function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
};

module.exports = eq;

/***/ }),

/***/ 2661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var gt = function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
};

module.exports = gt;

/***/ }),

/***/ 5690:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var gte = function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
};

module.exports = gte;

/***/ }),

/***/ 8024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var inc = function inc(version, release, options, identifier) {
  if (typeof options === 'string') {
    identifier = options;
    options = undefined;
  }

  try {
    return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
};

module.exports = inc;

/***/ }),

/***/ 1999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var lt = function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
};

module.exports = lt;

/***/ }),

/***/ 1763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var lte = function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
};

module.exports = lte;

/***/ }),

/***/ 7122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var major = function major(a, loose) {
  return new SemVer(a, loose).major;
};

module.exports = major;

/***/ }),

/***/ 5982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var minor = function minor(a, loose) {
  return new SemVer(a, loose).minor;
};

module.exports = minor;

/***/ }),

/***/ 3003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var neq = function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
};

module.exports = neq;

/***/ }),

/***/ 5337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(5494),
    MAX_LENGTH = _require.MAX_LENGTH;

var _require2 = __webpack_require__(947),
    re = _require2.re,
    t = _require2.t;

var SemVer = __webpack_require__(310);

var parseOptions = __webpack_require__(8526);

var parse = function parse(version, options) {
  options = parseOptions(options);

  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version !== 'string') {
    return null;
  }

  if (version.length > MAX_LENGTH) {
    return null;
  }

  var r = options.loose ? re[t.LOOSE] : re[t.FULL];

  if (!r.test(version)) {
    return null;
  }

  try {
    return new SemVer(version, options);
  } catch (er) {
    return null;
  }
};

module.exports = parse;

/***/ }),

/***/ 1062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var patch = function patch(a, loose) {
  return new SemVer(a, loose).patch;
};

module.exports = patch;

/***/ }),

/***/ 9173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(5337);

var prerelease = function prerelease(version, options) {
  var parsed = parse(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};

module.exports = prerelease;

/***/ }),

/***/ 1151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compare = __webpack_require__(7163);

var rcompare = function rcompare(a, b, loose) {
  return compare(b, a, loose);
};

module.exports = rcompare;

/***/ }),

/***/ 2833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareBuild = __webpack_require__(8791);

var rsort = function rsort(list, loose) {
  return list.sort(function (a, b) {
    return compareBuild(b, a, loose);
  });
};

module.exports = rsort;

/***/ }),

/***/ 5634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Range = __webpack_require__(3893);

var satisfies = function satisfies(version, range, options) {
  try {
    range = new Range(range, options);
  } catch (er) {
    return false;
  }

  return range.test(version);
};

module.exports = satisfies;

/***/ }),

/***/ 6481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareBuild = __webpack_require__(8791);

var sort = function sort(list, loose) {
  return list.sort(function (a, b) {
    return compareBuild(a, b, loose);
  });
};

module.exports = sort;

/***/ }),

/***/ 2881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(5337);

var valid = function valid(version, options) {
  var v = parse(version, options);
  return v ? v.version : null;
};

module.exports = valid;

/***/ }),

/***/ 1266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// just pre-load all the stuff that index.js lazily exports
var internalRe = __webpack_require__(947);

module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: (__webpack_require__(5494).SEMVER_SPEC_VERSION),
  SemVer: __webpack_require__(310),
  compareIdentifiers: (__webpack_require__(9506).compareIdentifiers),
  rcompareIdentifiers: (__webpack_require__(9506).rcompareIdentifiers),
  parse: __webpack_require__(5337),
  valid: __webpack_require__(2881),
  clean: __webpack_require__(8870),
  inc: __webpack_require__(8024),
  diff: __webpack_require__(5250),
  major: __webpack_require__(7122),
  minor: __webpack_require__(5982),
  patch: __webpack_require__(1062),
  prerelease: __webpack_require__(9173),
  compare: __webpack_require__(7163),
  rcompare: __webpack_require__(1151),
  compareLoose: __webpack_require__(2068),
  compareBuild: __webpack_require__(8791),
  sort: __webpack_require__(6481),
  rsort: __webpack_require__(2833),
  gt: __webpack_require__(2661),
  lt: __webpack_require__(1999),
  eq: __webpack_require__(2051),
  neq: __webpack_require__(3003),
  gte: __webpack_require__(5690),
  lte: __webpack_require__(1763),
  cmp: __webpack_require__(7759),
  coerce: __webpack_require__(9400),
  Comparator: __webpack_require__(1348),
  Range: __webpack_require__(3893),
  satisfies: __webpack_require__(5634),
  toComparators: __webpack_require__(8818),
  maxSatisfying: __webpack_require__(5582),
  minSatisfying: __webpack_require__(8879),
  minVersion: __webpack_require__(2888),
  validRange: __webpack_require__(5870),
  outside: __webpack_require__(3268),
  gtr: __webpack_require__(228),
  ltr: __webpack_require__(9032),
  intersects: __webpack_require__(9517),
  simplifyRange: __webpack_require__(7507),
  subset: __webpack_require__(3424)
};

/***/ }),

/***/ 5494:
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
var SEMVER_SPEC_VERSION = '2.0.0';
var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
9007199254740991; // Max safe segment length for coercion.

var MAX_SAFE_COMPONENT_LENGTH = 16;
module.exports = {
  SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
  MAX_LENGTH: MAX_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH
};

/***/ }),

/***/ 6530:
/***/ ((module) => {

var debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function () {
  var _console;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (_console = console).error.apply(_console, ['SEMVER'].concat(args));
} : function () {};
module.exports = debug;

/***/ }),

/***/ 9506:
/***/ ((module) => {

var numeric = /^[0-9]+$/;

var compareIdentifiers = function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};

var rcompareIdentifiers = function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
};

module.exports = {
  compareIdentifiers: compareIdentifiers,
  rcompareIdentifiers: rcompareIdentifiers
};

/***/ }),

/***/ 8526:
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
var opts = ['includePrerelease', 'loose', 'rtl'];

var parseOptions = function parseOptions(options) {
  return !options ? {} : typeof options !== 'object' ? {
    loose: true
  } : opts.filter(function (k) {
    return options[k];
  }).reduce(function (o, k) {
    o[k] = true;
    return o;
  }, {});
};

module.exports = parseOptions;

/***/ }),

/***/ 947:
/***/ ((module, exports, __webpack_require__) => {

var _require = __webpack_require__(5494),
    MAX_SAFE_COMPONENT_LENGTH = _require.MAX_SAFE_COMPONENT_LENGTH;

var debug = __webpack_require__(6530);

exports = module.exports = {}; // The actual regexps go on exports.re

var re = exports.re = [];
var src = exports.src = [];
var t = exports.t = {};
var R = 0;

var createToken = function createToken(name, value, isGlobal) {
  var index = R++;
  debug(name, index, value);
  t[name] = index;
  src[index] = value;
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
}; // The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.


createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+'); // ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'); // ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")"));
createToken('MAINVERSIONLOOSE', "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")")); // ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', "(?:".concat(src[t.NUMERICIDENTIFIER], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));
createToken('PRERELEASEIDENTIFIERLOOSE', "(?:".concat(src[t.NUMERICIDENTIFIERLOOSE], "|").concat(src[t.NONNUMERICIDENTIFIER], ")")); // ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', "(?:-(".concat(src[t.PRERELEASEIDENTIFIER], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIER], ")*))"));
createToken('PRERELEASELOOSE', "(?:-?(".concat(src[t.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIERLOOSE], ")*))")); // ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+'); // ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', "(?:\\+(".concat(src[t.BUILDIDENTIFIER], "(?:\\.").concat(src[t.BUILDIDENTIFIER], ")*))")); // ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', "v?".concat(src[t.MAINVERSION]).concat(src[t.PRERELEASE], "?").concat(src[t.BUILD], "?"));
createToken('FULL', "^".concat(src[t.FULLPLAIN], "$")); // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.

createToken('LOOSEPLAIN', "[v=\\s]*".concat(src[t.MAINVERSIONLOOSE]).concat(src[t.PRERELEASELOOSE], "?").concat(src[t.BUILD], "?"));
createToken('LOOSE', "^".concat(src[t.LOOSEPLAIN], "$"));
createToken('GTLT', '((?:<|>)?=?)'); // Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.

createToken('XRANGEIDENTIFIERLOOSE', "".concat(src[t.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
createToken('XRANGEIDENTIFIER', "".concat(src[t.NUMERICIDENTIFIER], "|x|X|\\*"));
createToken('XRANGEPLAIN', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:".concat(src[t.PRERELEASE], ")?").concat(src[t.BUILD], "?") + ")?)?");
createToken('XRANGEPLAINLOOSE', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(src[t.PRERELEASELOOSE], ")?").concat(src[t.BUILD], "?") + ")?)?");
createToken('XRANGE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAIN], "$"));
createToken('XRANGELOOSE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAINLOOSE], "$")); // Coercion.
// Extract anything that could conceivably be a part of a valid semver

createToken('COERCE', "".concat('(^|[^\\d])' + '(\\d{1,').concat(MAX_SAFE_COMPONENT_LENGTH, "})") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:$|[^\\d])");
createToken('COERCERTL', src[t.COERCE], true); // Tilde ranges.
// Meaning is "reasonably at or greater than"

createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', "(\\s*)".concat(src[t.LONETILDE], "\\s+"), true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAIN], "$"));
createToken('TILDELOOSE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAINLOOSE], "$")); // Caret ranges.
// Meaning is "at least and backwards compatible with"

createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', "(\\s*)".concat(src[t.LONECARET], "\\s+"), true);
exports.caretTrimReplace = '$1^';
createToken('CARET', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAIN], "$"));
createToken('CARETLOOSE', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAINLOOSE], "$")); // A simple gt/lt/eq thing, or just "" to indicate "any version"

createToken('COMPARATORLOOSE', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], ")$|^$"));
createToken('COMPARATOR', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.FULLPLAIN], ")$|^$")); // An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`

createToken('COMPARATORTRIM', "(\\s*)".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], "|").concat(src[t.XRANGEPLAIN], ")"), true);
exports.comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.

createToken('HYPHENRANGE', "^\\s*(".concat(src[t.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAIN], ")") + "\\s*$");
createToken('HYPHENRANGELOOSE', "^\\s*(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s*$"); // Star ranges basically just allow anything at all.

createToken('STAR', '(<|>)?=?\\s*\\*'); // >=0.0.0 is like a star

createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');

/***/ }),

/***/ 228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Determine if version is greater than all the versions possible in the range.
var outside = __webpack_require__(3268);

var gtr = function gtr(version, range, options) {
  return outside(version, range, '>', options);
};

module.exports = gtr;

/***/ }),

/***/ 9517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Range = __webpack_require__(3893);

var intersects = function intersects(r1, r2, options) {
  r1 = new Range(r1, options);
  r2 = new Range(r2, options);
  return r1.intersects(r2);
};

module.exports = intersects;

/***/ }),

/***/ 9032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var outside = __webpack_require__(3268); // Determine if version is less than all the versions possible in the range


var ltr = function ltr(version, range, options) {
  return outside(version, range, '<', options);
};

module.exports = ltr;

/***/ }),

/***/ 5582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var Range = __webpack_require__(3893);

var maxSatisfying = function maxSatisfying(versions, range, options) {
  var max = null;
  var maxSV = null;
  var rangeObj = null;

  try {
    rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, options);
      }
    }
  });
  return max;
};

module.exports = maxSatisfying;

/***/ }),

/***/ 8879:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var Range = __webpack_require__(3893);

var minSatisfying = function minSatisfying(versions, range, options) {
  var min = null;
  var minSV = null;
  var rangeObj = null;

  try {
    rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, options);
      }
    }
  });
  return min;
};

module.exports = minSatisfying;

/***/ }),

/***/ 2888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var Range = __webpack_require__(3893);

var gt = __webpack_require__(2661);

var minVersion = function minVersion(range, loose) {
  range = new Range(range, loose);
  var minver = new SemVer('0.0.0');

  if (range.test(minver)) {
    return minver;
  }

  minver = new SemVer('0.0.0-0');

  if (range.test(minver)) {
    return minver;
  }

  minver = null;

  var _loop = function _loop(i) {
    var comparators = range.set[i];
    var setMin = null;
    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version);

      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }

          compver.raw = compver.format();

        /* fallthrough */

        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver;
          }

          break;

        case '<':
        case '<=':
          /* Ignore maximum versions */
          break;

        /* istanbul ignore next */

        default:
          throw new Error("Unexpected operation: ".concat(comparator.operator));
      }
    });

    if (setMin && (!minver || gt(minver, setMin))) {
      minver = setMin;
    }
  };

  for (var i = 0; i < range.set.length; ++i) {
    _loop(i);
  }

  if (minver && range.test(minver)) {
    return minver;
  }

  return null;
};

module.exports = minVersion;

/***/ }),

/***/ 3268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SemVer = __webpack_require__(310);

var Comparator = __webpack_require__(1348);

var ANY = Comparator.ANY;

var Range = __webpack_require__(3893);

var satisfies = __webpack_require__(5634);

var gt = __webpack_require__(2661);

var lt = __webpack_require__(1999);

var lte = __webpack_require__(1763);

var gte = __webpack_require__(5690);

var outside = function outside(version, range, hilo, options) {
  version = new SemVer(version, options);
  range = new Range(range, options);
  var gtfn, ltefn, ltfn, comp, ecomp;

  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;

    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;

    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  } // If it satisfies the range it is not outside


  if (satisfies(version, range, options)) {
    return false;
  } // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.


  var _loop = function _loop(i) {
    var comparators = range.set[i];
    var high = null;
    var low = null;
    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }

      high = high || comparator;
      low = low || comparator;

      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    }); // If the edge version comparator has a operator then our version
    // isn't outside it

    if (high.operator === comp || high.operator === ecomp) {
      return {
        v: false
      };
    } // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range


    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return {
        v: false
      };
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return {
        v: false
      };
    }
  };

  for (var i = 0; i < range.set.length; ++i) {
    var _ret = _loop(i);

    if (typeof _ret === "object") return _ret.v;
  }

  return true;
};

module.exports = outside;

/***/ }),

/***/ 7507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _slicedToArray = (__webpack_require__(6686)["default"]);

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
var satisfies = __webpack_require__(5634);

var compare = __webpack_require__(7163);

module.exports = function (versions, range, options) {
  var set = [];
  var first = null;
  var prev = null;
  var v = versions.sort(function (a, b) {
    return compare(a, b, options);
  });

  var _iterator = _createForOfIteratorHelper(v),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var version = _step.value;
      var included = satisfies(version, range, options);

      if (included) {
        prev = version;

        if (!first) {
          first = version;
        }
      } else {
        if (prev) {
          set.push([first, prev]);
        }

        prev = null;
        first = null;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (first) {
    set.push([first, null]);
  }

  var ranges = [];

  for (var _i = 0, _set = set; _i < _set.length; _i++) {
    var _set$_i = _slicedToArray(_set[_i], 2),
        min = _set$_i[0],
        max = _set$_i[1];

    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push('*');
    } else if (!max) {
      ranges.push(">=".concat(min));
    } else if (min === v[0]) {
      ranges.push("<=".concat(max));
    } else {
      ranges.push("".concat(min, " - ").concat(max));
    }
  }

  var simplified = ranges.join(' || ');
  var original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range;
};

/***/ }),

/***/ 3424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var Range = __webpack_require__(3893);

var Comparator = __webpack_require__(1348);

var ANY = Comparator.ANY;

var satisfies = __webpack_require__(5634);

var compare = __webpack_require__(7163); // Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true


var subset = function subset(sub, dom) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (sub === dom) {
    return true;
  }

  sub = new Range(sub, options);
  dom = new Range(dom, options);
  var sawNonNull = false;

  var _iterator = _createForOfIteratorHelper(sub.set),
      _step;

  try {
    OUTER: for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var simpleSub = _step.value;

      var _iterator2 = _createForOfIteratorHelper(dom.set),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var simpleDom = _step2.value;
          var isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;

          if (isSub) {
            continue OUTER;
          }
        } // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (sawNonNull) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
};

var simpleSubset = function simpleSubset(sub, dom, options) {
  if (sub === dom) {
    return true;
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = [new Comparator('>=0.0.0-0')];
    } else {
      sub = [new Comparator('>=0.0.0')];
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = [new Comparator('>=0.0.0')];
    }
  }

  var eqSet = new Set();
  var gt, lt;

  var _iterator3 = _createForOfIteratorHelper(sub),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var c = _step3.value;

      if (c.operator === '>' || c.operator === '>=') {
        gt = higherGT(gt, c, options);
      } else if (c.operator === '<' || c.operator === '<=') {
        lt = lowerLT(lt, c, options);
      } else {
        eqSet.add(c.semver);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if (eqSet.size > 1) {
    return null;
  }

  var gtltComp;

  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options);

    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null;
    }
  } // will iterate one or zero times


  var _iterator4 = _createForOfIteratorHelper(eqSet),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var eq = _step4.value;

      if (gt && !satisfies(eq, String(gt), options)) {
        return null;
      }

      if (lt && !satisfies(eq, String(lt), options)) {
        return null;
      }

      var _iterator6 = _createForOfIteratorHelper(dom),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _c = _step6.value;

          if (!satisfies(eq, String(_c), options)) {
            return false;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return true;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  var higher, lower;
  var hasDomLT, hasDomGT; // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset

  var needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
  var needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false; // exception: <1.2.3-0 is the same as <1.2.3

  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }

  var _iterator5 = _createForOfIteratorHelper(dom),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _c2 = _step5.value;
      hasDomGT = hasDomGT || _c2.operator === '>' || _c2.operator === '>=';
      hasDomLT = hasDomLT || _c2.operator === '<' || _c2.operator === '<=';

      if (gt) {
        if (needDomGTPre) {
          if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomGTPre.major && _c2.semver.minor === needDomGTPre.minor && _c2.semver.patch === needDomGTPre.patch) {
            needDomGTPre = false;
          }
        }

        if (_c2.operator === '>' || _c2.operator === '>=') {
          higher = higherGT(gt, _c2, options);

          if (higher === _c2 && higher !== gt) {
            return false;
          }
        } else if (gt.operator === '>=' && !satisfies(gt.semver, String(_c2), options)) {
          return false;
        }
      }

      if (lt) {
        if (needDomLTPre) {
          if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomLTPre.major && _c2.semver.minor === needDomLTPre.minor && _c2.semver.patch === needDomLTPre.patch) {
            needDomLTPre = false;
          }
        }

        if (_c2.operator === '<' || _c2.operator === '<=') {
          lower = lowerLT(lt, _c2, options);

          if (lower === _c2 && lower !== lt) {
            return false;
          }
        } else if (lt.operator === '<=' && !satisfies(lt.semver, String(_c2), options)) {
          return false;
        }
      }

      if (!_c2.operator && (lt || gt) && gtltComp !== 0) {
        return false;
      }
    } // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0

  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false;
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false;
  } // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple


  if (needDomGTPre || needDomLTPre) {
    return false;
  }

  return true;
}; // >=1.2.3 is lower than >1.2.3


var higherGT = function higherGT(a, b, options) {
  if (!a) {
    return b;
  }

  var comp = compare(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
}; // <=1.2.3 is higher than <1.2.3


var lowerLT = function lowerLT(a, b, options) {
  if (!a) {
    return b;
  }

  var comp = compare(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};

module.exports = subset;

/***/ }),

/***/ 8818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Range = __webpack_require__(3893); // Mostly just for testing and legacy API reasons


var toComparators = function toComparators(range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
};

module.exports = toComparators;

/***/ }),

/***/ 5870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Range = __webpack_require__(3893);

var validRange = function validRange(range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*';
  } catch (er) {
    return null;
  }
};

module.exports = validRange;

/***/ }),

/***/ 950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _slicedToArray = (__webpack_require__(6686)["default"]);

var shebangRegex = __webpack_require__(3960);

module.exports = function () {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var match = string.match(shebangRegex);

  if (!match) {
    return null;
  }

  var _match$0$replace$spli = match[0].replace(/#! ?/, '').split(' '),
      _match$0$replace$spli2 = _slicedToArray(_match$0$replace$spli, 2),
      path = _match$0$replace$spli2[0],
      argument = _match$0$replace$spli2[1];

  var binary = path.split('/').pop();

  if (binary === 'env') {
    return argument;
  }

  return argument ? "".concat(binary, " ").concat(argument) : binary;
};

/***/ }),

/***/ 3960:
/***/ ((module) => {

"use strict";


module.exports = /^#!(.*)/;

/***/ }),

/***/ 4774:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;

function parseArgsStringToArgv(value, env, file) {
  // ([^\s'"]([^\s'"]*(['"])([^\3]*?)\3)+[^\s'"]*) Matches nested quotes until the first space outside of quotes
  // [^\s'"]+ or Match if not a space ' or "
  // (['"])([^\5]*?)\5 or Match "quoted text" without quotes
  // `\3` and `\5` are a backreference to the quote style (' or ") captured
  var myRegexp = /([^\s'"]([^\s'"]*(['"])([^\3]*?)\3)+[^\s'"]*)|[^\s'"]+|(['"])([^\5]*?)\5/gi;
  var myString = value;
  var myArray = [];

  if (env) {
    myArray.push(env);
  }

  if (file) {
    myArray.push(file);
  }

  var match;

  do {
    // Each call to exec returns the next regex match as an array
    match = myRegexp.exec(myString);

    if (match !== null) {
      // Index 1 in the array is the captured group if it exists
      // Index 0 is the matched text, which we use if no captured group exists
      myArray.push(firstString(match[1], match[6], match[0]));
    }
  } while (match !== null);

  return myArray;
}

exports["default"] = parseArgsStringToArgv;
exports.parseArgsStringToArgv = parseArgsStringToArgv; // Accepts any number of arguments, and returns the first one that is a string
// (even an empty string)

function firstString() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];

    if (typeof arg === "string") {
      return arg;
    }
  }
}

/***/ }),

/***/ 4482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */


var _createForOfIteratorHelper = (__webpack_require__(9522)["default"]);

var _slicedToArray = (__webpack_require__(6686)["default"]);

var _toConsumableArray = (__webpack_require__(4434)["default"]);

var _objectSpread = (__webpack_require__(279)["default"]);

var isNumber = __webpack_require__(9648);

var toRegexRange = function toRegexRange(min, max, options) {
  if (isNumber(min) === false) {
    throw new TypeError('toRegexRange: expected the first argument to be a number');
  }

  if (max === void 0 || min === max) {
    return String(min);
  }

  if (isNumber(max) === false) {
    throw new TypeError('toRegexRange: expected the second argument to be a number.');
  }

  var opts = _objectSpread({
    relaxZeros: true
  }, options);

  if (typeof opts.strictZeros === 'boolean') {
    opts.relaxZeros = opts.strictZeros === false;
  }

  var relax = String(opts.relaxZeros);
  var shorthand = String(opts.shorthand);
  var capture = String(opts.capture);
  var wrap = String(opts.wrap);
  var cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;

  if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
    return toRegexRange.cache[cacheKey].result;
  }

  var a = Math.min(min, max);
  var b = Math.max(min, max);

  if (Math.abs(a - b) === 1) {
    var result = min + '|' + max;

    if (opts.capture) {
      return "(".concat(result, ")");
    }

    if (opts.wrap === false) {
      return result;
    }

    return "(?:".concat(result, ")");
  }

  var isPadded = hasPadding(min) || hasPadding(max);
  var state = {
    min: min,
    max: max,
    a: a,
    b: b
  };
  var positives = [];
  var negatives = [];

  if (isPadded) {
    state.isPadded = isPadded;
    state.maxLen = String(state.max).length;
  }

  if (a < 0) {
    var newMin = b < 0 ? Math.abs(b) : 1;
    negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
    a = state.a = 0;
  }

  if (b >= 0) {
    positives = splitToPatterns(a, b, state, opts);
  }

  state.negatives = negatives;
  state.positives = positives;
  state.result = collatePatterns(negatives, positives, opts);

  if (opts.capture === true) {
    state.result = "(".concat(state.result, ")");
  } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
    state.result = "(?:".concat(state.result, ")");
  }

  toRegexRange.cache[cacheKey] = state;
  return state.result;
};

function collatePatterns(neg, pos, options) {
  var onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
  var onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
  var intersected = filterPatterns(neg, pos, '-?', true, options) || [];
  var subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join('|');
}

function splitToRanges(min, max) {
  var nines = 1;
  var zeros = 1;
  var stop = countNines(min, nines);
  var stops = new Set([max]);

  while (min <= stop && stop <= max) {
    stops.add(stop);
    nines += 1;
    stop = countNines(min, nines);
  }

  stop = countZeros(max + 1, zeros) - 1;

  while (min < stop && stop <= max) {
    stops.add(stop);
    zeros += 1;
    stop = countZeros(max + 1, zeros) - 1;
  }

  stops = _toConsumableArray(stops);
  stops.sort(compare);
  return stops;
}
/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */


function rangeToPattern(start, stop, options) {
  if (start === stop) {
    return {
      pattern: start,
      count: [],
      digits: 0
    };
  }

  var zipped = zip(start, stop);
  var digits = zipped.length;
  var pattern = '';
  var count = 0;

  for (var i = 0; i < digits; i++) {
    var _zipped$i = _slicedToArray(zipped[i], 2),
        startDigit = _zipped$i[0],
        stopDigit = _zipped$i[1];

    if (startDigit === stopDigit) {
      pattern += startDigit;
    } else if (startDigit !== '0' || stopDigit !== '9') {
      pattern += toCharacterClass(startDigit, stopDigit, options);
    } else {
      count++;
    }
  }

  if (count) {
    pattern += options.shorthand === true ? '\\d' : '[0-9]';
  }

  return {
    pattern: pattern,
    count: [count],
    digits: digits
  };
}

function splitToPatterns(min, max, tok, options) {
  var ranges = splitToRanges(min, max);
  var tokens = [];
  var start = min;
  var prev;

  for (var i = 0; i < ranges.length; i++) {
    var _max = ranges[i];
    var obj = rangeToPattern(String(start), String(_max), options);
    var zeros = '';

    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.count.length > 1) {
        prev.count.pop();
      }

      prev.count.push(obj.count[0]);
      prev.string = prev.pattern + toQuantifier(prev.count);
      start = _max + 1;
      continue;
    }

    if (tok.isPadded) {
      zeros = padZeros(_max, tok, options);
    }

    obj.string = zeros + obj.pattern + toQuantifier(obj.count);
    tokens.push(obj);
    start = _max + 1;
    prev = obj;
  }

  return tokens;
}

function filterPatterns(arr, comparison, prefix, intersection, options) {
  var result = [];

  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ele = _step.value;
      var string = ele.string; // only push if _both_ are negative...

      if (!intersection && !contains(comparison, 'string', string)) {
        result.push(prefix + string);
      } // or _both_ are positive


      if (intersection && contains(comparison, 'string', string)) {
        result.push(prefix + string);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Zip strings
 */


function zip(a, b) {
  var arr = [];

  for (var i = 0; i < a.length; i++) {
    arr.push([a[i], b[i]]);
  }

  return arr;
}

function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function contains(arr, key, val) {
  return arr.some(function (ele) {
    return ele[key] === val;
  });
}

function countNines(min, len) {
  return Number(String(min).slice(0, -len) + '9'.repeat(len));
}

function countZeros(integer, zeros) {
  return integer - integer % Math.pow(10, zeros);
}

function toQuantifier(digits) {
  var _digits = _slicedToArray(digits, 2),
      _digits$ = _digits[0],
      start = _digits$ === void 0 ? 0 : _digits$,
      _digits$2 = _digits[1],
      stop = _digits$2 === void 0 ? '' : _digits$2;

  if (stop || start > 1) {
    return "{".concat(start + (stop ? ',' + stop : ''), "}");
  }

  return '';
}

function toCharacterClass(a, b, options) {
  return "[".concat(a).concat(b - a === 1 ? '' : '-').concat(b, "]");
}

function hasPadding(str) {
  return /^-?(0+)\d/.test(str);
}

function padZeros(value, tok, options) {
  if (!tok.isPadded) {
    return value;
  }

  var diff = Math.abs(tok.maxLen - String(value).length);
  var relax = options.relaxZeros !== false;

  switch (diff) {
    case 0:
      return '';

    case 1:
      return relax ? '0?' : '0';

    case 2:
      return relax ? '0{0,2}' : '00';

    default:
      {
        return relax ? "0{0,".concat(diff, "}") : "0{".concat(diff, "}");
      }
  }
}
/**
 * Cache
 */


toRegexRange.cache = {};

toRegexRange.clearCache = function () {
  return toRegexRange.cache = {};
};
/**
 * Expose `toRegexRange`
 */


module.exports = toRegexRange;

/***/ }),

/***/ 4306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(620);

/***/ }),

/***/ 620:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var net = __webpack_require__(1808);

var tls = __webpack_require__(4404);

var http = __webpack_require__(3685);

var https = __webpack_require__(5687);

var events = __webpack_require__(2361);

var assert = __webpack_require__(9491);

var util = __webpack_require__(3837);

exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;

function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];
  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);

    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];

      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }

    socket.destroy();
    self.removeSocket(socket);
  });
}

util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({
    request: req
  }, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  } // If we are under maxSockets create a new one.


  self.createSocket(options, function (socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);
  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });

  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }

  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6

  connectReq.once('response', onResponse); // for v0.6

  connectReq.once('upgrade', onUpgrade); // for v0.6

  connectReq.once('connect', onConnect); // for v0.7 or later

  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function () {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }

    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }

    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();
    debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket);

  if (pos === -1) {
    return;
  }

  this.sockets.splice(pos, 1);
  var pending = this.requests.shift();

  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function (socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function (socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    }); // 0 is dummy port for v0.6

    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}

function toOptions(host, port, localAddress) {
  if (typeof host === 'string') {
    // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }

  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];

    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);

      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];

        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }

  return target;
}

var debug;

if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function debug() {
    var args = Array.prototype.slice.call(arguments);

    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }

    console.error.apply(console, args);
  };
} else {
  debug = function debug() {};
}

exports.debug = debug; // for test

/***/ }),

/***/ 8792:
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';
  /* !
   * type-detect
   * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  var promiseExists = typeof Promise === 'function';
  /* eslint-disable no-undef */

  var globalObject = typeof self === 'object' ? self : global; // eslint-disable-line id-blacklist

  var symbolExists = typeof Symbol !== 'undefined';
  var mapExists = typeof Map !== 'undefined';
  var setExists = typeof Set !== 'undefined';
  var weakMapExists = typeof WeakMap !== 'undefined';
  var weakSetExists = typeof WeakSet !== 'undefined';
  var dataViewExists = typeof DataView !== 'undefined';
  var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
  var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
  var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
  var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
  var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
  var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
  var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
  var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
  var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
  var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
  var toStringLeftSliceLength = 8;
  var toStringRightSliceLength = -1;
  /**
   * ### typeOf (obj)
   *
   * Uses `Object.prototype.toString` to determine the type of an object,
   * normalising behaviour across engine versions & well optimised.
   *
   * @param {Mixed} object
   * @return {String} object type
   * @api public
   */

  function typeDetect(obj) {
    /* ! Speed optimisation
     * Pre:
     *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
     *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
     *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
     *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
     *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
     * Post:
     *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
     *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
     *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
     *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
     *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
     */
    var typeofObj = typeof obj;

    if (typeofObj !== 'object') {
      return typeofObj;
    }
    /* ! Speed optimisation
     * Pre:
     *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
     * Post:
     *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
     */


    if (obj === null) {
      return 'null';
    }
    /* ! Spec Conformance
     * Test: `Object.prototype.toString.call(window)``
     *  - Node === "[object global]"
     *  - Chrome === "[object global]"
     *  - Firefox === "[object Window]"
     *  - PhantomJS === "[object Window]"
     *  - Safari === "[object Window]"
     *  - IE 11 === "[object Window]"
     *  - IE Edge === "[object Window]"
     * Test: `Object.prototype.toString.call(this)``
     *  - Chrome Worker === "[object global]"
     *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
     *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
     *  - IE 11 Worker === "[object WorkerGlobalScope]"
     *  - IE Edge Worker === "[object WorkerGlobalScope]"
     */


    if (obj === globalObject) {
      return 'global';
    }
    /* ! Speed optimisation
     * Pre:
     *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
     * Post:
     *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
     */


    if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
      return 'Array';
    } // Not caching existence of `window` and related properties due to potential
    // for `window` to be unset before tests in quasi-browser environments.


    if (typeof window === 'object' && window !== null) {
      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/multipage/browsers.html#location)
       * WhatWG HTML$7.7.3 - The `Location` interface
       * Test: `Object.prototype.toString.call(window.location)``
       *  - IE <=11 === "[object Object]"
       *  - IE Edge <=13 === "[object Object]"
       */
      if (typeof window.location === 'object' && obj === window.location) {
        return 'Location';
      }
      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/#document)
       * WhatWG HTML$3.1.1 - The `Document` object
       * Note: Most browsers currently adher to the W3C DOM Level 2 spec
       *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
       *       which suggests that browsers should use HTMLTableCellElement for
       *       both TD and TH elements. WhatWG separates these.
       *       WhatWG HTML states:
       *         > For historical reasons, Window objects must also have a
       *         > writable, configurable, non-enumerable property named
       *         > HTMLDocument whose value is the Document interface object.
       * Test: `Object.prototype.toString.call(document)``
       *  - Chrome === "[object HTMLDocument]"
       *  - Firefox === "[object HTMLDocument]"
       *  - Safari === "[object HTMLDocument]"
       *  - IE <=10 === "[object Document]"
       *  - IE 11 === "[object HTMLDocument]"
       *  - IE Edge <=13 === "[object HTMLDocument]"
       */


      if (typeof window.document === 'object' && obj === window.document) {
        return 'Document';
      }

      if (typeof window.navigator === 'object') {
        /* ! Spec Conformance
         * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
         * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
         * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
         *  - IE <=10 === "[object MSMimeTypesCollection]"
         */
        if (typeof window.navigator.mimeTypes === 'object' && obj === window.navigator.mimeTypes) {
          return 'MimeTypeArray';
        }
        /* ! Spec Conformance
         * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
         * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
         * Test: `Object.prototype.toString.call(navigator.plugins)``
         *  - IE <=10 === "[object MSPluginsCollection]"
         */


        if (typeof window.navigator.plugins === 'object' && obj === window.navigator.plugins) {
          return 'PluginArray';
        }
      }

      if ((typeof window.HTMLElement === 'function' || typeof window.HTMLElement === 'object') && obj instanceof window.HTMLElement) {
        /* ! Spec Conformance
        * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
        * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
        * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
        *  - IE <=10 === "[object HTMLBlockElement]"
        */
        if (obj.tagName === 'BLOCKQUOTE') {
          return 'HTMLQuoteElement';
        }
        /* ! Spec Conformance
         * (https://html.spec.whatwg.org/#htmltabledatacellelement)
         * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
         * Note: Most browsers currently adher to the W3C DOM Level 2 spec
         *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
         *       which suggests that browsers should use HTMLTableCellElement for
         *       both TD and TH elements. WhatWG separates these.
         * Test: Object.prototype.toString.call(document.createElement('td'))
         *  - Chrome === "[object HTMLTableCellElement]"
         *  - Firefox === "[object HTMLTableCellElement]"
         *  - Safari === "[object HTMLTableCellElement]"
         */


        if (obj.tagName === 'TD') {
          return 'HTMLTableDataCellElement';
        }
        /* ! Spec Conformance
         * (https://html.spec.whatwg.org/#htmltableheadercellelement)
         * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
         * Note: Most browsers currently adher to the W3C DOM Level 2 spec
         *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
         *       which suggests that browsers should use HTMLTableCellElement for
         *       both TD and TH elements. WhatWG separates these.
         * Test: Object.prototype.toString.call(document.createElement('th'))
         *  - Chrome === "[object HTMLTableCellElement]"
         *  - Firefox === "[object HTMLTableCellElement]"
         *  - Safari === "[object HTMLTableCellElement]"
         */


        if (obj.tagName === 'TH') {
          return 'HTMLTableHeaderCellElement';
        }
      }
    }
    /* ! Speed optimisation
    * Pre:
    *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
    *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
    *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
    *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
    *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
    *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
    *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
    *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
    *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
    * Post:
    *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
    *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
    *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
    *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
    *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
    *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
    *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
    *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
    *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
    */


    var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];

    if (typeof stringTag === 'string') {
      return stringTag;
    }

    var objPrototype = Object.getPrototypeOf(obj);
    /* ! Speed optimisation
    * Pre:
    *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
    *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
    * Post:
    *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
    *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
    */

    if (objPrototype === RegExp.prototype) {
      return 'RegExp';
    }
    /* ! Speed optimisation
    * Pre:
    *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
    * Post:
    *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
    */


    if (objPrototype === Date.prototype) {
      return 'Date';
    }
    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
     * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
     * Test: `Object.prototype.toString.call(Promise.resolve())``
     *  - Chrome <=47 === "[object Object]"
     *  - Edge <=20 === "[object Object]"
     *  - Firefox 29-Latest === "[object Promise]"
     *  - Safari 7.1-Latest === "[object Promise]"
     */


    if (promiseExists && objPrototype === Promise.prototype) {
      return 'Promise';
    }
    /* ! Speed optimisation
    * Pre:
    *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
    * Post:
    *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
    */


    if (setExists && objPrototype === Set.prototype) {
      return 'Set';
    }
    /* ! Speed optimisation
    * Pre:
    *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
    * Post:
    *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
    */


    if (mapExists && objPrototype === Map.prototype) {
      return 'Map';
    }
    /* ! Speed optimisation
    * Pre:
    *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
    * Post:
    *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
    */


    if (weakSetExists && objPrototype === WeakSet.prototype) {
      return 'WeakSet';
    }
    /* ! Speed optimisation
    * Pre:
    *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
    * Post:
    *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
    */


    if (weakMapExists && objPrototype === WeakMap.prototype) {
      return 'WeakMap';
    }
    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
     * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
     * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
     *  - Edge <=13 === "[object Object]"
     */


    if (dataViewExists && objPrototype === DataView.prototype) {
      return 'DataView';
    }
    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
     * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
     * Test: `Object.prototype.toString.call(new Map().entries())``
     *  - Edge <=13 === "[object Object]"
     */


    if (mapExists && objPrototype === mapIteratorPrototype) {
      return 'Map Iterator';
    }
    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
     * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
     * Test: `Object.prototype.toString.call(new Set().entries())``
     *  - Edge <=13 === "[object Object]"
     */


    if (setExists && objPrototype === setIteratorPrototype) {
      return 'Set Iterator';
    }
    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
     * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
     * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */


    if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
      return 'Array Iterator';
    }
    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
     * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
     * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */


    if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
      return 'String Iterator';
    }
    /* ! Speed optimisation
    * Pre:
    *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
    * Post:
    *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
    */


    if (objPrototype === null) {
      return 'Object';
    }

    return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
  }

  return typeDetect;
});

/***/ }),

/***/ 1430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NIL": () => (/* reexport */ nil),
  "parse": () => (/* reexport */ esm_node_parse),
  "stringify": () => (/* reexport */ esm_node_stringify),
  "v1": () => (/* reexport */ esm_node_v1),
  "v3": () => (/* reexport */ esm_node_v3),
  "v4": () => (/* reexport */ esm_node_v4),
  "v5": () => (/* reexport */ esm_node_v5),
  "validate": () => (/* reexport */ esm_node_validate),
  "version": () => (/* reexport */ esm_node_version)
});

;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/rng.js

var rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_node_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_node_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_node_stringify(b);
}

/* harmony default export */ const esm_node_v1 = (v1);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/parse.js


function parse(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_node_parse = (parse);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_node_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_node_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/md5.js


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const esm_node_md5 = (md5);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v3.js


var v3 = v35('v3', 0x30, esm_node_md5);
/* harmony default export */ const esm_node_v3 = (v3);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_node_stringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/sha1.js


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const esm_node_sha1 = (sha1);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v5.js


var v5 = v35('v5', 0x50, esm_node_sha1);
/* harmony default export */ const esm_node_v5 = (v5);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/version.js


function version(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const esm_node_version = (version);
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js










/***/ }),

/***/ 4407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _toConsumableArray = (__webpack_require__(4434)["default"]);

var isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';

var path = __webpack_require__(1017);

var COLON = isWindows ? ';' : ':';

var isexe = __webpack_require__(1676);

var getNotFoundError = function getNotFoundError(cmd) {
  return Object.assign(new Error("not found: ".concat(cmd)), {
    code: 'ENOENT'
  });
};

var getPathInfo = function getPathInfo(cmd, opt) {
  var colon = opt.colon || COLON; // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.

  var pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [''] : [].concat(_toConsumableArray(isWindows ? [process.cwd()] : []), _toConsumableArray((opt.path || process.env.PATH ||
  /* istanbul ignore next: very unusual */
  '').split(colon)));
  var pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM' : '';
  var pathExt = isWindows ? pathExtExe.split(colon) : [''];

  if (isWindows) {
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '') pathExt.unshift('');
  }

  return {
    pathEnv: pathEnv,
    pathExt: pathExt,
    pathExtExe: pathExtExe
  };
};

var which = function which(cmd, opt, cb) {
  if (typeof opt === 'function') {
    cb = opt;
    opt = {};
  }

  if (!opt) opt = {};

  var _getPathInfo = getPathInfo(cmd, opt),
      pathEnv = _getPathInfo.pathEnv,
      pathExt = _getPathInfo.pathExt,
      pathExtExe = _getPathInfo.pathExtExe;

  var found = [];

  var step = function step(i) {
    return new Promise(function (resolve, reject) {
      if (i === pathEnv.length) return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
      var ppRaw = pathEnv[i];
      var pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
      var pCmd = path.join(pathPart, cmd);
      var p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
      resolve(subStep(p, i, 0));
    });
  };

  var subStep = function subStep(p, i, ii) {
    return new Promise(function (resolve, reject) {
      if (ii === pathExt.length) return resolve(step(i + 1));
      var ext = pathExt[ii];
      isexe(p + ext, {
        pathExt: pathExtExe
      }, function (er, is) {
        if (!er && is) {
          if (opt.all) found.push(p + ext);else return resolve(p + ext);
        }

        return resolve(subStep(p, i, ii + 1));
      });
    });
  };

  return cb ? step(0).then(function (res) {
    return cb(null, res);
  }, cb) : step(0);
};

var whichSync = function whichSync(cmd, opt) {
  opt = opt || {};

  var _getPathInfo2 = getPathInfo(cmd, opt),
      pathEnv = _getPathInfo2.pathEnv,
      pathExt = _getPathInfo2.pathExt,
      pathExtExe = _getPathInfo2.pathExtExe;

  var found = [];

  for (var i = 0; i < pathEnv.length; i++) {
    var ppRaw = pathEnv[i];
    var pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
    var pCmd = path.join(pathPart, cmd);
    var p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;

    for (var j = 0; j < pathExt.length; j++) {
      var cur = p + pathExt[j];

      try {
        var is = isexe.sync(cur, {
          pathExt: pathExtExe
        });

        if (is) {
          if (opt.all) found.push(cur);else return cur;
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length) return found;
  if (opt.nothrow) return null;
  throw getNotFoundError(cmd);
};

module.exports = which;
which.sync = whichSync;

/***/ }),

/***/ 4293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _regeneratorRuntime = (__webpack_require__(5290)["default"]);

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var walker;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            walker = this.head;

          case 1:
            if (!walker) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return walker.value;

          case 4:
            walker = walker.next;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  });
};

/***/ }),

/***/ 9237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;

function Yallist(list) {
  var self = this;

  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self;
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list');
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }

  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;

  if (head) {
    head.prev = node;
  }

  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }

  this.length++;
};

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;

  if (tail) {
    tail.next = node;
  }

  this.tail = node;

  if (!this.head) {
    this.head = node;
  }

  this.length++;
};

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined;
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined;
  }

  var res = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }

  return res;
};

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }

  return res;
};

Yallist.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc;
};

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc;
};

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }

  return arr;
};

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }

  return arr;
};

Yallist.prototype.slice = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }

  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }

  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.splice = function (start, deleteCount) {
  if (start > this.length) {
    start = this.length - 1;
  }

  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];

  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }

  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i++) {
    walker = insert(this, walker, i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2]);
  }

  return ret;
};

Yallist.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;

  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }

  this.head = tail;
  this.tail = head;
  return this;
};

function insert(self, node, value) {
  var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }

  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;
  return inserted;
}

function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);

  if (!self.head) {
    self.head = self.tail;
  }

  self.length++;
}

function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);

  if (!self.tail) {
    self.tail = self.head;
  }

  self.length++;
}

function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(4293)(Yallist);
} catch (er) {}

/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 2081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 3737:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1312:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3989:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(3737);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7722:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 411:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9189:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(8748);

var isNativeReflectConstruct = __webpack_require__(8064);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8482:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var unsupportedIterableToArray = __webpack_require__(4945);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6332:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(3458);

var isNativeReflectConstruct = __webpack_require__(8064);

var possibleConstructorReturn = __webpack_require__(9859);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3275:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3458:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6779:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(8748);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7412:
/***/ ((module) => {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8064:
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6037:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1786:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4343:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 623:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(3275);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(9946)["default"]);

var assertThisInitialized = __webpack_require__(7722);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5290:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(9946)["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8748:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(1312);

var iterableToArrayLimit = __webpack_require__(1786);

var unsupportedIterableToArray = __webpack_require__(4945);

var nonIterableRest = __webpack_require__(4343);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4434:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(3989);

var iterableToArray = __webpack_require__(6037);

var unsupportedIterableToArray = __webpack_require__(4945);

var nonIterableSpread = __webpack_require__(623);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9946:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(3737);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(3458);

var setPrototypeOf = __webpack_require__(8748);

var isNativeFunction = __webpack_require__(7412);

var construct = __webpack_require__(6117);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@actions+core@1.9.1/node_modules/@actions/core/lib/core.js
var core = __webpack_require__(4035);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: ./node_modules/.pnpm/fast-glob@3.2.11/node_modules/fast-glob/out/index.js
var out = __webpack_require__(6246);
var out_default = /*#__PURE__*/__webpack_require__.n(out);
;// CONCATENATED MODULE: ./src/utils/index.ts
var parseInputFiles=function parseInputFiles(files){return files.split(/\r?\n/).reduce(function(acc,line){return acc.concat(line.split(',')).filter(function(pat){return pat;}).map(function(pat){return pat.trim();});},[]);};var getBoolenValue=function getBoolenValue(options,type,value){if(typeof value==='string'&&value){if(value==='true'){options[type]=true;}else{options[type]=false;}}else if(typeof value==='boolean'){options[type]=value;}return options;};var getOptions=function getOptions(props){var token=props.token,registry=props.registry,tag=props.tag,checkVersion=props.checkVersion,dryRun=props.dryRun,quiet=props.quiet;var options={token:token,registry:registry||'https://registry.npmjs.org'};if(tag){options.tag=tag;}if(props["package"]){options["package"]=props["package"];}// 当 package 不存在值的时候
if(!options["package"]){var pg=external_path_default().join(process.cwd(),'package.json');if(external_fs_default().existsSync(pg)){var result=getVersion('./package.json');if(result){options["package"]=pg;options.tag=options.tag||result.tag;}}}options=getBoolenValue(options,'checkVersion',checkVersion);options=getBoolenValue(options,'dryRun',dryRun);options=getBoolenValue(options,'quiet',quiet);return options;};/** 读取版本信息 **/var getVersion=function getVersion(packageUrl){var json=external_fs_default().readFileSync(external_path_default().join(process.cwd(),packageUrl),{encoding:'utf-8'});try{if(json){var data=JSON.parse(json);var version=data.version;var name=data.name;var priv=data["private"];if(version&&!priv&&name){var bate=/(-|\.)bate(-|\.\w|$)/.test(version);var alpha=/(-|\.)alpha(-|\.\w|$)/.test(version);var rc=/(-|\.)rc(-|\.\w|$)/.test(version);var tag='latest';if(alpha){tag='alpha';}else if(bate){tag='bate';}else if(rc){tag='rc';}return{"package":packageUrl,tag:tag};}}}catch(err){throw err;}};/** 获取 需要发布的包**/var getPackages=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(workspaces){var dirs,resultArr,packages;return _regeneratorRuntime().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;/** 获取文件 */dirs=(typeof workspaces==='string'?parseInputFiles(workspaces):workspaces).map(function(k){return k+'/package.json';});console.log("workspaces package.json:".concat(JSON.stringify(dirs,null,2)));_context.next=5;return out_default()(dirs.concat(['!**/node_modules/**','!node_modules/**']));case 5:resultArr=_context.sent;console.log("RegExp packages:".concat(JSON.stringify(resultArr,null,2)));packages=[];resultArr.forEach(function(packageUrl){var result=getVersion(packageUrl);if(result)packages.push(result);});return _context.abrupt("return",packages);case 12:_context.prev=12;_context.t0=_context["catch"](0);throw _context.t0;case 15:case"end":return _context.stop();}}},_callee,null,[[0,12]]);}));return function getPackages(_x){return _ref.apply(this,arguments);};}();var splitArr=function splitArr(packageList){//对数据进行长度划分
var lg=Math.ceil(packageList.length/50);};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@jsdevtools+npm-publish@1.4.3/node_modules/@jsdevtools/npm-publish/lib/index.js
var lib = __webpack_require__(7959);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/utils/request.ts
var request=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(options,tag,newEntries){var lg,resultArr,index,item,json,_json;return _regeneratorRuntime().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(Array.isArray(newEntries)&&newEntries.length)){_context.next=22;break;}lg=newEntries.length;_context.prev=2;resultArr=[];index=0;case 5:if(!(index<lg)){_context.next=14;break;}item=newEntries[index];_context.next=9;return lib_default()(_objectSpread2(_objectSpread2({},options),{},{tag:tag||item.tag,"package":item["package"]}));case 9:json=_context.sent;resultArr.push(json);case 11:index++;_context.next=5;break;case 14:return _context.abrupt("return",resultArr);case 17:_context.prev=17;_context.t0=_context["catch"](2);throw _context.t0;case 20:_context.next=30;break;case 22:if(!options["package"]){_context.next=29;break;}_context.next=25;return lib_default()(_objectSpread2({},options));case 25:_json=_context.sent;return _context.abrupt("return",_json);case 29:throw'package is empty';case 30:case"end":return _context.stop();}}},_callee,null,[[2,17]]);}));return function request(_x,_x2,_x3){return _ref.apply(this,arguments);};}();
;// CONCATENATED MODULE: ./src/action/index.ts
function mainNpmPublish(){return _mainNpmPublish.apply(this,arguments);}function _mainNpmPublish(){_mainNpmPublish=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(){var workspaces,token,registry,packages,tag,dryRun,checkVersion,quiet,newEntries,options,result;return _regeneratorRuntime().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;// 包目录
workspaces=core.getInput('workspaces');// token
token=core.getInput('token');registry=core.getInput('registry');packages=core.getInput('package');tag=core.getInput('tag');dryRun=core.getInput('dryRun');checkVersion=core.getInput('checkVersion');quiet=core.getInput('quiet');if(token){_context.next=11;break;}throw new Error('token is empty');case 11:core.info("input packages---->".concat(packages));// 获取包文件夹
newEntries=[];if(packages){_context.next=17;break;}_context.next=16;return getPackages(workspaces);case 16:newEntries=_context.sent;case 17:options=getOptions({token:token,registry:registry,"package":packages,tag:tag,dryRun:dryRun,checkVersion:checkVersion,quiet:quiet});core.info("newEntries---->".concat(JSON.stringify(newEntries,null,2)));core.info("options---->".concat(JSON.stringify(options,null,2)));_context.next=22;return request(options,tag,newEntries);case 22:result=_context.sent;core.setOutput('assets',result);core.info("assets: ".concat(JSON.stringify(result,null,2)));_context.next=30;break;case 27:_context.prev=27;_context.t0=_context["catch"](0);if(_context.t0 instanceof Error)core.setFailed(_context.t0.message);case 30:return _context.abrupt("return");case 31:case"end":return _context.stop();}}},_callee,null,[[0,27]]);}));return _mainNpmPublish.apply(this,arguments);}mainNpmPublish();
})();

module.exports = __webpack_exports__;
/******/ })()
;