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
 * Check if a given object implements the RefreshTokenResponse interface.
 */
export function instanceOfRefreshTokenResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "jwt" in value;
    return isInstance;
}
export function RefreshTokenResponseFromJSON(json) {
    return RefreshTokenResponseFromJSONTyped(json, false);
}
export function RefreshTokenResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwt': json['jwt'],
    };
}
export function RefreshTokenResponseToJSON(value) {
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
//# sourceMappingURL=RefreshTokenResponse.js.map