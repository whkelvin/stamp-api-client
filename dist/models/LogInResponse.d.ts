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
 * @interface LogInResponse
 */
export interface LogInResponse {
    /**
     *
     * @type {string}
     * @memberof LogInResponse
     */
    jwt: string;
}
/**
 * Check if a given object implements the LogInResponse interface.
 */
export declare function instanceOfLogInResponse(value: object): boolean;
export declare function LogInResponseFromJSON(json: any): LogInResponse;
export declare function LogInResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogInResponse;
export declare function LogInResponseToJSON(value?: LogInResponse | null): any;
