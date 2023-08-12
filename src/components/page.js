import { Box, Image } from "@chakra-ui/react";
import ApiData from "../components/apiData";

import "../styles/App.css";
import chuck from "../images/chucknorris.png";

export default function Page() {
  return (
    <Box bg="#212121" w="100%" h="100vw" color="white">
      <Image src={chuck} />
      <ApiData />
    </Box>
  );
}
