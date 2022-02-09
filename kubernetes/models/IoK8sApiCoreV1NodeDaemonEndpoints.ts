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
  IoK8sApiCoreV1DaemonEndpoint,
  IoK8sApiCoreV1DaemonEndpointFromJSON,
  IoK8sApiCoreV1DaemonEndpointToJSON,
} from './';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 * @export
 * @interface IoK8sApiCoreV1NodeDaemonEndpoints
 */
export interface IoK8sApiCoreV1NodeDaemonEndpoints {
  /**
   *
   * @type {IoK8sApiCoreV1DaemonEndpoint}
   * @memberof IoK8sApiCoreV1NodeDaemonEndpoints
   */
  kubeletEndpoint?: IoK8sApiCoreV1DaemonEndpoint;
}

export function IoK8sApiCoreV1NodeDaemonEndpointsFromJSON(
  json: any,
): IoK8sApiCoreV1NodeDaemonEndpoints {
  return IoK8sApiCoreV1NodeDaemonEndpointsFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeDaemonEndpointsFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1NodeDaemonEndpoints {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    kubeletEndpoint: !exists(json, 'kubeletEndpoint')
      ? undefined
      : IoK8sApiCoreV1DaemonEndpointFromJSON(json['kubeletEndpoint']),
  };
}

export function IoK8sApiCoreV1NodeDaemonEndpointsToJSON(
  value?: IoK8sApiCoreV1NodeDaemonEndpoints | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    kubeletEndpoint: IoK8sApiCoreV1DaemonEndpointToJSON(value.kubeletEndpoint),
  };
}