import { FaAirbnb, FaMoon, FaSun} from "react-icons/fa";
import {
  Box,
  Button,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  LightMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const{ colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200"); // useColorModeValue(라이트 모드일 때, 다크모드일 때)
  const Icon = useColorModeValue(FaMoon, FaSun); // components 에 적용할 때는 첫 글자가 무조건 대문자가 와야함.
  return (
    <HStack
      justifyContent={"space-between"}
      py={5}
      px={10}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <Link to={"/"}>
          <FaAirbnb size={"48"} />
        </Link>
      </Box>
      <HStack spacing={2}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<Icon />}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode>
          <Button onClick={onSignUpOpen} colorScheme={"red"}>
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}