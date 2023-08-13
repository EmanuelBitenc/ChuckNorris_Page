import { Box, Flex, Image, Text, Button, Select, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApiData from "../components/apiData";

import "../styles/App.css";
import chuck from "../images/chucknorris.png";

export default function Page() {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(
          "https://api.chucknorris.io/jokes/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    getCategories();
  }, []);

  async function getJokeByCategory() {
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      );
      const data = await response.json();
      const jokeValue = data.value;
      const jokeUrl = data.url;

      setValue(jokeValue);
      setUrl(jokeUrl);
    } catch (error) {
      console.error("Error fetching joke by category:", error);
    }
  }
  return (
    <Box
      bg="#f1f1f1"
      color="#212121"
      h="100vh"
      w="100%"
      justifyContent="center"
    >
      <Box justifyContent="center" mx="auto" px="50px" w="80%">
        <Box>
          <Text
            as="h1"
            w="620px"
            fontFamily="Concert One, sans-serif"
            fontSize={"7xl"}
            mx="auto"
            pt="-10px"
          >
            Chuck Norris Jokes
          </Text>
          <Image src={chuck} w="360px" mx="auto" my="10px" />
        </Box>
        <Flex justifyContent="center" my="20px" gap="20px">
          <Select
            cursor="pointer"
            borderColor="gray.300"
            w="180px"
            placeholder="Categories"
            bg="white"
            color="black"
            onChange={(event) => setSelectedCategory(event.target.value)}
            value={selectedCategory}
          >
            {/* Mapeia as categorias e gera uma opção para cada uma */}
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </Select>
          <Button
            border="1px"
            borderColor="gray.300"
            color="#131313"
            background="#F7FAFC"
            variant="solid"
            onClick={getJokeByCategory}
            _hover={{ backgroundColor: "#bbb" }}
          >
            Jokes!
          </Button>
        </Flex>
        <Box width="80%" mx="auto">
          <Text className="joke"> {value}</Text>
          <Text className="category">
            {("Selected Category:", selectedCategory)}
          </Text>
          <Link href={url} className="url">
            {("See more:", url)}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
