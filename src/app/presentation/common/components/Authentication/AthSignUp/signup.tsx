import React from "react";
import { PageRoutes } from "@/app/main/constants/page-routes";
import { SignUpProps } from "@/app/presentation/pages/SignUp/SignUp.types";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const AuthSignUp = ({ addAccount }: SignUpProps) => {
  const navigate = useNavigate();

  const handleAuthentication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    try {
      const account = await addAccount.add({
        username: userData.name,
        password: userData.password,
      });
      if (
        Boolean(account) &&
        Boolean(account.token) &&
        Boolean(account.user.username)
      ) {
        navigate(PageRoutes.SignIn);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigateTo = () => {
    navigate("/signin");
  };
  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading color={"white"} fontSize={"2xl"}>
              Cria a sua conta da BuildBox.{" "}
            </Heading>
            <form onSubmit={handleAuthentication}>
              <FormControl id="email">
                <FormLabel color={"white"}>Nome</FormLabel>
                <Input type="text" name="username" />
              </FormControl>
              <FormControl id="password" marginTop="10px">
                <FormLabel color={"white"}>Palavra Passe</FormLabel>
                <Input type="password" name="password" />
              </FormControl>

              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"blue.500"} onClick={navigateTo}>
                    Fazer Login
                  </Link>
                </Stack>
                <Button type="submit" colorScheme={"green"} variant={"solid"}>
                  Criar uma conta
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            width="100%"
            alt={"Login Image"}
            src={"https://avatars.githubusercontent.com/u/41802223?s=200&v=80"}
          />
        </Flex>
      </Stack>
    </>
  );
};
export default AuthSignUp;
