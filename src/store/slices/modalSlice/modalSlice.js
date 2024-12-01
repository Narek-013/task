import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:"modal",
    initialState:{
        isModal:false,
        modalResponse:""
    },
    reducers:{
        getValue(state,{payload}) {
            return {
                isModal:true,
                modalResponse:payload
            }
        },
        closeModalWindow(state) {
            return {
                isModal:false,
                modalResponse:""
            }
        }
    }
});


export const selectModal = (state) => state.modal;
export const modalReducer = modalSlice.reducer;
export const { getValue, closeModalWindow } = modalSlice.actions;