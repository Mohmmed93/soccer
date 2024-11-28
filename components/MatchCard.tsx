import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Match } from "../app/(tabs)/data/sample-data";

interface MatchCardProps {
  match: Match;
  levelIndex: number;
  isDrag: boolean;
  index: number;
  isLast: boolean;
}

const MatchCard: React.FC<MatchCardProps> = React.memo(
  ({ match, levelIndex, isDrag, index, isLast }) => {
    const calculateMarginTop = useCallback(
      (index: number, isDrag: boolean, level: number) => {
        if (level === 1) {
          if (isDrag) {
            return index === 0 ? -12 : -17;
          } else {
            return index === 0 ? -33 : -29;
          }
        } else {
          if (isDrag) {
            return -72;
          } else {
            return -95;
          }
        }
      },
      []
    );

    return (
      <View style={styles.container}>
        {levelIndex > 0 && <View style={styles.line} />}
        <View style={styles.card}>
          <View style={styles.teamContainer}>
            <Image source={{ uri: match.home_team.flag }} style={styles.flag} />
            <Text style={styles.teamName}>{match.home_team.name}</Text>
            <Text style={styles.score}>{match.home_team.score}</Text>
          </View>
          <View style={styles.teamContainer}>
            <Image source={{ uri: match.away_team.flag }} style={styles.flag} />
            <Text style={styles.teamName}>{match.away_team.name}</Text>
            <Text style={styles.score}>{match.away_team.score}</Text>
          </View>
        </View>
        {!isLast && <View style={styles.line} />}
        <View
          style={[
            styles.verticalLine,
            {
              alignSelf: index % 2 === 0 ? "flex-end" : "flex-start",
              height: isDrag ? 95 * levelIndex : 136 * levelIndex,
              top: calculateMarginTop(index, isDrag, levelIndex),
            },
          ]}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: "center",
    width: 200,
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  flag: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  teamName: {
    flex: 1,
  },
  score: {
    fontWeight: "bold",
  },
  line: {
    backgroundColor: "#ccc",
    height: 2,
    width: 20,
  },
  verticalLine: {
    position: "absolute",
    backgroundColor: "#ccc",
    width: 2,
  },
});

export default MatchCard;
