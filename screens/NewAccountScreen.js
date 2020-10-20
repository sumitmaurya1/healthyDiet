import React from 'react'
import { View , Text, ImageBackground, StyleSheet, TextInput} from 'react-native';
import colors from '../assets/colors';

function NewAccountScreen() {
    return (
        <View>
            <ImageBackground style={styles.bakground} source={require('../assets/screen_4.png')}>
                <View style={{flex: 1, alignItems: "center", top: 50}}>
                    <Text style={styles.textHeading}>Create New Account</Text>
                    <Text style={styles.textSubHeading}>Join the community of over one million people</Text>
                
                    


                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bakground:{
        height: '100%',
        width: '100%'
    },
    textHeading: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold'
    },
    textSubHeading: {
        color: colors.white,
        fontSize: 17,
        marginTop: 10
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
    
    
})
export default NewAccountScreen;
