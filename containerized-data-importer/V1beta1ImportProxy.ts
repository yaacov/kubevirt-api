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


/**
* ImportProxy provides the information on how to configure the importer pod proxy.
*/
export class V1beta1ImportProxy {
    /**
    * HTTPProxy is the URL http://<username>:<pswd>@<ip>:<port> of the import proxy for HTTP requests.  Empty means unset and will not result in the import pod env var.
    */
    'hTTPProxy'?: string;
    /**
    * HTTPSProxy is the URL https://<username>:<pswd>@<ip>:<port> of the import proxy for HTTPS requests.  Empty means unset and will not result in the import pod env var.
    */
    'hTTPSProxy'?: string;
    /**
    * NoProxy is a comma-separated list of hostnames and/or CIDRs for which the proxy should not be used. Empty means unset and will not result in the import pod env var.
    */
    'noProxy'?: string;
    /**
    * TrustedCAProxy is the name of a ConfigMap in the cdi namespace that contains a user-provided trusted certificate authority (CA) bundle. The TrustedCAProxy field is consumed by the import controller that is resposible for coping it to a config map named trusted-ca-proxy-bundle-cm in the cdi namespace. Here is an example of the ConfigMap (in yaml):  apiVersion: v1 kind: ConfigMap metadata:   name: trusted-ca-proxy-bundle-cm   namespace: cdi data:   ca.pem: |     -----BEGIN CERTIFICATE-----     ... <base64 encoded cert> ...     -----END CERTIFICATE-----
    */
    'trustedCAProxy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hTTPProxy",
            "baseName": "HTTPProxy",
            "type": "string",
            "format": ""
        },
        {
            "name": "hTTPSProxy",
            "baseName": "HTTPSProxy",
            "type": "string",
            "format": ""
        },
        {
            "name": "noProxy",
            "baseName": "noProxy",
            "type": "string",
            "format": ""
        },
        {
            "name": "trustedCAProxy",
            "baseName": "trustedCAProxy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1ImportProxy.attributeTypeMap;
    }

    public constructor() {
    }
}

