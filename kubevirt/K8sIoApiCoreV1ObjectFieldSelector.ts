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
* ObjectFieldSelector selects an APIVersioned field of an object.
*/
export class K8sIoApiCoreV1ObjectFieldSelector {
    /**
    * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
    */
    'apiVersion'?: string;
    /**
    * Path of the field to select in the specified API version.
    */
    'fieldPath': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldPath",
            "baseName": "fieldPath",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return K8sIoApiCoreV1ObjectFieldSelector.attributeTypeMap;
    }

    public constructor() {
    }
}

