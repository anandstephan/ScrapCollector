import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Heading, VStack,Button } from 'native-base'
import colors from "../constants/colors"
import OnBoardingImg from '../images/OnBoardingImg'


const OnBoarding = () => {
  return  <Box backgroundColor={colors.primary}>
    
    <Heading size={'xl'} marginTop={20} marginBottom={-2} color={colors.secondary}>WELCOME TO</Heading>
     <Heading size={'xl'} color={colors.secondary}>Raddiwaala</Heading>   
    <VStack>
     <View style={{justifyContent:'center', alignItems:'center', marginTop:'5%',}}>
      <OnBoardingImg/> 
    </View>
    <Box backgroundColor={colors.primary} height={'100%'} borderTopLeftRadius={100} borderTopRightRadius={100}>
      <VStack justifyContent={'center'} alignItems={'center'}>
      <Text style={{textColor:"#fff", textAlign:'center', marginTop:30}}>
        Raddi Waala is a recycling app that
        helps you recycle more effectively. With Raddi Waala,
        you can, and track your recycling progress.
        </Text>
      </VStack>
      <Button borderRadius="xl"  backgroundColor={colors.btnColor} marginX={30} p={3} marginY={50}>
        GET STARTED
        </Button>
    </Box>
    </VStack>
    </Box>
  
}

export default OnBoarding

const styles = StyleSheet.create({

})