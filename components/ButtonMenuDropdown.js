import { Button } from "@chakra-ui/button";
import { useRouter } from "next/router";

function ButtonMenuDropdown(props) {
  const router = useRouter();

  return (
    <Button
      w={props.w}
      colorScheme={router.pathname === props.to ? "blue" : null}
      variant={router.pathname === props.to ? "solid" : "ghost"}
      onClick={props.toggleShow}
    >
      {props.children}
    </Button>
  );
}

export default ButtonMenuDropdown;
