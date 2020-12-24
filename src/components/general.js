import api from '../router/api';

export let GetYoutubeId = (url) => {
  let regexImageUrl = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);

  return regexImageUrl[2];
};

export const GetCategorys = () => {
  let categorys;
  api
    .get('/api/v1/category/list', {
      headers: {
        Authorization: localStorage.getItem('AUTH_TOKEN'),
      },
    })
    .then((res: any) => {
      categorys = res.data.data;
    });
  return categorys;
};