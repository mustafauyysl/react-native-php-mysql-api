import React, {useState} from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import {connect} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {bindActionCreators} from 'redux';
import * as contentActions from '../redux/actions/contentActions';
import * as commentActions from '../redux/actions/commentActions';
import LoadingScreen from '../screens/LoadingScreen';

const DetailScreen = (props) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const goContentDetail = (id) => {
    props.actions.getComment(id);
    props.actions.selectContent(id);
    props.navigation.navigate('ProductDetail');
  };

  const renderItem = (item) => {
    return (
      <Card
        title={item.content_title}
        image={item.content_img}
        onPress={() => goContentDetail(item.content_id)}
      />
    );
  };

  const renderContainer = () => {
    return (
      <Layout
        onPress={() => props.navigation.goBack()}
        title={props.selectedCategory.title}
        headerColor={props.selectedCategory.color}
        titleFontSize={35}>
        <FlatList
          data={props.content}
          keyExtractor={(item) => item.id}
          renderItem={(item) => renderItem(item.item)}
        />
      </Layout>
    );
  };

  return loading ? <LoadingScreen /> : renderContainer();
};

function mapStateToProps(state) {
  return {
    selectedCategory: state.selectCategoryReducer,
    content: state.contentListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      selectContent: bindActionCreators(contentActions.selectContent, dispatch),
      getComment: bindActionCreators(commentActions.getComment, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
