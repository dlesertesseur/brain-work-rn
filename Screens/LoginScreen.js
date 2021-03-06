import React, { useState, useRef, useEffect } from "react";
import { getErrorMessage, stringTable } from "../Styles/StringTable";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { login } from "../Features/Auth";
import { schemaEmail, schemaPassword } from "../Util/validateSchemas";
import { colors } from "../Styles/Colors";
import BaseScreen from "./BaseScreen";
import CustomTextInput from "../Components/CustomTextInput";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const focusRef = useRef(null);

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth.value);

  const onLogin = () => {
    const validateEmail = schemaEmail.validate({ email: email });
    const validatePassword = schemaPassword.validate({ password: password });

    if (validateEmail.error) {
      setEmailError(validateEmail.error.message);
    } else {
      setEmailError("");
      if (validatePassword.error) {
        setPasswordError(validatePassword.error.message);
      } else {
        setPasswordError("");
        dispatch(login({ email: email, password: password }));
      }
    }
  };

  const onSingIn = () => {
    navigation.navigate("SignUp");
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  useEffect(() => {
    if (error.trim() != "") {
      setLoginError(getErrorMessage(error));
      console.log("LoginScreen::useEffect(" + error + ")");
    } else {
      setLoginError("");
    }
  }, [error]);

  return (
    <BaseScreen bottomSpace={0}>
      <View style={styles.container}>
        <View style={styles.panel}>
          <CustomTextInput
            label={stringTable.LB_EMAIL}
            value={email}
            setValue={setEmail}
            error={emailError}
            focusRef={focusRef}
          />
          <CustomTextInput
            label={stringTable.LB_PASSWORD}
            password={true}
            value={password}
            setValue={setPassword}
            error={passwordError}
          />
          <TouchableOpacity style={styles.btLogin} onPress={onLogin}>
            <Text style={styles.btLoginText}> {stringTable.BT_LOGIN} </Text>
            {loading ? (
              <ActivityIndicator
                style={styles.indicator}
                size="small"
                color={colors.textInputBack}
              />
            ) : (
              <></>
            )}
          </TouchableOpacity>

          {loginError ? (
            <Text style={styles.textError}>{loginError}</Text>
          ) : (
            <></>
          )}

          <TouchableOpacity style={styles.btText} onPress={onSingIn}>
            <Text style={styles.text}> {stringTable.BT_SIGNUP_NEW_USER} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  panel: {
    borderRadius: 8,
    backgroundColor: colors.primaryLighter,
    width: "100%",
    padding: 10,
  },

  btText: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    color: colors.primary,
  },

  text: {
    fontSize: 18,
    color: colors.primaryDarker,
    fontWeight: "bold",
  },

  btLogin: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryDarker,
    marginBottom: 15,
  },

  btLoginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },

  indicator: {
    marginHorizontal: 5,
  },

  textError: {
    color: colors.error,
    fontSize: 15,
    fontWeight: "bold",
  },
});
