import { Box, VStack,Text } from "native-base"
import { AntDesign } from '@expo/vector-icons';
const FeatureCard = ({text}) =>{
return <Box>
    <VStack mx={10} justifyContent="space-between" alignItems={'center'}>
    <AntDesign name="hearto" size={24} color="black" />
        <Text>{text}</Text>
    </VStack>
</Box>
}

export default FeatureCard