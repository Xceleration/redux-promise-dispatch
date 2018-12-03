export interface Action {
    type: any;
}
export declare type ReduxThunk<T = any> = (dispatch: Function, getState?: Function) => T;
export declare type PromiseReturningThunk<T = any> = ReduxThunk<Promise<T>>;
export declare type ActionCreator = (...args: any[]) => Action | ReduxThunk;
export declare type UnsafeActionCreator = string | ActionCreator;
export declare type wrapInActionCreator = (x: UnsafeActionCreator) => ActionCreator;
export declare type createActionCreator = (n: string) => ActionCreator;
export declare type PromiseDispatch = (...args: any[]) => PromiseReturningThunk;
export declare type PromiseFunction = (...args: any[]) => Promise<any>;
export declare type EventualPromise = PromiseDispatch | PromiseFunction;
export declare type EnsurePromise = (a: PromiseReturningThunk | Promise<any>, dispatch: Function, getState?: Function) => Promise<any>;
export declare type ActionSet = {
    request?: ActionCreator;
    success: ActionCreator;
    failure: ActionCreator;
};
export declare type UnsafeActionSet = {
    request?: UnsafeActionCreator;
    success: UnsafeActionCreator;
    failure: UnsafeActionCreator;
};
