import { Card, Heading, HStack,Image, VStack,Text, Pressable } from "native-base"

const UserDetailCard = () =>{

return <Card>
        <HStack justifyContent={'space-between'} alignItems="center" px={5}>
            <Image source={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} alt="Userpic" width={100} height={100} borderRadius={100}/>
            <VStack mr="10" >
                <Heading>John</Heading>
                <Text>john238@gmail.com</Text>
                <Pressable>
                    <Text>View Activity</Text>
                </Pressable>
            </VStack>
        </HStack>
</Card>
}

export default UserDetailCard