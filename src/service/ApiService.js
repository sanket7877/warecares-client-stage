export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://134.209.153.51:8080/api';
export const ACCESS_TOKEN = 'accessToken';

const request = async (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    const response = await fetch(options.url, options);
    const json = await response.json();
    if (!response.ok) {
        return Promise.reject(json);
    }
    return json;
};
export function login(loginRequest) {

    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });

}
export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/user/createuser",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });

}

export function payment(payment) {
    return request({
        url: API_BASE_URL + "/appointment/createOrder",
        method: 'POST',
        body: JSON.stringify(payment)
    });
}
export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/user/user/me",
        method: 'GET',
    });
}

export function getAllAppointments() {

    return request({
        url: API_BASE_URL + "/appointment/appoinements",
        method: 'GET',
    });
}
export function getAppointmentsByDoctorId(id) {

    return request({
        url: API_BASE_URL + "/appointment/listappointmentRequest/"+id,
        method: 'GET',
    });
}
export function getAllDoctors() {

    return request({
        url: API_BASE_URL + "/doctor/showdoctor",
        method: 'GET',
    });
}

export function getDoctorById(id) {

    return request({
        url: API_BASE_URL + "/doctor/"+id,
        method: 'GET',
    });
}
