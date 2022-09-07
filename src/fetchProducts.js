const url = 'https://62cd95fca43bf780085b5573.mockapi.io/api/v1/Pizzeria';

const fetchProducts = async () => {
  const response = await fetch(url).catch((err) => console.log(err));
  if(response) {
      return response.json();
  }
  return response;
}

export default fetchProducts