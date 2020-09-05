import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b8uozuiKN_v2waePcDRjk5J2NOXNBYoV819NHUSuYWk'
  }
});
