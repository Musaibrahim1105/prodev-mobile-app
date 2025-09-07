// app/join.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "../styles/_joinstyle";

export default function Join() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleJoinNow = () => {
    // Add your join logic here (validation, API calls, etc)
    console.log("Joining with:", { email, username, password, confirmPassword });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.iconsection}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>Join Now</Text>
          {/* You can add a back button here if needed */}
        </View>

        {/* Title and Subtitle */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Create your account</Text>
          <Text style={styles.subText}>
            Join our community by filling the form below
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          {/* Email */}
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            keyboardType="email-address"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          {/* Username */}
          <Text style={styles.formLabel}>Username</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Choose a username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          {/* Password */}
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Confirm Password */}
          <Text style={styles.formLabel}>Confirm Password</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Confirm your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Join Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleJoinNow}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>

        {/* Optional: Link to Sign In */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
