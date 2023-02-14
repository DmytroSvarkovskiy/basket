import axios from 'axios';
import { Goods } from '../types';
axios.defaults.baseURL = 'https://63eb6daef1a969340db7eb45.mockapi.io';

export async function fetchGoods() {
  const response = await axios.get<Goods[]>('/technics');
  return response.data;
}
