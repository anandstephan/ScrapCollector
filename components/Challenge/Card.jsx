import { HStack, VStack,Box,Text } from "native-base"
import colors from "../../constants/colors"
import { AntDesign } from '@expo/vector-icons';

const Card = ({primaryTxt,secondaryTxt}) =>{
return <Box bgColor={colors.btnColor} p={2} borderRadius={10} m={5} >
    <HStack justifyContent={'space-between'} alignItems={'center'}>
        <VStack>
            <Text color={colors.secondary}>{primaryTxt}</Text>
            <Text color={colors.secondary}>{secondaryTxt}</Text>
        </VStack>
        <AntDesign name="caretright" size={20} color={colors.secondary} />
    </HStack>
</Box>
}

export default Card