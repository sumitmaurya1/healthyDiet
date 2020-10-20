import React from 'react'
import { ImageBackground, View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';

function LoginScreen({ navigation }) {
    return (
       
            <View > 
                <ImageBackground blurRadius={0.3} style={styles.background} source={require("../assets/screen_2.jpg")}>
                    <View style={styles.container}>
                        <View style={styles.headingConatiner}>
                            <Text style={styles.heading}>Glad to see you!</Text>
                            <Text style={styles.heading2}>Please sign in to continue</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.innerContainer}>
                                <Text style={styles.inputTitle}>Email Address</Text>
                                <TextInput style={styles.input}/>
                            </View>

                            <View style={styles.innerContainer2}>
                                <Text style={styles.inputTitle}>Password</Text>
                                <TextInput style={styles.input}/>
                            </View>
                        </View>

                        <Text style={{top: 105,left: 20, fontWeight: 'bold', color: colors.gray}}>Forgot Password</Text>
                        <View style={{top: 90 , left: 20, }}>
                            <View style={styles.bttn}> 
                                <Text style={styles.bttnTitle}>Log in</Text>
                            </View>
                        </View>
                        <Text style={styles.register}>
                            <Text>Need an account?</Text>
                            <Pressable onPress={()=> navigation.navigate('CreateAccount')}>
                                <Text style={{color: colors.orange}}>Register</Text>
                            </Pressable>
                        </Text>
                        <Text style={{alignSelf: 'center',top: 135}}>
                        Or use your social accounts</Text>
                        <Pressable>
                            <View style={{flexDirection: 'row',top: 135,padding: 5,alignSelf: 'center'}}>
                                <Entypo style={{marginHorizontal: 15}} name="facebook-with-circle" size={25} color="black" backgroundColor="white" />
                                <Entypo name="twitter-with-circle" size={25} color="black" />
                            </View>
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
    );
};

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    bttn: {
        backgroundColor: colors.green,
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
    input: {
        left: 20,
        color: colors.gray
    },
    inputContainer: {
        justifyContent: 'center',
        top: 100,
        left: 20,
    },
    innerContainer: {
        height: 60,
        width: '90%',
        backgroundColor: colors.white,
        borderRadius: 15,
        padding: 5,
    },
    innerContainer2: {
        height: 60,
        width: '90%',
        backgroundColor: colors.white,
        borderRadius: 15,
        padding: 5,
        marginTop: 15
    },
    inputTitle: {
        fontWeight: 'bold',
        color: colors.lightBlack,
        left: 20
    },
    headingConatiner: {
        top: 60
    },
    heading: {
        color: colors.green,
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1,
        left: 20,
        top: 20
    },
    heading2: {
        left: 20,
        top: 20,
        color: colors.gray,
        fontWeight: 'bold'
    },
    register: {
        top: 130,
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        letterSpacing: 1
    }
})
export default LoginScreen;
