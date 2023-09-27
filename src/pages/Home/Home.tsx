import { Center, Text, VStack } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import CardsContainer from "./Sections/CardsContainer/CardsContainer";
import SocialMediaLinks from "../../components/SocialMediaLinks/SocialMediaLinks";

export default function Home() {
  return (
    <Center w="100%">
      <VStack maxW="1400px" w="100%">
        <Header />
        <CardsContainer />
        <VStack pt={{ base: 4, md: 8 }}>
          <SocialMediaLinks />
          <Text variant='footer'>Example@email.com</Text>
          <Text variant='footer'>Copyright &copy; 2020 Name. All rights reserved.</Text>
        </VStack>
      </VStack>
    </Center>
  );
}
