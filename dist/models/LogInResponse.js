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
/**
 * Check if a given object implements the LogInResponse interface.
 */
export function instanceOfLogInResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "jwt" in value;
    return isInstance;
}
export function LogInResponseFromJSON(json) {
    return LogInResponseFromJSONTyped(json, false);
}
export function LogInResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwt': json['jwt'],
    };
}
export function LogInResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jwt': value.jwt,
    };
}
//# sourceMappingURL=LogInResponse.js.map