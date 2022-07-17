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
      <View style={styles.View_138_2507}>
        <View style={styles.View_138_2508} />
        <View style={styles.View_138_2509} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/364f75e0-9cb9-4eb1-8038-24cde4f09c0a"
          }}
          style={styles.ImageBackground_138_2510}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b89dfcd-4875-4871-b25e-1ae683cbcd10"
          }}
          style={styles.ImageBackground_138_2511}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_2512}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1629"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaf1e5d5-6fd8-418a-9ffe-03290d6a7e7e"
          }}
          style={styles.ImageBackground_I138_2512_130_1199}
        />
        <View style={styles.View_I138_2512_130_1194}>
          <Text style={styles.Text_I138_2512_130_1194}>Сканировать</Text>
        </View>
        <View style={styles.View_I138_2512_130_1195} />
      </TouchableOpacity>
      <View style={styles.View_138_2513}>
        <View style={styles.View_138_2514}>
          <Text style={styles.Text_138_2514}>Сканирование штрихкода</Text>
        </View>
      </View>
      <View style={styles.View_138_2515}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a941c579-2639-4503-8ec4-66837ea04912"
          }}
          style={styles.ImageBackground_I138_2515_160_15408}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_138_2507: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%")
  },
  View_138_2508: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_138_2509: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(116, 116, 116, 1)",
    borderWidth: 1
  },
  ImageBackground_138_2510: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  ImageBackground_138_2511: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  TouchableOpacity_138_2512: {
    width: wp("53%"),
    height: hp("9%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I138_2512_130_1199: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I138_2512_130_1194: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I138_2512_130_1194: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16.30769157409668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5865384340286255,
    textTransform: "uppercase"
  },
  View_I138_2512_130_1195: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.0010000000474974513
  },
  View_138_2513: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("7%")
  },
  View_138_2514: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_138_2514: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_138_2515: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I138_2515_160_15408: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
