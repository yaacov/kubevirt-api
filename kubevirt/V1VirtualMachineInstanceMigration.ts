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

import { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import { V1VirtualMachineInstanceMigrationSpec } from './V1VirtualMachineInstanceMigrationSpec';
import { V1VirtualMachineInstanceMigrationStatus } from './V1VirtualMachineInstanceMigrationStatus';

/**
* VirtualMachineInstanceMigration represents the object tracking a VMI's migration to another host in the cluster
*/
export class V1VirtualMachineInstanceMigration {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    'spec': V1VirtualMachineInstanceMigrationSpec;
    'status'?: V1VirtualMachineInstanceMigrationStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "K8sIoApimachineryPkgApisMetaV1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1VirtualMachineInstanceMigrationSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1VirtualMachineInstanceMigrationStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceMigration.attributeTypeMap;
    }

    public constructor() {
    }
}

