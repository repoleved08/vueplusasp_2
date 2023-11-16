import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:5285',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getTodos() {
        return apiClient.get('/api/Todo/GetAllTodo')
    },
    getSIngleTodo(id) {
        return apiClient.get('/api/Todo/GetOne/'+id)
    },
    deleteTodo(id) {
        return apiClient.delete('/api/Todo/Remove?id='+id)
    }
}
