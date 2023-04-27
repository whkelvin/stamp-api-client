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
/**
 *
 * @export
 * @interface Post
 */
export interface Post {
    /**
     *
     * @type {string}
     * @memberof Post
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Post
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof Post
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof Post
     */
    link: string;
    /**
     *
     * @type {string}
     * @memberof Post
     */
    createdDate: string;
    /**
     *
     * @type {string}
     * @memberof Post
     */
    rootDomain: string;
}
/**
 * Check if a given object implements the Post interface.
 */
export declare function instanceOfPost(value: object): boolean;
export declare function PostFromJSON(json: any): Post;
export declare function PostFromJSONTyped(json: any, ignoreDiscriminator: boolean): Post;
export declare function PostToJSON(value?: Post | null): any;
