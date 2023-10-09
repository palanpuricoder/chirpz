import React, { useEffect, useRef } from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Linking } from 'react-native';
import { Colors } from '../../utils/imports.utils';
import Header from '../../common_components/ui/header.ui';
import Plus from '../../common_components/ui/plus.ui';
import Models from '../../models';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/actions/post.action';
import List from '../../common_components/ui/list.ui';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props: any) => {

    const dispatch = useDispatch()
    const state = useSelector((state: any) => state?.postReducer?.posts);

    const getPostData = () => {
        Models.posts.getPosts()
            .then((res: any) => {
                dispatch(getPost(res?.body))
            })
            .catch(err => {
                console.log("error =====>>>>>>>>", err);
            })
    }

    useEffect(() => {
        getPostData()
    }, [])

    return (
        <View style={styles.container}>
            <Header text='Chirpz' isButton={false}/>
            <Plus onPress={() => { props?.navigation.navigate("Create") }} />
            {state.length > 0 ?
                <FlatList
                    data={state}
                    keyExtractor={(item) => item?.id.toString()}
                    renderItem={({ item, index }: any) => (
                        <List
                            data={item}
                            {...props}
                        />
                    )}
                />
                : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.naviblue,
        flex: 1
    },
    wrapper: { flex: 1, backgroundColor: 'orange' },
});

export default HomeScreen;
