import * as actions from '../actions/';
import { StoreState } from '../types/';
import { connect } from 'react-redux';
import {Dispatch} from "redux";
import Hello from "../components/Hello/Hello";

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasmAction()),
        onDecrement: () => dispatch(actions.decrementEnthusiasmAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);