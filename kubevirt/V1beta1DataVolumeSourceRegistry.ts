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
* DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source
*/
export class V1beta1DataVolumeSourceRegistry {
    /**
    * CertConfigMap provides a reference to the Registry certs
    */
    'certConfigMap'?: string;
    /**
    * SecretRef provides the secret reference needed to access the Registry source
    */
    'secretRef'?: string;
    /**
    * URL is the url of the Docker registry source
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
        return V1beta1DataVolumeSourceRegistry.attributeTypeMap;
    }

    public constructor() {
    }
}

