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


export class V1KVMTimer {
    /**
    * Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true.
    */
    'present'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "present",
            "baseName": "present",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1KVMTimer.attributeTypeMap;
    }

    public constructor() {
    }
}

