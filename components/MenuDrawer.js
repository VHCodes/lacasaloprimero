import { Drawer, DrawerContent, DrawerOverlay, DrawerBody } from "@chakra-ui/modal";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { FaBars } from "react-icons/fa";
import { VStack } from "@chakra-ui/layout";
import ButtonMenu from "./ButtonMenu";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import ButtonMenuDropdown from "./ButtonMenuDropdown";

function MenuDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const categoriesMenu = props.categoriesMenu || [];

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <IconButton
        fontSize="20px"
        d={{ sm: "inline-flex", lg: "none" }}
        icon={<FaBars />}
        onClick={onOpen}
        variant="ghost"
      />

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <VStack>
                <ButtonMenu to="/" ml="0px" mr="0px" w="100%">
                  Inicio
                </ButtonMenu>

                <ButtonMenuDropdown to="/modelos/[url]" w="100%" toggleShow={toggleShow}>
                  Modelos
                </ButtonMenuDropdown>

                {show ? (
                  <Box w="100%" pb="5px">
                    {categoriesMenu.map((category) => (
                      <Box px="20px" key={category.id} pb="10px">
                        <ButtonMenu to={`/modelos/${category.url}`} ml="0px" mr="0px" w="100%">
                          {category.name}
                        </ButtonMenu>
                      </Box>
                    ))}
                  </Box>
                ) : null}

                <ButtonMenu to="/fotos-y-videos" ml="0px" mr="0px" w="100%">
                  Fotos y videos
                </ButtonMenu>

                <ButtonMenu to="/sistema-de-construccion" ml="0px" mr="0px" w="100%">
                  Sistema de construcción
                </ButtonMenu>

                <ButtonMenu to="/nosotros" ml="0px" mr="0px" w="100%">
                  Nosotros
                </ButtonMenu>

                <ButtonMenu to="/contacto" ml="0px" mr="0px" w="100%">
                  Contacto
                </ButtonMenu>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default MenuDrawer;
