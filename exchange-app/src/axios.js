import axios from "axios";

const key = "AIB5VQw4zjnEBCGOMA7UQIrhm8o7JNFW";

// const getSymbols = async () => {
//   const { data } = await axios.get(
//     "https://api.apilayer.com/exchangerates_data/symbols?base=AZN",
//     { headers: { apikey: key } }
//   );
//   return data;
// };

const getData = async () => {
  const { data } = await axios.get(
    "https://api.apilayer.com/exchangerates_data/latest?base=AZN",
    { headers: { apikey: key } }
  );
  return data;
};

export { getData };
