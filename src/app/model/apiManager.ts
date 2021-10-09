import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.forour.space/api',
    timeout: 40000,
  
    // responseType:"json",
    // headers:{
    //   "Content-Type":"application/json"
    // }
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFTOKEN',
  });


const GET = async (entry: string, payload?: { params?: any }) => {

    const data = await instance({
      method: 'GET',
      url: entry,
      params: payload?.params,
     
    });

    return data.data;
  };
  
const POST = async (
    entry: string,
    payload?: { bodyData: any }
  ) => {
    const data = await instance({
      url: entry,
      method: 'POST',
      data: payload?.bodyData,
    });
    return data.data;
  };
  

const DELETE = async (
    entry: string,
    payload?: { params?: any; bodyData?: any }
  ) => {
    const res = await instance({
      url: entry,
      method: 'DELETE',
      params: payload?.params,
      data: payload?.bodyData,
    });
    return res;
  };
  
const PATCH = async (entry: string, { bodyData }: { bodyData: any }) => {
    const res = await instance({
      url: entry,
      method: 'PATCH',
      data: bodyData,
    });
    return res;
  };


const API = {GET, POST, DELETE, PATCH}

export default API