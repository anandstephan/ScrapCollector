import { Box, Heading, View,Image } from "native-base"
import { ImageBackground,StyleSheet } from "react-native"
import OnBoardingImg2 from "../images/onBoardingImg2"


const OnBoarding2 = () =>{
return  <Box mx={2} position={'absolute'}>
    <View zIndex={1}>
    <OnBoardingImg2/>
    </View>

           <Image
           source={require('../images/onBoardingImg2.png')}
           alt="Img"
           style={styles.backgroundImgStyle}
           />
           </Box>
         
}

export default OnBoarding2

const styles = StyleSheet.create({
    backgroundImgStyle:{
    //    borderWidth:2,
       zIndex:2,
       position:"absolute",
        marginTop:'100%',
        padding:10
    }
})