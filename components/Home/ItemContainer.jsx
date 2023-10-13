import { Box, VStack,Image,Text } from "native-base"

const ItemContainer = () =>{
return <Box p={2} mx={2} backgroundColor={'#B8D3C7'} borderRadius={10} mt={2}>
        <VStack justifyContent={'space-between'} alignItems={'center'}>
        <Image 
        source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
             }}
     alt="Alternate Text"
     size="sm" />
     <Text>Plastic</Text>
</VStack>
</Box>
}

export default ItemContainer