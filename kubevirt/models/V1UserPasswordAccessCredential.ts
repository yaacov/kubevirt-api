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

import {
  V1UserPasswordAccessCredentialPropagationMethod,
  V1UserPasswordAccessCredentialPropagationMethodFromJSON,
  V1UserPasswordAccessCredentialPropagationMethodToJSON,
  V1UserPasswordAccessCredentialSource,
  V1UserPasswordAccessCredentialSourceFromJSON,
  V1UserPasswordAccessCredentialSourceToJSON,
} from './';

/**
 * UserPasswordAccessCredential represents a source and propagation method for injecting user passwords into a vm guest Only one of its members may be specified.
 * @export
 * @interface V1UserPasswordAccessCredential
 */
export interface V1UserPasswordAccessCredential {
  /**
   *
   * @type {V1UserPasswordAccessCredentialPropagationMethod}
   * @memberof V1UserPasswordAccessCredential
   */
  propagationMethod: V1UserPasswordAccessCredentialPropagationMethod;
  /**
   *
   * @type {V1UserPasswordAccessCredentialSource}
   * @memberof V1UserPasswordAccessCredential
   */
  source: V1UserPasswordAccessCredentialSource;
}

export function V1UserPasswordAccessCredentialFromJSON(json: any): V1UserPasswordAccessCredential {
  return V1UserPasswordAccessCredentialFromJSONTyped(json, false);
}

export function V1UserPasswordAccessCredentialFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1UserPasswordAccessCredential {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    propagationMethod: V1UserPasswordAccessCredentialPropagationMethodFromJSON(
      json['propagationMethod'],
    ),
    source: V1UserPasswordAccessCredentialSourceFromJSON(json['source']),
  };
}

export function V1UserPasswordAccessCredentialToJSON(
  value?: V1UserPasswordAccessCredential | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    propagationMethod: V1UserPasswordAccessCredentialPropagationMethodToJSON(
      value.propagationMethod,
    ),
    source: V1UserPasswordAccessCredentialSourceToJSON(value.source),
  };
}
