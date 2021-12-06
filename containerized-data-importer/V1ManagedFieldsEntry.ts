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
* ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
*/
export class V1ManagedFieldsEntry {
    /**
    * APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
    */
    'apiVersion'?: string;
    /**
    * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: \"FieldsV1\"
    */
    'fieldsType'?: string;
    /**
    * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.  Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.  The exact format is defined in sigs.k8s.io/structured-merge-diff
    */
    'fieldsV1'?: any;
    /**
    * Manager is an identifier of the workflow managing these fields.
    */
    'manager'?: string;
    /**
    * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
    */
    'operation'?: string;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'time'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldsType",
            "baseName": "fieldsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldsV1",
            "baseName": "fieldsV1",
            "type": "any",
            "format": ""
        },
        {
            "name": "manager",
            "baseName": "manager",
            "type": "string",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return V1ManagedFieldsEntry.attributeTypeMap;
    }

    public constructor() {
    }
}

