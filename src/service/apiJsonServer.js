import axios from 'axios';

const BASE_URL = 'http://localhost:3000/menu';

const getAllMenuItems = () => axios.get(BASE_URL).then(res => res.data);
const getMenuItemById = id => axios.get(`${BASE_URL}/${id}`).then(res => res.data);
const deleteMenuItem = id => axios.delete(`${BASE_URL}/${id}`).then(res => res.status === 200);
const addMenuItem = item => axios.post(BASE_URL, item).then(res => res.data);

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
