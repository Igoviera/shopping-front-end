import { Center, Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <Center mt={10}>
      <Spinner color="blue.500" size="xl" thickness="3px" />
    </Center>
  )
}
