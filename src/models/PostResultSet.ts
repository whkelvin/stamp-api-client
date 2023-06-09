/* tslint:disable */
/* eslint-disable */
/**
 * Stamp API
 * Stamp API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Post } from './Post';
import {
    PostFromJSON,
    PostFromJSONTyped,
    PostToJSON,
} from './Post';

/**
 * 
 * @export
 * @interface PostResultSet
 */
export interface PostResultSet {
    /**
     * 
     * @type {number}
     * @memberof PostResultSet
     */
    count: number;
    /**
     * 
     * @type {Array<Post>}
     * @memberof PostResultSet
     */
    posts: Array<Post>;
    /**
     * 
     * @type {number}
     * @memberof PostResultSet
     */
    pageSize: number;
}

/**
 * Check if a given object implements the PostResultSet interface.
 */
export function instanceOfPostResultSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "posts" in value;
    isInstance = isInstance && "pageSize" in value;

    return isInstance;
}

export function PostResultSetFromJSON(json: any): PostResultSet {
    return PostResultSetFromJSONTyped(json, false);
}

export function PostResultSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostResultSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'posts': ((json['posts'] as Array<any>).map(PostFromJSON)),
        'pageSize': json['pageSize'],
    };
}

export function PostResultSetToJSON(value?: PostResultSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'posts': ((value.posts as Array<any>).map(PostToJSON)),
        'pageSize': value.pageSize,
    };
}

