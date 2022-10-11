export default function fetchImages(query, page = 1) {
  const url = 'https://pixabay.com/api/';
  const key = '29544184-f05b1a44cab73eff12533d9b3';
  const filter = `image_type=photo&min_width=800&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

  return fetch(`${url}?key=${key}&q=${query}&${filter}`).then(response =>
    response.json()
  );
}