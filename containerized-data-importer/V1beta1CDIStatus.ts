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

import { V1Condition } from './V1Condition';

/**
* CDIStatus defines the status of the installation
*/
export class V1beta1CDIStatus {
    /**
    * A list of current conditions of the resource
    */
    'conditions'?: Array<V1Condition>;
    /**
    * The observed version of the resource
    */
    'observedVersion'?: string;
    /**
    * The version of the resource as defined by the operator
    */
    'operatorVersion'?: string;
    'phase'?: string;
    /**
    * The desired version of the resource
    */
    'targetVersion'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        },
        {
            "name": "observedVersion",
            "baseName": "observedVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatorVersion",
            "baseName": "operatorVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetVersion",
            "baseName": "targetVersion",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CDIStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

