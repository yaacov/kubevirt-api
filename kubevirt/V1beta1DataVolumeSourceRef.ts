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


/**
* DataVolumeSourceRef defines an indirect reference to the source of data for the DataVolume
*/
export class V1beta1DataVolumeSourceRef {
    /**
    * The kind of the source reference, currently only \"DataSource\" is supported
    */
    'kind': string;
    /**
    * The name of the source reference
    */
    'name': string;
    /**
    * The namespace of the source reference, defaults to the DataVolume namespace
    */
    'namespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
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
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1DataVolumeSourceRef.attributeTypeMap;
    }

    public constructor() {
    }
}

