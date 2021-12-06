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


export class V1VirtualMachineInstanceNetworkInterface {
    /**
    * The interface name inside the Virtual Machine
    */
    'interfaceName'?: string;
    /**
    * IP address of a Virtual Machine interface. It is always the first item of IPs
    */
    'ipAddress'?: string;
    /**
    * List of all IP addresses of a Virtual Machine interface
    */
    'ipAddresses'?: Array<string>;
    /**
    * Hardware address of a Virtual Machine interface
    */
    'mac'?: string;
    /**
    * Name of the interface, corresponds to name of the network assigned to the interface
    */
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "interfaceName",
            "baseName": "interfaceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddresses",
            "baseName": "ipAddresses",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "mac",
            "baseName": "mac",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceNetworkInterface.attributeTypeMap;
    }

    public constructor() {
    }
}

