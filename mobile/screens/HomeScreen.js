import React, {useState, useEffect} from 'react';
import Title from '../components/Title';
import Layout from '../components/Layout';
import CategoryLayout from '../components/category/CategoryLayout';
import LoadingScreen from '../screens/LoadingScreen';
import {connect} from 'react-redux';
import Slider from '../components/Slider';
import { ScrollView } from 'react-native-gesture-handler';
import * as topsActions from '../redux/actions/topsActions';
import { bindActionCreators } from 'redux';

const HomeScreen = props => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    },1000)

    useEffect(() => {
        props.actions.getTops(props.selectedPlace.id)
    })
  

    const renderContainer = () => {
        return (
            <Layout
                title={props.selectedPlace.title}
                headerColor='#FBB97C'
                onPress={() => props.navigation.goBack()}
                titleFontSize={40}
            >
                <ScrollView>
                    <Title>TOP 5</Title>
                    <Slider
                        navigation={props.navigation}
                    />
                    <Title>
                        Choose a category
                    </Title>
                    <CategoryLayout navigation={props.navigation}/>
                </ScrollView>
            </Layout>
        )
    }
    return (
        loading ? <LoadingScreen/> : renderContainer()
    )
}

function mapStateToProps(state) {
    return {
        selectedPlace: state.selectPlaceReducer
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        actions: {
            getTops: bindActionCreators(topsActions.getTops, dispatch),
        }
    }
    
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);