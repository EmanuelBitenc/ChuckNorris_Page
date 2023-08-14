import { Image, Flex, Link, ListItem, List } from "@chakra-ui/react";
import Logo from "../images/LogoBitenc.svg";
import github from "../images/icon/github.svg";
import linkedin from "../images/icon/linkedin.svg";
import "../styles/App.css";

export default function Header() {
  return (
    <Flex bg="#141414" w="100%" h="60px" color="white">
      <Flex
        alignItems="center"
        w="100%"
        justifyContent="space-between"
        px="60px"
      >
        <Link href="https://emanuelbitenc.github.io/">
          <Image src={Logo} alt="Logo" w="120px" />
        </Link>
        <List display="flex" as="nav" className="lista">
          <Link href="https://www.linkedin.com/in/emanuelbitencourt/">
            <ListItem className="nav" fontSize="lg">
              linkedin
            </ListItem>
            <ListItem className="nav_icon">
              <div className="icon">
                <Image src={linkedin} alt="Logo" w="30px" />
              </div>
            </ListItem>
          </Link>
          <Link href="https://github.com/EmanuelBitenc">
            <ListItem className="nav" fontSize="lg">
              github
            </ListItem>
            <ListItem className="nav_icon">
              <div className="icon">
                <Image src={github} alt="Logo" w="30px" />
              </div>
            </ListItem>
          </Link>
        </List>
      </Flex>
    </Flex>
  );
}
