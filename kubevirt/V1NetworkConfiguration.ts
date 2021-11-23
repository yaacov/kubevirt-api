/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* NetworkConfiguration holds network options
*/
export class V1NetworkConfiguration {
    'defaultNetworkInterface'?: string;
    'permitBridgeInterfaceOnPodNetwork'?: boolean;
    'permitSlirpInterface'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultNetworkInterface",
            "baseName": "defaultNetworkInterface",
            "type": "string",
            "format": ""
        },
        {
            "name": "permitBridgeInterfaceOnPodNetwork",
            "baseName": "permitBridgeInterfaceOnPodNetwork",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "permitSlirpInterface",
            "baseName": "permitSlirpInterface",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NetworkConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}
