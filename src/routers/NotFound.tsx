import { VStack, Text, Heading , Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
    <VStack bg="gray.100">
        <Heading>Page not found.</Heading>
        <Text>It seems that you're lost.</Text>
        <Link to="/">
            <Button variant={"link"}>
                Go home &rarr; 
            </Button>
        </Link>
    </VStack>
    )
}