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
      <View style={styles.View_41_828}>
        <View style={styles.View_41_829}>
          <Text style={styles.Text_41_829}>Настройки</Text>
        </View>
      </View>
      <View style={styles.View_49_1300}>
        <View style={styles.View_49_1301}>
          <View style={styles.View_I49_1301_12_21}>
            <View style={styles.View_I49_1301_12_22}>
              <Text style={styles.Text_I49_1301_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1301_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1301_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1aa1f44-0c35-41cf-bdc9-f5d0c2fa0a67"
                  }}
                  style={styles.ImageBackground_I49_1301_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1301_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a95ef417-46c8-42ee-a0c7-f676763aa6a6"
                }}
                style={styles.ImageBackground_I49_1301_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1301_12_28} />
        </View>
        <View style={styles.View_49_1302}>
          <View style={styles.View_I49_1302_12_21}>
            <View style={styles.View_I49_1302_12_22}>
              <Text style={styles.Text_I49_1302_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_1302_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_1302_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08aa58ca-4b76-478d-b5dd-cdd3fec6bc18"
                  }}
                  style={styles.ImageBackground_I49_1302_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_1302_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b6ff41b-d40f-4ef5-8781-ce4eea51500b"
                }}
                style={styles.ImageBackground_I49_1302_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_1302_12_28} />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8dcf0df-7830-447f-a45a-8b6ec294d227"
          }}
          style={styles.TouchableOpacity_49_1303}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("49_1366"))
          }
        />
      </View>
      <View style={styles.View_100_990}>
        <View style={styles.View_I100_990_52_32} />
        <View style={styles.View_I100_990_52_33}>
          <Text style={styles.Text_I100_990_52_33}>
            Сканирующие устройства:
          </Text>
        </View>
      </View>
      <View style={styles.View_104_1005}>
        <View style={styles.View_I104_1005_52_32} />
        <View style={styles.View_I104_1005_52_33}>
          <Text style={styles.Text_I104_1005_52_33}>Изображения товаров:</Text>
        </View>
      </View>
      <View style={styles.View_106_1236}>
        <View style={styles.View_I106_1236_52_32} />
        <View style={styles.View_I106_1236_52_33}>
          <Text style={styles.Text_I106_1236_52_33}>
            Обмен данными с сервером:
          </Text>
        </View>
      </View>
      <View style={styles.View_100_998}>
        <View style={styles.View_100_999} />
        <View style={styles.View_100_1000}>
          <Text style={styles.Text_100_1000}>Лазерный сканер</Text>
        </View>
        <View style={styles.View_100_1001}>
          <View style={styles.View_I100_1001_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b735354-2951-4fcf-a797-c9fb344c1d8f"
              }}
              style={styles.ImageBackground_I100_1001_48_394}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_104_1008}>
        <View style={styles.View_I104_1008_100_999} />
        <View style={styles.View_I104_1008_100_1000}>
          <Text style={styles.Text_I104_1008_100_1000}>
            Загружать изображения товаров автоматически вместе с номенклатурой
          </Text>
        </View>
        <View style={styles.View_I104_1008_100_1001}>
          <View style={styles.View_I104_1008_100_1001_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa864d95-d2be-41d5-8df8-d4d2812e8f5a"
              }}
              style={styles.ImageBackground_I104_1008_100_1001_48_394}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_104_1016}>
        <View style={styles.View_I104_1016_100_999} />
        <View style={styles.View_I104_1016_100_1000}>
          <Text style={styles.Text_I104_1016_100_1000}>
            Разрешить отправлять изображения номенклатуры на сервер
          </Text>
        </View>
        <View style={styles.View_I104_1016_100_1001}>
          <View style={styles.View_I104_1016_100_1001_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85160ff0-7152-4179-8fbd-e2e327f9be28"
              }}
              style={styles.ImageBackground_I104_1016_100_1001_48_394}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_104_1023}>
        <View style={styles.View_I104_1023_100_999} />
        <View style={styles.View_I104_1023_100_1000}>
          <Text style={styles.Text_I104_1023_100_1000}>
            Разрешить прикреплять изображения к документам и отправлять их на
            сервер.
          </Text>
        </View>
        <View style={styles.View_I104_1023_100_1001}>
          <View style={styles.View_I104_1023_100_1001_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc615f23-6d3a-48e5-8e3e-7d021eaf2820"
              }}
              style={styles.ImageBackground_I104_1023_100_1001_48_394}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_100_1006}>
        <View style={styles.View_I100_1006_100_999} />
        <View style={styles.View_I100_1006_100_1000}>
          <Text style={styles.Text_I100_1006_100_1000}>Камера устройства</Text>
        </View>
        <View style={styles.View_I100_1006_100_1001}>
          <View style={styles.View_I100_1006_100_1001_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/779b463c-86b1-47e4-8659-511ddebf6df5"
              }}
              style={styles.ImageBackground_I100_1006_100_1001_48_394}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_104_991}>
        <View style={styles.View_104_992} />
        <View style={styles.View_104_993}>
          <Text style={styles.Text_104_993}>Использовать звуки</Text>
        </View>
        <View style={styles.View_104_994}>
          <View style={styles.View_I104_994_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ca140ba-9f4a-49bd-8bed-784207d0a4bb"
              }}
              style={styles.ImageBackground_I104_994_48_394}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_104_1033}>
        <View style={styles.View_I104_1033_100_999} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_1033_100_1000}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("106_1051"))
          }
        >
          <Text style={styles.Text_I104_1033_100_1000}>
            Обмен данными по расписанию
          </Text>
        </TouchableOpacity>
        <View style={styles.View_I104_1033_100_1001}>
          <View style={styles.View_I104_1033_100_1001_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f0b9f12-2fcc-44c4-b639-d5913c747d2b"
              }}
              style={styles.ImageBackground_I104_1033_100_1001_48_394}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_104_1040}>
        <View style={styles.View_I104_1040_100_999} />
        <View style={styles.View_I104_1040_100_1000}>
          <Text style={styles.Text_I104_1040_100_1000}>
            Показывать уведомления о наличии данных для загрузки
          </Text>
        </View>
        <View style={styles.View_I104_1040_100_1001}>
          <View style={styles.View_I104_1040_100_1001_48_396}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/046333c4-10e5-47f6-9b48-8d625031202e"
              }}
              style={styles.ImageBackground_I104_1040_100_1001_48_394}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_41_828: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("11%")
  },
  View_41_829: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_41_829: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_49_1300: {
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
  View_49_1301: {
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
  View_I49_1301_12_21: {
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
  View_I49_1301_12_22: {
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
  Text_I49_1301_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1301_12_23: {
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
  TouchableOpacity_I49_1301_12_24: {
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
  ImageBackground_I49_1301_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1301_12_27: {
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
  ImageBackground_I49_1301_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1301_12_28: {
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
  View_49_1302: {
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
  View_I49_1302_12_21: {
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
  View_I49_1302_12_22: {
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
  Text_I49_1302_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_1302_12_23: {
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
  TouchableOpacity_I49_1302_12_24: {
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
  ImageBackground_I49_1302_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_1302_12_27: {
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
  ImageBackground_I49_1302_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_1302_12_28: {
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
  TouchableOpacity_49_1303: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_100_990: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I100_990_52_32: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I100_990_52_33: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I100_990_52_33: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_104_1005: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1005_52_32: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I104_1005_52_33: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_1005_52_33: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_106_1236: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I106_1236_52_32: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I106_1236_52_33: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I106_1236_52_33: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_100_998: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_100_999: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_100_1000: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_100_1000: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_100_1001: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I100_1001_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I100_1001_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1008: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1008_100_999: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I104_1008_100_1000: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_1008_100_1000: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I104_1008_100_1001: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1008_100_1001_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I104_1008_100_1001_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1016: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1016_100_999: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I104_1016_100_1000: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_1016_100_1000: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I104_1016_100_1001: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1016_100_1001_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I104_1016_100_1001_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1023: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1023_100_999: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I104_1023_100_1000: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_1023_100_1000: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I104_1023_100_1001: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1023_100_1001_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I104_1023_100_1001_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_100_1006: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I100_1006_100_999: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I100_1006_100_1000: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I100_1006_100_1000: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I100_1006_100_1001: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I100_1006_100_1001_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I100_1006_100_1001_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_991: {
    width: wp("92%"),
    height: hp("7%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_992: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_104_993: {
    flexGrow: 1,
    width: wp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_104_993: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_104_994: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_994_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I104_994_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1033: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1033_100_999: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  TouchableOpacity_I104_1033_100_1000: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_1033_100_1000: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I104_1033_100_1001: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1033_100_1001_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I104_1033_100_1001_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_1040: {
    width: wp("85%"),
    height: hp("7%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1040_100_999: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(33, 33, 33, 1)",
    opacity: 0.07999999821186066
  },
  View_I104_1040_100_1000: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_1040_100_1000: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I104_1040_100_1001: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_1040_100_1001_48_396: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  ImageBackground_I104_1040_100_1001_48_394: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
