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

import { V1VirtualMachineInstanceReplicaSetCondition } from './V1VirtualMachineInstanceReplicaSetCondition';

export class V1VirtualMachineInstanceReplicaSetStatus {
    'conditions'?: Array<V1VirtualMachineInstanceReplicaSetCondition>;
    /**
    * Canonical form of the label selector for HPA which consumes it through the scale subresource.
    */
    'labelSelector'?: string;
    /**
    * The number of ready replicas for this replica set.
    */
    'readyReplicas'?: number;
    /**
    * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
    */
    'replicas'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1VirtualMachineInstanceReplicaSetCondition>",
            "format": ""
        },
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "string",
            "format": ""
        },
        {
            "name": "readyReplicas",
            "baseName": "readyReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceReplicaSetStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

