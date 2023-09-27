import {
  Button,
  Checkbox,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import PrimaryInput from "../InputFields/PrimaryInput/PrimaryInput";
import { ILoginForm } from "../../types/components/forms.types";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({ mode: "onChange" });

  const navigate = useNavigate();

  const handleLogin = (data: ILoginForm) => {
    console.log("Login Data:", data);
    navigate("/");
    localStorage.setItem("isLoggedIn", 'true');
  };

  return (
    <VStack w={{ base: "100%", sm: "25rem" }} gap={{ base: 4, md: 8 }}>
      <Heading alignSelf="flex-start">Sign In</Heading>

      <Text variant="description" fontWeight={600} w="100%">
        New User?{" "}
        <Link href="/" color="blue">
          Create an account
        </Link>
      </Text>

      <VStack w="100%">
        <PrimaryInput
          placeholder="Username or email"
          register={register("username", {
            required: "This field is required",
          })}
          errorMessage={errors?.username?.message}
        />

        <PrimaryInput
          placeholder="Password"
          type="password"
          register={register("password", {
            required: "This field is required",
          })}
          errorMessage={errors?.password?.message}
        />

        <Checkbox
          {...register("isSignedIn")}
          alignSelf="flex-start"
          fontSize={["0.8rem", "0.9rem", "1rem"]}
        >
          Keep me signed in
        </Checkbox>

        <Button
          w="100%"
          bg="#2e2e2e"
          color="white"
          rounded="0"
          _hover={{
            bg: "black",
          }}
          onClick={handleSubmit(handleLogin)}
        >
          Sign In
        </Button>
      </VStack>

      <Text
        variant="description"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        w="100%"
        _before={{
          content: `''`,
          flex: 1,
          display: "block",
          height: "2px",
          bg: "black",
        }}
        _after={{
          content: `''`,
          flex: 1,
          height: "2px",
          bg: "black",
          display: "block",
        }}
      >
        or Sign in With
      </Text>

      <SocialMediaLinks />
    </VStack>
  );
}
