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
      <View style={styles.View_34_737}>
        <View style={styles.View_34_738}>
          <View style={styles.View_34_739} />
        </View>
        <View style={styles.View_34_740}>
          <View style={styles.View_34_741}>
            <Text style={styles.Text_34_741}>Чт</Text>
          </View>
          <View style={styles.View_34_742}>
            <Text style={styles.Text_34_742}>26</Text>
          </View>
        </View>
        <View style={styles.View_34_743}>
          <View style={styles.View_34_744}>
            <Text style={styles.Text_34_744}>Пт</Text>
          </View>
          <View style={styles.View_34_745}>
            <Text style={styles.Text_34_745}>27</Text>
          </View>
        </View>
        <View style={styles.View_34_746}>
          <View style={styles.View_34_747}>
            <Text style={styles.Text_34_747}>Сб</Text>
          </View>
          <View style={styles.View_34_748}>
            <Text style={styles.Text_34_748}>28</Text>
          </View>
        </View>
        <View style={styles.View_34_749}>
          <View style={styles.View_34_750}>
            <Text style={styles.Text_34_750}>Вс</Text>
          </View>
          <View style={styles.View_34_751}>
            <Text style={styles.Text_34_751}>29</Text>
          </View>
        </View>
        <View style={styles.View_34_752}>
          <View style={styles.View_34_753}>
            <Text style={styles.Text_34_753}>Пн</Text>
          </View>
          <View style={styles.View_34_754}>
            <Text style={styles.Text_34_754}>30</Text>
          </View>
        </View>
        <View style={styles.View_34_755}>
          <View style={styles.View_34_756}>
            <Text style={styles.Text_34_756}>Вт</Text>
          </View>
          <View style={styles.View_34_757}>
            <Text style={styles.Text_34_757}>31</Text>
          </View>
        </View>
        <View style={styles.View_34_758}>
          <View style={styles.View_34_759}>
            <Text style={styles.Text_34_759}>Ср</Text>
          </View>
          <View style={styles.View_34_760}>
            <Text style={styles.Text_34_760}>01</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_34_770}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1543"))
        }
      >
        <View style={styles.View_34_771} />
        <View style={styles.View_34_772}>
          <View style={styles.View_34_773} />
        </View>
        <View style={styles.View_34_774}>
          <View style={styles.View_34_775}>
            <Text style={styles.Text_34_775}>Приемка товаров от ИП Петров</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_35_864}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_1543"))
        }
      >
        <View style={styles.View_35_865} />
        <View style={styles.View_35_866}>
          <View style={styles.View_35_867} />
        </View>
        <View style={styles.View_35_868}>
          <View style={styles.View_35_869}>
            <Text style={styles.Text_35_869}>
              Пересчет серии Пеланги, иск. ротанг
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b099716-36c3-466d-9ba0-c7d15f76e041"
        }}
        style={styles.ImageBackground_34_817}
      />
      <View style={styles.View_34_840}>
        <View style={styles.View_34_845}>
          <Text style={styles.Text_34_845}>Мои задачи</Text>
        </View>
      </View>
      <View style={styles.View_49_936}>
        <View style={styles.View_49_921}>
          <View style={styles.View_I49_921_12_21}>
            <View style={styles.View_I49_921_12_22}>
              <Text style={styles.Text_I49_921_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I49_921_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I49_921_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/156c3996-6741-495c-9853-fdc2eb767c1a"
                  }}
                  style={styles.ImageBackground_I49_921_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I49_921_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c510139e-a939-40c2-a9ca-8d266604a416"
                }}
                style={styles.ImageBackground_I49_921_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I49_921_12_28} />
        </View>
        <View style={styles.View_35_846}>
          <View style={styles.View_I35_846_12_21}>
            <View style={styles.View_I35_846_12_22}>
              <Text style={styles.Text_I35_846_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I35_846_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I35_846_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d12b266-5f4a-4d47-85b5-32cc3ba696ff"
                  }}
                  style={styles.ImageBackground_I35_846_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I35_846_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f4a3bf3-d549-4079-8080-2e069c8869ce"
                }}
                style={styles.ImageBackground_I35_846_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I35_846_12_28} />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/083d2449-198d-4853-a7f1-4995bec42306"
          }}
          style={styles.TouchableOpacity_49_917}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("49_1366"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_34_737: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%")
  },
  View_34_738: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%")
  },
  View_34_739: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 87, 99, 1)"
  },
  View_34_740: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_34_741: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_741: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_34_742: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_742: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_34_743: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%")
  },
  View_34_744: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_744: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_34_745: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_745: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_34_746: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("1%")
  },
  View_34_747: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_747: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_34_748: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_748: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_34_749: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_34_750: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_750: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_34_751: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_751: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_34_752: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("1%")
  },
  View_34_753: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_753: {
    color: "rgba(248, 246, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_34_754: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_754: {
    color: "rgba(248, 246, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_34_755: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("1%")
  },
  View_34_756: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_756: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_34_757: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_757: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_34_758: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("1%")
  },
  View_34_759: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_759: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_34_760: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_760: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  TouchableOpacity_34_770: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%")
  },
  View_34_771: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_34_772: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_34_773: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_34_774: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_34_775: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_775: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_35_864: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("50%")
  },
  View_35_865: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_35_866: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_867: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_35_868: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_35_869: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_35_869: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_34_817: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("32%")
  },
  View_34_840: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("11%")
  },
  View_34_845: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_845: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_49_936: {
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
  View_49_921: {
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
  View_I49_921_12_21: {
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
  View_I49_921_12_22: {
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
  Text_I49_921_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I49_921_12_23: {
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
  TouchableOpacity_I49_921_12_24: {
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
  ImageBackground_I49_921_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I49_921_12_27: {
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
  ImageBackground_I49_921_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I49_921_12_28: {
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
  View_35_846: {
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
  View_I35_846_12_21: {
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
  View_I35_846_12_22: {
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
  Text_I35_846_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I35_846_12_23: {
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
  TouchableOpacity_I35_846_12_24: {
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
  ImageBackground_I35_846_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I35_846_12_27: {
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
  ImageBackground_I35_846_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I35_846_12_28: {
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
  TouchableOpacity_49_917: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
