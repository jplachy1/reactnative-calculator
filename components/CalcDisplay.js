import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class CalcDisplay extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.display}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: RFPercentage(9),
    color: "white",
  },
});
