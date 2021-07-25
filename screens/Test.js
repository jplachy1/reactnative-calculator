import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import CalcButton from "../components/CalcButton";

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}></View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text>Hello</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={{ backgroundColor: "green", flex: 1 }}>
            <Text>Hello</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
