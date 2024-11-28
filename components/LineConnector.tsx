import React from "react";
import { View, StyleSheet } from "react-native";

interface LineConnectorProps {
  direction: "horizontal" | "vertical";
  length: number;
  hide: boolean;
}

const LineConnector: React.FC<LineConnectorProps> = ({
  direction,
  length,
  hide,
}) => {
  return (
    <View
      style={[
        hide ? { backgroundColor: "#f0f8ff" } : { backgroundColor: "#ccc" },
        direction === "horizontal"
          ? { width: length, height: 2 }
          : { width: 2, height: length },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#ccc",
  },
});

export default LineConnector;
