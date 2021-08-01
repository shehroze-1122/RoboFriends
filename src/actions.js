import { CHANGE_SEARCHFIELD } from "./constants";

export const searchFieldChange = (text)=>({
    type:CHANGE_SEARCHFIELD,
    payload:text
});