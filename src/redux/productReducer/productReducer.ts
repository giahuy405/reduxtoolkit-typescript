import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore';
import axios from 'axios';
import produce from 'immer';

export type ProductModel = {
    id?: number;
    name?: string;
    alias?: string;
    price?: number;
    description?: string;
    size?: string;
    shortDescription?: string;
    quantity?: number;
    deleted?: boolean;
    categories?: string;
    relatedProducts?: string;
    feature?: boolean;
    image?: string;
}
export type CategoryModel = {
    id?: string;
    category?: string;
    categoryParent?: string;
    categoryChild?: string;
    deleted?: boolean;
    productList?: string;
    alias?: string;
}


export type ProductState = {
    productList: ProductModel[],
    category: CategoryModel[]
}

const initialState: ProductState = {
    productList: [],
    category: []
}



const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setProductListAction: (state: ProductState, action: PayloadAction<ProductModel[]>) => {
            return produce(state, draft => {
                draft.productList = action.payload;
            })
        },
        setCategoryAction: (state: ProductState, action: PayloadAction<CategoryModel[]>) => {
            return produce(state, draft => {
                draft.category = action.payload;
            })
        },
    }
});

export const { setProductListAction, setCategoryAction } = productReducer.actions

export default productReducer.reducer


// ------------------- 
export const getAllProduct = () => async (dispatch: DispatchType) => {
    try {
        const res = await axios.get('https://shop.cyberlearn.vn/api/Product');
        const content: ProductModel[] = res.data.content;
        dispatch(setProductListAction(content))
    } catch (err) {
        console.log(err)
    }
}

export const getAllCategory = () => async (dispatch: DispatchType) => {
    try {
        const res = await axios.get('https://shop.cyberlearn.vn/api/Product/getAllCategory');
        const content: CategoryModel[] = res.data.content;
        dispatch(setCategoryAction(content))
    } catch (err) {
        console.log(err)
    }
}