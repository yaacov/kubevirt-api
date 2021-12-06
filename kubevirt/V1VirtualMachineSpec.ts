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

import { V1DataVolumeTemplateSpec } from './V1DataVolumeTemplateSpec';
import { V1FlavorMatcher } from './V1FlavorMatcher';
import { V1VirtualMachineInstanceTemplateSpec } from './V1VirtualMachineInstanceTemplateSpec';

/**
* VirtualMachineSpec describes how the proper VirtualMachine should look like
*/
export class V1VirtualMachineSpec {
    /**
    * dataVolumeTemplates is a list of dataVolumes that the VirtualMachineInstance template can reference. DataVolumes in this list are dynamically created for the VirtualMachine and are tied to the VirtualMachine's life-cycle.
    */
    'dataVolumeTemplates'?: Array<V1DataVolumeTemplateSpec>;
    'flavor'?: V1FlavorMatcher;
    /**
    * Running state indicates the requested running state of the VirtualMachineInstance mutually exclusive with Running
    */
    'runStrategy'?: string;
    /**
    * Running controls whether the associatied VirtualMachineInstance is created or not Mutually exclusive with RunStrategy
    */
    'running'?: boolean;
    'template': V1VirtualMachineInstanceTemplateSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataVolumeTemplates",
            "baseName": "dataVolumeTemplates",
            "type": "Array<V1DataVolumeTemplateSpec>",
            "format": ""
        },
        {
            "name": "flavor",
            "baseName": "flavor",
            "type": "V1FlavorMatcher",
            "format": ""
        },
        {
            "name": "runStrategy",
            "baseName": "runStrategy",
            "type": "string",
            "format": ""
        },
        {
            "name": "running",
            "baseName": "running",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1VirtualMachineInstanceTemplateSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

