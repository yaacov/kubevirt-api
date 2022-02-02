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

import { exists } from '../runtime';
import {
  K8sIoApimachineryPkgApisMetaV1ObjectMeta,
  K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
  V1VirtualMachineInstanceReplicaSetSpec,
  V1VirtualMachineInstanceReplicaSetSpecFromJSON,
  V1VirtualMachineInstanceReplicaSetSpecToJSON,
  V1VirtualMachineInstanceReplicaSetStatus,
  V1VirtualMachineInstanceReplicaSetStatusFromJSON,
  V1VirtualMachineInstanceReplicaSetStatusToJSON,
} from './';

/**
 * VirtualMachineInstance is *the* VirtualMachineInstance Definition. It represents a virtual machine in the runtime environment of kubernetes.
 * @export
 * @interface V1VirtualMachineInstanceReplicaSet
 */
export interface V1VirtualMachineInstanceReplicaSet {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1VirtualMachineInstanceReplicaSet
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1VirtualMachineInstanceReplicaSet
   */
  kind?: string;
  /**
   *
   * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof V1VirtualMachineInstanceReplicaSet
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {V1VirtualMachineInstanceReplicaSetSpec}
   * @memberof V1VirtualMachineInstanceReplicaSet
   */
  spec: V1VirtualMachineInstanceReplicaSetSpec;
  /**
   *
   * @type {V1VirtualMachineInstanceReplicaSetStatus}
   * @memberof V1VirtualMachineInstanceReplicaSet
   */
  status?: V1VirtualMachineInstanceReplicaSetStatus;
}

export function V1VirtualMachineInstanceReplicaSetFromJSON(
  json: any,
): V1VirtualMachineInstanceReplicaSet {
  return V1VirtualMachineInstanceReplicaSetFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceReplicaSetFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineInstanceReplicaSet {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: V1VirtualMachineInstanceReplicaSetSpecFromJSON(json['spec']),
    status: !exists(json, 'status')
      ? undefined
      : V1VirtualMachineInstanceReplicaSetStatusFromJSON(json['status']),
  };
}

export function V1VirtualMachineInstanceReplicaSetToJSON(
  value?: V1VirtualMachineInstanceReplicaSet | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: V1VirtualMachineInstanceReplicaSetSpecToJSON(value.spec),
    status: V1VirtualMachineInstanceReplicaSetStatusToJSON(value.status),
  };
}
