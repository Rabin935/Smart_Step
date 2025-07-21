import axios from "axios";

const API_BASE = 'http://localhost3000/api/feedback';


export const submitFeedback = async (data: { name: string; rating: number; message: string }) => {
    return axios.post(API_BASE, data);
};

export const getAllFeedback = async () => {
  return axios.get(API_BASE);
}