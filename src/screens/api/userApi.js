import axiosClient from "./axiosClient";
const userApi = {
    getUser: (id) => {
        const url = `/user/${id}`;//your number 
        return axiosClient.get(url);
    },
};
export default userApi;