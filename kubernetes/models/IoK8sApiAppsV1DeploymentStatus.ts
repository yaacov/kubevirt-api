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
  IoK8sApiAppsV1DeploymentCondition,
  IoK8sApiAppsV1DeploymentConditionFromJSON,
  IoK8sApiAppsV1DeploymentConditionToJSON,
} from './';

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 * @export
 * @interface IoK8sApiAppsV1DeploymentStatus
 */
export interface IoK8sApiAppsV1DeploymentStatus {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   * @type {number}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  availableReplicas?: number;
  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   * @type {number}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  collisionCount?: number;
  /**
   * Represents the latest available observations of a deployment's current state.
   * @type {Array<IoK8sApiAppsV1DeploymentCondition>}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  conditions?: Array<IoK8sApiAppsV1DeploymentCondition>;
  /**
   * The generation observed by the deployment controller.
   * @type {number}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  observedGeneration?: number;
  /**
   * readyReplicas is the number of pods targeted by this Deployment with a Ready Condition.
   * @type {number}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  readyReplicas?: number;
  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   * @type {number}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  replicas?: number;
  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   * @type {number}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  unavailableReplicas?: number;
  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   * @type {number}
   * @memberof IoK8sApiAppsV1DeploymentStatus
   */
  updatedReplicas?: number;
}

export function IoK8sApiAppsV1DeploymentStatusFromJSON(json: any): IoK8sApiAppsV1DeploymentStatus {
  return IoK8sApiAppsV1DeploymentStatusFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DeploymentStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAppsV1DeploymentStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    availableReplicas: !exists(json, 'availableReplicas') ? undefined : json['availableReplicas'],
    collisionCount: !exists(json, 'collisionCount') ? undefined : json['collisionCount'],
    conditions: !exists(json, 'conditions')
      ? undefined
      : (json['conditions'] as Array<any>).map(IoK8sApiAppsV1DeploymentConditionFromJSON),
    observedGeneration: !exists(json, 'observedGeneration')
      ? undefined
      : json['observedGeneration'],
    readyReplicas: !exists(json, 'readyReplicas') ? undefined : json['readyReplicas'],
    replicas: !exists(json, 'replicas') ? undefined : json['replicas'],
    unavailableReplicas: !exists(json, 'unavailableReplicas')
      ? undefined
      : json['unavailableReplicas'],
    updatedReplicas: !exists(json, 'updatedReplicas') ? undefined : json['updatedReplicas'],
  };
}

export function IoK8sApiAppsV1DeploymentStatusToJSON(
  value?: IoK8sApiAppsV1DeploymentStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    availableReplicas: value.availableReplicas,
    collisionCount: value.collisionCount,
    conditions:
      value.conditions === undefined
        ? undefined
        : (value.conditions as Array<any>).map(IoK8sApiAppsV1DeploymentConditionToJSON),
    observedGeneration: value.observedGeneration,
    readyReplicas: value.readyReplicas,
    replicas: value.replicas,
    unavailableReplicas: value.unavailableReplicas,
    updatedReplicas: value.updatedReplicas,
  };
}