export const config = {
  runtime: "edge", // this is a pre-requisite
};
const API_URL = process.env["VITE_API_URL"];
export default () => {
  fetch(API_URL).then((response) => console.log(response));
};
