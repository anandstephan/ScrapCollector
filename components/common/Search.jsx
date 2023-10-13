import {Icon,Input} from 'native-base'
import { AntDesign,Feather } from '@expo/vector-icons';

const Search = () =>{
return  <Input 
        mx={3}
        p={3}
        borderRadius={12}
        placeholder="Search"
        fontSize={14}
        InputLeftElement={<Icon as={<AntDesign name="search1"/>} size={25} ml="5"/>}
        InputRightElement={<Icon as={<Feather name="mic" />} size={25} mr="5"/>}
        bgColor={'#FFFFFF'}
        mb={5}
        />

}

export default Search