import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/imports.utils';
import { height, width } from '../../utils/functions.utils';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';

interface TagComponentProps {
    icon?: any;
    height?: any;
    width?: any;
    backgroundColor?: any;
    onPress?: any;
    text?: string;
    navButtonBg?: string;
    tagList ?: any
}

const Tag = (props: TagComponentProps) => {
    return (
        props.tagList.map((item: string) => {
            return (
                <View
                    style={styles.taglistView}
                >
                    <Text
                        style={styles.tagText}
                    >
                        #{item}
                    </Text>
                </View>
            );
        })
    )
}

export default Tag;

const styles = StyleSheet.create({
    taglistView: {
        paddingVertical:5,
        backgroundColor: Colors.tagTextBg,
        margin: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    tagText:{
        color : Colors.light,
        fontFamily : 'inter-Reguler',
        fontSize:12
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
