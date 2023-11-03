import { Box, HStack, Heading } from "native-base"
import { AntDesign } from '@expo/vector-icons';
import colors from "../../constants/colors";

const Card = ({text}) =>{
return <Box mb={5}>
    <HStack justifyContent={'space-between'} alignItems={'center'} mx={10}>
        <Heading size={'md'}>{text}</Heading>
        <AntDesign name="caretright" size={24} color={colors.primary} />
    </HStack>
</Box>
}

export default Card