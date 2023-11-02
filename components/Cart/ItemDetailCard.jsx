import { HStack,VStack,Text } from "native-base"
import Bottle from '../../images/Bottle'

const ItemDetailCard = ({pname,pprice,pqty}) =>{
return    <HStack marginTop={15}  justifyContent={'space-evenly'}  alignItems={'center'} >
            <Bottle/>
            <VStack  mr="15">
            <Text style={{fontSize:22}}>  {pname}  </Text>
            <Text style={{ color:'#259E73'}}>₹ {pprice} Per piece </Text>
            <Text style={{ color:'#259E73'}}>{pqty} Point</Text>
            </VStack>
            </HStack>
}

export default ItemDetailCard