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
      <View style={styles.View_138_2557}>
        <View style={styles.View_138_2539}>
          <View style={styles.View_138_2540} />
          <View style={styles.View_138_2542}>
            <View style={styles.View_I138_2542_86_2921}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78979885-99c6-46a7-b7b2-567ab6b524e6"
                }}
                style={styles.ImageBackground_I138_2542_86_2922}
              />
            </View>
          </View>
          <View style={styles.View_138_2543}>
            <Text style={styles.Text_138_2543}>Поиск</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a0076de-52a2-4be6-a314-46fcacfd70d3"
          }}
          style={styles.ImageBackground_138_2681}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_138_2557: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("36%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_138_2539: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_138_2540: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(83, 87, 99, 1)",
    borderWidth: 1
  },
  View_138_2542: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_2542_86_2921: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I138_2542_86_2922: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_138_2543: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_138_2543: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_2681: {
    width: wp("7%"),
    height: hp("23%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
