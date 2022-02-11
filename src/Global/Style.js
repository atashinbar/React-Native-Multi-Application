import { Dimensions } from "react-native";
const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
export function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
export function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}
const CColor = {
    black: "#011627",
    red: "#FF3366",
    green: "#2EC4B6",
    white: "#F6F7F8",
    blue: "#336699",
    purpule: "#6461A0",
    buttonBgColor: "#0A81D1",
    lightGray: "#E5E5E5",
    pieBackGround: "#ededed",
};

export { CColor };
