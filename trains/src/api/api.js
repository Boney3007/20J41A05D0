import axios from 'axios';
 
const URL='http://20.244.56.144/train/'; //Adding base Url

const API=axios.create({
    baseURL: URL
});

const getToken = async() => {
    let {data} = await axios.post("")
}