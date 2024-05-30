declare var _default: {
    <T>(urlOrConfig: string | Options, config?: Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<Response<T>>;
    /**
     * @public
     * @template T
     * @type {(<T = any>(config?: Options) => Promise<Response<T>>) | (<T = any>(url: string, config?: Options) => Promise<Response<T>>)}
     */
    request: (<T_1 = any>(config?: Options | undefined) => Promise<Response<T_1>>) | (<T_2 = any>(url: string, config?: Options | undefined) => Promise<Response<T_2>>);
    /** @public @type {BodylessMethod} */
    get<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodylessMethod} */
    delete<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodylessMethod} */
    head<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodylessMethod} */
    options<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodyMethod} */
    post<T_4 = any>(url: string, body?: any, config?: Options | undefined): Promise<Response<T_4>>;
    /** @public @type {BodyMethod} */
    put<T_4 = any>(url: string, body?: any, config?: Options | undefined): Promise<Response<T_4>>;
    /** @public @type {BodyMethod} */
    patch<T_4 = any>(url: string, body?: any, config?: Options | undefined): Promise<Response<T_4>>;
    /** @public */
    all: {
        <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
        <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
        <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
        <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
        <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
        <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
        <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
        <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
        <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
        <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
        <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
    };
    /**
     * @public
     * @template Args, R
     * @param {(...args: Args[]) => R} fn
     * @returns {(array: Args[]) => R}
     */
    spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
    /**
     * @public
     * @type {AbortController}
     */
    CancelToken: AbortController;
    /**
     * @public
     * @type {Options}
     */
    defaults: Options;
    /**
     * @public
     */
    create: typeof create;
};
export default _default;
export type Options = {
    /**
     * the URL to request
     */
    url?: string;
    /**
     * HTTP method, case-insensitive
     */
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
    /**
     * Request headers
     */
    headers?: RequestHeaders;
    /**
     * a body, optionally encoded, to send
     */
    body?: FormData | string | object;
    /**
     * An encoding to use for the response
     */
    responseType?: 'text' | 'json' | 'stream' | 'blob' | 'arrayBuffer' | 'formData' | 'stream';
    /**
     * querystring parameters
     */
    params?: Record<string, any> | URLSearchParams;
    /**
     * custom function to stringify querystring parameters
     */
    paramsSerializer?: (params: Options['params']) => string;
    /**
     * Send the request with credentials like cookies
     */
    withCredentials?: boolean;
    /**
     * Authorization header value to send with the request
     */
    auth?: string;
    /**
     * Pass an Cross-site Request Forgery prevention cookie value as a header defined by `xsrfHeaderName`
     */
    xsrfCookieName?: string;
    /**
     * The name of a header to use for passing XSRF cookies
     */
    xsrfHeaderName?: string;
    /**
     * Override status code handling (default: 200-399 is a success)
     */
    validateStatus?: (status: number) => boolean;
    /**
     * An array of transformations to apply to the outgoing request
     */
    transformRequest?: ((body: any, headers?: {
        [name: string]: string;
    } | Headers | undefined) => any | null)[];
    /**
     * a base URL from which to resolve all URLs
     */
    baseURL?: string;
    /**
     * Custom window.fetch implementation
     */
    fetch?: typeof window.fetch;
    data?: any;
};
export type RequestHeaders = {
    [name: string]: string;
} | Headers;
export type Response<T> = {
    status: number;
    statusText: string;
    /**
     * the request configuration
     */
    config: Options;
    /**
     * the decoded response body
     */
    data: T;
    headers: Headers;
    redirect: boolean;
    url: string;
    type: ResponseType;
    body: ReadableStream<Uint8Array> | null;
    bodyUsed: boolean;
};
export type BodylessMethod = <T = any>(url: string, config?: Options | undefined) => Promise<Response<T>>;
export type BodyMethod = <T = any>(url: string, body?: any, config?: Options | undefined) => Promise<Response<T>>;
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 * @typedef Options
 * @property {string} [url] the URL to request
 * @property {'get'|'post'|'put'|'patch'|'delete'|'options'|'head'|'GET'|'POST'|'PUT'|'PATCH'|'DELETE'|'OPTIONS'|'HEAD'} [method="get"] HTTP method, case-insensitive
 * @property {RequestHeaders} [headers] Request headers
 * @property {FormData|string|object} [body] a body, optionally encoded, to send
 * @property {'text'|'json'|'stream'|'blob'|'arrayBuffer'|'formData'|'stream'} [responseType="json"] An encoding to use for the response
 * @property {Record<string,any>|URLSearchParams} [params] querystring parameters
 * @property {(params: Options['params']) => string} [paramsSerializer] custom function to stringify querystring parameters
 * @property {boolean} [withCredentials] Send the request with credentials like cookies
 * @property {string} [auth] Authorization header value to send with the request
 * @property {string} [xsrfCookieName] Pass an Cross-site Request Forgery prevention cookie value as a header defined by `xsrfHeaderName`
 * @property {string} [xsrfHeaderName] The name of a header to use for passing XSRF cookies
 * @property {(status: number) => boolean} [validateStatus] Override status code handling (default: 200-399 is a success)
 * @property {Array<(body: any, headers?: RequestHeaders) => any?>} [transformRequest] An array of transformations to apply to the outgoing request
 * @property {string} [baseURL] a base URL from which to resolve all URLs
 * @property {typeof window.fetch} [fetch] Custom window.fetch implementation
 * @property {any} [data]
 */
