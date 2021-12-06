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
* VirtualMachineStartFailure tracks VMIs which failed to transition successfully to running using the VM status
*/
export class V1VirtualMachineStartFailure {
    'consecutiveFailCount'?: number;
    'lastFailedVMIUID'?: string;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'retryAfterTimestamp'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "consecutiveFailCount",
            "baseName": "consecutiveFailCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lastFailedVMIUID",
            "baseName": "lastFailedVMIUID",
            "type": "string",
            "format": ""
        },
        {
            "name": "retryAfterTimestamp",
            "baseName": "retryAfterTimestamp",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineStartFailure.attributeTypeMap;
    }

    public constructor() {
    }
}

