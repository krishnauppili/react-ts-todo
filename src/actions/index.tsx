import {DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM} from "../constants";

export interface IncrementEnthusiasm{
    type:INCREMENT_ENTHUSIASM
}

export interface DecrementEnthusiasm{
    type:DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasmAction():IncrementEnthusiasm{
    return {
        type:INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasmAction():DecrementEnthusiasm{
    return {
        type:DECREMENT_ENTHUSIASM
    }
}
