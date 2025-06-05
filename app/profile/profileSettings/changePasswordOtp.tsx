import AuthButton from "@/components/AuthButton";
import authOtpStyle from "@/css/authOtpStyle";
import verifyPasswordOtp from "@/hooks/useChangePassword";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

// TODO: Temporary solution, need to add a config or whatever to have flexibility
const CELL_COUNT = 6;

const ChangePasswordOtpPage = () => {
  const [otp, setOtp] = useState("");
  const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const params = useLocalSearchParams();
  console.log(params);
  const email = params.email;
  const oldPass = params.oldPassword.toString();
  const newPass = params.newPassword.toString();
  const newRPass = params.reNewPassword.toString();
  const userId = params.userId.toString();

  console.log(email);

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
      <AuthButton
        buttonText="Verify"
        buttonColorType="buttonSecondary"
        onPress={() => verifyPasswordOtp(email, otp,oldPass,newPass,newRPass,userId)}
      />
    </View>
  );
};

export default ChangePasswordOtpPage;
