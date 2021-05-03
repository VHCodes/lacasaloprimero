import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { ModalContent } from "@chakra-ui/modal";
import { ModalOverlay } from "@chakra-ui/modal";
import { Modal } from "@chakra-ui/modal";

function Photo(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as={Link} onClick={onOpen}>
        <Box
          w={"full"}
          h={"full"}
          overflow={"hidden"}
          mb="10px"
          p={1}
          boxShadow={"lg"}
          rounded={"md"}
          border="1px"
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Image src={props.photo} w={"full"} h={"full"} />
        </Box>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent>
          <Box p={2}>
            <Image src={props.photo} w={"full"} h={"full"} />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Photo;
