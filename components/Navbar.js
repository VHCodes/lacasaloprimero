import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import { MenuList } from "@chakra-ui/menu";
import { Menu } from "@chakra-ui/menu";
import Link from "next/link";
import ButtonMenu from "./ButtonMenu";

import ButtonMenuList from "./ButtonMenuList";

function Navbar(props) {
  const categoriesMenu = props.categoriesMenu || [];
  return (
    <Box as="nav" bg={useColorModeValue("gray.50", "gray.900")} py=".5rem" d={{ base: "none", lg: "block" }}>
      <Flex>
        <ButtonMenu to="/" ml="16px" mr="8px" w="90px">
          Inicio
        </ButtonMenu>

        <Menu>
          <ButtonMenuList to="/modelos/[url]" ml="8px" mr="8px" w="180px">
            Modelos
          </ButtonMenuList>
          <MenuList zIndex={3}>
            {categoriesMenu.map((category) => (
              <Link href={`/modelos/${category.url}`} key={category.id} passHref>
                <MenuItem as="a">{category.name}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>

        <ButtonMenu to="/fotos-y-videos" ml="16px" mr="8px" w="180px">
          Fotos y videos
        </ButtonMenu>

        <ButtonMenu to="/sistema-de-construccion" ml="8px" mr="8px" w="255px">
          Sistema de construcción
        </ButtonMenu>

        <ButtonMenu to="/nosotros" ml="8px" mr="8px" w="150px">
          Nosotros
        </ButtonMenu>

        <ButtonMenu to="/contacto" ml="8px" mr="16px" w="150px">
          Contacto
        </ButtonMenu>
      </Flex>
    </Box>
  );
}

export default Navbar;
