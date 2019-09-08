
import { fetchData } from '../util'

export const FETCH_SUCCESS = 'FETCH_SUCCESS'

export const fetchsuccess = (data) => ({ type: FETCH_SUCCESS, data })


export function thunkfetchdata(v) {
    return dispatch => {
        console.log('thunk return a closure function will be called by store', v);

        // fetchData("/", v).then(data=>this.fetchHandler(data));
        return fetchData("/", v).then(res => dispatch(fetchsuccess(res)));
    }
}