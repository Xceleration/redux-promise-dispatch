"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActionCreator = function (name) { return function (payload) {
    return {
        type: name,
        payload: payload
    };
}; };
exports.wrapInActionCreator = function (value) {
    return typeof value === 'function' ? value : exports.createActionCreator(value);
};
exports.typeResolver = function (fn) {
    return fn;
};
exports.ensurePromise = function (result, dispatch, getState) {
    if (typeof result === 'function') {
        //no? ok, we must need to dispatch it.
        return result(dispatch, getState);
    }
    else {
        return result;
    }
};
