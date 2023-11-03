import { Modal,FormControl,Input,Text, Heading, Center } from "native-base";
import { useEffect, useState } from "react";
const Logout = () =>{
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        setShowModal(true)
    },[])


return   <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
<Modal.Content maxWidth="400px">
  <Modal.Header><Heading textAlign={'center'}>LoG Out From ?</Heading></Modal.Header>
  <Modal.Body>
    <Center>
    <Text>Current Device</Text> 
    </Center>
  </Modal.Body>
  <Modal.Body>
    <Center>
    <Text>All Device</Text> 
    </Center>
  </Modal.Body>
  <Modal.Body>
    <Center>
    <Text>All Device</Text> 
    </Center>
  </Modal.Body>


</Modal.Content>
</Modal>
}

export default Logout