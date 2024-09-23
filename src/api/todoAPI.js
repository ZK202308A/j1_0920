import axios from "axios";


const host = 'http://localhost:8088/api/v1/todos'

export const getTodoList = async (page = 1, size = 10) => {

    const res = await axios.get(`${host}/list?page=${page}&size=${size}`)

    return res.data
}
