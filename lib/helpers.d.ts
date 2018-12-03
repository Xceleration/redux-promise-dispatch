import { createActionCreator as createFn, wrapInActionCreator as wrapFn } from './types';
import { EnsurePromise, EventualPromise } from './types';
export declare const createActionCreator: createFn;
export declare const wrapInActionCreator: wrapFn;
export declare const typeResolver: <FunctionType extends EventualPromise>(fn: EventualPromise) => FunctionType;
export declare const ensurePromise: EnsurePromise;
