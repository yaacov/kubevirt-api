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
  IoK8sApiCoreV1LocalObjectReference,
  IoK8sApiCoreV1LocalObjectReferenceFromJSON,
  IoK8sApiCoreV1LocalObjectReferenceToJSON,
} from './';

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1RBDVolumeSource
 */
export interface IoK8sApiCoreV1RBDVolumeSource {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
   * @type {string}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  fsType?: string;
  /**
   * The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  image: string;
  /**
   * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  keyring?: string;
  /**
   * A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {Array<string>}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  monitors: Array<string>;
  /**
   * The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  pool?: string;
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {boolean}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  readOnly?: boolean;
  /**
   *
   * @type {IoK8sApiCoreV1LocalObjectReference}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  /**
   * The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof IoK8sApiCoreV1RBDVolumeSource
   */
  user?: string;
}

export function IoK8sApiCoreV1RBDVolumeSourceFromJSON(json: any): IoK8sApiCoreV1RBDVolumeSource {
  return IoK8sApiCoreV1RBDVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1RBDVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1RBDVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    fsType: !exists(json, 'fsType') ? undefined : json['fsType'],
    image: json['image'],
    keyring: !exists(json, 'keyring') ? undefined : json['keyring'],
    monitors: json['monitors'],
    pool: !exists(json, 'pool') ? undefined : json['pool'],
    readOnly: !exists(json, 'readOnly') ? undefined : json['readOnly'],
    secretRef: !exists(json, 'secretRef')
      ? undefined
      : IoK8sApiCoreV1LocalObjectReferenceFromJSON(json['secretRef']),
    user: !exists(json, 'user') ? undefined : json['user'],
  };
}

export function IoK8sApiCoreV1RBDVolumeSourceToJSON(
  value?: IoK8sApiCoreV1RBDVolumeSource | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    fsType: value.fsType,
    image: value.image,
    keyring: value.keyring,
    monitors: value.monitors,
    pool: value.pool,
    readOnly: value.readOnly,
    secretRef: IoK8sApiCoreV1LocalObjectReferenceToJSON(value.secretRef),
    user: value.user,
  };
}