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
  K8sIoApiCoreV1PodAffinityTerm,
  K8sIoApiCoreV1PodAffinityTermFromJSON,
  K8sIoApiCoreV1PodAffinityTermToJSON,
} from './';

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 * @export
 * @interface K8sIoApiCoreV1WeightedPodAffinityTerm
 */
export interface K8sIoApiCoreV1WeightedPodAffinityTerm {
  /**
   *
   * @type {K8sIoApiCoreV1PodAffinityTerm}
   * @memberof K8sIoApiCoreV1WeightedPodAffinityTerm
   */
  podAffinityTerm: K8sIoApiCoreV1PodAffinityTerm;
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   * @type {number}
   * @memberof K8sIoApiCoreV1WeightedPodAffinityTerm
   */
  weight: number;
}

export function K8sIoApiCoreV1WeightedPodAffinityTermFromJSON(
  json: any,
): K8sIoApiCoreV1WeightedPodAffinityTerm {
  return K8sIoApiCoreV1WeightedPodAffinityTermFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1WeightedPodAffinityTermFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): K8sIoApiCoreV1WeightedPodAffinityTerm {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    podAffinityTerm: K8sIoApiCoreV1PodAffinityTermFromJSON(json['podAffinityTerm']),
    weight: json['weight'],
  };
}

export function K8sIoApiCoreV1WeightedPodAffinityTermToJSON(
  value?: K8sIoApiCoreV1WeightedPodAffinityTerm | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    podAffinityTerm: K8sIoApiCoreV1PodAffinityTermToJSON(value.podAffinityTerm),
    weight: value.weight,
  };
}
