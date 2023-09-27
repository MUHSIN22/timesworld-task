import { Center, Grid, Image, Show } from "@chakra-ui/react";
import LoginForm from "../../components/Forms/LoginForm";
import loginIllustration from "../../assets/images/Illustration.png";

export default function Login() {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
      p={{ base: 4, md: 8 }}
      gap={4}
    >
      <Center minH="100vh" w="100%">
        <LoginForm />
      </Center>
      <Show above="md">
        <Center>
          <Image src={loginIllustration} alt="login illustration" />
        </Center>
      </Show>
    </Grid>
  );
}
