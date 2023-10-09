import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import themeUtils from '../../utils/theme.utils';

const { width, height } = Dimensions.get("window");

const Splash = (props : any) => {
    useEffect(() => {
      setTimeout(() => {
        // props.navigation.replace("Home")
      }, 1000);
    }, [])
    
    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <View
                style={styles.logoContainer}
            >
                <Image
                    style={styles.imageStyle}
                    source={require("../../assets/images/Subtract.png")}
                />
                <Image
                    style={styles.imageStyle}
                    source={require("../../assets/images/Chirpz.png")}
                />
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeUtils.naviblue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: width * 0.6,
        height: height * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    },
    imageStyle: {
        width: "60%",
        height: "60%",
        resizeMode: 'contain',
    },
})