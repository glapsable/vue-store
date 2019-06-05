import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e8f5213619d72285b8956a78bf1bbbf0963a9c708710cc09afeef8053b178e1f'
  }
});
