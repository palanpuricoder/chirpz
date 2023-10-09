import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/imports.utils';

interface InputComponentProps {
    backgroundColor?: any;
    height?: number;
    width?: number;
    style?: any;
    style2?: any;
    onPress?: any;
    data?: any;
    text?: string;
    placeHolder?: string;
    onChangeText?: any;
    isAdd?: boolean;
    onAddClick ?: any;
    input2 ?:string
}

const Input = (props: InputComponentProps) => {
    return (
        <View style={styles.listContainer}>
            <View
                style={{
                    padding: 10,
                }}
            >
                <Text
                    style={[styles.text]}
                >
                    {props.text}
                </Text>
                <View
                    style={[props.style2, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}
                >
                    <TextInput
                        value={props.input2}
                        placeholder={props.placeHolder}
                        onChangeText={props.onChangeText}
                        style={props.style}
                        // style={{
                        //     color:'white'
                        // }}
                        placeholderTextColor={Colors.border}
                    />
                    {props.isAdd ?
                        <TouchableOpacity
                            onPress={props.onAddClick}
                        >
                            <Text
                                style={[styles.text2]}
                            >
                                {"Add"}
                            </Text>
                        </TouchableOpacity>
                        : null}
                </View>
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",

    },
    text: {
        fontFamily: "inter-Bold",
        color: "white",
        fontSize: 18,
        fontWeight: '700'
    },
    text2: {
        fontFamily: "inter-Bold",
        color: "white",
        fontSize: 18,
        fontWeight: '400'
    },

});
