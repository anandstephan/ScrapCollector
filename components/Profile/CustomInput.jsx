import { Box, Input } from "native-base"
import colors from "../../constants/colors"

const CustomInput = ({placeholderTxt}) =>{
return <Box mb={2} mt={2}>
    <Input placeholder={placeholderTxt} backgroundColor={colors.secondary} px={20} mx={10} py={3} borderRadius={20} fontSize={15}/>
</Box>
}

export default CustomInput