/**
 * @public
 * @typedef RequestHeaders
 * @type {{[name: string]: string} | Headers}
 */
/**
 * @public
 * @template T
 * @typedef Response
 * @property {number} status
 * @property {string} statusText
 * @property {Options} config the request configuration
 * @property {T} data the decoded response body
 * @property {Headers} headers
 * @property {boolean} redirect
 * @property {string} url
 * @property {ResponseType} type
 * @property {ReadableStream<Uint8Array> | null} body
 * @property {boolean} bodyUsed
 */
/**
 * @typedef BodylessMethod
 * @type {<T=any>(url: string, config?: Options) => Promise<Response<T>>}
 */
/**
 * @typedef BodyMethod
 * @type {<T=any>(url: string, body?: any, config?: Options) => Promise<Response<T>>}
 */
/**
 * @public
 * @param {Options} [defaults = {}]
 * @returns {redaxios}
 */
declare function create(defaults?: Options | undefined): {
    <T>(urlOrConfig: string | Options, config?: Options | undefined, _method?: any, data?: any, _undefined?: undefined): Promise<Response<T>>;
    /**
     * @public
     * @template T
     * @type {(<T = any>(config?: Options) => Promise<Response<T>>) | (<T = any>(url: string, config?: Options) => Promise<Response<T>>)}
     */
    request: (<T_1 = any>(config?: Options | undefined) => Promise<Response<T_1>>) | (<T_2 = any>(url: string, config?: Options | undefined) => Promise<Response<T_2>>);
    /** @public @type {BodylessMethod} */
    get<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodylessMethod} */
    delete<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodylessMethod} */
    head<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodylessMethod} */
    options<T_3 = any>(url: string, config?: Options | undefined): Promise<Response<T_3>>;
    /** @public @type {BodyMethod} */
    post<T_4 = any>(url: string, body?: any, config?: Options | undefined): Promise<Response<T_4>>;
    /** @public @type {BodyMethod} */
    put<T_4 = any>(url: string, body?: any, config?: Options | undefined): Promise<Response<T_4>>;
    /** @public @type {BodyMethod} */
    patch<T_4 = any>(url: string, body?: any, config?: Options | undefined): Promise<Response<T_4>>;
    /** @public */
    all: {
        <T_5>(values: Iterable<T_5 | PromiseLike<T_5>>): Promise<T_5[]>;
        <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
        <T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1>(values: readonly [T1_1 | PromiseLike<T1_1>, T2_1 | PromiseLike<T2_1>, T3_1 | PromiseLike<T3_1>, T4_1 | PromiseLike<T4_1>, T5_1 | PromiseLike<T5_1>, T6_1 | PromiseLike<T6_1>, T7_1 | PromiseLike<T7_1>, T8_1 | PromiseLike<T8_1>, T9_1 | PromiseLike<T9_1>]): Promise<[T1_1, T2_1, T3_1, T4_1, T5_1, T6_1, T7_1, T8_1, T9_1]>;
        <T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2>(values: readonly [T1_2 | PromiseLike<T1_2>, T2_2 | PromiseLike<T2_2>, T3_2 | PromiseLike<T3_2>, T4_2 | PromiseLike<T4_2>, T5_2 | PromiseLike<T5_2>, T6_2 | PromiseLike<T6_2>, T7_2 | PromiseLike<T7_2>, T8_2 | PromiseLike<T8_2>]): Promise<[T1_2, T2_2, T3_2, T4_2, T5_2, T6_2, T7_2, T8_2]>;
        <T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3>(values: readonly [T1_3 | PromiseLike<T1_3>, T2_3 | PromiseLike<T2_3>, T3_3 | PromiseLike<T3_3>, T4_3 | PromiseLike<T4_3>, T5_3 | PromiseLike<T5_3>, T6_3 | PromiseLike<T6_3>, T7_3 | PromiseLike<T7_3>]): Promise<[T1_3, T2_3, T3_3, T4_3, T5_3, T6_3, T7_3]>;
        <T1_4, T2_4, T3_4, T4_4, T5_4, T6_4>(values: readonly [T1_4 | PromiseLike<T1_4>, T2_4 | PromiseLike<T2_4>, T3_4 | PromiseLike<T3_4>, T4_4 | PromiseLike<T4_4>, T5_4 | PromiseLike<T5_4>, T6_4 | PromiseLike<T6_4>]): Promise<[T1_4, T2_4, T3_4, T4_4, T5_4, T6_4]>;
        <T1_5, T2_5, T3_5, T4_5, T5_5>(values: readonly [T1_5 | PromiseLike<T1_5>, T2_5 | PromiseLike<T2_5>, T3_5 | PromiseLike<T3_5>, T4_5 | PromiseLike<T4_5>, T5_5 | PromiseLike<T5_5>]): Promise<[T1_5, T2_5, T3_5, T4_5, T5_5]>;
        <T1_6, T2_6, T3_6, T4_6>(values: readonly [T1_6 | PromiseLike<T1_6>, T2_6 | PromiseLike<T2_6>, T3_6 | PromiseLike<T3_6>, T4_6 | PromiseLike<T4_6>]): Promise<[T1_6, T2_6, T3_6, T4_6]>;
        <T1_7, T2_7, T3_7>(values: readonly [T1_7 | PromiseLike<T1_7>, T2_7 | PromiseLike<T2_7>, T3_7 | PromiseLike<T3_7>]): Promise<[T1_7, T2_7, T3_7]>;
        <T1_8, T2_8>(values: readonly [T1_8 | PromiseLike<T1_8>, T2_8 | PromiseLike<T2_8>]): Promise<[T1_8, T2_8]>;
        <T_6>(values: readonly (T_6 | PromiseLike<T_6>)[]): Promise<T_6[]>;
    };
    /**
     * @public
     * @template Args, R
     * @param {(...args: Args[]) => R} fn
     * @returns {(array: Args[]) => R}
     */
    spread<Args, R>(fn: (...args: Args[]) => R): (array: Args[]) => R;
    /**
     * @public
     * @type {AbortController}
     */
    CancelToken: AbortController;
    /**
     * @public
     * @type {Options}
     */
    defaults: Options;
    /**
     * @public
     */
    create: typeof create;
};
//# sourceMappingURL=index.d.ts.map