import { EventualPromise, ActionSet, UnsafeActionSet, PromiseDispatch } from './types';
export declare const promiseDispatcher: <FunctionType extends EventualPromise>(fn: FunctionType, { request, success, failure }: UnsafeActionSet) => FunctionType;
export declare const promiseDispatchCreator: (fn: EventualPromise, { request, success, failure }: ActionSet) => PromiseDispatch;
