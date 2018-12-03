"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
exports.promiseDispatcher = function (fn, _a) {
    var request = _a.request, success = _a.success, failure = _a.failure;
    var readyForDispatch = exports.promiseDispatchCreator(fn, {
        request: request === undefined ? undefined : helpers_1.wrapInActionCreator(request),
        success: helpers_1.wrapInActionCreator(success),
        failure: helpers_1.wrapInActionCreator(failure)
    });
    return helpers_1.typeResolver(readyForDispatch);
};
// Take a method (from our API service), params, and three named action creators
// Execute the standard (request -> success | failure) action cycle for that api call
exports.promiseDispatchCreator = function (fn, _a) {
    var request = _a.request, success = _a.success, failure = _a.failure;
    var reduxDispatchFunction = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return function (dispatch, getState) {
            request !== undefined ? dispatch(request.apply(void 0, params)) : null;
            var result = fn.apply(void 0, params);
            var promiseResult = helpers_1.ensurePromise(result, dispatch, getState);
            return new Promise(function (resolve, reject) {
                promiseResult
                    .then(function (response) {
                    dispatch(success.apply(void 0, [response].concat(params)));
                    resolve(response);
                })
                    .catch(function (error) {
                    dispatch(failure.apply(void 0, [error].concat(params)));
                    reject(error);
                });
            });
        };
    };
    return reduxDispatchFunction;
};
