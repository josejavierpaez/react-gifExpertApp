import { IGiftResponse, ICategory } from '../interfaces/interfaces';

export const getGif = async ({ category }: ICategory) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OPTnD34laEOU4ABpZuKqX74bg1tkJQ4y`;
  const response: Response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((gif: IGiftResponse) => {

    const giftFilter = {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
    return giftFilter;
  });
  return gifs;
}