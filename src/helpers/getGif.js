const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3qvTZJZ00Qc6A2QkaTgpT2CgBekpM0Rg&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  return gifs;
}

export default getGif;
