import React, { useState, useEffect } from 'react';
import { View , Text} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Colors from '../constants/colors';
import {connect} from 'react-redux';
import * as contentActions from '../redux/actions/contentActions';
import * as commentActions from '../redux/actions/commentActions';
import * as topsActions from '../redux/actions/topsActions';
import { bindActionCreators } from 'redux';

const Slider = props => {
    const imagesList = []
    const [images, setImages] = useState(imagesList)

    useEffect(() => {
        props.actions.getTops(props.selectedPlace.id)
        renderImage()
    })

    const renderImage = () => {
        props.tops.map(x => imagesList.push(x.content_topImage)) 
    }

    const clickSlider = (x) => {
        let id = props.tops[x].content_id
        props.actions.getComment(id)
        props.actions.selectContent(id)
        props.navigation.navigate('ProductDetail')
    }
    
    return (
        <View>
            <SliderBox   
                images={images}   
                sliderBoxHeight={300}   
                dotColor={Colors.primaryColor}   
                inactiveDotColor="#90A4AE"   
                paginationBoxVerticalPadding={20}   
                autoplay={true}
                onCurrentImagePressed={
                    x => clickSlider(x)
                }
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                    }}
                    dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 20,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }} 
                    ImageComponentStyle={{borderRadius: 15, width: '90%', margin: 20}}
                circleLoop />
        </View>
    )
}
function  mapStateToProps(state) {
    return {
        tops: state.topsListReducer,
        selectedPlace: state.selectPlaceReducer
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        actions: {
            selectContent: bindActionCreators(contentActions.selectContent, dispatch),
            getComment: bindActionCreators(commentActions.getComment, dispatch),
            getTops: bindActionCreators(topsActions.getTops, dispatch),
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider);