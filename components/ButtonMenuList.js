import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { MenuButton } from "@chakra-ui/menu";
import { useRouter } from "next/router";
import { FaChevronDown } from "react-icons/fa";

function ButtonMenuList(props) {
  const router = useRouter();

  return (
    <MenuButton
      as={Button}
      ml={props.ml}
      mr={props.mr}
      w={props.w}
      colorScheme={router.pathname === props.to ? "blue" : null}
      variant={router.pathname === props.to ? "solid" : "ghost"}
      rightIcon={<Icon as={FaChevronDown} color="navItem.500" />}
    >
      {props.children}
    </MenuButton>
  );
}

export default ButtonMenuList;
