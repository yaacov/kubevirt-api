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
 * UserPasswordAccessCredentialPropagationMethod represents the method used to inject a user passwords into the vm guest. Only one of its members may be specified.
 * @export
 * @interface V1UserPasswordAccessCredentialPropagationMethod
 */
export interface V1UserPasswordAccessCredentialPropagationMethod {
  /**
   *
   * @type {object}
   * @memberof V1UserPasswordAccessCredentialPropagationMethod
   */
  qemuGuestAgent?: object;
}

export function V1UserPasswordAccessCredentialPropagationMethodFromJSON(
  json: any,
): V1UserPasswordAccessCredentialPropagationMethod {
  return V1UserPasswordAccessCredentialPropagationMethodFromJSONTyped(json, false);
}

export function V1UserPasswordAccessCredentialPropagationMethodFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1UserPasswordAccessCredentialPropagationMethod {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    qemuGuestAgent: !exists(json, 'qemuGuestAgent') ? undefined : json['qemuGuestAgent'],
  };
}

export function V1UserPasswordAccessCredentialPropagationMethodToJSON(
  value?: V1UserPasswordAccessCredentialPropagationMethod | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    qemuGuestAgent: value.qemuGuestAgent,
  };
}
