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

/**
 *
 * @export
 * @interface V1HostDevice
 */
export interface V1HostDevice {
  /**
   * DeviceName is the resource name of the host device exposed by a device plugin
   * @type {string}
   * @memberof V1HostDevice
   */
  deviceName: string;
  /**
   *
   * @type {string}
   * @memberof V1HostDevice
   */
  name: string;
}

export function V1HostDeviceFromJSON(json: any): V1HostDevice {
  return V1HostDeviceFromJSONTyped(json, false);
}

export function V1HostDeviceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1HostDevice {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    deviceName: json['deviceName'],
    name: json['name'],
  };
}

export function V1HostDeviceToJSON(value?: V1HostDevice | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    deviceName: value.deviceName,
    name: value.name,
  };
}
