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
  IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod,
  IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethodFromJSON,
  IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethodToJSON,
  IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects,
  IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjectsFromJSON,
  IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjectsToJSON,
  IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference,
  IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReferenceFromJSON,
  IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReferenceToJSON,
} from './';

/**
 * FlowSchemaSpec describes how the FlowSchema's specification looks like.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta2FlowSchemaSpec
 */
export interface IoK8sApiFlowcontrolV1beta2FlowSchemaSpec {
  /**
   *
   * @type {IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod}
   * @memberof IoK8sApiFlowcontrolV1beta2FlowSchemaSpec
   */
  distinguisherMethod?: IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod;
  /**
   * `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
   * @type {number}
   * @memberof IoK8sApiFlowcontrolV1beta2FlowSchemaSpec
   */
  matchingPrecedence?: number;
  /**
   *
   * @type {IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference}
   * @memberof IoK8sApiFlowcontrolV1beta2FlowSchemaSpec
   */
  priorityLevelConfiguration: IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference;
  /**
   * `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
   * @type {Array<IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects>}
   * @memberof IoK8sApiFlowcontrolV1beta2FlowSchemaSpec
   */
  rules?: Array<IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects>;
}

export function IoK8sApiFlowcontrolV1beta2FlowSchemaSpecFromJSON(
  json: any,
): IoK8sApiFlowcontrolV1beta2FlowSchemaSpec {
  return IoK8sApiFlowcontrolV1beta2FlowSchemaSpecFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta2FlowSchemaSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiFlowcontrolV1beta2FlowSchemaSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    distinguisherMethod: !exists(json, 'distinguisherMethod')
      ? undefined
      : IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethodFromJSON(json['distinguisherMethod']),
    matchingPrecedence: !exists(json, 'matchingPrecedence')
      ? undefined
      : json['matchingPrecedence'],
    priorityLevelConfiguration:
      IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReferenceFromJSON(
        json['priorityLevelConfiguration'],
      ),
    rules: !exists(json, 'rules')
      ? undefined
      : (json['rules'] as Array<any>).map(
          IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjectsFromJSON,
        ),
  };
}

export function IoK8sApiFlowcontrolV1beta2FlowSchemaSpecToJSON(
  value?: IoK8sApiFlowcontrolV1beta2FlowSchemaSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    distinguisherMethod: IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethodToJSON(
      value.distinguisherMethod,
    ),
    matchingPrecedence: value.matchingPrecedence,
    priorityLevelConfiguration: IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReferenceToJSON(
      value.priorityLevelConfiguration,
    ),
    rules:
      value.rules === undefined
        ? undefined
        : (value.rules as Array<any>).map(IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjectsToJSON),
  };
}