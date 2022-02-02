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
/**
 *
 * @export
 * @interface V1KVMTimer
 */
export interface V1KVMTimer {
  /**
   * Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true.
   * @type {boolean}
   * @memberof V1KVMTimer
   */
  present?: boolean;
}

export function V1KVMTimerFromJSON(json: any): V1KVMTimer {
  return V1KVMTimerFromJSONTyped(json, false);
}

export function V1KVMTimerFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KVMTimer {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    present: !exists(json, 'present') ? undefined : json['present'],
  };
}

export function V1KVMTimerToJSON(value?: V1KVMTimer | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    present: value.present,
  };
}
