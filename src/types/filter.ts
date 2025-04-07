import { FILTER_OPTIONS } from '../const';

export type FilterOptionsType = typeof FILTER_OPTIONS;

export type FilterOptionsDescriptionType = FilterOptionsType[keyof FilterOptionsType]
