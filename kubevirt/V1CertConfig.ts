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
* CertConfig contains the tunables for TLS certificates
*/
export class V1CertConfig {
    /**
    * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
    */
    'duration'?: string;
    /**
    * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
    */
    'renewBefore'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "renewBefore",
            "baseName": "renewBefore",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CertConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

