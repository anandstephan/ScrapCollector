import { Card, Heading, HStack,Image, VStack } from "native-base"

const UserDetailCard = () =>{

return <Card>
        <HStack>
            <Image source={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} alt="Userpic" width={100} height={100}/>
            <VStack>
                <Heading>John</Heading>
            </VStack>
        </HStack>
</Card>
}

export default UserDetailCard