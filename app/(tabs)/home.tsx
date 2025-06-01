import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Home = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
        setEmail(null);
      } else {
        setEmail(user?.email ?? null);
      }
    }

    fetchUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 50 }}>
        {email ?? "Loading..."}
      </Text>
    </View>
  );
};

export default Home;
