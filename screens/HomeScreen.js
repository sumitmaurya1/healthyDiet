import React from 'react';
import { View , ImageBackground, StyleSheet, Image, Text, Pressable} from 'react-native';
import colors from '../assets/colors';


const  HomeScreen = ({ navigation }) => {

    return (
        <View >
            <ImageBackground blurRadius={0.3} style={styles.background} source={require("../assets/screen_1.jpg")}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        Personalized Coaching for a healthy and active life
                    </Text>
                    <Text style={styles.subHeading}>
                        <Text>Workout plans designed to help you achieve</Text>
                        <Text style={{color: colors.white}}>Your Fitness Goal</Text>
                    </Text>
                    
                        <View style={styles.bttn}>
                            <Pressable onPress={()=> navigation.navigate('Login')}>
                                <Text  style={styles.bttnTitle}>Get Started</Text>
                            </Pressable> 
                        </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
    },
    logo: {
        height: 70,
        width: 70,
        borderRadius: 10,
        left: 20,
        top: 30
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bttn: {
        backgroundColor: colors.black,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '90%',
        top: 30
    },
    bttnTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    heading: {
        fontSize: 40,
        color: colors.black,
        width: '70%',
        right: 40,
        fontWeight: 'bold',
        flex: 0.4,
        top: 70
    },
    subHeading: {
        fontWeight: 'bold',
        fontSize: 15,
        width: '90%',
        flex: 0.2,
        top: 70,

    }
    
})

export default HomeScreen;
