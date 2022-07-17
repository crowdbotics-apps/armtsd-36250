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
      <View style={styles.View_41_733}>
        <View style={styles.View_41_734}>
          <Text style={styles.Text_41_734}>Документы</Text>
        </View>
      </View>
      <View style={styles.View_49_1168}>
        <View style={styles.View_49_1169}>
          <View style={styles.View_I49_1169_12_21}>
            <View style={styles.View_I49_1169_12_22}>
              <Text style={styles.Text_I49_1169_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1169_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1169_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d409cb9c-79e7-43a0-90f7-e55aade73a23"
                  }}
                  style={styles.ImageBackground_I49_1169_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1169_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dc42b99-170b-411a-b8ff-150a477e579c"
                }}
                style={styles.ImageBackground_I49_1169_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1169_12_28} />
        </View>
        <View style={styles.View_49_1170}>
          <View style={styles.View_I49_1170_12_21}>
            <View style={styles.View_I49_1170_12_22}>
              <Text style={styles.Text_I49_1170_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1170_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1170_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5833841a-7d51-4510-9f07-bbe40b898534"
                  }}
                  style={styles.ImageBackground_I49_1170_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1170_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d1e1724-f88e-4518-9773-69390d08ceb4"
                }}
                style={styles.ImageBackground_I49_1170_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1170_12_28} />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c2b14dc-4b30-4255-9b20-119e9582b0a5"
          }}
          style={styles.TouchableOpacity_49_1171}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("49_1366"))
          }
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_136_1196}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1272"))
        }
      >
        <View style={styles.View_136_1197}>
          <Text style={styles.Text_136_1197}>Инвентаризация</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a427f104-1d0a-4371-808b-1acf46b3e623"
          }}
          style={styles.ImageBackground_136_1198}
        />
        <View style={styles.View_138_1422}>
          <View style={styles.View_138_1423}>
            <Text style={styles.Text_138_1423}>2</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_1148}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1499"))
        }
      >
        <View style={styles.View_138_1149}>
          <Text style={styles.Text_138_1149}>Перемещение между ячейками</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08719b73-05eb-44f7-b6bf-3d5e3c0dfa94"
          }}
          style={styles.ImageBackground_138_1153}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_136_1202}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1383"))
        }
      >
        <View style={styles.View_136_1269}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5f91c5f-c3ab-4453-9508-518bfab45b82"
            }}
            style={styles.ImageBackground_136_1270}
          />
        </View>
        <View style={styles.View_138_1144}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33372b2e-fac3-4730-8452-e886a783a39b"
            }}
            style={styles.ImageBackground_138_1145}
          />
        </View>
        <View style={styles.View_136_1203}>
          <Text style={styles.Text_136_1203}>Расходный ордер</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_138_1130}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1344"))
        }
      >
        <View style={styles.View_138_1135}>
          <Text style={styles.Text_138_1135}>Приходный ордер</Text>
        </View>
        <View style={styles.View_138_1136}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/424ba3c4-d84e-4a62-9055-0ba1e9bdfd75"
            }}
            style={styles.ImageBackground_138_1137}
          />
        </View>
        <View style={styles.View_138_1140}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7566122b-42e8-47a3-9a8a-427f90940fd5"
            }}
            style={styles.ImageBackground_138_1141}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_136_1273}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1455"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b12fdf8e-7656-4b02-9003-7eb660781850"
          }}
          style={styles.ImageBackground_138_1128}
        />
        <View style={styles.View_136_1278}>
          <Text style={styles.Text_136_1278}>Проверка</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_41_733: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("11%")
  },
  View_41_734: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_41_734: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_49_1168: {
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
  View_49_1169: {
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
  View_I49_1169_12_21: {
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
  View_I49_1169_12_22: {
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
  Text_I49_1169_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1169_12_23: {
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
  TouchableOpacity_I49_1169_12_24: {
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
  ImageBackground_I49_1169_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1169_12_27: {
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
  ImageBackground_I49_1169_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1169_12_28: {
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
  View_49_1170: {
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
  View_I49_1170_12_21: {
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
  View_I49_1170_12_22: {
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
  Text_I49_1170_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1170_12_23: {
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
  TouchableOpacity_I49_1170_12_24: {
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
  ImageBackground_I49_1170_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1170_12_27: {
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
  ImageBackground_I49_1170_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1170_12_28: {
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
  TouchableOpacity_49_1171: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  TouchableOpacity_136_1196: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("24%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_136_1197: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_136_1197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  ImageBackground_136_1198: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_138_1422: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_138_1423: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_138_1423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.1,
    textTransform: "none"
  },
  TouchableOpacity_138_1148: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("58%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_138_1149: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_138_1149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  ImageBackground_138_1153: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_136_1202: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("47%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_136_1269: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_136_1270: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_138_1144: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_138_1145: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_136_1203: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_136_1203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  TouchableOpacity_138_1130: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("35%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  View_138_1135: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_138_1135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.378377914428711,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2871621549129486,
    textTransform: "none"
  },
  View_138_1136: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_138_1137: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_138_1140: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_138_1141: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_136_1273: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("69%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    overflow: "hidden"
  },
  ImageBackground_138_1128: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_136_1278: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_136_1278: {
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
