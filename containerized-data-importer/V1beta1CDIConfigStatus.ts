/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ResourceRequirements } from './V1ResourceRequirements';
import { V1beta1FilesystemOverhead } from './V1beta1FilesystemOverhead';
import { V1beta1ImportProxy } from './V1beta1ImportProxy';

/**
* CDIConfigStatus provides the most recently observed status of the CDI Config resource
*/
export class V1beta1CDIConfigStatus {
    'defaultPodResourceRequirements'?: V1ResourceRequirements;
    'filesystemOverhead'?: V1beta1FilesystemOverhead;
    'importProxy'?: V1beta1ImportProxy;
    /**
    * Preallocation controls whether storage for DataVolumes should be allocated in advance.
    */
    'preallocation'?: boolean;
    /**
    * The calculated storage class to be used for scratch space
    */
    'scratchSpaceStorageClass'?: string;
    /**
    * The calculated upload proxy URL
    */
    'uploadProxyURL'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultPodResourceRequirements",
            "baseName": "defaultPodResourceRequirements",
            "type": "V1ResourceRequirements",
            "format": ""
        },
        {
            "name": "filesystemOverhead",
            "baseName": "filesystemOverhead",
            "type": "V1beta1FilesystemOverhead",
            "format": ""
        },
        {
            "name": "importProxy",
            "baseName": "importProxy",
            "type": "V1beta1ImportProxy",
            "format": ""
        },
        {
            "name": "preallocation",
            "baseName": "preallocation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scratchSpaceStorageClass",
            "baseName": "scratchSpaceStorageClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadProxyURL",
            "baseName": "uploadProxyURL",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CDIConfigStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

