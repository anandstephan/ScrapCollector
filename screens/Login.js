import { Box, Heading } from "native-base"
import { Platform, StyleSheet } from "react-native"
const Login = ()=>{
return <Box style={styles.container}>
        <Heading>Login</Heading>
</Box>
}

export default Login

const styles = StyleSheet.create({
    container:{
        marginTop:Platform.OS === 'android' ? 50:0
    }
})