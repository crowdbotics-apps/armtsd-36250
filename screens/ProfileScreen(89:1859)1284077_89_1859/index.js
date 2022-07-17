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
      <View style={styles.View_89_1862}>
        <View style={styles.View_89_1863}>
          <Text style={styles.Text_89_1863}>Мой профиль</Text>
        </View>
      </View>
      <View style={styles.View_89_1864}>
        <View style={styles.View_89_1865}>
          <View style={styles.View_I89_1865_12_21}>
            <View style={styles.View_I89_1865_12_22}>
              <Text style={styles.Text_I89_1865_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I89_1865_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I89_1865_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d891e8d3-156e-4c63-bfeb-4b20e198d4d7"
                  }}
                  style={styles.ImageBackground_I89_1865_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I89_1865_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e6a2ad4-d62a-4057-bd3f-b06255bc79dc"
                }}
                style={styles.ImageBackground_I89_1865_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I89_1865_12_28} />
        </View>
        <View style={styles.View_89_1866}>
          <View style={styles.View_I89_1866_12_21}>
            <View style={styles.View_I89_1866_12_22}>
              <Text style={styles.Text_I89_1866_12_22}>ARM TSD, v.2.0</Text>
            </View>
            <View style={styles.View_I89_1866_12_23}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I89_1866_12_24}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("49_897"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba84e202-ce6c-4d15-837f-49349a5a3222"
                  }}
                  style={styles.ImageBackground_I89_1866_12_24_37_1046}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I89_1866_12_27}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("14_4038"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5449b07-3387-447b-88cd-b3979c850bed"
                }}
                style={styles.ImageBackground_I89_1866_12_27_37_1060}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_I89_1866_12_28} />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f0082b5-ec71-4ecd-b05d-d44629d46cf1"
          }}
          style={styles.TouchableOpacity_89_1867}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("49_1366"))
          }
        />
      </View>
      <View style={styles.View_89_1922}>
        <View style={styles.View_89_1926}>
          <View style={styles.View_89_1927}>
            <Text style={styles.Text_89_1927}>Иван Иванов</Text>
          </View>
          <View style={styles.View_89_1928}>
            <Text style={styles.Text_89_1928}>Кладовщик</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89643602-0e42-4a70-b912-7b36fb0faa1e"
        }}
        style={styles.ImageBackground_89_1950}
      />
      <View style={styles.View_89_1952}>
        <View style={styles.View_89_1955}>
          <View style={styles.View_I89_1955_70_2053}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d91e67cc-8b41-42ab-bed4-8aff6384fcc0"
              }}
              style={styles.ImageBackground_I89_1955_70_2054}
            />
          </View>
        </View>
        <View style={styles.View_89_1954}>
          <Text style={styles.Text_89_1954}>Использовать уведомления</Text>
        </View>
        <View style={styles.View_89_1962}>
          <View style={styles.View_89_1963} />
          <View style={styles.View_89_1964} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_89_1965}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("87_1152"))
        }
      >
        <View style={styles.View_89_1966} />
        <View style={styles.View_89_1967}>
          <Text style={styles.Text_89_1967}>Выход из системы</Text>
        </View>
        <View style={styles.View_89_1968}>
          <View style={styles.View_I89_1968_71_2074}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4813b665-f1dd-477e-a05e-05a57b7328e2"
              }}
              style={styles.ImageBackground_I89_1968_71_2075}
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
  View_89_1862: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("11%")
  },
  View_89_1863: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_89_1863: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_89_1864: {
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
  View_89_1865: {
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
  View_I89_1865_12_21: {
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
  View_I89_1865_12_22: {
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
  Text_I89_1865_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I89_1865_12_23: {
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
  TouchableOpacity_I89_1865_12_24: {
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
  ImageBackground_I89_1865_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I89_1865_12_27: {
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
  ImageBackground_I89_1865_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I89_1865_12_28: {
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
  View_89_1866: {
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
  View_I89_1866_12_21: {
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
  View_I89_1866_12_22: {
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
  Text_I89_1866_12_22: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I89_1866_12_23: {
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
  TouchableOpacity_I89_1866_12_24: {
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
  ImageBackground_I89_1866_12_24_37_1046: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_I89_1866_12_27: {
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
  ImageBackground_I89_1866_12_27_37_1060: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I89_1866_12_28: {
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
  TouchableOpacity_89_1867: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_89_1922: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("22%")
  },
  View_89_1926: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_89_1927: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_89_1927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_89_1928: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_89_1928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_89_1950: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("22%")
  },
  View_89_1952: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_89_1955: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I89_1955_70_2053: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I89_1955_70_2054: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_89_1954: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_89_1954: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_89_1962: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("3%")
  },
  View_89_1963: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_89_1964: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(151, 151, 151, 1)"
  },
  TouchableOpacity_89_1965: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("67%")
  },
  View_89_1966: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(217, 217, 217, 1)",
    borderWidth: 1
  },
  View_89_1967: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_89_1967: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_89_1968: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I89_1968_71_2074: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I89_1968_71_2075: {
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
