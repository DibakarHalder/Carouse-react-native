import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './card';
import Carousel from './Carousel';

export class Home extends React.Component {
  renderItems = ({ item, index }) => {
    return <Card {...item} />;
  };

  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <Carousel
          data={data}
          style={styles.carousel}
          renderItem={this.renderItems}
          itemWidth={275}
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
    fontWeight: '300',
    marginBottom: 5
  },
  paraThreeStyle: {
    fontSize: 12,
    opacity: 0.4,
    fontWeight: "300",
    marginTop: 20
  },
});

const data = [
  {
    containerStyle: { backgroundColor: "#ebb998", marginLeft: 10 },
    paraOneText: "hello, Videt",
    paraOneStyle: styles.paraOneStyle,
    paraTwoTextArr: ["sharper.", "smarter. better"],
    paraTwoStyle: { fontSize: 20, fontWeight: 'bold' },
    paraThreeStyle: styles.paraThreeStyle,
    paraThreeText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet eu nunc sit amet faucibus. Mauris id purus ut ante mollis tincidunt nec at enim. Proin bibendum nunc in mi fermentum convallis. "
  },
  {
    containerStyle: { backgroundColor: '#8cbf9b' },
    paraTwoTextArr: ['make', 'statements', 'smarter'],
    paraTwoStyle: { fontSize: 30, fontWeight: "bold" },
    showLink: true,
    paraThreeText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet eu nunc sit amet faucibus. ',
    paraThreeStyle: styles.paraThreeStyle,
    linkText: "Activate now"
  },
  {
    containerStyle: { backgroundColor: '#9f81e3', marginRight: 10 },
    paraTwoTextArr: ['goodness', 'gets better', 'when shared'],
    paraTwoStyle: { fontSize: 30, fontWeight: "bold" },
    showLink: true,
    paraThreeText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet eu nunc ,sit amet faucibus. ',
    paraThreeStyle: styles.paraThreeStyle,
    linkText: "Refer now"
  },
];
