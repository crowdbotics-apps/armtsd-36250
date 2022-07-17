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
      <View style={styles.View_49_1201}>
        <View style={styles.View_49_1202}>
          <View style={styles.View_I49_1202_12_21}>
            <View style={styles.View_I49_1202_12_22}>
              <Text style={styles.Text_I49_1202_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1202_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1202_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d984444a-e8cc-436f-9718-fc3497f961bb"
                  }}
                  style={styles.ImageBackground_I49_1202_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1202_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72cf6040-c3bc-4423-aee3-8747d97aafaa"
                }}
                style={styles.ImageBackground_I49_1202_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1202_12_28} />
        </View>
        <View style={styles.View_49_1203}>
          <View style={styles.View_I49_1203_12_21}>
            <View style={styles.View_I49_1203_12_22}>
              <Text style={styles.Text_I49_1203_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1203_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1203_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4314f4e6-0327-4b0b-8e1f-56a81124bc14"
                  }}
                  style={styles.ImageBackground_I49_1203_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1203_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf6e4678-adbb-432b-8398-de97f066c199"
                }}
                style={styles.ImageBackground_I49_1203_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1203_12_28} />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65a8b714-1561-4cad-9504-9a9cbd2d0edf"
          }}
          style={styles.TouchableOpacity_49_1204}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("49_1366"))
          }
        />
      </View>
      <View style={styles.View_41_759}>
        <View style={styles.View_41_760}>
          <Text style={styles.Text_41_760}>Справочники</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_136_1168}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("133_1123"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f59fa2e7-8afe-48b7-8d10-50bdd1af1397"
          }}
          style={styles.ImageBackground_130_1299}
        />
        <View style={styles.View_130_1289}>
          <Text style={styles.Text_130_1289}>Номенклатура</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_136_1169}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("133_1216"))
        }
      >
        <View style={styles.View_136_1172}>
          <Text style={styles.Text_136_1172}>Склады</Text>
        </View>
        <View style={styles.View_130_1546}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c390a3b-780e-4567-ac6a-5998f91e0e8b"
            }}
            style={styles.ImageBackground_130_1425}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_136_1173}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("133_1178"))
        }
      >
        <View style={styles.View_136_1174}>
          <Text style={styles.Text_136_1174}>Ячейки</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99e068ba-8602-4d12-a58b-a5545b6eba2e"
          }}
          style={styles.ImageBackground_130_1562}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_49_1201: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_49_1202: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I49_1202_12_21: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_1202_12_22: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I49_1202_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1202_12_23: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I49_1202_12_24: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I49_1202_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1202_12_27: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I49_1202_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1202_12_28: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  View_49_1203: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I49_1203_12_21: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_1203_12_22: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I49_1203_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1203_12_23: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I49_1203_12_24: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I49_1203_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1203_12_27: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I49_1203_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1203_12_28: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  TouchableOpacity_49_1204: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_41_759: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("12%")
  },
  View_41_760: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_41_760: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  TouchableOpacity_136_1168: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("27%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  ImageBackground_130_1299: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_130_1289: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_130_1289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.02439022064209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_136_1169: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("27%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_136_1172: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_136_1172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.02439022064209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_1546: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%")
  },
  ImageBackground_130_1425: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_136_1173: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("50%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_136_1174: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_136_1174: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.02439022064209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_130_1562: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
