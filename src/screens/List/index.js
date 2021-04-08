import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Item from './Item';
import axios from 'axios';
import {BASE_URL} from '../../config';
import {LoadMore} from '../../commonComponents/Loader';
import Header from '../../commonComponents/Header';

export default ({navigation}) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  //---------------  Initial Data call  ----------------
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      let url = `${BASE_URL}planets?page=${page}`;
      const response = await axios.get(url);

      setTotal(response.data.count);
      setData(
        page === 1
          ? response.data.results
          : [...data, ...response.data.results],
      );
    } catch (error) {
      alert('something went wrong, please try again.');
    }
  };

  const renderItem = ({item}) => {
    return (
      <Item
        planetName={item.name}
        onPress={() => {
          navigation.navigate('Details', {url: item.url});
        }}
      />
    );
  };

  const flatListFooter = () => {
    return loadMore ? <LoadMore /> : <View />;
  };

  const handleLoadMore = () => {
    if (page * 10 >= total) {
      setLoadMore(false);
      return 0;
    } else {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.flex}>
      <Header heading="Planets" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        onEndReachedThreshold={0.01}
        onEndReached={() => {
          handleLoadMore();
        }}
        ListFooterComponent={flatListFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
