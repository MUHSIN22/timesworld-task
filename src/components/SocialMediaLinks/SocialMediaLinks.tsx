import { AspectRatio, Center, HStack, Icon } from "@chakra-ui/react";
import { TbBrandFacebook, TbBrandTwitter } from "react-icons/tb";
import { SlSocialGoogle, SlSocialLinkedin } from "react-icons/sl";

const icons = [
  TbBrandFacebook,
  SlSocialGoogle,
  SlSocialLinkedin,
  TbBrandTwitter,
];

export default function SocialMediaLinks() {
  return (
    <HStack>
      {icons?.map((icon, index) => (
        <AspectRatio
          ratio={1 / 1}
          w={{ base: "2rem", md: "3rem" }}
          border="2px solid black"
          borderRadius="50%"
          key={index}
        >
          <Center
            bg="transparent"
            borderRadius="50%"
            cursor='pointer'
          >
            <Icon as={icon}  boxSize={{ base: 3, md: 6 }} />
          </Center>
        </AspectRatio>
      ))}
    </HStack>
  );
}
