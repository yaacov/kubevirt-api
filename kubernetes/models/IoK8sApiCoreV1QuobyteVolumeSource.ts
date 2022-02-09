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
/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1QuobyteVolumeSource
 */
export interface IoK8sApiCoreV1QuobyteVolumeSource {
  /**
   * Group to map volume access to Default is no group
   * @type {string}
   * @memberof IoK8sApiCoreV1QuobyteVolumeSource
   */
  group?: string;
  /**
   * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1QuobyteVolumeSource
   */
  readOnly?: boolean;
  /**
   * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
   * @type {string}
   * @memberof IoK8sApiCoreV1QuobyteVolumeSource
   */
  registry: string;
  /**
   * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
   * @type {string}
   * @memberof IoK8sApiCoreV1QuobyteVolumeSource
   */
  tenant?: string;
  /**
   * User to map volume access to Defaults to serivceaccount user
   * @type {string}
   * @memberof IoK8sApiCoreV1QuobyteVolumeSource
   */
  user?: string;
  /**
   * Volume is a string that references an already created Quobyte volume by name.
   * @type {string}
   * @memberof IoK8sApiCoreV1QuobyteVolumeSource
   */
  volume: string;
}

export function IoK8sApiCoreV1QuobyteVolumeSourceFromJSON(
  json: any,
): IoK8sApiCoreV1QuobyteVolumeSource {
  return IoK8sApiCoreV1QuobyteVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1QuobyteVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1QuobyteVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    group: !exists(json, 'group') ? undefined : json['group'],
    readOnly: !exists(json, 'readOnly') ? undefined : json['readOnly'],
    registry: json['registry'],
    tenant: !exists(json, 'tenant') ? undefined : json['tenant'],
    user: !exists(json, 'user') ? undefined : json['user'],
    volume: json['volume'],
  };
}

export function IoK8sApiCoreV1QuobyteVolumeSourceToJSON(
  value?: IoK8sApiCoreV1QuobyteVolumeSource | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    group: value.group,
    readOnly: value.readOnly,
    registry: value.registry,
    tenant: value.tenant,
    user: value.user,
    volume: value.volume,
  };
}