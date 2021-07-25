import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import CalcDisplay from "./CalcDisplay";

export default class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onPress: () => {},
      color: "gray",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
          <Text style={{ fontSize: 35, color: this.props.color }}>
            {this.props.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  button: {
    flex: 1,
    backgroundColor: "#202125",
    alignItems: "center",
    justifyContent: "center",
  },
});
