import React from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import Card from "./card";

export class Spin extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  renderItems = ({ item, index }) => {
    return <Card {...item} />;
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ rotate: spin }]
          }}
          source={{
            uri:
              "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: { flex: 1 },
  paraOneStyle: {
    fontSize: 14,
    opacity: 0.7,
    fontWeight: "300",
    marginBottom: 5,
  },
  paraThreeStyle: {
    fontSize: 12,
    opacity: 0.4,
    fontWeight: '300',
    marginTop: 20,
  }
});

