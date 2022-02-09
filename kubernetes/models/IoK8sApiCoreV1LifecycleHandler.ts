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
  IoK8sApiCoreV1ExecAction,
  IoK8sApiCoreV1ExecActionFromJSON,
  IoK8sApiCoreV1ExecActionToJSON,
  IoK8sApiCoreV1HTTPGetAction,
  IoK8sApiCoreV1HTTPGetActionFromJSON,
  IoK8sApiCoreV1HTTPGetActionToJSON,
  IoK8sApiCoreV1TCPSocketAction,
  IoK8sApiCoreV1TCPSocketActionFromJSON,
  IoK8sApiCoreV1TCPSocketActionToJSON,
} from './';

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 * @export
 * @interface IoK8sApiCoreV1LifecycleHandler
 */
export interface IoK8sApiCoreV1LifecycleHandler {
  /**
   *
   * @type {IoK8sApiCoreV1ExecAction}
   * @memberof IoK8sApiCoreV1LifecycleHandler
   */
  exec?: IoK8sApiCoreV1ExecAction;
  /**
   *
   * @type {IoK8sApiCoreV1HTTPGetAction}
   * @memberof IoK8sApiCoreV1LifecycleHandler
   */
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  /**
   *
   * @type {IoK8sApiCoreV1TCPSocketAction}
   * @memberof IoK8sApiCoreV1LifecycleHandler
   */
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
}

export function IoK8sApiCoreV1LifecycleHandlerFromJSON(json: any): IoK8sApiCoreV1LifecycleHandler {
  return IoK8sApiCoreV1LifecycleHandlerFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LifecycleHandlerFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1LifecycleHandler {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    exec: !exists(json, 'exec') ? undefined : IoK8sApiCoreV1ExecActionFromJSON(json['exec']),
    httpGet: !exists(json, 'httpGet')
      ? undefined
      : IoK8sApiCoreV1HTTPGetActionFromJSON(json['httpGet']),
    tcpSocket: !exists(json, 'tcpSocket')
      ? undefined
      : IoK8sApiCoreV1TCPSocketActionFromJSON(json['tcpSocket']),
  };
}

export function IoK8sApiCoreV1LifecycleHandlerToJSON(
  value?: IoK8sApiCoreV1LifecycleHandler | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    exec: IoK8sApiCoreV1ExecActionToJSON(value.exec),
    httpGet: IoK8sApiCoreV1HTTPGetActionToJSON(value.httpGet),
    tcpSocket: IoK8sApiCoreV1TCPSocketActionToJSON(value.tcpSocket),
  };
}