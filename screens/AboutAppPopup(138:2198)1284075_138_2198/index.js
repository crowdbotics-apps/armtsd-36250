import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_138_2199}>
        <View style={styles.View_138_2200}>
          <Text style={styles.Text_138_2200}>О программе</Text>
        </View>
      </View>
      <View style={styles.View_138_2202} />
      <View style={styles.View_138_2203}>
        <View style={styles.View_I138_2203_87_1160}>
          <View style={styles.View_I138_2203_87_1161} />
          <View style={styles.View_I138_2203_87_1162} />
          <View style={styles.View_I138_2203_87_1163} />
          <View style={styles.View_I138_2203_87_1164} />
          <View style={styles.View_I138_2203_87_1165} />
          <View style={styles.View_I138_2203_87_1166} />
          <View style={styles.View_I138_2203_87_1167} />
          <View style={styles.View_I138_2203_87_1168} />
          <View style={styles.View_I138_2203_87_1169} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6316bc5-8f9d-43cb-852b-60cb9709e427"
        }}
        style={styles.ImageBackground_138_2720}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_138_2199: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("6%")
  },
  View_138_2200: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_138_2200: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_138_2202: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("21%"),
    backgroundColor: "rgba(189, 189, 189, 1)",
    overflow: "hidden"
  },
  View_138_2203: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_2203_87_1160: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_2203_87_1161: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1162: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1163: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1164: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1165: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1166: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1167: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1168: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I138_2203_87_1169: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  ImageBackground_138_2720: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
