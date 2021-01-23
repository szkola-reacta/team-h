import { Text, Container } from "@chakra-ui/react";

function IngredientsList(props){
    return(
        <Container centerContent={true}>
            <h3>Lista składników:</h3>
            <ul>
                {props.ingredients.map((ingredient) =>
                    <li key={ingredient.name+ingredient.quantity}>
                        <Text color="gray.600" >
                            {ingredient.name} ({ingredient.quantity})
                        </Text>
                    </li>
                )
                }
            </ul>    
        </Container>
    )
}

export default IngredientsList;

