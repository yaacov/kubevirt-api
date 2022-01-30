/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
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
    K8sIoApimachineryPkgApisMetaV1ObjectMeta,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    V1VirtualMachineInstanceSpec,
    V1VirtualMachineInstanceSpecFromJSON,
    V1VirtualMachineInstanceSpecFromJSONTyped,
    V1VirtualMachineInstanceSpecToJSON,
    V1VirtualMachineInstanceStatus,
    V1VirtualMachineInstanceStatusFromJSON,
    V1VirtualMachineInstanceStatusFromJSONTyped,
    V1VirtualMachineInstanceStatusToJSON,
} from './';

/**
 * VirtualMachineInstance is *the* VirtualMachineInstance Definition. It represents a virtual machine in the runtime environment of kubernetes.
 * @export
 * @interface V1VirtualMachineInstance
 */
export interface V1VirtualMachineInstance {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstance
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstance
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1VirtualMachineInstance
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1VirtualMachineInstanceSpec}
     * @memberof V1VirtualMachineInstance
     */
    spec: V1VirtualMachineInstanceSpec;
    /**
     * 
     * @type {V1VirtualMachineInstanceStatus}
     * @memberof V1VirtualMachineInstance
     */
    status?: V1VirtualMachineInstanceStatus;
}

export function V1VirtualMachineInstanceFromJSON(json: any): V1VirtualMachineInstance {
    return V1VirtualMachineInstanceFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1VirtualMachineInstanceSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1VirtualMachineInstanceStatusFromJSON(json['status']),
    };
}

export function V1VirtualMachineInstanceToJSON(value?: V1VirtualMachineInstance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': V1VirtualMachineInstanceSpecToJSON(value.spec),
        'status': V1VirtualMachineInstanceStatusToJSON(value.status),
    };
}
