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


export class V1VirtualMachineInstanceGuestOSInfo {
    /**
    * Guest OS Id
    */
    'id'?: string;
    /**
    * Guest OS Kernel Release
    */
    'kernelRelease'?: string;
    /**
    * Kernel version of the Guest OS
    */
    'kernelVersion'?: string;
    /**
    * Machine type of the Guest OS
    */
    'machine'?: string;
    /**
    * Name of the Guest OS
    */
    'name'?: string;
    /**
    * Guest OS Pretty Name
    */
    'prettyName'?: string;
    /**
    * Guest OS Version
    */
    'version'?: string;
    /**
    * Version ID of the Guest OS
    */
    'versionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "kernelRelease",
            "baseName": "kernelRelease",
            "type": "string",
            "format": ""
        },
        {
            "name": "kernelVersion",
            "baseName": "kernelVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "machine",
            "baseName": "machine",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "prettyName",
            "baseName": "prettyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceGuestOSInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

