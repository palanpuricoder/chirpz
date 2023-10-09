import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/imports.utils';
import Icon from 'react-native-vector-icons/FontAwesome6'

interface HeaderComponentProps {
    icon?: string;
    height?: any;
    width?: any;
    backgroundColor?: any;
    onPress?: any;
    text?: string;
    navButtonBg?: string;
    onNav?: any;
    isButton?: any;
    onPostClick?:any;
}

const Header = (props: HeaderComponentProps) => {
    return (
        <View
            style={[
                styles.header,
                {
                    width: props.width ? props.width : '100%',
                    height: props.height ? props.height : 80,
                },
            ]}>
            <View
                style={styles.iconWrapper}
            >
                {/* <ion-icon name="arrow-back"></ion-icon> */}
                {props.icon ?
                    <TouchableOpacity
                        onPress={props.onNav}
                    >
                        <Image
                            style={{
                                // width:'auto',
                                // height:'auto',
                                resizeMode: 'stretch',
                            }}
                            source={require("../../assets/images/back.png")}
                        />
                    </TouchableOpacity>
                    :
                    <Image
                        source={require("../../assets/images/ProfilePicture.png")}
                    />
                }
            </View>
            <View
                style={styles.textWrapper}
            >
                {props.text ?
                    <Text
                        style={{
                            fontFamily: 'inter-Bold',
                            fontSize: 30,
                            color: "white",
                        }}
                    >
                        {props.text}
                    </Text>
                    :
                    null
                }
            </View>
            {props.isButton ?
                <View
                    style={styles.postView}
                >
                    <TouchableOpacity
                        onPress={props.onPostClick}
                    >
                        <Text
                            style={styles.postButton}
                        >
                            {"Post"}
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                <View
                    style={styles.textWrapper}
                >
                </View>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColorL: Colors.naviblue,
        borderBottomWidth: 1,
        borderColor: Colors.border
    },
    postView: {
        backgroundColor: Colors.buttonColor,
        width: '20%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 8
    },
    postButton: {
        fontFamily: 'inter-Bold',
        fontWeight: '700',
        fontSize: 15,
        color: Colors.light
    },
    imageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
        height: '100%',
    },
    iconWrapper: {
        // width: '20%',
        // height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    textWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    content: {
        paddingLeft: 25,
    },
    imageContainer: {
        position: 'relative',
        height: '100%',
        width: 70,
        paddingTop: 10,
        paddingLeft: 4,
    },
    image: {
        backgroundColor: Colors.lightGray,
        height: 24,
        width: 24,
        borderRadius: 20,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
});
