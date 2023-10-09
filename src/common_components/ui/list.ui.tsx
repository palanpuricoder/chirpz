import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/imports.utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { width } from '../../utils/functions.utils';
import Tag from './tag.ui';
import { bold, regular } from '../../utils/constants.utils';

interface ListComponentProps {
    backgroundColor?: any;
    height?: number;
    width?: number;
    style?: any;
    onPress?: any;
    data?: any;
}

const List = (props: ListComponentProps) => {
    const { data } = props;
    return (
        <View style={styles.listContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={[styles.userNameText]}>
                    {data?.userName}
                </Text>
                {data?.isVerified ?
                    <View
                        style={[styles.verifyImagewrapper]}
                    >
                        <Image
                            style={styles.checkImg}
                            source={require("../../assets/images/check.png")}
                        />
                    </View>
                    : null}
            </View>
            <View style={{ marginTop: 5 }}>
                <Text
                    style={[styles.captionText]}
                >
                    {data?.caption}
                </Text>
            </View>
            <View
                style={styles.tagListWrapper}
            >
                <Tag tagList={data?.tags} />
            </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    listContainer: {
        // width: "100%",
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.border,
        // backgroundColor:'orange',
        margin:10
    },
    verifyImagewrapper: {
        width: 20,
        height: 20,
        backgroundColor: Colors.smallCircle,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginLeft: 10
    },
    captionText: {
        fontFamily: regular,
        color: Colors.tagTextBg,
        fontSize: 15,
    },
    tagListWrapper: {
        flexDirection: 'row',
        width: '100%',
        margin: 8
    },
    checkImg: {
        width: '50%',
        height: '50%',
        resizeMode: 'stretch',
        tintColor: Colors.naviblue,
    },
    userNameText: {
        fontFamily: bold,
        color: "white",
        fontWeight: '700',
        fontSize: 15
    }
});
