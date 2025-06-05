import AuthButton from "@/components/AuthButton";
import authOtpStyle from "@/css/authOtpStyle";
import sendOTP from "@/hooks/useSendOTP";
import verifyOTP from "@/hooks/useVerifyOTP";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
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
  const [cooldown, setCooldown] = useState(60);
  const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const params = useLocalSearchParams();
  const email = Array.isArray(params.email)
    ? params.email[0]
    : params.email?.toString();

  useEffect(() => {
    let interval: number;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  const handleResend = () => {
    if (cooldown > 0) return;
    sendOTP(email);
    setCooldown(60);
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

      <TouchableOpacity onPress={handleResend} disabled={cooldown > 0}>
        <Text
          style={[authOtpStyle.resendText, cooldown > 0 && { opacity: 0.5 }]}
        >
          {cooldown > 0 ? `Resend Code (${cooldown}s)` : "Resend Code"}
        </Text>
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
