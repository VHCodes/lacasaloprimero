import { AlertTitle } from "@chakra-ui/alert";
import { AlertDescription } from "@chakra-ui/alert";
import { AlertIcon } from "@chakra-ui/alert";
import { Alert } from "@chakra-ui/alert";

function AlertServerError() {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Problemas con el servidor!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        En este momento tenemos problemas con el servidor. Vuelve mas tarde.
      </AlertDescription>
    </Alert>
  );
}

export default AlertServerError;
