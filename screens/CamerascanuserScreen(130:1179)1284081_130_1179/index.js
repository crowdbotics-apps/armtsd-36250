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
      <View style={styles.View_130_1180}>
        <View style={styles.View_130_1181} />
        <View style={styles.View_130_1182} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c590592d-41e5-48e8-96a0-b574b9937f14"
          }}
          style={styles.ImageBackground_130_1183}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84d148f4-83d9-4ef5-b07d-5a2e6248feae"
          }}
          style={styles.ImageBackground_130_1184}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_130_1192}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("34_712"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b162fed-92ab-4b09-bafa-9c6a8fd71c92"
          }}
          style={styles.ImageBackground_130_1199}
        />
        <View style={styles.View_130_1194}>
          <Text style={styles.Text_130_1194}>Сканировать</Text>
        </View>
        <View style={styles.View_130_1195} />
      </TouchableOpacity>
      <View style={styles.View_130_1197}>
        <View style={styles.View_130_1198}>
          <Text style={styles.Text_130_1198}>
            Сканирование штрихкода сотрудника
          </Text>
        </View>
      </View>
      <View style={styles.View_133_1254}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c7fd4c9-e6e0-4129-a2b7-c505c8f02d08"
          }}
          style={styles.ImageBackground_I133_1254_160_15408}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_130_1180: {
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
  View_130_1181: {
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
  View_130_1182: {
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
  ImageBackground_130_1183: {
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
  ImageBackground_130_1184: {
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
  TouchableOpacity_130_1192: {
    width: wp("53%"),
    height: hp("9%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_130_1199: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_130_1194: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_130_1194: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16.30769157409668,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5865384340286255,
    textTransform: "uppercase"
  },
  View_130_1195: {
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
  View_130_1197: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("7%")
  },
  View_130_1198: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_130_1198: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_133_1254: {
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
  ImageBackground_I133_1254_160_15408: {
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
