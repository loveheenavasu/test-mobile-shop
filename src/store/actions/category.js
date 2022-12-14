// import axios from "../../helpers/axios";
import axios from "axios"
import { api } from '../../urlConfig';
import { categoryConstansts } from "./constants";

export const getAllCategory = () => async dispatch => {
        // dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
        const res = await axios.get(`${api}/category`);
        if (res.status === 200) {

            const { categoryList } = res.data;

            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        } else {
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }

export const addCategory = (name, id) => async dispatch => {
        dispatch({ type: categoryConstansts.ADD_NEW_CATEGORY_REQUEST });
        try {
            const res = await axios.post(`${api}/category`, name, id);
            if (res.status === 201) {
                dispatch({
                    type: categoryConstansts.ADD_NEW_CATEGORY_SUCCESS,
                    payload: { category: res.data.category }
                });
            } else {
                dispatch({
                    type: categoryConstansts.ADD_NEW_CATEGORY_FAILURE,
                    payload: res.data.error
                });
            }
        } catch (error) {   
            console.log(error.response);
        }

    }

export const updateCategories = (form) => async dispatch => {
        dispatch({ type: categoryConstansts.UPDATE_CATEGORIES_REQUEST });
        const res = await axios.post(`${api}/category/update`, form);
        if (res.status === 201) {
            dispatch({ type: categoryConstansts.UPDATE_CATEGORIES_SUCCESS });
            dispatch(getAllCategory());
        } else {
            const { error } = res.data;
            dispatch({
                type: categoryConstansts.UPDATE_CATEGORIES_FAILURE,
                payload: { error }
            });
        }
    }

export const deleteCategories = (ids) => async dispatch => {
        dispatch({ type: categoryConstansts.DELETE_CATEGORIES_REQUEST });
        const res = await axios.post(`${api}/category/delete`, {
            payload: {
                ids
            }
        });
        if (res.status == 201) {
            dispatch(getAllCategory());
            dispatch({ type: categoryConstansts.DELETE_CATEGORIES_SUCCESS });
        } else {
            const { error } = res.data;
            dispatch({
                type: categoryConstansts.DELETE_CATEGORIES_FAILURE,
                payload: { error }
            });
        }
    }