import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Button,
  StatusBar
} from "react-native";

const Card = ({
  containerStyle = {},
  paraOneText,
  paraTwoTextArr = [],
  paraThreeText,
  paraOneStyle = {},
  paraTwoStyle = {},
  paraThreeStyle = {},
  showLink = false,
  linkText = '',
  onLinkPress = () => {}
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={paraOneStyle}>{paraOneText}</Text>
      <View style={{}}>
        {paraTwoTextArr.map(el => (
          <Text style={paraTwoStyle} key={el}>
            {el}
          </Text>
        ))}
      </View>
      <Text style={paraThreeStyle}>{paraThreeText}</Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
        {showLink ? (
          <TouchableOpacity onPress={onLinkPress} style={styles.linkStyle}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: "bold" }}>
              {linkText}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ height: 50 }} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    padding: 30,
    justifyContent: "flex-end",
    borderRadius: 20
  },
  linkStyle: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: "black",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20
  }
});

export default Card;
