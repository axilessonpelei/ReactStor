const services = async (url) => {
  const data = await fetch(url);
  return await data.json();
};
export { services };
