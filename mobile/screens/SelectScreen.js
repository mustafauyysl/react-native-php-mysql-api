import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, Modal, SafeAreaView } from 'react-native';
import Colors from '../constants/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placeActions from '../redux/actions/placeActions';
import LoadingScreen from './LoadingScreen';

const SelectScreen = props => {
    const [isVisible, setIsVisible] = useState(false);
    const [placeTitle, setPlaceTitle] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        props.actions.getPlaces();
      });

    const selectItem = (id,title) => {
        props.actions.selectPlace({id, title})
        setIsVisible(false)
    }

    filter = () => {
        let text = placeTitle.toLowerCase()
        const newArray = [];
        props.places.map(x => {
            if(x.place_title.toLowerCase().match(text)) {
                newArray.push(x)
            }
        })
        return newArray;
    }

    

    const renderItem = (item) => {
        return (
            <TouchableOpacity 
                onPress={() => selectItem(item.place_id, item.place_title)}
                style={styles.itemClick}>
                <Text>{item.place_title}</Text>
            </TouchableOpacity>
        )
    }

    const modal = () => {
        return (
            <Modal 
                visible={isVisible}
                animationType='slide'>
            
            <SafeAreaView style={styles.modalHeader}>
                <TouchableOpacity
                    onPress={() => setIsVisible(false)}
                >
                    <Icon name='close' size={25} />
                </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.searchContainer}>
                <Input 
                    onChangeText={(value) => setPlaceTitle(value)}
                    placeholder='Search country...'/>
            </View>
            <View>
                <FlatList 
                    data={filter()}
                    renderItem={item => renderItem(item.item)}
                />
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
    
            </Modal>
        )
    }

    const renderContainer = () => {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>Discover a place</Text>
                    <TouchableOpacity 
                        onPress={() => setIsVisible(true)}
                        activeOpacity={0.8}
                        style={styles.openModalButton}>
                        <Icon name='location-outline' size={30}/>
                        {
                            props.selectedPlace.title  ? <Text style={styles.modalButtonTitle}>{props.selectedPlace.title}</Text> :
                            <Text style={styles.modalButtonTitle}>Choose a city....</Text>
                        }
                    </TouchableOpacity>
                    {props.selectedPlace.title&&<Button onPress={() => props.navigation.navigate('Home')} title='Discover' icon='globe' />}
        
                </View>
                <Image style={styles.img} source={require('../assets/background.jpg')} />
                {modal()}
            </View>
        )
    }
    
    return (
        <>
            {props.places ? renderContainer() : <LoadingScreen />}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        height: '100%',
        width: '100%',
        opacity: 0.7,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1
    },
    title: {
        fontSize: 45,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        width: 200
    },
    openModalButton: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalButtonTitle: {
        fontSize: 18,
        marginLeft: 10
    },
    modalHeader: {
        backgroundColor: Colors.primaryColor,
        width: '100%',
        alignItems: 'flex-end'
    },
    searchContainer: {
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemClick: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 20
    }
})

function mapStateToProps(state) {
    return {
        places: state.placesListReducer,
        selectedPlace: state.selectPlaceReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getPlaces: bindActionCreators(placeActions.getPlace, dispatch),
            selectPlace: bindActionCreators(placeActions.selectPlace, dispatch) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectScreen);