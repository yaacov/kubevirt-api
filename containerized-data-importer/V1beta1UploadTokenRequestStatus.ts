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
* UploadTokenRequestStatus stores the status of a token request
*/
export class V1beta1UploadTokenRequestStatus {
    /**
    * Token is a JWT token to be inserted in \"Authentication Bearer header\"
    */
    'token'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1UploadTokenRequestStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

