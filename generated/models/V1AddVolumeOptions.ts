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

import { V1Disk } from './V1Disk';
import { V1HotplugVolumeSource } from './V1HotplugVolumeSource';
import { HttpFile } from '../http/http';

/**
* AddVolumeOptions is provided when dynamically hot plugging a volume and disk
*/
export class V1AddVolumeOptions {
    'disk': V1Disk;
    /**
    * Name represents the name that will be used to map the disk to the corresponding volume. This overrides any name set inside the Disk struct itself.
    */
    'name': string;
    'volumeSource': V1HotplugVolumeSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "disk",
            "baseName": "disk",
            "type": "V1Disk",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeSource",
            "baseName": "volumeSource",
            "type": "V1HotplugVolumeSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1AddVolumeOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
