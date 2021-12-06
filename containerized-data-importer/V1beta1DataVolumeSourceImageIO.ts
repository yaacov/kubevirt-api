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


/**
* DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source
*/
export class V1beta1DataVolumeSourceImageIO {
    /**
    * CertConfigMap provides a reference to the CA cert
    */
    'certConfigMap'?: string;
    /**
    * DiskID provides id of a disk to be imported
    */
    'diskId': string;
    /**
    * SecretRef provides the secret reference needed to access the ovirt-engine
    */
    'secretRef'?: string;
    /**
    * URL is the URL of the ovirt-engine
    */
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certConfigMap",
            "baseName": "certConfigMap",
            "type": "string",
            "format": ""
        },
        {
            "name": "diskId",
            "baseName": "diskId",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1DataVolumeSourceImageIO.attributeTypeMap;
    }

    public constructor() {
    }
}

