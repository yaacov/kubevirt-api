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

import { V1GenerationStatus } from './V1GenerationStatus';
import { V1KubeVirtCondition } from './V1KubeVirtCondition';

/**
* KubeVirtStatus represents information pertaining to a KubeVirt deployment.
*/
export class V1KubeVirtStatus {
    'conditions'?: Array<V1KubeVirtCondition>;
    'generations'?: Array<V1GenerationStatus>;
    'observedDeploymentConfig'?: string;
    'observedDeploymentID'?: string;
    'observedKubeVirtRegistry'?: string;
    'observedKubeVirtVersion'?: string;
    'operatorVersion'?: string;
    'outdatedVirtualMachineInstanceWorkloads'?: number;
    'phase'?: string;
    'targetDeploymentConfig'?: string;
    'targetDeploymentID'?: string;
    'targetKubeVirtRegistry'?: string;
    'targetKubeVirtVersion'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1KubeVirtCondition>",
            "format": ""
        },
        {
            "name": "generations",
            "baseName": "generations",
            "type": "Array<V1GenerationStatus>",
            "format": ""
        },
        {
            "name": "observedDeploymentConfig",
            "baseName": "observedDeploymentConfig",
            "type": "string",
            "format": ""
        },
        {
            "name": "observedDeploymentID",
            "baseName": "observedDeploymentID",
            "type": "string",
            "format": ""
        },
        {
            "name": "observedKubeVirtRegistry",
            "baseName": "observedKubeVirtRegistry",
            "type": "string",
            "format": ""
        },
        {
            "name": "observedKubeVirtVersion",
            "baseName": "observedKubeVirtVersion",
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
            "name": "outdatedVirtualMachineInstanceWorkloads",
            "baseName": "outdatedVirtualMachineInstanceWorkloads",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetDeploymentConfig",
            "baseName": "targetDeploymentConfig",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetDeploymentID",
            "baseName": "targetDeploymentID",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetKubeVirtRegistry",
            "baseName": "targetKubeVirtRegistry",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetKubeVirtVersion",
            "baseName": "targetKubeVirtVersion",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1KubeVirtStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

