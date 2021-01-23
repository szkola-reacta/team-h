import { Text, Container } from "@chakra-ui/react"

export default function RecipeDescription(props) {
    return (
        <Container centerContent={true}>
            <Text color="gray.700" >
                Aby przygotować ten posiłek:
            </Text>
            <Text color="gray.500">
                {props.description}
            </Text>
        </Container>
    );
}
