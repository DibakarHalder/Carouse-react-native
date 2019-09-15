import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./card";
import Carousel from "./Carousel";
import { Spin } from "./spin";

import { data } from "./carouselData";
// import { EasingComp } from './easing';

export class Home extends React.Component {
  renderItems = ({ item, index }) => {
    return <Card {...item} />;
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <Carousel
          data={data}
          style={styles.carousel}
          renderItem={this.renderItems}
          itemWidth={275}
        /> */}
        <Spin />
        {/* <EasingComp /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: { flex: 1 }
});
