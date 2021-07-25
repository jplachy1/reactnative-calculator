import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  SafeAreaView,
} from "react-native";
import CalcButton from "../components/CalcButton";
import CalcDisplay from "../components/CalcDisplay";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.display.numericDisplay");
require("./../lib/swisscalc.display.memoryDisplay");
require("./../lib/swisscalc.calc.calculator.js");

export default class MainCalcScreen extends React.Component {
  state = {
    operatorColor: "#98b6e8",
    display: "0",
  };

  constructor(props) {
    super(props);

    this.oc = global.swisscalc.lib.operatorCache;
    this.calc = new global.swisscalc.calc.calculator();
  }

  Calculate = (digit) => {
    let newDisplay;

    if (digit === "C") {
      newDisplay = this.state.display.slice(0, -1);
      this.setState({ display: newDisplay });
    }

    if (this.state.display.length < 9) {
      if (digit != "C") newDisplay = this.state.display + digit;
      this.setState({ display: newDisplay });
    }
  };

  AddDigit = (digit) => {
    this.calc.addDigit(digit);
    this.setState({ display: this.calc.getMainDisplay() });
  };

  Clear = () => {
    this.calc.clear();
    this.setState({ display: this.calc.getMainDisplay() });
  };

  AddOperator = (operator) => {
    this.calc.addBinaryOperator(operator);
    this.setState({ display: this.calc.getMainDisplay() });
  };

  Equals = () => {
    this.calc.equalsPressed();
    this.setState({ display: this.calc.getMainDisplay() });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.displayContainer}>
          <CalcDisplay display={this.state.display} />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.column}>
            <CalcButton
              value="7"
              color="white"
              onPress={() => {
                this.AddDigit("7");
              }}
            />
            <CalcButton
              value="4"
              color="white"
              onPress={() => {
                this.AddDigit("4");
              }}
            />
            <CalcButton
              value="1"
              color="white"
              onPress={() => {
                this.AddDigit("1");
              }}
            />
            <CalcButton
              value="0"
              color="white"
              onPress={() => {
                this.AddDigit("0");
              }}
            />
          </View>

          <View style={styles.column}>
            <CalcButton
              value="8"
              color="white"
              onPress={() => {
                this.AddDigit("8");
              }}
            />
            <CalcButton
              value="5"
              color="white"
              onPress={() => {
                this.AddDigit("5");
              }}
            />
            <CalcButton
              value="2"
              color="white"
              onPress={() => {
                this.AddDigit("2");
              }}
            />
            <CalcButton
              value="."
              color="white"
              onPress={() => {
                this.AddDigit(".");
              }}
            />
          </View>

          <View style={styles.column}>
            <CalcButton
              value="9"
              color="white"
              onPress={() => {
                this.AddDigit("9");
              }}
            />
            <CalcButton
              value="6"
              color="white"
              onPress={() => {
                this.AddDigit("6");
              }}
            />
            <CalcButton
              value="3"
              color="white"
              onPress={() => {
                this.AddDigit("3");
              }}
            />
            <CalcButton
              value="="
              color="white"
              onPress={() => {
                this.Equals();
              }}
            />
          </View>
          <View style={styles.verticalLine}></View>
          <View style={styles.operatorsColumn}>
            <CalcButton
              value="C"
              color={this.state.operatorColor}
              onPress={() => {
                this.Clear();
              }}
            />
            <CalcButton
              value="÷"
              color={this.state.operatorColor}
              onPress={() => {
                this.AddOperator(this.oc.DivisionOperator);
              }}
            />
            <CalcButton
              value="×"
              color={this.state.operatorColor}
              onPress={() => {
                this.AddOperator(this.oc.MultiplicationOperator);
              }}
            />
            <CalcButton
              value="-"
              color={this.state.operatorColor}
              onPress={() => {
                this.AddOperator(this.oc.SubstractionOperator);
              }}
            />
            <CalcButton
              value="+"
              color={this.state.operatorColor}
              onPress={() => {
                this.AddOperator(this.oc.AdditionOperator);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    flex: 1,
  },
  operatorsColumn: {
    flexDirection: "column",
    flex: 1,
  },
  container: {
    flex: 1,
  },
  displayContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#2c3033",
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#202125",
  },
  verticalLine: {
    width: 1,
    backgroundColor: "#35373b",
  },
});
