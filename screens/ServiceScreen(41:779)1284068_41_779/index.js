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
      <View style={styles.View_41_782}>
        <View style={styles.View_41_783}>
          <Text style={styles.Text_41_783}>Сервис</Text>
        </View>
      </View>
      <View style={styles.View_49_1234}>
        <View style={styles.View_49_1235}>
          <View style={styles.View_I49_1235_12_21}>
            <View style={styles.View_I49_1235_12_22}>
              <Text style={styles.Text_I49_1235_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1235_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1235_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097575dc-12f7-45df-9e2d-4b225a4cdf5d"
                  }}
                  style={styles.ImageBackground_I49_1235_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1235_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2851c10c-c208-41a3-a2bb-4812066ae3c9"
                }}
                style={styles.ImageBackground_I49_1235_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1235_12_28} />
        </View>
        <View style={styles.View_49_1236}>
          <View style={styles.View_I49_1236_12_21}>
            <View style={styles.View_I49_1236_12_22}>
              <Text style={styles.Text_I49_1236_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1236_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1236_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3580977-41c9-4369-ac12-0f7a33159c72"
                  }}
                  style={styles.ImageBackground_I49_1236_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1236_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39a32a95-bc06-4fb1-81f1-bcd8fd38b0fd"
                }}
                style={styles.ImageBackground_I49_1236_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1236_12_28} />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a82025f-092c-4db4-9234-72f3fcfabcdd"
          }}
          style={styles.TouchableOpacity_49_1237}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("49_1366"))
          }
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_1719}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_2002"))
        }
      >
        <View style={styles.View_138_1720}>
          <Text style={styles.Text_138_1720}>Сканировать товары</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a76306f-adf2-4f0a-8636-a70aab13bfba"
          }}
          style={styles.ImageBackground_138_1754}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_1726}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_2155"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45449364-6956-4360-8d9a-ce506c6c5116"
          }}
          style={styles.ImageBackground_138_1995}
        />
        <View style={styles.View_138_1727}>
          <Text style={styles.Text_138_1727}>Удаление данных</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_1730}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_2112"))
        }
      >
        <View style={styles.View_138_1739}>
          <Text style={styles.Text_138_1739}>Обновление программы</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a39a274-c518-4e08-91c7-511fd66b4a57"
          }}
          style={styles.ImageBackground_138_1876}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_1740}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_2069"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec292631-3f10-41b0-bbe4-909d04f28293"
          }}
          style={styles.ImageBackground_138_1875}
        />
        <View style={styles.View_138_1741}>
          <Text style={styles.Text_138_1741}>Обмен данными с сервером</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_1750}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_2198"))
        }
      >
        <View style={styles.View_138_1997}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45d709fd-6207-41d3-852b-a6197bc1310e"
            }}
            style={styles.ImageBackground_138_1998}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b0d895a-8ecf-4d9d-8897-37e7fd30d9a8"
            }}
            style={styles.ImageBackground_138_1999}
          />
        </View>
        <View style={styles.View_138_1753}>
          <Text style={styles.Text_138_1753}>О программе</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_41_782: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("11%")
  },
  View_41_783: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_41_783: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_49_1234: {
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
  View_49_1235: {
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
  View_I49_1235_12_21: {
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
  View_I49_1235_12_22: {
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
  Text_I49_1235_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1235_12_23: {
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
  TouchableOpacity_I49_1235_12_24: {
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
  ImageBackground_I49_1235_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1235_12_27: {
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
  ImageBackground_I49_1235_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1235_12_28: {
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
  View_49_1236: {
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
  View_I49_1236_12_21: {
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
  View_I49_1236_12_22: {
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
  Text_I49_1236_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1236_12_23: {
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
  TouchableOpacity_I49_1236_12_24: {
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
  ImageBackground_I49_1236_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1236_12_27: {
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
  ImageBackground_I49_1236_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1236_12_28: {
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
  TouchableOpacity_49_1237: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  TouchableOpacity_138_1719: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("22%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_138_1720: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_138_1720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  ImageBackground_138_1754: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  TouchableOpacity_138_1726: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("55%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  ImageBackground_138_1995: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_138_1727: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_138_1727: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  TouchableOpacity_138_1730: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("44%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_138_1739: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_138_1739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  ImageBackground_138_1876: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_138_1740: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("33%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  ImageBackground_138_1875: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_138_1741: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_138_1741: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  TouchableOpacity_138_1750: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("67%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_138_1997: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_138_1998: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_138_1999: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_138_1753: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_138_1753: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
