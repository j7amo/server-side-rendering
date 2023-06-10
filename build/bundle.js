/******/
(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }

  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = '';
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__((__webpack_require__.s = 7));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, exports) {
      module.exports = require('react');

      /***/
    },
    /* 1 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      function _asyncToGenerator(fn) {
        return function () {
          var gen = fn.apply(this, arguments);
          return new Promise(function (resolve, reject) {
            function step(key, arg) {
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
                return Promise.resolve(value).then(
                  function (value) {
                    step('next', value);
                  },
                  function (err) {
                    step('throw', err);
                  }
                );
              }
            }

            return step('next');
          });
        };
      }

      var FETCH_USERS = (exports.FETCH_USERS = 'fetch_users');
      var FETCH_CURRENT_USER = (exports.FETCH_CURRENT_USER =
        'fetch_current_user');
      var FETCH_ADMINS = (exports.FETCH_ADMINS = 'fetch_admins');
      // After configuring Redux thunk to receive Axios instance as a 3rd argument(here we use by the name of 'api')
      // we now can use it inside the middleware:
      var fetchUsers = (exports.fetchUsers = function fetchUsers() {
        return (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
              dispatch,
              getState,
              api
            ) {
              var res;
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return api.get('/users');

                      case 2:
                        res = _context.sent;

                        dispatch({
                          type: FETCH_USERS,
                          payload: res,
                        });

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                undefined
              );
            })
          );

          return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })();
      });

      // Here we catch current user authentication status
      var fetchCurrentUser = (exports.fetchCurrentUser =
        function fetchCurrentUser() {
          return (function () {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(
                dispatch,
                getState,
                api
              ) {
                var res;
                return regeneratorRuntime.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          _context2.next = 2;
                          return api.get('/current_user');

                        case 2:
                          res = _context2.sent;

                          dispatch({
                            type: FETCH_CURRENT_USER,
                            payload: res,
                          });

                        case 4:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  undefined
                );
              })
            );

            return function (_x4, _x5, _x6) {
              return _ref2.apply(this, arguments);
            };
          })();
        });

      var fetchAdmins = (exports.fetchAdmins = function fetchAdmins() {
        return (function () {
          var _ref3 = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(
              dispatch,
              getState,
              api
            ) {
              var res;
              return regeneratorRuntime.wrap(
                function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        _context3.next = 2;
                        return api.get('/admins');

                      case 2:
                        res = _context3.sent;

                        dispatch({
                          type: FETCH_ADMINS,
                          payload: res,
                        });

                      case 4:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                },
                _callee3,
                undefined
              );
            })
          );

          return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
          };
        })();
      });

      /***/
    },
    /* 2 */
    /***/ function (module, exports) {
      module.exports = require('react-redux');

      /***/
    },
    /* 3 */
    /***/ function (module, exports) {
      module.exports = require('react-router-dom');

      /***/
    },
    /* 4 */
    /***/ function (module, exports) {
      module.exports = require('react-router-config');

      /***/
    },
    /* 5 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _HomePage = __webpack_require__(12);

      var _HomePage2 = _interopRequireDefault(_HomePage);

      var _UsersListPage = __webpack_require__(13);

      var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

      var _App = __webpack_require__(15);

      var _App2 = _interopRequireDefault(_App);

      var _NotFoundPage = __webpack_require__(17);

      var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

      var _AdminsListPage = __webpack_require__(18);

      var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // The App component will always be rendered and other routes will be nested inside of it.
      // Notice how the App part does not have a 'path' and 'exact' properties because
      // we do not want to associate it with any but to show 100% of the time.
      exports.default = [
        _extends({}, _App2.default, {
          routes: [
            _extends(
              {
                path: '/',
              },
              _HomePage2.default,
              {
                // this will result in component: HomePage.component
                exact: true,
              }
            ),
            _extends(
              {
                path: '/users',
              },
              _UsersListPage2.default,
              {
                // this will result in 1) component: UsersListPage.component 2) loadData: loadData
                exact: true,
              }
            ),
            _extends(
              {
                path: '/admins',
              },
              _AdminsListPage2.default,
              {
                exact: true,
              }
            ),
            _extends({}, _NotFoundPage2.default),
          ],
        }),
      ];

      /***/
    },
    /* 6 */
    /***/ function (module, exports) {
      module.exports = require('redux');

      /***/
    },
    /* 7 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(8);

      var _express = __webpack_require__(9);

      var _express2 = _interopRequireDefault(_express);

      var _renderHtml = __webpack_require__(10);

      var _renderHtml2 = _interopRequireDefault(_renderHtml);

      var _createStore = __webpack_require__(22);

      var _createStore2 = _interopRequireDefault(_createStore);

      var _reactRouterConfig = __webpack_require__(4);

      var _expressHttpProxy = __webpack_require__(29);

      var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

      var _Routes = __webpack_require__(5);

      var _Routes2 = _interopRequireDefault(_Routes);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _asyncToGenerator(fn) {
        return function () {
          var gen = fn.apply(this, arguments);
          return new Promise(function (resolve, reject) {
            function step(key, arg) {
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
                return Promise.resolve(value).then(
                  function (value) {
                    step('next', value);
                  },
                  function (err) {
                    step('throw', err);
                  }
                );
              }
            }

            return step('next');
          });
        };
      } // This first import will polyfill the functions for 'async-await' functionality

      var app = (0, _express2.default)();
      // We are using cookie-based authentication in our app (because JWT solution is far from ideal - we cannot attach
      // JWT on the first request BUT we already are expecting to see the page after this very first request).
      // With cookie-based auth solution we don't have control over sending cookies BUT the browser
      // will send them automatically for us if they MATCH DOMAIN THAT ISSUED THEM ORIGINALLY.
      // To make this matching happen we have to set up a proxy that
      // will redirect initial request from the browser to the API so that browser can successfully send the cookie.
      // So we basically 'trick' the browser into thinking that it is sending cookies
      // to the API when in reality it communicates with the rendering server-side-rendering!
      // Then on the rendering server-side-rendering we
      // 1) intercept and extract the cookie from the request
      // 2) attach cookie to axios request to the API
      // 3) API sees the cookie, recognizes us and gives us the data we need
      // 4) we use this data for SSR of the pages that require authentication
      // 5) we send back complete HTML with all the needed data
      app.use(
        '/api',
        (0, _expressHttpProxy2.default)(
          'https://react-ssr-api.herokuapp.com/',
          {
            // This particular setup is needed because the author of API set it up in a specific way.
            // The whole point of the setup is about redirecting to a correct URL after signing in with Google OAuth.
            proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
              opts.headers['x-forwarded-host'] = 'localhost:3000';

              return opts;
            },
          }
        )
      );
      // We use 'express.static' middleware to serve images, CSS files
      // and JavaScript files in a directory named 'public'. And this is exactly what we need
      // because 'bundle.js' file with all the clientside JS code is located in this folder.
      app.use(_express2.default.static('public'));

      // We are using '*' here to let Express catch ANY route BUT not really handling it.
      // No matter what path is requested ('/banana', '/123' etc.) by user,
      // Express will behave exactly the same:
      // it will send back the result of calling 'renderHtml' function that WILL really handle
      // routing because it uses StaticRouter under the hood.
      app.get(
        '*',
        (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee(req, res) {
              var store, pendingRequests, context, html;
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        // This might look strange but Redux store on the server-side-rendering MUST be set up differently!
                        // We need it to behave differently - NOT like the Redux store in the browser.
                        // The usual behavior of the React-Redux app in the browser in the context of
                        // fetching some data:
                        // 1) dispatch an action from a lifecycle method/useEffect hook
                        // 2) call API from thunk
                        // 3) resolve API call and receive data
                        // 4) call the reducer and get the updated state
                        // 5) update the React layer via connect function/useSelector hook
                        // BUT:
                        // 'componentDidMount' lifecycle method is NOT invoked when we call 'renderToString' function!
                        // So we end up with no data and cannot show it to the user as a result.

                        // We are creating a Redux store here, initialize and add data to it
                        // and finally pass it to 'renderHtml' function.
                        store = (0, _createStore2.default)(req);

                        // Before we pass the store to 'renderHtml' function we need it to contain all the data (i.e. everything
                        // should be fetched). To understand what exactly we should fetch we first need to somehow know what
                        // set of components we will render.
                        // 'matchRoutes' function can help us with that.
                        // It checks if some route is matched based on the user request
                        // and returns the array of components to be rendered.
                        // So by now we know exact components to be rendered WITHOUT rendering them (remember that we want
                        // to 1) fetch all the needed data 2) render the app ONLY once 3) return the string to the client).

                        pendingRequests = (0, _reactRouterConfig.matchRoutes)(
                          _Routes2.default,
                          req.path
                        )
                          .map(function (matchedRoute) {
                            if (matchedRoute.route.loadData) {
                              return matchedRoute.route.loadData(store);
                            }

                            return null;
                          })
                          // Because we want to somehow resolve the issue of Promise.all calling 'catch' too early
                          // we can use a HACK here:
                          .map(function (pendingRequest) {
                            if (pendingRequest) {
                              // HACK: we wrap the promise with ANOTHER promise and resolve it no matter what (even if it was rejected)
                              // This will result in Promise.all NEVER calling the 'catch' method!
                              return new Promise(function (resolve, reject) {
                                pendingRequest.then(resolve).catch(resolve);
                              });
                            }
                          });

                        // 'pendingRequests' is an array of promises because 'loadData' function returns a promise.
                        // To make sure that we
                        // 1) fetch all the data and
                        // 2) update store with this data before rendering - we await 'Promise.all'

                        _context.prev = 2;
                        _context.next = 5;
                        return Promise.all(pendingRequests);

                      case 5:
                        // Here we define an object that will be used by StaticRouter.
                        // StaticRouter will pass this object to any component it renders.
                        // So the idea is the following:
                        // 1) pass 'context' to StaticRouter
                        // 2) StaticRouter passes it to NotFoundPage
                        // 3) inside NotFoundPage component add an error property to the context object
                        // 4) after HTML markup was created AND before sending it back to the client
                        // CHECK context object for error property and send 404 Not Found status if error is present.
                        context = {};

                        // And now we have everything we need to create markup and send it to the client

                        html = (0, _renderHtml2.default)(req, store, context);

                        if (!context.url) {
                          _context.next = 9;
                          break;
                        }

                        return _context.abrupt(
                          'return',
                          res.redirect(301, context.url)
                        );

                      case 9:
                        if (context.notFound) {
                          res.status(404).send(html);
                        } else {
                          res.send(html);
                        }
                        _context.next = 15;
                        break;

                      case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](2);

                        console.log('Error!');

                      case 15:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                undefined,
                [[2, 12]]
              );
            })
          );

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()
      );

      app.listen(3000, function () {
        return console.log('Server is running on port 3000');
      });

      /***/
    },
    /* 8 */
    /***/ function (module, exports) {
      module.exports = require('babel-polyfill');

      /***/
    },
    /* 9 */
    /***/ function (module, exports) {
      module.exports = require('express');

      /***/
    },
    /* 10 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _server = __webpack_require__(11);

      var _reactRouterDom = __webpack_require__(3);

      var _Routes = __webpack_require__(5);

      var _Routes2 = _interopRequireDefault(_Routes);

      var _reactRedux = __webpack_require__(2);

      var _reactRouterConfig = __webpack_require__(4);

      var _serializeJavascript = __webpack_require__(20);

      var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

      var _reactHelmet = __webpack_require__(21);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = function (req, store, context) {
        // The problem is: Node environment does not know anything about JSX.
        // So if we try to execute index.js without additional setup,
        // we will get: SyntaxError: Unexpected token '<'
        var content = (0, _server.renderToString)(
          // StaticRouter cannot look at the address bar like BrowserRouter does,
          // so we need to pass the current path user is trying to visit via 'location' prop.
          // The path can be found on a 'req' object of Express route handler.
          _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
              _reactRouterDom.StaticRouter,
              { location: req.path, context: context },
              _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
              )
            )
          )
        );

        // 1) We need to include ONLY the client side JS in the resulting HTML
        // to let browser know that it ALSO needs to download the script file for the app to work properly.
        // 2) We also need to somehow PASS the already initialized Redux STATE TO the BROWSER.
        // Why? Because browser will initialize its own Redux store which will start completely EMPTY ->
        // this will trigger the fetching of data again -> this will result in the screen flashing
        // because data fetched on the server-side-rendering will be overwritten with blank data(it will trigger re-render)
        // and then the blank data will be overwritten with newly fetched data again(it will trigger re-render again).
        // But we don't want this behavior because the data was already fetched on the server-side-rendering before rendering
        // and sending back the markup.
        // 3) We also need to be very careful with XSS attacks. Why? React has XSS attacks defense built-in.
        // But the problem here is that we inject JS into a global variable on the 'window' object.
        // Which is a great place for malicious users to add some malicious code for our browser to execute.
        // That's why instead of 'JSON.stringify' we are using 'serialize' function from the 'serialize-javascript'
        // package. What it does: it does the coding of all the special characters (e.g. </\>) into Unicode.
        // When the browser sees something like '\u003C' (which is '<'), it DOES NOT TRY TO EXECUTE IT. It
        // just uses this information only for rendering purposes. So '\u003C' will be rendered as '<' but no execution!
        var helmet = _reactHelmet.Helmet.renderStatic();

        return (
          "\n    <html lang='en'> \n      <head>\n        " +
          helmet.title.toString() +
          '\n        ' +
          helmet.meta.toString() +
          "\n        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'>\n      </head>\n      <body>\n        <div id='root'>" +
          content +
          '</div>\n        <script>\n          window.INITIAL_STATE = ' +
          (0, _serializeJavascript2.default)(store.getState()) +
          "\n        </script>\n        <script src='bundle.js'></script>\n      </body>\n    </html>\n  "
        );
      };

      /***/
    },
    /* 11 */
    /***/ function (module, exports) {
      module.exports = require('react-dom/server');

      /***/
    },
    /* 12 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var HomePage = function HomePage() {
        return _react2.default.createElement(
          'div',
          { className: 'center-align', style: { marginTop: '200px' } },
          _react2.default.createElement('h3', null, 'Welcome'),
          _react2.default.createElement('p', null, 'Check out these features')
        );
      };

      // We wrap the component inside an object for simplifying its usage later on (in the Routes)
      exports.default = { component: HomePage };

      /***/
    },
    /* 13 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _createClass = (function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _reactRedux = __webpack_require__(2);

      var _actions = __webpack_require__(1);

      var _reactHelmet = __webpack_require__(21);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === 'object' || typeof call === 'function')
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
          },
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      // Because this course is using old React 16.0, we have to work with class components.
      var UsersListPage = (function (_Component) {
        _inherits(UsersListPage, _Component);

        function UsersListPage() {
          _classCallCheck(this, UsersListPage);

          return _possibleConstructorReturn(
            this,
            (
              UsersListPage.__proto__ || Object.getPrototypeOf(UsersListPage)
            ).apply(this, arguments)
          );
        }

        _createClass(UsersListPage, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              // It might look like we can now remove this call because we are getting the initial state
              // for Redux store from the server-side-rendering where we already have users.
              // BUT! Let's imagine the user of our app decides to go to '/' path first, and
              // later he decides to visit '/users'. Because of this order data for 'UsersListPage'
              // WAS NEVER FETCHED ON THE SERVER! So that window.INITIAL_STATE does not have it anymore.
              // That's why we have to keep this call here.
              this.props.fetchUsers();
            },
          },
          {
            key: 'renderUsers',
            value: function renderUsers() {
              return this.props.users.map(function (user) {
                return _react2.default.createElement(
                  'li',
                  { key: user.id },
                  user.name
                );
              });
            },
          },
          {
            key: 'head',
            value: function head() {
              return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                  'title',
                  null,
                  this.props.users.length + ' Users loaded'
                ),
                _react2.default.createElement('meta', {
                  property: 'og:title',
                  content: 'Users App',
                })
              );
            },
          },
          {
            key: 'render',
            value: function render() {
              return _react2.default.createElement(
                'div',
                null,
                this.head(),
                'List of users',
                _react2.default.createElement('ul', null, this.renderUsers())
              );
            },
          },
        ]);

        return UsersListPage;
      })(_react.Component);

      function mapStateToProps(state) {
        return {
          users: state.users,
        };
      }

      function loadData(store) {
        // Why do we use 'store.dispatch'? Why not use 'component.props.fetchUsers'?
        // Because 'connect' function works only with 'Provider' component.
        // For it to work the Provider component MUST BE RENDERED FIRST!
        // But we want to fetch all the data and update Redux store BEFORE RENDERING anything!
        // So we CANNOT USE CONNECT functionality here.
        return store.dispatch((0, _actions.fetchUsers)());
      }

      // We wrap the component AND 'loadData' inside an object for simplifying its usage later on (in the Routes)
      exports.default = {
        // As a result UsersListPage component will have 'users' and 'fetchUsers' both available in the props object
        component: (0, _reactRedux.connect)(mapStateToProps, {
          fetchUsers: _actions.fetchUsers,
        })(UsersListPage),
        loadData: loadData,
      };

      /***/
    },
    ,
    /* 14 */ /* 15 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _reactRouterConfig = __webpack_require__(4);

      var _Header = __webpack_require__(16);

      var _Header2 = _interopRequireDefault(_Header);

      var _actions = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // Because we have nested routes that we want to render inside an App component
      // we need to use a special 'route' prop that has 'routes' property on it.
      var App = function App(_ref) {
        var route = _ref.route;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          (0, _reactRouterConfig.renderRoutes)(route.routes)
        );
      };

      exports.default = {
        component: App,
        // Add 'loadData' property (just like we did with other components that need data fetching).
        // Why do we add fetching of current user auth status to the App component?
        // Because we want to always check it and the App component is rendered 100% of the time.
        loadData: function loadData(_ref2) {
          var dispatch = _ref2.dispatch;
          return dispatch((0, _actions.fetchCurrentUser)());
        },
      };

      /***/
    },
    /* 16 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _reactRouterDom = __webpack_require__(3);

      var _reactRedux = __webpack_require__(2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var Header = function Header(_ref) {
        var auth = _ref.auth;

        // Here we use <a> tags because we want the browser to make a full request with cookies in each of these cases.
        // The <Link /> component is no good for this because it won't trigger browser request.
        var authButton = auth
          ? _react2.default.createElement(
              'a',
              { href: '/api/logout' },
              'Logout'
            )
          : _react2.default.createElement(
              'a',
              { href: '/api/auth/google' },
              'Login'
            );

        return _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'div',
            { className: 'nav-wrapper' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'brand-logo' },
              'React SSR'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'right' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/users' },
                  'Users'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/admins' },
                  'Admins'
                )
              ),
              _react2.default.createElement('li', null, authButton)
            )
          )
        );
      };

      function mapStateToProps(_ref2) {
        var auth = _ref2.auth;

        return { auth: auth };
      }

      exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

      /***/
    },
    /* 17 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // We receive 'staticContext' prop on the server-side-rendering side inside the StaticRouter.
      // But on the client side we use BrowserRouter and in that case
      // we do not receive 'staticContext' prop. So we need to default it.
      var NotFoundPage = function NotFoundPage(_ref) {
        var _ref$staticContext = _ref.staticContext,
          staticContext =
            _ref$staticContext === undefined ? {} : _ref$staticContext;

        // Add error prop for later inspection before sending the response.
        staticContext.notFound = true;

        return _react2.default.createElement('h1', null, 'Page not found!');
      };

      exports.default = { component: NotFoundPage };

      /***/
    },
    /* 18 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _createClass = (function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _reactRedux = __webpack_require__(2);

      var _actions = __webpack_require__(1);

      var _requireAuth = __webpack_require__(19);

      var _requireAuth2 = _interopRequireDefault(_requireAuth);

      var _reactHelmet = __webpack_require__(21);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === 'object' || typeof call === 'function')
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
          },
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var AdminsListPage = (function (_Component) {
        _inherits(AdminsListPage, _Component);

        function AdminsListPage() {
          _classCallCheck(this, AdminsListPage);

          return _possibleConstructorReturn(
            this,
            (
              AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)
            ).apply(this, arguments)
          );
        }

        _createClass(AdminsListPage, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              this.props.fetchAdmins();
            },
          },
          {
            key: 'renderAdmins',
            value: function renderAdmins() {
              return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                  'li',
                  { key: admin.id },
                  admin.name
                );
              });
            },
          },
          {
            key: 'head',
            value: function head() {
              return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                  'title',
                  null,
                  this.props.admins.length + ' Admins loaded'
                ),
                _react2.default.createElement('meta', {
                  property: 'og:title',
                  content: 'Users App',
                })
              );
            },
          },
          {
            key: 'render',
            value: function render() {
              return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Protected list of admins'
                ),
                _react2.default.createElement('ul', null, this.renderAdmins())
              );
            },
          },
        ]);

        return AdminsListPage;
      })(_react.Component);

      function mapStateToProps(state) {
        return {
          admins: state.admins,
        };
      }

      function loadData(store) {
        return store.dispatch((0, _actions.fetchAdmins)());
      }

      exports.default = {
        component: (0, _reactRedux.connect)(mapStateToProps, {
          fetchAdmins: _actions.fetchAdmins,
        })(
          // Use requireAuth HOC
          (0, _requireAuth2.default)(AdminsListPage)
        ),
        loadData: loadData,
      };

      /***/
    },
    /* 19 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _createClass = (function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _reactRedux = __webpack_require__(2);

      var _reactRouterDom = __webpack_require__(3);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === 'object' || typeof call === 'function')
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
          },
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      // We make a HOC (Higher Order Component that will enhance/decorate any child component we pass in
      exports.default = function (ChildComponent) {
        var RequireAuth = (function (_Component) {
          _inherits(RequireAuth, _Component);

          function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(
              this,
              (
                RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)
              ).apply(this, arguments)
            );
          }

          _createClass(RequireAuth, [
            {
              key: 'render',
              value: function render() {
                switch (this.props.auth) {
                  case false:
                    // On the server-side-rendering side <Redirect /> component works differently. When we use it
                    // StaticRouter adds something to the 'context' object. So we need to inspect that object.
                    return _react2.default.createElement(
                      _reactRouterDom.Redirect,
                      { to: '/' }
                    );
                  case null:
                    return _react2.default.createElement(
                      'div',
                      null,
                      'Loading...'
                    );
                  default:
                    // If the user is authenticated we just render the ChildComponent
                    // WITH all the props that were passed to the HOC!
                    return _react2.default.createElement(
                      ChildComponent,
                      this.props
                    );
                }
              },
            },
          ]);

          return RequireAuth;
        })(_react.Component);

        function mapStateToProps(state) {
          return {
            auth: state.auth,
          };
        }

        return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
      };

      /***/
    },
    /* 20 */
    /***/ function (module, exports) {
      module.exports = require('serialize-javascript');

      /***/
    },
    /* 21 */
    /***/ function (module, exports) {
      module.exports = require('react-helmet');

      /***/
    },
    /* 22 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _redux = __webpack_require__(6);

      var _reduxThunk = __webpack_require__(23);

      var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

      var _reducers = __webpack_require__(24);

      var _reducers2 = _interopRequireDefault(_reducers);

      var _axios = __webpack_require__(28);

      var _axios2 = _interopRequireDefault(_axios);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = function (req) {
        // Here we create another Axios instance but this time for the server-side-rendering side.
        // In this case we have to manually attach the cookie to the request because the request itself
        // is not carried by the browser this time, and we still want to trick the API
        // into thinking that this request comes from the browser.
        var axiosInstance = _axios2.default.create({
          baseURL: 'https://react-ssr-api.herokuapp.com/',
          headers: {
            cookie: req.get('cookie') || '',
          },
        });

        var store = (0, _redux.createStore)(
          _reducers2.default,
          {},
          (0, _redux.applyMiddleware)(
            _reduxThunk2.default.withExtraArgument(axiosInstance)
          )
        );

        return store;
      };

      /***/
    },
    /* 23 */
    /***/ function (module, exports) {
      module.exports = require('redux-thunk');

      /***/
    },
    /* 24 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _redux = __webpack_require__(6);

      var _usersReducer = __webpack_require__(25);

      var _usersReducer2 = _interopRequireDefault(_usersReducer);

      var _authReducer = __webpack_require__(26);

      var _authReducer2 = _interopRequireDefault(_authReducer);

      var _adminsReducer = __webpack_require__(27);

      var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var reducers = (0, _redux.combineReducers)({
        auth: _authReducer2.default,
        admins: _adminsReducer2.default,
        users: _usersReducer2.default,
      });

      exports.default = reducers;

      /***/
    },
    /* 25 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _actions = __webpack_require__(1);

      var usersReducer = function usersReducer() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : [];
        var action = arguments[1];

        switch (action.type) {
          case _actions.FETCH_USERS:
            return action.payload.data;
          default:
            return state;
        }
      };

      exports.default = usersReducer;

      /***/
    },
    /* 26 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _actions = __webpack_require__(1);

      // null - we don't know if the user is authenticated
      // false - user is not authenticated
      var authReducer = function authReducer() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : null;
        var action = arguments[1];

        switch (action.type) {
          case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
          default:
            return state;
        }
      };

      exports.default = authReducer;

      /***/
    },
    /* 27 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _actions = __webpack_require__(1);

      var adminsReducer = function adminsReducer() {
        var state =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : [];
        var action = arguments[1];

        switch (action.type) {
          case _actions.FETCH_ADMINS:
            return action.payload.data;
          default:
            return state;
        }
      };

      exports.default = adminsReducer;

      /***/
    },
    /* 28 */
    /***/ function (module, exports) {
      module.exports = require('axios');

      /***/
    },
    /* 29 */
    /***/ function (module, exports) {
      module.exports = require('express-http-proxy');

      /***/
    },
    /******/
  ]
);
