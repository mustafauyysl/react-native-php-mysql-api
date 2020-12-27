import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import {connect} from 'react-redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Title from '../components/Title';
import Button from '../components/Button';
import { FlatList } from 'react-native-gesture-handler';
import CommentContainer from '../components/CommentContainer';

const ProductDetailScreen = props => {
    const link = 'host';
    const imgUrl = props.contentDetail.content_img;
    const url = link + imgUrl

    const comments = () => {
        return (
            <FlatList 
                data={props.comments}
                renderItem={(item) => <CommentContainer 
                    text={item.item.comment_text}
                    author={item.item.comment_author}
                    rating={item.item.comment_rating}
                    />}
            />
        )
    }

    const parallax = () => {
        return (
            <View style={styles.parallax}>
                <Text style={styles.parallaxTitle}>{props.contentDetail.content_title}</Text>
            </View>
        )
    }

    const container = () => {
        return (
            <View style={styles.container}>
           <Title>Comments</Title>
           {comments()}
         </View>
        )
    }

    return (
        <ParallaxScrollView
            parallaxHeaderHeight={300}
            renderBackground={() =>
                <Image
                  resizeMode="cover" 
                  source={{ uri: url, height: 300 }}/>}
            renderForeground={() => parallax()}

        >
        <View style={styles.buttonContainer}>
            <Button 
                onPress={() => Linking.openURL(props.contentDetail.content_map) }
                icon='map'
                title='View on Map'/>
        </View>
        {container()}

      </ParallaxScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        height: '100%'
    },
    parallax: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    parallaxTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonContainer: {
        margin: 20,
        width: '90%',
    },
    detail: {
        marginHorizontal: 20,
        marginVertical: 15
    }
})

function mapStateToProps(state) {
    return {
        contentDetail: state.selectContentReducer,
        comments: state.commentListReducer
    }
}
export default connect(mapStateToProps)(ProductDetailScreen);