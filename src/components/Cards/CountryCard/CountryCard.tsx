import { AspectRatio, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function CountryCard({
  name,
  region,
  flag,
}: {
  name: string;
  region: string;
  flag: string;
}) {
  return (
    <HStack border="2px solid black" boxShadow="8px 8px 0px #0000001A" p={4}>
      <AspectRatio ratio={2 / 1.5} w="3rem">
        <Image src={flag} w="100%" h="100%" alt="country" />
      </AspectRatio>
      <VStack alignItems="flex-start" gap={0}>
        <Text variant="regular" fontWeight={600}>
          {name}
        </Text>
        <Text variant="footer" color="gray">
          {region}
        </Text>
      </VStack>
    </HStack>
  );
}
