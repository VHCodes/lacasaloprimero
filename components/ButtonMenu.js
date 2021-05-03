import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { useRouter } from "next/router";

function ButtonMenu(props) {
  const router = useRouter();

  return (
    <Link href={props.to} passHref>
      <Button
        as="a"
        ml={props.ml}
        mr={props.mr}
        w={props.w}
        colorScheme={router.asPath === props.to ? "blue" : null}
        variant={router.asPath === props.to ? "solid" : "ghost"}
      >
        {props.children}
      </Button>
    </Link>
  );
}

export default ButtonMenu;
