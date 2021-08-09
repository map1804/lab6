import { DOI_TIEN } from "../const";

export const tienReducer = (state = {}, action) => {
    switch (action.type) {
        case DOI_TIEN:
            let doitien = action.doitien
            console.log({ ...state, doitien });
            return { ...state, doitien }

        default:
            return state
    }
}