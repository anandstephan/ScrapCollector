import { Button } from "native-base"
import colors from "../../constants/colors"
const CartButton = ({txt,onPressHandler}) =>{
return <Button borderRadius="xl" backgroundColor={colors.btnColor} marginX={18} p={3} marginY={14} onPress={onPressHandler}>
{txt}
</Button>
}

export default CartButton