import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { Linking } from 'react-native';
import { Colors } from '../../utils/imports.utils';
import Header from '../../common_components/ui/header.ui';
import Plus from '../../common_components/ui/plus.ui';
import Models from '../../models';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/actions/post.action';
import List from '../../common_components/ui/list.ui';
import Input from '../../common_components/ui/input.ui';
import Tag from '../../common_components/ui/tag.ui';

const CreatePostScreen = (props: any) => {

    const dispatch = useDispatch()
    const [postTitle, setpostTitle] = useState<string>('');
    const [tag, setTag] = useState<string>('');
    const [tagList, setTagList] = useState<[]>([]);

    const getPostData = () => {
        Models.posts.getPosts()
            .then((res: any) => {
                dispatch(getPost(res?.body));
                props.navigation.goBack();
            })
            .catch(err => {
                console.log("error =====>>>>>>>>", err);
            })
    }

    const createPost = () => {
        const body = {
            "userName": "Terece William",
            "caption": postTitle,
            "tags": tagList
        }
        Models.posts.createPosts(body)
            .then((res: any) => {
                console.log("res ----->>>>>>",res );
                getPostData()
                // dispatch(createPost(res?.body))
            })
            .catch(err => {
                console.log("error =====>>>>>>>>", err);
            })
    }

    console.log("title ----->>>>>>>", tagList);

    return (
        <View style={styles.container}>
            <Header onNav={() => props.navigation.goBack()} icon={"arrow-round-back"} isButton={true} onPostClick={()=>createPost()} />
            <View
                style={[
                    {
                        width: "100%",
                        marginTop: 30
                    }
                ]}
            >
                <Input
                    text='Create'
                    placeHolder='What’s on your mind?'
                    onChangeText={(text: any) => {
                        setpostTitle(text);
                    }}
                    style={{
                        color: Colors.light,
                        fontFamily: 'inter-Bold',
                    }}
                    isAdd={false}
                />
                <Input
                    text='Add Tags'
                    placeHolder='Write tags'
                    style={{

                        color: Colors.light,
                        fontFamily: 'inter-Bold',
                    }}
                    style2={{
                        borderBottomColor: Colors.border,
                        borderBottomWidth: 0.5,
                    }}
                    isAdd={true}
                    input2={tag}
                    onChangeText={(text: any) => setTag(text)}
                    onAddClick={() => {
                        let arr : [] = tagList;
                        tagList.push(tag);
                        setTagList(arr);
                        setTag('');
                    }} />
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        margin:8
                    }}
                >
                        <Tag tagList={tagList}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.naviblue,
        flex: 1
    },
    wrapper: { flex: 1, backgroundColor: 'orange' },
    taglistView: {
        backgroundColor: Colors.tagTextBg,
        margin: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});

export default CreatePostScreen;
