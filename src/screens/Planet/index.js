import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../commonComponents/Header';
import axios from 'axios';
import {PageLoader} from '../../commonComponents/Loader';
import {colors} from '../../config/theme';

export default ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {url} = route.params;
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      alert('something went wrong, please try again.');
    }
  };

  const Item = ({label, text}) => (
    <View style={styles.rowView}>
      <View style={styles.leftTxt}>
        <Text style={styles.label}>{label}:</Text>
      </View>
      <View style={styles.rightTxt}>
        <Text style={styles.info}>{text}</Text>
      </View>
    </View>
  );

  return loading ? (
    <PageLoader />
  ) : (
    <View styles={styles.flex}>
      <Header
        heading={data.name}
        backBtn
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.divider} />
      <View style={styles.cont}>
        <Item label="Population" text={data.population} />
        <Item label="climate" text={data.climate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: colors.white},
  rowView: {marginHorizontal: 20, marginVertical: 10},
  leftTxt: {justifyContent: 'center', alignItems: 'center'},
  rightTxt: {alignItems: 'center'},
  label: {color: '#9F9F9F', fontSize: 12},
  info: {color: colors.black, fontWeight: 'bold', fontSize: 18},
  divider: {height: 100, backgroundColor: colors.white},
  cont: {height: '100%', backgroundColor: colors.white},
});
