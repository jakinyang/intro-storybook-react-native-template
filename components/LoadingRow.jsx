import { View, Text, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';

function GlowView({ style, children }) {
    const [ glowAnim ] = useState(new Animated.Value(0.3))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(glowAnim, {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
                Animated.timing(glowAnim, {
                    toValue: 0.3,
                    duration: 1500,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [])

    return (
        <Animated.View style={{ ...style, opacity: glowAnim }}>
            {children}
        </Animated.View>
    )
}

export function LoadingRow() {
    return (
        <View style={styles.container}>
            <GlowView>
                <View style={styles.loadingItem}>
                    <View style={styles.glowCheckbox} />
                    <Text style={styles.glowText}>Loading</Text>
                    <Text style={styles.glowText}>cool</Text>
                    <Text style={styles.glowText}>state</Text>
                </View>
            </GlowView>
        </View>
    )
}