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
    V1beta1DataVolumeSpec,
    V1beta1DataVolumeSpecFromJSON,
    V1beta1DataVolumeSpecFromJSONTyped,
    V1beta1DataVolumeSpecToJSON,
    V1beta1DataVolumeStatus,
    V1beta1DataVolumeStatusFromJSON,
    V1beta1DataVolumeStatusFromJSONTyped,
    V1beta1DataVolumeStatusToJSON,
} from './';

/**
 * DataVolume is an abstraction on top of PersistentVolumeClaims to allow easy population of those PersistentVolumeClaims with relation to VirtualMachines
 * @export
 * @interface V1beta1DataVolume
 */
export interface V1beta1DataVolume {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1DataVolume
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1DataVolume
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1DataVolume
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta1DataVolumeSpec}
     * @memberof V1beta1DataVolume
     */
    spec: V1beta1DataVolumeSpec;
    /**
     * 
     * @type {V1beta1DataVolumeStatus}
     * @memberof V1beta1DataVolume
     */
    status?: V1beta1DataVolumeStatus;
}

export function V1beta1DataVolumeFromJSON(json: any): V1beta1DataVolume {
    return V1beta1DataVolumeFromJSONTyped(json, false);
}

export function V1beta1DataVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolume {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1DataVolumeSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta1DataVolumeStatusFromJSON(json['status']),
    };
}

export function V1beta1DataVolumeToJSON(value?: V1beta1DataVolume | null): any {
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
        'spec': V1beta1DataVolumeSpecToJSON(value.spec),
        'status': V1beta1DataVolumeStatusToJSON(value.status),
    };
}
