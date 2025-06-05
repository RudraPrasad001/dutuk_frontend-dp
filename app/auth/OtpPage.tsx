import AuthOTP from "@/components/AuthOTP";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const OtpPage = () => {
  const params = useLocalSearchParams();
  const email = params.email;

  return (
    <AuthOTP
      email={email}
      cell_count={6}
      route={"/(tabs)/home"}
      title="Verify your email"
      subtitle="Enter the 6-digit code sent to your email"
    />
  );
};

export default OtpPage;
