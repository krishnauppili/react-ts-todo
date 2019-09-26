import {Action} from "redux";

export const INCREMENT_ENTHUSIASM = 'increment_enthusiasm';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'decrement_enthusiasm';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;
export type Dispatch = (action: Action) => void;
