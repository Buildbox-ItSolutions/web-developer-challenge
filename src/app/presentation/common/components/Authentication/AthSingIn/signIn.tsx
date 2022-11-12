import React from "react";
import { PageRoutes } from "@/app/main/constants/page-routes";
import { REACT_CHALLENGE_ACCOUNT } from "@/app/presentation/modules/contexts/auth-context";
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
import { SignInProps } from "../../../../pages/SigIn/SignIn.types";

const AuthSigIn = ({ authentication, storage }: SignInProps) => {
  const navigate = useNavigate();
  const handleAuthentication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    try {
      const account = await authentication.auth({
        username: userData.name,
        password: userData.password,
      });
      if (
        Boolean(account) &&
        Boolean(account.token) &&
        Boolean(account.user.username)
      ) {
        storage.set(REACT_CHALLENGE_ACCOUNT, account);
        navigate(`${PageRoutes.CreatePosts}/${account.user.id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const navigateTo = () => {
    navigate(PageRoutes.SignUp);
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading color={"white"} fontSize={"2xl"}>
            Entrar na Sua Conta Da BuildBox
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
                  {" "}
                  Criar uma conta
                </Link>
              </Stack>
              <Button type="submit" colorScheme={"green"} variant={"solid"}>
                Entrar
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
  );
};
export default AuthSigIn;
