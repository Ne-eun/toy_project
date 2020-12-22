export let GetYoutubeId = (url) => {
  let regexImageUrl = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);

  return regexImageUrl[2];
};
