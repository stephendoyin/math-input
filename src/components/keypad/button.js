import React from "react";

import {StyleSheet} from "aphrodite";
import {View} from "@khanacademy/wonder-blocks-core";
import Color from "@khanacademy/wonder-blocks-color";

import Clickable from "@khanacademy/wonder-blocks-clickable";

type Props = {
    onPress: () => void,
};

const styles = StyleSheet.create({
    base: {
        width: 44,
        height: 44,
        boxShadow: "0px 1px 0px rgba(33, 36, 44, 0.32)",
        boxSizing: "border-box",
        background: Color.white,
        borderRadius: 4,
        border: `1px solid transparent`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    hovered: {
        border: `1px solid ${Color.blue}`,
        boxShadow: "none",
    },
    focused: {
        border: `2px solid ${Color.blue}`,
        boxShadow: "none",
    },
    pressed: {
        border: "2px solid #1B50B3",
        background:
            "linear-gradient(0deg, rgba(24, 101, 242, 0.32), rgba(24, 101, 242, 0.32)), #FFFFFF",
        boxShadow: "none",
    },
    outerBoxBase: {
        height: 48,
        width: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "borderBox",
        borderRadius: 7,
        border: "2px solid transparent",
    },
    outerBoxHover: {
        border: "2px solid #1865F2",
    },
    outerBoxPressed: {
        border: "2px solid #1B50B3",
    },
});
export default class Button extends React.Component {
    render() {
        const {onPress} = this.props;
        return (
            <Clickable onClick={onPress}>
                {({hovered, focused, pressed}) => {
                    return (
                        <View
                            style={[
                                styles.outerBoxBase,
                                hovered && styles.outerBoxHover,
                                pressed && styles.outerBoxPressed,
                            ]}
                        >
                            <View
                                style={[
                                    styles.base,
                                    hovered && styles.hovered,
                                    focused && styles.focused,
                                    pressed && styles.pressed,
                                ]}
                            >
                                <p>1</p>
                            </View>
                        </View>
                    );
                }}
            </Clickable>
        );
    }
}
