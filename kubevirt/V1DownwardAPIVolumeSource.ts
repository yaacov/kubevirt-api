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

import { K8sIoApiCoreV1DownwardAPIVolumeFile } from './K8sIoApiCoreV1DownwardAPIVolumeFile';

/**
* DownwardAPIVolumeSource represents a volume containing downward API info.
*/
export class V1DownwardAPIVolumeSource {
    /**
    * Fields is a list of downward API volume file
    */
    'fields'?: Array<K8sIoApiCoreV1DownwardAPIVolumeFile>;
    /**
    * The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are \"cidata\" (cloud-init), \"config-2\" (cloud-init) or \"OEMDRV\" (kickstart).
    */
    'volumeLabel'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<K8sIoApiCoreV1DownwardAPIVolumeFile>",
            "format": ""
        },
        {
            "name": "volumeLabel",
            "baseName": "volumeLabel",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1DownwardAPIVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

