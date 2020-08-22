import axios from 'axios';

const api = axios.create({
    baseURL: `127.0.0.1:8000/api/`
})

const login = async () => {
     const res = await api.post('/login',{
        user: {
            username: username,
            password: password
        }
    })
    .then(res => {
        console.log(res)
    })
}  

export default login