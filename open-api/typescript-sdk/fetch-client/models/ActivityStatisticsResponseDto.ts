/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ActivityStatisticsResponseDto
 */
export interface ActivityStatisticsResponseDto {
    /**
     * 
     * @type {number}
     * @memberof ActivityStatisticsResponseDto
     */
    comments: number;
}

/**
 * Check if a given object implements the ActivityStatisticsResponseDto interface.
 */
export function instanceOfActivityStatisticsResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "comments" in value;

    return isInstance;
}

export function ActivityStatisticsResponseDtoFromJSON(json: any): ActivityStatisticsResponseDto {
    return ActivityStatisticsResponseDtoFromJSONTyped(json, false);
}

export function ActivityStatisticsResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityStatisticsResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': json['comments'],
    };
}

export function ActivityStatisticsResponseDtoToJSON(value?: ActivityStatisticsResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comments': value.comments,
    };
}

