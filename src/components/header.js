import { Image, Flex, Link, ListItem, List } from "@chakra-ui/react";
import Logo from "../images/LogoBitenc.svg";
import "../styles/App.css";

export default function Header() {
  return (
    <Flex bg="#141414" w="100%" h="60px" color="white">
      <Flex
        alignItems="center"
        w="100%"
        justifyContent="space-between"
        pr="60px"
        pl="60px"
      >
        <Link href="https://emanuelbitenc.github.io/">
          <Image src={Logo} alt="Logo" w="120px" />
        </Link>
        <List display="flex" as="nav" className="font">
          <Link href="https://www.linkedin.com/in/emanuelbitencourt/">
            <ListItem className="nav" fontSize="lg">
              linkedin
            </ListItem>
          </Link>
          <Link href="https://github.com/EmanuelBitenc">
            <ListItem className="nav" fontSize="lg">
              github
            </ListItem>
          </Link>
        </List>
      </Flex>
    </Flex>
  );
}
