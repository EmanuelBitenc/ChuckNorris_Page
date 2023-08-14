import { Box, Flex, Image, Text, Button, Select, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../styles/App.css";

import "../styles/App.css";
import chuck from "../images/chucknorris2.png";

export default function Page() {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const [showContent, setShowContent] = useState(false);

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

      setShowContent(true);
    } catch (error) {
      console.error("Error fetching joke by category:", error);
    }
  }
  return (
    <Box color="#212121" w="100%" justifyContent="center">
      <div mx="auto" px="50px" w="80%" className="container">
        <Box>
          <Text
            lineHeight="100px"
            as="h1"
            textAlign="center"
            fontFamily="Concert One, sans-serif"
            fontSize={"6xl"}
            mx="auto"
            pb="-10px"
          >
            <p className="titleChuck">Chuck Norris Jokes</p>
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="responsivePanel"
            gap="30px"
          >
            <div className="img">
              <Image
                maxW="100%"
                src={chuck}
                w="340px"
                py="0px,10px"
                border="1px"
                borderColor="#E5E5E5"
                borderRadius="30%"
              />
            </div>
            {showContent && selectedCategory && (
              <Box alignContent="center">
                <Text className="joke" maxW="490px" py="20px">
                  {value}
                </Text>
                <Text className="category">
                  {"Categoria selecionada: " +
                    selectedCategory.charAt(0).toUpperCase() +
                    selectedCategory.slice(1)}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        <Flex
          justifyContent="center"
          py="20px"
          gap="20px"
          className="responsiveSelect"
        >
          <Select
            cursor="pointer"
            borderColor="gray.300"
            w="180px"
            placeholder="Categorias"
            bg="white"
            color="black"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            _hover={{ backgroundColor: "#E5E5E5" }}
          >
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
            _hover={{ backgroundColor: "#E5E5E5" }}
            disabled={!selectedCategory}
          >
            Jokes!
          </Button>
        </Flex>
        {showContent && selectedCategory && (
          <Box width="80%" mx="auto" justifyContent="center" textAlign="center">
            <Link href={url} className="url">
              {"Mais em: " + url}
            </Link>
          </Box>
        )}
      </div>
    </Box>
  );
}
