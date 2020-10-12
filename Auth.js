import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    Easing,
    Image,
    InputView,
} from "react-native";
import styled from "styled-components/native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as Firebase from "firebase";
import firebaseConfig from "./firebase/ApiKeys.js";
import logo from "./assets/logo.png";
import loginBackdrop from "./assets/loginBackdrop.png";
import facebookIcon from "./src/Auth-Icons/facebookIcon.png";
import googleIcon from "./src/Auth-Icons/googleIcon.png";
import appleIcon from "./src/Auth-Icons/appleIcon.png";
import { AuthContext } from "./context/AuthProvider.js";

const Container = styled.View`
    width: 100%;
    height: 100%;

    background-color: #38276b;

    align-items: center;
    justify-content: center;
`;
const Header = styled.Image`
    width: 100%;
    height: 120px;

    margin-bottom: 10px;
`;
const AuthContainer = styled.View`
    width: 100%;

    align-items: center;

    margin-bottom: 10px;
`;
const AuthBackground = styled.View`
    width: 200px;
    height: 50px;

    background-color: #fff;

    border-radius: 100px;

    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;
const AuthBackgroundText = styled.TouchableOpacity`
    width: 50%;
    height: 100%;

    align-items: center;
    justify-content: center;
`;
const AuthText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #dc2788;
`;
const SliderText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: 700;
`;
const Backdrop = styled.Image`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0px;
    left: 0px;

    z-index: -1;

    opacity: 0.7;
`;
const FieldsContainer = styled.View`
    width: 100%;

    padding: 0px 40px;
    margin-top: 10px;
`;
const Field = styled.TextInput`
    color: #fff;
    border-bottom-color: #fff;
    border-bottom-width: 2px;
    font-size: 18px;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const SubmitButton = styled.TouchableOpacity`
    width: 40%;
    height: 50px;
    background-color: #dc2788;
    align-self: center;

    align-items: center;
    justify-content: center;

    border-radius: 100px;

    margin-top: 10px;
`;
const ExternalSocialLoginContainer = styled.View`
    width: 100%;
    padding: 0px 40px;
    margin-top: 20px;
`;
const ExternalSocialLogin = styled.TouchableOpacity`
    width: 100%;
    margin: auto;
    height: 50px;
    background-color: ${props => props.color};
    margin-bottom: 5px;
    margin-top: 5px;
    border-radius: 100px;

    flex-direction: row;
    padding-left: 25px;
    padding-right: 25px;

    align-items: center;
    justify-content: space-between;
    position: relative;
`;
const ExternalSocialIcon = styled.Image`
    /* border: 2px solid red; */
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 20px;
`;
const ExternalSocialText = styled.Text`
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    color: ${props => props.fontColor || "#fff"};
`;

const Auth = ({ navigation, authenticated }) => {
    const [authState, setAuthState] = useState("LOGIN");
    const [fields, setFields] = useState({
        name: "FIRST NAME",
        phone: "PHONE NUMBER",
    });
    const [code, setCode] = useState("CONFIRM CODE")
    const sliderAnim = useRef(new Animated.Value(0)).current;
    const yeets = useRef(null);
    const { loginWGoogle, loginWFacebook, userState, sendVerification, recaptchaVerifier, confirmCode } = useContext(AuthContext);

    const clearText = e => {
        const { text } = e.nativeEvent;
        text === "FIRST NAME"
            ? setFields(prev => {
                  return {
                      ...prev,
                      name: "",
                  };
              })
            : setFields(prev => {
                  return {
                      ...prev,
                      phone: "",
                  };
              });
    };
    
    const signupAnim = () => {
        Animated.timing(sliderAnim, {
            toValue: 100,
            duration: 500,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false,
        }).start();
    };

    const loginAnim = () => {
        Animated.timing(sliderAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        if (userState) {
            navigation.navigate("Dashboard");
        }
    }, [userState]);
    
    return (
        <Container>
            <StatusBar style='light' />
            <Header source={logo} />
            <AuthContainer>
                <AuthBackground>
                    <Animated.View
                        style={{
                            position: "absolute",
                            left: sliderAnim,
                            backgroundColor: "#dc2788",
                            width: 100,
                            borderRadius: 100,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                        }}
                    >
                        <SliderText>{authState}</SliderText>
                    </Animated.View>
                    <AuthBackgroundText
                        onPress={() => {
                            setAuthState("LOGIN");
                            loginAnim();
                        }}
                    >
                        <AuthText>LOGIN</AuthText>
                    </AuthBackgroundText>
                    <AuthBackgroundText
                        onPress={() => {
                            setAuthState("SIGN UP");
                            signupAnim();
                        }}
                    >
                        <AuthText>SIGN UP</AuthText>
                    </AuthBackgroundText>
                </AuthBackground>
            </AuthContainer>
            <FieldsContainer>
                <Field
                    value={fields.name}
                    onFocus={clearText}
                    onChangeText={(name) => setFields({...fields,name: name})}
                />
                <Field
                    value={fields.phone}
                    onFocus={clearText}
                    onChangeText={(phone) => setFields({...fields,phone: phone})}
                />
                <SubmitButton onPress={() => sendVerification(fields.phone)}>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "700",
                        }}
                    >
                        SUBMIT
                    </Text>
                </SubmitButton>
                <Field 
                    value={code} 
                    onFocus={clearText}
                    onChangeText={setCode}
                />
                <SubmitButton onPress={() => confirmCode(code)}>
                    <Text
                          style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "700",
                        }}
                    >
                        LOGIN
                    </Text>
                </SubmitButton>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                />
            </FieldsContainer>
            <ExternalSocialLoginContainer>
                <ExternalSocialLogin
                    color='#4267B2'
                    onPress={() => {
                        loginWFacebook();
                    }}
                >
                    <ExternalSocialIcon
                        source={facebookIcon}
                        style={{ resizeMode: "cover" }}
                    />
                    <ExternalSocialText>
                        SIGN IN WITH FACEBOOK
                    </ExternalSocialText>
                </ExternalSocialLogin>
                <ExternalSocialLogin
                    color='#fff'
                    onPress={() => {
                        loginWGoogle();
                    }}
                >
                    <ExternalSocialIcon source={googleIcon} />
                    <ExternalSocialText fontColor='#000'>
                        SIGN IN WITH GOOGLE
                    </ExternalSocialText>
                </ExternalSocialLogin>
                <ExternalSocialLogin color='#000'>
                    <ExternalSocialIcon source={appleIcon} />
                    <ExternalSocialText>SIGN IN WITH APPLE</ExternalSocialText>
                </ExternalSocialLogin>
            </ExternalSocialLoginContainer>
            <Backdrop source={loginBackdrop} />
        </Container>
    );
};

export default Auth;
