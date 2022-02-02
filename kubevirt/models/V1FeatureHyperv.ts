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
  V1FeatureSpinlocks,
  V1FeatureSpinlocksFromJSON,
  V1FeatureSpinlocksToJSON,
  V1FeatureState,
  V1FeatureStateFromJSON,
  V1FeatureStateToJSON,
  V1FeatureVendorID,
  V1FeatureVendorIDFromJSON,
  V1FeatureVendorIDToJSON,
  V1SyNICTimer,
  V1SyNICTimerFromJSON,
  V1SyNICTimerToJSON,
} from './';

/**
 * Hyperv specific features.
 * @export
 * @interface V1FeatureHyperv
 */
export interface V1FeatureHyperv {
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  evmcs?: V1FeatureState;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  frequencies?: V1FeatureState;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  ipi?: V1FeatureState;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  reenlightenment?: V1FeatureState;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  relaxed?: V1FeatureState;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  reset?: V1FeatureState;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  runtime?: V1FeatureState;
  /**
   *
   * @type {V1FeatureSpinlocks}
   * @memberof V1FeatureHyperv
   */
  spinlocks?: V1FeatureSpinlocks;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  synic?: V1FeatureState;
  /**
   *
   * @type {V1SyNICTimer}
   * @memberof V1FeatureHyperv
   */
  synictimer?: V1SyNICTimer;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  tlbflush?: V1FeatureState;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  vapic?: V1FeatureState;
  /**
   *
   * @type {V1FeatureVendorID}
   * @memberof V1FeatureHyperv
   */
  vendorid?: V1FeatureVendorID;
  /**
   *
   * @type {V1FeatureState}
   * @memberof V1FeatureHyperv
   */
  vpindex?: V1FeatureState;
}

export function V1FeatureHypervFromJSON(json: any): V1FeatureHyperv {
  return V1FeatureHypervFromJSONTyped(json, false);
}

export function V1FeatureHypervFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1FeatureHyperv {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    evmcs: !exists(json, 'evmcs') ? undefined : V1FeatureStateFromJSON(json['evmcs']),
    frequencies: !exists(json, 'frequencies')
      ? undefined
      : V1FeatureStateFromJSON(json['frequencies']),
    ipi: !exists(json, 'ipi') ? undefined : V1FeatureStateFromJSON(json['ipi']),
    reenlightenment: !exists(json, 'reenlightenment')
      ? undefined
      : V1FeatureStateFromJSON(json['reenlightenment']),
    relaxed: !exists(json, 'relaxed') ? undefined : V1FeatureStateFromJSON(json['relaxed']),
    reset: !exists(json, 'reset') ? undefined : V1FeatureStateFromJSON(json['reset']),
    runtime: !exists(json, 'runtime') ? undefined : V1FeatureStateFromJSON(json['runtime']),
    spinlocks: !exists(json, 'spinlocks')
      ? undefined
      : V1FeatureSpinlocksFromJSON(json['spinlocks']),
    synic: !exists(json, 'synic') ? undefined : V1FeatureStateFromJSON(json['synic']),
    synictimer: !exists(json, 'synictimer') ? undefined : V1SyNICTimerFromJSON(json['synictimer']),
    tlbflush: !exists(json, 'tlbflush') ? undefined : V1FeatureStateFromJSON(json['tlbflush']),
    vapic: !exists(json, 'vapic') ? undefined : V1FeatureStateFromJSON(json['vapic']),
    vendorid: !exists(json, 'vendorid') ? undefined : V1FeatureVendorIDFromJSON(json['vendorid']),
    vpindex: !exists(json, 'vpindex') ? undefined : V1FeatureStateFromJSON(json['vpindex']),
  };
}

export function V1FeatureHypervToJSON(value?: V1FeatureHyperv | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    evmcs: V1FeatureStateToJSON(value.evmcs),
    frequencies: V1FeatureStateToJSON(value.frequencies),
    ipi: V1FeatureStateToJSON(value.ipi),
    reenlightenment: V1FeatureStateToJSON(value.reenlightenment),
    relaxed: V1FeatureStateToJSON(value.relaxed),
    reset: V1FeatureStateToJSON(value.reset),
    runtime: V1FeatureStateToJSON(value.runtime),
    spinlocks: V1FeatureSpinlocksToJSON(value.spinlocks),
    synic: V1FeatureStateToJSON(value.synic),
    synictimer: V1SyNICTimerToJSON(value.synictimer),
    tlbflush: V1FeatureStateToJSON(value.tlbflush),
    vapic: V1FeatureStateToJSON(value.vapic),
    vendorid: V1FeatureVendorIDToJSON(value.vendorid),
    vpindex: V1FeatureStateToJSON(value.vpindex),
  };
}
