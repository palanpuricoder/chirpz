import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/imports.utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { width } from '../../utils/functions.utils';
import Tag from './tag.ui';

interface ListComponentProps {
    backgroundColor?: any;
    height?: number;
    width?: number;
    style?: any;
    onPress?: any;
    data?: any;
}

const List = (props: ListComponentProps) => {
    console.log("iyem ----->>>>>>>>", props.data);
    const { data } = props;

    return (
        <View style={styles.listContainer}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontFamily: "inter-Bold",
                        color: "white",
                        fontWeight: '700',
                        fontSize: 15
                    }}
                >
                    {data?.userName}
                </Text>
                {data?.isVerified ?
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: Colors.smallCircle,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            borderRadius: 10,
                            marginLeft: 10

                        }}
                    >
                        <Image
                            style={{
                                width: '50%',
                                height: '50%',
                                resizeMode: 'stretch',
                                tintColor: Colors.naviblue,
                            }}
                            source={require("../../assets/images/check.png")}
                        />
                    </View>
                    : null}
            </View>
            <View
                style={{
                    marginTop:5
                }}
            >
                <Text
                    style={{
                        fontFamily: "inter-Reguler",
                        color: Colors.tagTextBg,
                        // fontWeight: '700',
                        fontSize:15,
                    }}
                >
                    {data?.caption}
                </Text>
            </View>
            <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        margin:8
                    }}
                >
                           <Tag tagList={data?.tags}/>
                </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        padding: 10,
        borderBottomWidth:0.5,
        borderColor:Colors.border
    }
});
