// import { Text, TouchableOpacity, StyleSheet } from 'react-native'
// import React from 'react'
// import COLORS from '../constants/colors';

// const Button = (props) => {
//     const filledBgColor = props.color || COLORS.merigold;
//     const outlinedColor = COLORS.merigold;
//     const bgColor = props.filled ? filledBgColor : outlinedColor;
//     const textColor = props.filled ? COLORS.white : COLORS.black;

//     return (
//         <TouchableOpacity
//             style={{
//                 ...styles.button,
//                 ...{ backgroundColor: bgColor },
//                 ...props.style
//             }}
//             onPress={props.onPress}
//         >
//             <Text style={{ fontSize: 20, ... { color: textColor } }}>{props.title}</Text>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     button: {
//         paddingTop: 14,
//         paddingBottom: 14,
//         paddingVertical: 10,
//         borderColor: COLORS.merigold,
//         borderWidth: 2,
//         borderRadius: 12,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })
// export default Button




import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';

const Button = (props) => {
    const filledBgColor = props.color || COLORS.merigold;
    const outlinedColor = COLORS.merigold;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.powder : COLORS.powder;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: bgColor,
                ...props.style,
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowOpacity: 1,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        }
                    },
                    android: {
                        elevation: 2
                    }
                })
            }}
            onPress={props.onPress}
            activeOpacity={0.7}
        >
            <Text style={{ fontSize: 30, color: textColor, fontWeight: 'bold' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.merigold,
        marginVertical: 10
    }
})

export default Button