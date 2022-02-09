/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 * @export
 * @interface IoK8sApiPolicyV1beta1AllowedCSIDriver
 */
export interface IoK8sApiPolicyV1beta1AllowedCSIDriver {
    /**
     * Name is the registered name of the CSI driver
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1AllowedCSIDriver
     */
    name: string;
}

export function IoK8sApiPolicyV1beta1AllowedCSIDriverFromJSON(json: any): IoK8sApiPolicyV1beta1AllowedCSIDriver {
    return IoK8sApiPolicyV1beta1AllowedCSIDriverFromJSONTyped(json, false);
}

export function IoK8sApiPolicyV1beta1AllowedCSIDriverFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiPolicyV1beta1AllowedCSIDriver {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function IoK8sApiPolicyV1beta1AllowedCSIDriverToJSON(value?: IoK8sApiPolicyV1beta1AllowedCSIDriver | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
