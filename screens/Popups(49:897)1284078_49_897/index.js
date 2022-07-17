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
      <TouchableOpacity
        style={styles.TouchableOpacity_41_891}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("34_712"))
        }
      >
        <View style={styles.View_41_892} />
        <View style={styles.View_41_893}>
          <Text style={styles.Text_41_893}>открыть Задачи</Text>
        </View>
        <View style={styles.View_41_894}>
          <Text style={styles.Text_41_894}>У вас 2 новых задачи.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_49_898}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("41_693"))
        }
      >
        <View style={styles.View_I49_898_41_892} />
        <View style={styles.View_I49_898_41_893}>
          <Text style={styles.Text_I49_898_41_893}>открыть документы</Text>
        </View>
        <View style={styles.View_I49_898_41_894}>
          <Text style={styles.Text_I49_898_41_894}>
            Получено 2 новых документа.
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_41_891: {
    width: wp("94%"),
    height: hp("32%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_41_892: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  View_41_893: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_41_893: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_41_894: {
    flexGrow: 1,
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_41_894: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  TouchableOpacity_49_898: {
    width: wp("94%"),
    height: hp("32%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I49_898_41_892: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(2, 2, 2, 1)"
  },
  View_I49_898_41_893: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I49_898_41_893: {
    color: "rgba(2, 2, 2, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I49_898_41_894: {
    flexGrow: 1,
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I49_898_41_894: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
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
