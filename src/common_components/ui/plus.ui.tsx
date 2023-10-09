import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/imports.utils';
import { height, width } from '../../utils/functions.utils';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

interface PlusComponentProps {
    icon?: any;
    height?: any;
    width?: any;
    backgroundColor?: any;
    onPress?: any;
    text?: string;
    navButtonBg?: string;
}

const Plus = (props: PlusComponentProps) => {

    return (
        <LinearGradient
            colors={[Colors.Plusgradient1, Colors.Plusgradient2]} // Specify your two colors here
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0.8, y: 1 }}
            style={[
                styles.circle
            ]}
        >
            <TouchableOpacity
                style={[styles.iconWrapper]}
                onPress={props.onPress}
            >
                <Image
                    style={styles.plusImgWrapper}
                    source={require("../../assets/images/plus.png")}
                />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Plus;

const styles = StyleSheet.create({
    plusImgWrapper: {
        width: '40%',
        height: '40%',
        resizeMode: 'stretch',
        tintColor: Colors.naviblue,
    },
    plus: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColorL: 'purple',
        borderRadius: (width * 0.2) / 2,
        borderWidth: 10,
    },
    iconWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: height * 0.08,
        right: width * 0.08,
        height: 70,
        backgroundColor: Colors.naviblue,
        borderRadius: 100,
        elevation: 6,
        zIndex: 1
    },
});
