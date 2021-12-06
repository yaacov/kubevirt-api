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

import { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import { V1VirtualMachineInstanceTemplateSpec } from './V1VirtualMachineInstanceTemplateSpec';

export class V1VirtualMachineInstanceReplicaSetSpec {
    /**
    * Indicates that the replica set is paused.
    */
    'paused'?: boolean;
    /**
    * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    */
    'replicas'?: number;
    'selector': K8sIoApimachineryPkgApisMetaV1LabelSelector;
    'template': V1VirtualMachineInstanceTemplateSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "K8sIoApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1VirtualMachineInstanceTemplateSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceReplicaSetSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

