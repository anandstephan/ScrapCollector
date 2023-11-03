import { Box ,Text} from "native-base"
import colors from "../../constants/colors"

const Badge = ({text}) =>{
return <Box bgColor={colors.btnColor} p="2" borderRadius={50} >
        <Text color={colors.secondary}>{text}</Text>
</Box>
}

export default Badge