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


import * as runtime from '../runtime';
import type {
  LogInRequest,
  LogInResponse,
} from '../models';
import {
    LogInRequestFromJSON,
    LogInRequestToJSON,
    LogInResponseFromJSON,
    LogInResponseToJSON,
} from '../models';

export interface LogInOperationRequest {
    logInRequest: LogInRequest;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * log in or sign up to stamp with an external auth provider, returns a jwt for accessing stamp api.
     * log in or sign up to stamp with an external auth provider
     */
    async logInRaw(requestParameters: LogInOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LogInResponse>> {
        if (requestParameters.logInRequest === null || requestParameters.logInRequest === undefined) {
            throw new runtime.RequiredError('logInRequest','Required parameter requestParameters.logInRequest was null or undefined when calling logIn.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LogInRequestToJSON(requestParameters.logInRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LogInResponseFromJSON(jsonValue));
    }

    /**
     * log in or sign up to stamp with an external auth provider, returns a jwt for accessing stamp api.
     * log in or sign up to stamp with an external auth provider
     */
    async logIn(requestParameters: LogInOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LogInResponse> {
        const response = await this.logInRaw(requestParameters, initOverrides);
        return await response.value();
    }

}