import AuthButton from "@/components/AuthButton";
import authOtpStyle from "@/css/authOtpStyle";
import getUserEmail from "@/hooks/useGetUserEmail";
import sendOTP from "@/hooks/useSendOTP";
import verifyOTP from "@/hooks/useVerifyOTP";
import React, { useEffect, useState } from "react";
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
  const [email, setEmail] = useState<string | null>(null);
  const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  useEffect(() => {
    const fetchEmail = async () => {
      const userEmail: any = await getUserEmail();
      setEmail(userEmail);
    };

    fetchEmail();
  }, []);

  useEffect(() => {
    if (email != null) {
      console.log("Call from changePasswordOTP", email);
      sendOTP(email);
    }
  }, [email]);

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
        onPress={() =>
          verifyOTP(email, otp, "/profile/profileSettings/changePassword")
        }
      />
    </View>
  );
};

export default ChangePasswordOtpPage;
