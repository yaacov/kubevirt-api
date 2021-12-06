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

import { K8sIoApiCoreV1Affinity } from './K8sIoApiCoreV1Affinity';
import { K8sIoApiCoreV1Toleration } from './K8sIoApiCoreV1Toleration';

/**
* NodePlacement describes node scheduling configuration.
*/
export class V1NodePlacement {
    'affinity'?: K8sIoApiCoreV1Affinity;
    /**
    * nodeSelector is the node selector applied to the relevant kind of pods It specifies a map of key-value pairs: for the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels (it can have additional labels as well). See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector
    */
    'nodeSelector'?: { [key: string]: string; };
    /**
    * tolerations is a list of tolerations applied to the relevant kind of pods See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for more info. These are additional tolerations other than default ones.
    */
    'tolerations'?: Array<K8sIoApiCoreV1Toleration>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "K8sIoApiCoreV1Affinity",
            "format": ""
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "tolerations",
            "baseName": "tolerations",
            "type": "Array<K8sIoApiCoreV1Toleration>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodePlacement.attributeTypeMap;
    }

    public constructor() {
    }
}

