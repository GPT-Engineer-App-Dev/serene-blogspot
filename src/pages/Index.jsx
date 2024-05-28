import { Container, Text, VStack, Heading, Box, Image, Link, HStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts, experiences, and stories.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <HStack spacing={4}>
          <Link href="/about" color="teal.500">About Me</Link>
          <Link href="/posts" color="teal.500">Blog Posts</Link>
          <Link href="/contact" color="teal.500">Contact</Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;