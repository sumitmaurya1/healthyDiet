import React from 'react'
import { ImageBackground, View, StyleSheet, Text, Pressable } from 'react-native';
import colors from '../assets/colors';
import { FontAwesome } from '@expo/vector-icons';

function CreateAccountScreen({ navigation }) {
    return (
        <View style={{paddingTop: 20}} >
            <ImageBackground blurRadius={0.4} style={styles.background} source={require('../assets/secreen_3.jpg')}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>You're all set</Text>
                        <Text style={styles.subheading}>let's create your account</Text>
                    </View>

                    <View style={{justifyContent: "center",alignItems: "center", top: 150}}>
                        <View style={styles.bttn}> 
                            <FontAwesome style={styles.logo} name="apple" size={24} color="black" />
                            <Text style={styles.bttnTitle}>Sign in with Apple</Text>
                        </View>

                        <View style={styles.bttn2}> 
                            <FontAwesome style={{left: 20, position: 'absolute'}} name="google" size={24} color="red" />
                            <Pressable onPress={()=>navigation.navigate('NewAccount')}>
                                <Text style={styles.bttnTitle}>Google</Text>
                            </Pressable>
                        </View>
                        
                        <View style={styles.bttn3}> 
                            <FontAwesome style={{left: 10, position: 'absolute'}} name="facebook" size={24} color="blue" />
                            <Text style={styles.bttnTitle}>Facebook</Text>
                        </View>

                        <Text style={styles.bttnTitle4}>Continue as Guest</Text>


                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%'
    },
    container: {
        flex: 1,
        top: 80
    },
    textContainer: {
        left: 20,
        paddingTop: 5,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.green,
        letterSpacing: 1
    },
    subheading: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.black,
        letterSpacing: 1,
        width: '70%',
        letterSpacing: 1
    },
    bttn: {
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '90%',
        top: 30
    },
    bttn2: {
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '40%',
        top: 50,
        right: 90
    },
    bttn3: {
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '40%',
        bottom: 5,
        left: 90
    },
    logo: {
        position: 'absolute',
        left: 60
    },
    bttnTitle: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 18
    },
    bttnTitle4: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 18,
        top: 20
    }
})
export default CreateAccountScreen;
