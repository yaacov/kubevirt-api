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
 * @interface V1FloppyTarget
 */
export interface V1FloppyTarget {
  /**
   * ReadOnly. Defaults to false.
   * @type {boolean}
   * @memberof V1FloppyTarget
   */
  readonly?: boolean;
  /**
   * Tray indicates if the tray of the device is open or closed. Allowed values are "open" and "closed". Defaults to closed.
   * @type {string}
   * @memberof V1FloppyTarget
   */
  tray?: string;
}

export function V1FloppyTargetFromJSON(json: any): V1FloppyTarget {
  return V1FloppyTargetFromJSONTyped(json, false);
}

export function V1FloppyTargetFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1FloppyTarget {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    readonly: !exists(json, 'readonly') ? undefined : json['readonly'],
    tray: !exists(json, 'tray') ? undefined : json['tray'],
  };
}

export function V1FloppyTargetToJSON(value?: V1FloppyTarget | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    readonly: value.readonly,
    tray: value.tray,
  };
}
