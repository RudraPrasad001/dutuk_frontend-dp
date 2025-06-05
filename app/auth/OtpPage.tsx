import AuthButton from "@/components/AuthButton";
import authOtpStyle from "@/css/authOtpStyle";
import verifyOTP from "@/hooks/useVerifyOTP";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

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

  const handleResend = () => {
    console.log("Resend OTP to:", email);
  };

  return (
    <View style={authOtpStyle.container}>
      <Text style={authOtpStyle.title}>Verify Your Email</Text>
      <Text style={authOtpStyle.subtitle}>
        Enter the 6-digit code sent to your email
      </Text>

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

      <TouchableOpacity onPress={handleResend}>
        <Text style={authOtpStyle.resendText}>Resend Code</Text>
      </TouchableOpacity>

      <View style={authOtpStyle.buttonWrapper}>
        <AuthButton
          buttonText="Verify"
          buttonColorType="buttonSecondary"
          onPress={() => verifyOTP(email, otp)}
          width={140}
          height={60}
        />
      </View>
    </View>
  );
};

export default OtpPage;
