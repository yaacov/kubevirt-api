/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1beta1CDISpec,
    V1beta1CDISpecFromJSON,
    V1beta1CDISpecFromJSONTyped,
    V1beta1CDISpecToJSON,
    V1beta1CDIStatus,
    V1beta1CDIStatusFromJSON,
    V1beta1CDIStatusFromJSONTyped,
    V1beta1CDIStatusToJSON,
} from './';

/**
 * CDI is the CDI Operator CRD
 * @export
 * @interface V1beta1CDI
 */
export interface V1beta1CDI {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1CDI
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1CDI
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1CDI
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta1CDISpec}
     * @memberof V1beta1CDI
     */
    spec: V1beta1CDISpec;
    /**
     * 
     * @type {V1beta1CDIStatus}
     * @memberof V1beta1CDI
     */
    status?: V1beta1CDIStatus;
}

export function V1beta1CDIFromJSON(json: any): V1beta1CDI {
    return V1beta1CDIFromJSONTyped(json, false);
}

export function V1beta1CDIFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1CDI {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1CDISpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta1CDIStatusFromJSON(json['status']),
    };
}

export function V1beta1CDIToJSON(value?: V1beta1CDI | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1beta1CDISpecToJSON(value.spec),
        'status': V1beta1CDIStatusToJSON(value.status),
    };
}
