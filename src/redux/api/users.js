import axiosClient from "../../screens/api/axiosClient";
import {URL} from './index';
export const apiGetUsers = () => {
    return axiosClient.get(URL + "/users");
};
export const apiGetuserservers = (id) => {
    return axiosClient.get(URL + "/users");
};
export const apiGetuserserversStatistics = (id) => {
    return axiosClient.get(URL + "/users");
};
export const apiAdduser = (payload) => {
    return axiosClient.post("users",payload);
};
export const apiupdateusers = ({id,payload}) => {
    return axiosClient.put("/users" + id,payload);
};
export const apiDeleteusers = (id) => {
    return axiosClient.delete(URL + "/users" + id);
};