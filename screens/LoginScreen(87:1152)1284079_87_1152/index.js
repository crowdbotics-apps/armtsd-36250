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
      <View style={styles.View_83_1002}>
        <View style={styles.View_I83_1002_33_1276}>
          <View style={styles.View_I83_1002_33_1277}>
            <Text style={styles.Text_I83_1002_33_1277}>ARM TSD</Text>
          </View>
          <View style={styles.View_I83_1002_33_1278}>
            <Text style={styles.Text_I83_1002_33_1278}> v.2.0</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I83_1002_33_1329}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("34_712"))
          }
        >
          <View style={styles.View_I83_1002_33_1279}>
            <View style={styles.View_I83_1002_33_1280}>
              <View style={styles.View_I83_1002_33_1281} />
              <View style={styles.View_I83_1002_33_1282}>
                <Text style={styles.Text_I83_1002_33_1282}>Войти</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I83_1002_33_1284}>
          <View style={styles.View_I83_1002_33_1285} />
          <View style={styles.View_I83_1002_33_1286}>
            <Text style={styles.Text_I83_1002_33_1286}>Введите логин</Text>
          </View>
        </View>
        <View style={styles.View_I83_1002_33_1287}>
          <View style={styles.View_I83_1002_33_1288} />
          <View style={styles.View_I83_1002_33_1289}>
            <Text style={styles.Text_I83_1002_33_1289}>Введите пароль</Text>
          </View>
          <View style={styles.View_I83_1002_33_1290}>
            <View style={styles.View_I83_1002_33_1290_33_1249}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42035dab-4fa0-4f9e-84db-69a266ad4d4f"
                }}
                style={styles.ImageBackground_I83_1002_33_1290_33_1250}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I83_1002_33_1291}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("93_1019"))
          }
        >
          <Text style={styles.Text_I83_1002_33_1291}>Забыл пароль</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_126_1047}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("130_1179"))
        }
      >
        <View style={styles.View_126_1048}>
          <View style={styles.View_126_1049}>
            <View style={styles.View_126_1050} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f196a006-743e-4c2b-af8d-f6723a32c6ff"
              }}
              style={styles.ImageBackground_126_1080}
            />
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_83_1002: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I83_1002_33_1276: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("21%")
  },
  View_I83_1002_33_1277: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I83_1002_33_1277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24.462190628051758,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6092438125610352,
    textTransform: "none"
  },
  View_I83_1002_33_1278: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I83_1002_33_1278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.231095314025879,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3046219062805176,
    textTransform: "none"
  },
  TouchableOpacity_I83_1002_33_1329: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("96%")
  },
  View_I83_1002_33_1279: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I83_1002_33_1280: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I83_1002_33_1281: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(116, 116, 116, 1)"
  },
  View_I83_1002_33_1282: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I83_1002_33_1282: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.261907577514648,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.34523815155029297,
    textTransform: "none"
  },
  View_I83_1002_33_1284: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("35%")
  },
  View_I83_1002_33_1285: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(217, 217, 217, 1)",
    borderWidth: 1.0154063701629639
  },
  View_I83_1002_33_1286: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I83_1002_33_1286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.184876441955566,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24369752883911133,
    textTransform: "none"
  },
  View_I83_1002_33_1287: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("44%")
  },
  View_I83_1002_33_1288: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(217, 217, 217, 1)",
    borderWidth: 1.0154063701629639
  },
  View_I83_1002_33_1289: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I83_1002_33_1289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.184876441955566,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24369752883911133,
    textTransform: "none"
  },
  View_I83_1002_33_1290: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I83_1002_33_1290_33_1249: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I83_1002_33_1290_33_1250: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I83_1002_33_1291: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_I83_1002_33_1291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.215688705444336,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28431377410888675,
    textTransform: "none"
  },
  TouchableOpacity_126_1047: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("80%")
  },
  View_126_1048: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_1049: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_1050: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(116, 116, 116, 1)"
  },
  ImageBackground_126_1080: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
