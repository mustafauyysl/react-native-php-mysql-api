import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoryCard from './CategoryCard';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoriesActions from '../../redux/actions/categoryActions';
import * as contentActions from '../../redux/actions/contentActions';

const categories = [
  {name: 'FOOD/DRINK', code: '#E091C9', icon: 'fast-food-outline'},
  {name: 'ACCOMMODATION', code: '#F69383', icon: 'bed-outline'},
  {name: 'TRANSPORTATION', code: '#8D88CF', icon: 'bus-outline'},
  {name: 'ACTIVITIES', code: '#7EB1FC', icon: 'game-controller-outline'},
];

const CategoryLayout = (props) => {
  const goDetailScreen = (title, color, icon) => {
    props.actions.selectCategory({title, color, icon});
    props.navigation.navigate('Detail');
    props.actions.getContent(title, props.selectedPlace.id);
  };

  const renderItem = (item) => {
    return (
      <CategoryCard
        title={item.name}
        color={item.code}
        icon={item.icon}
        onPress={() => goDetailScreen(item.name, item.code, item.icon)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categories}
        style={styles.gridView}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  gridView: {
    marginTop: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

function mapStateToProps(state) {
  return {
    selectedPlace: state.selectPlaceReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      selectCategory: bindActionCreators(
        categoriesActions.selectCategory,
        dispatch,
      ),
      getContent: bindActionCreators(contentActions.getContent, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryLayout);
