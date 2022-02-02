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
  V1VirtualMachineCondition,
  V1VirtualMachineConditionFromJSON,
  V1VirtualMachineConditionToJSON,
  V1VirtualMachineStartFailure,
  V1VirtualMachineStartFailureFromJSON,
  V1VirtualMachineStartFailureToJSON,
  V1VirtualMachineStateChangeRequest,
  V1VirtualMachineStateChangeRequestFromJSON,
  V1VirtualMachineStateChangeRequestToJSON,
  V1VirtualMachineVolumeRequest,
  V1VirtualMachineVolumeRequestFromJSON,
  V1VirtualMachineVolumeRequestToJSON,
  V1VolumeSnapshotStatus,
  V1VolumeSnapshotStatusFromJSON,
  V1VolumeSnapshotStatusToJSON,
} from './';

/**
 * VirtualMachineStatus represents the status returned by the controller to describe how the VirtualMachine is doing
 * @export
 * @interface V1VirtualMachineStatus
 */
export interface V1VirtualMachineStatus {
  /**
   * Hold the state information of the VirtualMachine and its VirtualMachineInstance
   * @type {Array<V1VirtualMachineCondition>}
   * @memberof V1VirtualMachineStatus
   */
  conditions?: Array<V1VirtualMachineCondition>;
  /**
   * Created indicates if the virtual machine is created in the cluster
   * @type {boolean}
   * @memberof V1VirtualMachineStatus
   */
  created?: boolean;
  /**
   * PrintableStatus is a human readable, high-level representation of the status of the virtual machine
   * @type {string}
   * @memberof V1VirtualMachineStatus
   */
  printableStatus?: string;
  /**
   * Ready indicates if the virtual machine is running and ready
   * @type {boolean}
   * @memberof V1VirtualMachineStatus
   */
  ready?: boolean;
  /**
   * RestoreInProgress is the name of the VirtualMachineRestore currently executing
   * @type {string}
   * @memberof V1VirtualMachineStatus
   */
  restoreInProgress?: string;
  /**
   * SnapshotInProgress is the name of the VirtualMachineSnapshot currently executing
   * @type {string}
   * @memberof V1VirtualMachineStatus
   */
  snapshotInProgress?: string;
  /**
   *
   * @type {V1VirtualMachineStartFailure}
   * @memberof V1VirtualMachineStatus
   */
  startFailure?: V1VirtualMachineStartFailure;
  /**
   * StateChangeRequests indicates a list of actions that should be taken on a VMI e.g. stop a specific VMI then start a new one.
   * @type {Array<V1VirtualMachineStateChangeRequest>}
   * @memberof V1VirtualMachineStatus
   */
  stateChangeRequests?: Array<V1VirtualMachineStateChangeRequest>;
  /**
   * VolumeRequests indicates a list of volumes add or remove from the VMI template and hotplug on an active running VMI.
   * @type {Array<V1VirtualMachineVolumeRequest>}
   * @memberof V1VirtualMachineStatus
   */
  volumeRequests?: Array<V1VirtualMachineVolumeRequest>;
  /**
   * VolumeSnapshotStatuses indicates a list of statuses whether snapshotting is supported by each volume.
   * @type {Array<V1VolumeSnapshotStatus>}
   * @memberof V1VirtualMachineStatus
   */
  volumeSnapshotStatuses?: Array<V1VolumeSnapshotStatus>;
}

export function V1VirtualMachineStatusFromJSON(json: any): V1VirtualMachineStatus {
  return V1VirtualMachineStatusFromJSONTyped(json, false);
}

export function V1VirtualMachineStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    conditions: !exists(json, 'conditions')
      ? undefined
      : (json['conditions'] as Array<any>).map(V1VirtualMachineConditionFromJSON),
    created: !exists(json, 'created') ? undefined : json['created'],
    printableStatus: !exists(json, 'printableStatus') ? undefined : json['printableStatus'],
    ready: !exists(json, 'ready') ? undefined : json['ready'],
    restoreInProgress: !exists(json, 'restoreInProgress') ? undefined : json['restoreInProgress'],
    snapshotInProgress: !exists(json, 'snapshotInProgress')
      ? undefined
      : json['snapshotInProgress'],
    startFailure: !exists(json, 'startFailure')
      ? undefined
      : V1VirtualMachineStartFailureFromJSON(json['startFailure']),
    stateChangeRequests: !exists(json, 'stateChangeRequests')
      ? undefined
      : (json['stateChangeRequests'] as Array<any>).map(V1VirtualMachineStateChangeRequestFromJSON),
    volumeRequests: !exists(json, 'volumeRequests')
      ? undefined
      : (json['volumeRequests'] as Array<any>).map(V1VirtualMachineVolumeRequestFromJSON),
    volumeSnapshotStatuses: !exists(json, 'volumeSnapshotStatuses')
      ? undefined
      : (json['volumeSnapshotStatuses'] as Array<any>).map(V1VolumeSnapshotStatusFromJSON),
  };
}

export function V1VirtualMachineStatusToJSON(value?: V1VirtualMachineStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    conditions:
      value.conditions === undefined
        ? undefined
        : (value.conditions as Array<any>).map(V1VirtualMachineConditionToJSON),
    created: value.created,
    printableStatus: value.printableStatus,
    ready: value.ready,
    restoreInProgress: value.restoreInProgress,
    snapshotInProgress: value.snapshotInProgress,
    startFailure: V1VirtualMachineStartFailureToJSON(value.startFailure),
    stateChangeRequests:
      value.stateChangeRequests === undefined
        ? undefined
        : (value.stateChangeRequests as Array<any>).map(V1VirtualMachineStateChangeRequestToJSON),
    volumeRequests:
      value.volumeRequests === undefined
        ? undefined
        : (value.volumeRequests as Array<any>).map(V1VirtualMachineVolumeRequestToJSON),
    volumeSnapshotStatuses:
      value.volumeSnapshotStatuses === undefined
        ? undefined
        : (value.volumeSnapshotStatuses as Array<any>).map(V1VolumeSnapshotStatusToJSON),
  };
}
