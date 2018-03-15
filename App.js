/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Switch,
  CheckBox,
  Image,
  ScrollView,
  Button
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      registered: false,
    }
  }
  render() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];

    return (
      // <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to BoilerPlate-UI!
          </Text>
          <Image source={require('./src/images/spaceship.png')} style={styles.logoImage}></Image>
          <Text style={styles.formHeader}>
            Sample Registration Form
          </Text>
          <View style={styles.registrationArea}>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>First Name </Text>
              <TextInput style={styles.textBox} placeholder={'Enter your first name'} maxLength = {40}></TextInput>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Last Name</Text>
              <TextInput style={styles.textBox} placeholder={'Enter your last name'}></TextInput>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Username</Text>
              <TextInput style={styles.textBox} placeholder={'Enter your username'}></TextInput>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Password</Text>
              <TextInput style={styles.textBox} placeholder={'Enter your password'}></TextInput>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>EmailID</Text>
              <TextInput style={styles.textBox} placeholder={'Enter your email id'}></TextInput>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Age</Text>
              <Picker>
                <Picker.Item label="30" />
                <Picker.Item label="32" />
              </Picker>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Paperless bills</Text>
              <Switch></Switch>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Email notification</Text>
              <CheckBox></CheckBox>
            </View>
            <Button color={'#000080'} title={'Register'} onPress={()=>{this.setState({registered: true,})}} />
          </View>
          {this.state.registered ?
          <View>
          <TouchableOpacity style={styles.registerButton} onClick={()=>{this.setState({registered: false})}}>
            <Text>Re-Register</Text>
          </TouchableOpacity>
            <Table>
              <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
            </Table>
          </View>:null}
        </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
  },
  welcome: {
    marginTop: 50,
    fontSize: 30,
  },
  logoImage: {
    width: 50,
    height: 50
  },
  formHeader: {
    margin: 25,
    fontSize: 25,
  },
  registrationArea: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  textInput: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
  },
  registerButton: {
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#00ffff',
    padding: 5,
    height: 30,
    borderRadius: 50,
    margin: 10,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBox: {
    borderWidth: 1, 
  },
  head: { 
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: {
    marginLeft: 5
  },
  row: {
    height: 30
  }
});
