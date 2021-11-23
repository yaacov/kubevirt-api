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

import { V1DHCPOptions } from './V1DHCPOptions';
import { V1Port } from './V1Port';
import { HttpFile } from '../http/http';

export class V1Interface {
    /**
    * BootOrder is an integer value > 0, used to determine ordering of boot devices. Lower values take precedence. Each interface or disk that has a boot order must have a unique value. Interfaces without a boot order are not tried.
    */
    'bootOrder'?: number;
    'bridge'?: any;
    'dhcpOptions'?: V1DHCPOptions;
    /**
    * Interface MAC address. For example: de:ad:00:00:be:af or DE-AD-00-00-BE-AF.
    */
    'macAddress'?: string;
    'macvtap'?: any;
    'masquerade'?: any;
    /**
    * Interface model. One of: e1000, e1000e, ne2k_pci, pcnet, rtl8139, virtio. Defaults to virtio.
    */
    'model'?: string;
    /**
    * Logical name of the interface as well as a reference to the associated networks. Must match the Name of a Network.
    */
    'name': string;
    /**
    * If specified, the virtual network interface will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
    */
    'pciAddress'?: string;
    /**
    * List of ports to be forwarded to the virtual machine.
    */
    'ports'?: Array<V1Port>;
    'slirp'?: any;
    'sriov'?: any;
    /**
    * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
    */
    'tag'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bootOrder",
            "baseName": "bootOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "bridge",
            "baseName": "bridge",
            "type": "any",
            "format": ""
        },
        {
            "name": "dhcpOptions",
            "baseName": "dhcpOptions",
            "type": "V1DHCPOptions",
            "format": ""
        },
        {
            "name": "macAddress",
            "baseName": "macAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "macvtap",
            "baseName": "macvtap",
            "type": "any",
            "format": ""
        },
        {
            "name": "masquerade",
            "baseName": "masquerade",
            "type": "any",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pciAddress",
            "baseName": "pciAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1Port>",
            "format": ""
        },
        {
            "name": "slirp",
            "baseName": "slirp",
            "type": "any",
            "format": ""
        },
        {
            "name": "sriov",
            "baseName": "sriov",
            "type": "any",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Interface.attributeTypeMap;
    }

    public constructor() {
    }
}
