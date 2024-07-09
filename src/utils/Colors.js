import { moderateScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const BG_COLOR = "#FFFFFF";
export const TEXT_COLOR = "#000000";

const COLORS = {
  primary: "#059212",
  secondary: "#2AC843",
  tertiary: "#EEFFEE",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const SIZES = {
  xSmall: moderateScale(10),
  small: moderateScale(12),
  medium: moderateScale(16),
  large: moderateScale(20),
  xLarge: moderateScale(24),
  xxLarge: moderateScale(44),
  height,
  width,
};

const FONT = {
  regular: require("./fonts/DMSans-Regular.ttf"),
  medium: require("./fonts/DMSans-Medium.ttf"),
  bold: require("./fonts/DMSans-Bold.ttf"),
};
export { COLORS, SIZES, FONT };
