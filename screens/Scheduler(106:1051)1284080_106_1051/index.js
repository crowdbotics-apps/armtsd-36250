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
      <View style={styles.View_106_1052} />
      <View style={styles.View_106_1053} />
      <View style={styles.View_106_1057} />
      <View style={styles.View_106_1058} />
      <View style={styles.View_106_1059} />
      <View style={styles.View_106_1060} />
      <View style={styles.View_106_1061} />
      <View style={styles.View_106_1062} />
      <View style={styles.View_106_1063} />
      <View style={styles.View_106_1064}>
        <Text style={styles.Text_106_1064}>Пн</Text>
      </View>
      <View style={styles.View_106_1065}>
        <Text style={styles.Text_106_1065}>Ср</Text>
      </View>
      <View style={styles.View_106_1066}>
        <Text style={styles.Text_106_1066}>СБ</Text>
      </View>
      <View style={styles.View_106_1067}>
        <Text style={styles.Text_106_1067}>Вт</Text>
      </View>
      <View style={styles.View_106_1068}>
        <Text style={styles.Text_106_1068}>Пт</Text>
      </View>
      <View style={styles.View_106_1069}>
        <Text style={styles.Text_106_1069}>Чт</Text>
      </View>
      <View style={styles.View_106_1070}>
        <Text style={styles.Text_106_1070}>Вс</Text>
      </View>
      <View style={styles.View_106_1078}>
        <Text style={styles.Text_106_1078}>08:00 am</Text>
      </View>
      <View style={styles.View_106_1079}>
        <Text style={styles.Text_106_1079}>09:45 am</Text>
      </View>
      <View style={styles.View_106_1080}>
        <Text style={styles.Text_106_1080}>10:50 am</Text>
      </View>
      <View style={styles.View_106_1081}>
        <Text style={styles.Text_106_1081}>02:40 pm</Text>
      </View>
      <View style={styles.View_106_1082}>
        <Text style={styles.Text_106_1082}>04:00 pm</Text>
      </View>
      <View style={styles.View_106_1083}>
        <Text style={styles.Text_106_1083}>06:00 pm</Text>
      </View>
      <View style={styles.View_106_1084}>
        <View style={styles.View_106_1085} />
        <View style={styles.View_106_1086} />
      </View>
      <View style={styles.View_106_1087}>
        <View style={styles.View_106_1088} />
        <View style={styles.View_106_1089} />
      </View>
      <View style={styles.View_106_1090}>
        <View style={styles.View_106_1091} />
        <View style={styles.View_106_1092} />
      </View>
      <View style={styles.View_106_1093}>
        <View style={styles.View_106_1094} />
        <View style={styles.View_106_1095} />
      </View>
      <View style={styles.View_106_1096}>
        <View style={styles.View_106_1097} />
        <View style={styles.View_106_1098} />
      </View>
      <View style={styles.View_106_1099}>
        <View style={styles.View_106_1100} />
        <View style={styles.View_106_1101} />
      </View>
      <View style={styles.View_106_1102}>
        <Text style={styles.Text_106_1102}>Обновление всех справочников</Text>
      </View>
      <View style={styles.View_106_1103}>
        <Text style={styles.Text_106_1103}>Обновление спр. Номенклатура</Text>
      </View>
      <View style={styles.View_106_1104}>
        <Text style={styles.Text_106_1104}>Загрузка расходных ордеров</Text>
      </View>
      <View style={styles.View_106_1105}>
        <Text style={styles.Text_106_1105}>Загрузка приходных ордеров</Text>
      </View>
      <View style={styles.View_106_1106}>
        <Text style={styles.Text_106_1106}>Обновление спр. Номенклатура</Text>
      </View>
      <View style={styles.View_106_1107}>
        <Text style={styles.Text_106_1107}>Обновление спр. Номенклатура</Text>
      </View>
      <View style={styles.View_106_1108}>
        <Text style={styles.Text_106_1108}>Выгрузка приходных ордеров</Text>
      </View>
      <View style={styles.View_106_1109}>
        <Text style={styles.Text_106_1109}>Загрузка инвентаризаций</Text>
      </View>
      <View style={styles.View_106_1110}>
        <Text style={styles.Text_106_1110}>Загрузка всех документов</Text>
      </View>
      <View style={styles.View_106_1111}>
        <Text style={styles.Text_106_1111}>Обновление спр. Номенклатура </Text>
      </View>
      <View source={{ uri: "null" }} style={styles.View_106_1113} />
      <View source={{ uri: "null" }} style={styles.View_106_1115} />
      <View style={styles.View_106_1135} />
      <View style={styles.View_106_1136} />
      <View style={styles.View_106_1137} />
      <View style={styles.View_106_1138} />
      <View style={styles.View_106_1144}>
        <View style={styles.View_106_1145}>
          <Text style={styles.Text_106_1145}>Расписание обмена данными</Text>
        </View>
      </View>
      <View style={styles.View_106_1206}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d09483b-43ff-469e-864e-043b86d5ffae"
          }}
          style={styles.ImageBackground_I106_1206_160_15408}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_106_1052: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("85%"),
    backgroundColor: "rgba(151, 151, 151, 1)"
  },
  View_106_1053: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 48, 73, 1)",
    opacity: 0.4000000059604645
  },
  View_106_1057: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    backgroundColor: "rgba(30, 29, 29, 1)"
  },
  View_106_1058: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_106_1059: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_106_1060: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_106_1061: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_106_1062: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_106_1063: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_106_1064: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_106_1064: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1065: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_106_1065: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1066: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_106_1066: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1067: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_106_1067: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1068: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_106_1068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1069: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_106_1069: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1070: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_106_1070: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1078: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_106_1078: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1079: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_106_1079: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1080: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_106_1080: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1081: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_106_1081: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1082: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_106_1082: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1083: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_106_1083: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_1084: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("28%")
  },
  View_106_1085: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1086: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(151, 151, 151, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4
  },
  View_106_1087: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("42%")
  },
  View_106_1088: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1089: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 205, 205, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4
  },
  View_106_1090: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("58%")
  },
  View_106_1091: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1092: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4
  },
  View_106_1093: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("69%")
  },
  View_106_1094: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1095: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 205, 205, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4
  },
  View_106_1096: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("84%")
  },
  View_106_1097: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1098: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4
  },
  View_106_1099: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("98%")
  },
  View_106_1100: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 48, 73, 1)",
    opacity: 0.25
  },
  View_106_1101: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 48, 73, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4
  },
  View_106_1102: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_106_1102: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1103: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_106_1103: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1104: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_106_1104: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1105: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_106_1105: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1106: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_106_1106: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1107: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_106_1107: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1108: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_106_1108: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1109: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_106_1109: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1110: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_106_1110: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1111: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_106_1111: {
    color: "rgba(30, 29, 29, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_106_1113: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("20%")
  },
  View_106_1115: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("86%")
  },
  View_106_1135: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("31%"),
    backgroundColor: "rgba(151, 151, 151, 1)"
  },
  View_106_1136: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("46%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1137: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("61%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1138: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("72%"),
    backgroundColor: "rgba(205, 205, 205, 1)"
  },
  View_106_1144: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("4%")
  },
  View_106_1145: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_106_1145: {
    color: "rgba(54, 57, 66, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_106_1206: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I106_1206_160_15408: {
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
