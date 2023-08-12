import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ApiData() {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        const value = data.value;
        const categories = data.categories;
        const url = data.url;

        setValue(value);
        setCategories(categories);
        setUrl(url);

        console.log(categories);
      } catch (error) {
        console.error("Deu erroooo:", error);
      }
    }

    fetchData(); // Chama a função fetchData ao montar o componente
  }, []);

  return (
    <Box color="white">
      <Text>Value: {value}</Text>
      <Text>Categories: {categories}</Text>
      <Text>URL: {url}</Text>
    </Box>
  );
}
