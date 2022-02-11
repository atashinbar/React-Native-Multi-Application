import React, { useEffect, useRef } from 'react'
import { TouchableOpacity, Animated, StyleSheet, Text, View } from 'react-native'
import { CColor, wp } from '../../Global/Style'
interface SwitchType {
	onSwitchClick: () => void
	isOn: boolean
	size?: string
	alwaysOn?: boolean
	style?: object
	label?: string
}
const Switch = (props: SwitchType) => {
	const { onSwitchClick, isOn, size, alwaysOn, style, label } = props
	const transferAnim = useRef(new Animated.Value(0)).current
	const isSmall = size === 'large' ? false : true
	useEffect(() => {
		if (isOn) {
			Animated.spring(transferAnim, {
				toValue: isSmall ? 40 : 27.5,
				useNativeDriver: true
			}).start()
		} else {
			Animated.spring(transferAnim, {
				toValue: 0,
				useNativeDriver: true
			}).start()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOn])
	return (
		<View>
			{label ? <Text style={styles.text}>{label}</Text> : null}
			<TouchableOpacity
				activeOpacity={0.9}
				style={[
					isSmall ? styles.switchSmall : styles.switch,
					isOn || alwaysOn ? { backgroundColor: CColor.blue } : null,
					style
				]}
				onPress={onSwitchClick}>
				<Animated.View
					style={[
						isSmall ? styles.circleSmall : styles.circle,
						{
							transform: [
								{
									translateX: transferAnim
								}
							]
						}
					]}
				/>
			</TouchableOpacity>
		</View>
	)
}
export { Switch }
const styles = StyleSheet.create({
	switch: {
		width: 60,
		height: 34,
		borderRadius: 100,
		justifyContent: 'center',
		paddingHorizontal: 1,
		backgroundColor: CColor.black,
		marginBottom: wp(5)
	},
	switchSmall: {
		width: wp(12),
		height: wp(5),
		borderRadius: 100,
		justifyContent: 'center',
		paddingHorizontal: 1,
		backgroundColor: CColor.black
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 100,
		backgroundColor: CColor.white
	},
	circleSmall: {
		width: wp(4),
		height: wp(4),
		borderRadius: 100,
		borderColor: CColor.blue,
		backgroundColor: CColor.white
	},
	text: {
		fontSize: wp(4),
		fontWeight: 'bold'
	}
})
