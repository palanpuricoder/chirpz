import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/imports.utils';
import Icon from 'react-native-vector-icons/FontAwesome6'
import { bold } from '../../utils/constants.utils';

interface HeaderComponentProps {
    icon?: string;
    height?: any;
    width?: any;
    backgroundColor?: any;
    onPress?: any;
    headerTitle?: string;
    navButtonBg?: string;
    onNav?: any;
    isButton?: any;
    onPostClick?: any;
}

const height = Dimensions.get('window').height
const width1 = Dimensions.get('window').width

const Header = (props: HeaderComponentProps) => {
    return (
        <View
            style={[styles.header]}
        >
            <View
                style={[styles.section]}
            >
                <View
                    style={styles.iconWrapper}
                >
                    {props.icon ?
                        <TouchableOpacity
                            onPress={props.onNav}
                        >
                            <Image
                                style={{
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
            </View>
            <View
             style={[
                styles.section,
                {
                    alignItems: 'center',
                }
            ]}
            >
                {props.headerTitle ?
                    <Text
                        style={styles.headerTitle}
                    >
                        {props.headerTitle}
                    </Text>
                    :
                    null
                }
            </View>
            <View
                style={[
                    styles.section,
                    {
                        alignItems: 'center',
                    }
                ]}
                
            >
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
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: height*0.08,
        flexDirection: 'row',
        backgroundColor: Colors.naviblue,
        borderBottomWidth: 1,
        borderColor: Colors.border
    },
    section:{
        flex: 1 / 3,
        justifyContent: 'center',
    },
    headerTitle:{
        fontFamily: bold,
        fontSize: 20,
        color: "white",
    },
    postView: {
        backgroundColor: Colors.buttonColor,
        width: '60%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 8
    },
    postButton: {
        fontFamily: bold,
        fontSize: 15,
        color: Colors.light
    },
    imageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',
        alignItems: 'center',
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
