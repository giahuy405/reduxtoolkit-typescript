import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore';
import axios from 'axios';
import produce from 'immer';
import { settings } from '../../utils/config';

export type LoginInfoModel = {
    email?: string;
    accessToken?: string;
}
export type InfoLogin = {
    email?: string;
    password?: string;
}

export type ProductState = {
    loginInfo: LoginInfoModel | null,

}
const initialState: ProductState = {
    loginInfo: null
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setLoginInfo: (state: ProductState, action: PayloadAction<LoginInfoModel>) => {
            return produce(state, draft => {
                draft.loginInfo = action.payload;
            })
        },
    }
});

export const { setLoginInfo } = userReducer.actions

export default userReducer.reducer


// ------------------- 
export const loginApp = (data: InfoLogin) => async (dispatch: DispatchType) => {
    try {
        const res = await axios.post('https://shop.cyberlearn.vn/api/Users/signin', data);
        console.log(data, 'data')
        console.log(res.data.content.accessToken, 'res')
        settings.setStorageJson('ACCESS_TOKEN', res.data.content.accessToken)
    } catch (err) {
        console.log(err)
    }
}