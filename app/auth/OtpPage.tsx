import authButtonStyle from "@/css/authButtonStyle";
import authOtpStyle from "@/css/authOtpStyle";
import verifyOTP from "@/hooks/useVerifyOTP";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

// TODO: Temporary solution, need to add a config or whatever to have flexibility
const CELL_COUNT = 6;

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const params = useLocalSearchParams();
  const email = Array.isArray(params.email)
    ? params.email[0]
    : params.email?.toString();

  return (
    <View style={authOtpStyle.container}>
      <Text style={authOtpStyle.title}>Enter the OTP</Text>

      <CodeField
        ref={ref}
        {...props}
        value={otp}
        onChangeText={setOtp}
        cellCount={CELL_COUNT}
        rootStyle={authOtpStyle.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[authOtpStyle.cell, isFocused && authOtpStyle.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={authOtpStyle.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <Pressable
        onPress={() => verifyOTP(email, otp)}
        style={[authButtonStyle.button, { marginTop: 30 }]}
      >
        <Text style={authButtonStyle.buttonText}>Verify</Text>
      </Pressable>
    </View>
  );
};

export default OtpPage;
