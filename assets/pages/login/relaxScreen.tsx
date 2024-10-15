import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import { style } from "../../components/Input/stylesRelaxScreen";  // Reutilizar seu arquivo de estilos


export default function BreathingExercise() {
    const [step, setStep] = useState("Inspire");
    const [animationValue] = useState(new Animated.Value(1));

    useEffect(() => {
        // Alterna entre inspire e expire a cada 4 segundos
        const interval = setInterval(() => {
            setStep(prevStep => prevStep === "Inspire" ? "Expire" : "Inspire");
        }, 4000);

        // Animação de expansão e contração (respiração)
        Animated.loop(
            Animated.sequence([
                Animated.timing(animationValue, {
                    toValue: 1.5,
                    duration: 4000,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
                Animated.timing(animationValue, {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.ease,
                    useNativeDriver: true,
                })
            ])
        ).start();

        return () => clearInterval(interval);
    }, [animationValue]);

    return (
        <View style={style.containerRelax}>
            <Text style={style.textTitle}>Momento para se acalmar!</Text>

            <Animated.View
                style={[
                    style.circle,
                    { transform: [{ scale: animationValue }] }
                ]}
            />

            <Text style={style.textInstruction}>{step}</Text>

        </View>
    );
}

