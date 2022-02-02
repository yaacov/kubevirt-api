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
  V1alpha1Error,
  V1alpha1ErrorFromJSON,
  V1alpha1ErrorToJSON,
  V1alpha1VolumeSnapshotStatus,
  V1alpha1VolumeSnapshotStatusFromJSON,
  V1alpha1VolumeSnapshotStatusToJSON,
} from './';

/**
 * VirtualMachineSnapshotContentStatus is the status for a VirtualMachineSnapshotStatus resource
 * @export
 * @interface V1alpha1VirtualMachineSnapshotContentStatus
 */
export interface V1alpha1VirtualMachineSnapshotContentStatus {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1alpha1VirtualMachineSnapshotContentStatus
   */
  creationTime?: string;
  /**
   *
   * @type {V1alpha1Error}
   * @memberof V1alpha1VirtualMachineSnapshotContentStatus
   */
  error?: V1alpha1Error;
  /**
   *
   * @type {boolean}
   * @memberof V1alpha1VirtualMachineSnapshotContentStatus
   */
  readyToUse?: boolean;
  /**
   *
   * @type {Array<V1alpha1VolumeSnapshotStatus>}
   * @memberof V1alpha1VirtualMachineSnapshotContentStatus
   */
  volumeSnapshotStatus?: Array<V1alpha1VolumeSnapshotStatus>;
}

export function V1alpha1VirtualMachineSnapshotContentStatusFromJSON(
  json: any,
): V1alpha1VirtualMachineSnapshotContentStatus {
  return V1alpha1VirtualMachineSnapshotContentStatusFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineSnapshotContentStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1VirtualMachineSnapshotContentStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    creationTime: !exists(json, 'creationTime') ? undefined : new Date(json['creationTime']),
    error: !exists(json, 'error') ? undefined : V1alpha1ErrorFromJSON(json['error']),
    readyToUse: !exists(json, 'readyToUse') ? undefined : json['readyToUse'],
    volumeSnapshotStatus: !exists(json, 'volumeSnapshotStatus')
      ? undefined
      : (json['volumeSnapshotStatus'] as Array<any>).map(V1alpha1VolumeSnapshotStatusFromJSON),
  };
}

export function V1alpha1VirtualMachineSnapshotContentStatusToJSON(
  value?: V1alpha1VirtualMachineSnapshotContentStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    creationTime: value.creationTime === undefined ? undefined : value.creationTime.toISOString(),
    error: V1alpha1ErrorToJSON(value.error),
    readyToUse: value.readyToUse,
    volumeSnapshotStatus:
      value.volumeSnapshotStatus === undefined
        ? undefined
        : (value.volumeSnapshotStatus as Array<any>).map(V1alpha1VolumeSnapshotStatusToJSON),
  };
}
