import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../commonComponents/Header';
import {InputText} from '../../commonComponents/Inputs';
import * as yup from 'yup';
import ModalDropdown from 'react-native-modal-dropdown';

import {Formik} from 'formik';

import {colors} from '../../config/theme';

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
});

export default () => {
  const [planet, setPlanet] = useState('');
  const [planetAlert, setPlanetAlert] = useState(false);

  return (
    <View style={styles.flex}>
      <Header heading="Add +" />
      <Formik
        initialValues={{name: '', age: ''}}
        validationSchema={schema}
        onSubmit={values => {
          if (planet) {
            setPlanetAlert(false);
            alert(JSON.stringify({...values, planet}));
          } else {
            setPlanetAlert(true);
          }
        }}>
        {({handleChange, handleSubmit, touched, errors, values}) => (
          <View style={styles.container}>
            <View style={styles.rowView}>
              <View style={styles.leftTxt}>
                <Text style={styles.label}>Name</Text>
              </View>
              <View style={styles.rightTxt}>
                <InputText
                  value={values.name}
                  height={40}
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  errorFlag={errors.name && touched.name}
                  errorText={errors.name}
                />
              </View>
            </View>
            <View style={styles.rowView}>
              <View style={styles.leftTxt}>
                <Text style={styles.label}>Planet</Text>
              </View>
              <View style={styles.rightTxt}>
                <View
                  style={[
                    styles.modalContainer,
                    planetAlert && {borderColor: 'red'},
                  ]}>
                  <ModalDropdown
                    dropdownStyle={styles.modalhu}
                    onSelect={(index, value) => {
                      setPlanet(value);
                    }}
                    options={[
                      'Tatooine',
                      'Alderaan',
                      'Yavin IV',
                      'Hoth',
                      'Dagobah',
                    ]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.rowView}>
              <View style={styles.leftTxt}>
                <Text style={styles.label}>Age</Text>
              </View>
              <View style={styles.rightTxt}>
                <InputText
                  value={values.age}
                  height={40}
                  placeholder="age"
                  keyboardType="number-pad"
                  onChangeText={handleChange('age')}
                  errorFlag={errors.age && touched.age}
                  errorText={errors.age}
                />
              </View>
            </View>
            <View style={styles.centerAlign}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleSubmit();
                }}>
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rowView: {flexDirection: 'row', marginBottom: 10},
  leftTxt: {flex: 0.25, marginLeft: 10, justifyContent: 'center'},
  rightTxt: {flex: 0.75},
  label: {
    color: '#9F9F9F',
  },
  modalContainer: {
    height: 40,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },
  modalhu: {
    width: '100%',
  },
  container: {paddingHorizontal: 20, paddingTop: 40},
  centerAlign: {alignItems: 'center'},
  button: {
    backgroundColor: colors.blue,
    width: 200,
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  submit: {fontSize: 16, fontWeight: 'bold', color: colors.white},
});
