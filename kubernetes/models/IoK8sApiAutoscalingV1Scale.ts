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

import { exists } from '../runtime';
import {
  IoK8sApiAutoscalingV1ScaleSpec,
  IoK8sApiAutoscalingV1ScaleSpecFromJSON,
  IoK8sApiAutoscalingV1ScaleSpecToJSON,
  IoK8sApiAutoscalingV1ScaleStatus,
  IoK8sApiAutoscalingV1ScaleStatusFromJSON,
  IoK8sApiAutoscalingV1ScaleStatusToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * Scale represents a scaling request for a resource.
 * @export
 * @interface IoK8sApiAutoscalingV1Scale
 */
export interface IoK8sApiAutoscalingV1Scale {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiAutoscalingV1Scale
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAutoscalingV1Scale
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiAutoscalingV1Scale
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiAutoscalingV1ScaleSpec}
   * @memberof IoK8sApiAutoscalingV1Scale
   */
  spec?: IoK8sApiAutoscalingV1ScaleSpec;
  /**
   *
   * @type {IoK8sApiAutoscalingV1ScaleStatus}
   * @memberof IoK8sApiAutoscalingV1Scale
   */
  status?: IoK8sApiAutoscalingV1ScaleStatus;
}

export function IoK8sApiAutoscalingV1ScaleFromJSON(json: any): IoK8sApiAutoscalingV1Scale {
  return IoK8sApiAutoscalingV1ScaleFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV1ScaleFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAutoscalingV1Scale {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: !exists(json, 'spec') ? undefined : IoK8sApiAutoscalingV1ScaleSpecFromJSON(json['spec']),
    status: !exists(json, 'status')
      ? undefined
      : IoK8sApiAutoscalingV1ScaleStatusFromJSON(json['status']),
  };
}

export function IoK8sApiAutoscalingV1ScaleToJSON(value?: IoK8sApiAutoscalingV1Scale | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: IoK8sApiAutoscalingV1ScaleSpecToJSON(value.spec),
    status: IoK8sApiAutoscalingV1ScaleStatusToJSON(value.status),
  };
}