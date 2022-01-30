/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * DataVolumeSourceRef defines an indirect reference to the source of data for the DataVolume
 * @export
 * @interface V1beta1DataVolumeSourceRef
 */
export interface V1beta1DataVolumeSourceRef {
    /**
     * The kind of the source reference, currently only "DataSource" is supported
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRef
     */
    kind: string;
    /**
     * The name of the source reference
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRef
     */
    name: string;
    /**
     * The namespace of the source reference, defaults to the DataVolume namespace
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRef
     */
    namespace?: string;
}

export function V1beta1DataVolumeSourceRefFromJSON(json: any): V1beta1DataVolumeSourceRef {
    return V1beta1DataVolumeSourceRefFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': json['kind'],
        'name': json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1beta1DataVolumeSourceRefToJSON(value?: V1beta1DataVolumeSourceRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
    };
}
