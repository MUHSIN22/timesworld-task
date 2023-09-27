import {
  Box,
  Center,
  Flex,
  Heading,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { setFilterKey } from "../../features/countries/countriesSlice";
import { useState } from "react";

const navItems: string[] = ["All", "Asia", "Europe"];

export default function Header() {
  const dispatch = useAppDispatch();

  const [isToggled, setIsToggled] = useState<boolean>(false);

  const { filterKey } = useAppSelector((state) => state?.countriesData);

  const handleFiltering = (key: string) => {
    dispatch(setFilterKey(key));
    setIsToggled(false);
  };

  return (
    <Center
      p={4}
      w="100%"
      pos="sticky"
      top={0}
      left={0}
      bg="white"
      zIndex="sticky"
      h="4rem"
    >
      <Flex
        maxW="1400px"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading>Countries</Heading>
        <Show below="sm">
          <VStack
            gap="4px"
            h="max-content"
            onClick={() => setIsToggled((prev) => !prev)}
          >
            <Box w="2rem" h="4px" bg="black"></Box>
            <Box w="2rem" h="4px" bg="black"></Box>
            <Box w="2rem" h="4px" bg="black"></Box>
          </VStack>
        </Show>
        <Flex
          gap={4}
          flexDir={{ base: "column", sm: "row" }}
          bg="white"
          pos={{ base: "fixed", sm: "initial" }}
          right={0}
          top="4rem"
          p={4}
          boxShadow={{ base: "0px 0px 10px rgba(0,0,0,0.1)", sm: "none" }}
          transform={{
            base: isToggled ? "translateX(0)" : "translateX(100%)",
            sm: "none",
          }}
        >
          {navItems?.map((item) => (
            <Text
              key={item}
              variant="regular"
              fontWeight={500}
              bg="transparent"
              borderBottom={filterKey === item ? "2px solid black" : "none"}
              p={0}
              h="max-content"
              cursor="pointer"
              onClick={() => handleFiltering(item)}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Center>
  );
}
