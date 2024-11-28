import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { Match } from "../app/(tabs)/data/sample-data";
import MatchCard from "./MatchCard";
import LineConnector from "./LineConnector";

interface LevelViewProps {
  level: string;
  matches: Match[];
  isLast: boolean;
  previousLevelMatchCount: number;
  previousLevel: string;
  levelIndex: number;
  isDrag: boolean;
}

const CARD_HEIGHT = 98;
const DEFAULT_MARGIN_TOP = 20;
const CARD_WIDTH = 200;

const LevelView: React.FC<LevelViewProps> = ({
  level,
  matches,
  isLast,
  previousLevel,
  levelIndex,
  isDrag,
}) => {
  const calculateMarginTop = useMemo(
    () => (index: number, isDrag: boolean) => {
      if (previousLevel && previousLevel !== level) {
        if (levelIndex === 1) {
          if (isDrag) {
            return index === 0 ? CARD_HEIGHT / 2 : CARD_HEIGHT;
          } else {
            return index === 0
              ? CARD_HEIGHT / 2 + DEFAULT_MARGIN_TOP
              : CARD_HEIGHT + 32;
          }
        } else {
          if (isDrag) {
            return index === 0
              ? ((CARD_HEIGHT + 20) / 2 + DEFAULT_MARGIN_TOP) * levelIndex
              : CARD_HEIGHT - 75;
          } else {
            return index === 0
              ? ((CARD_HEIGHT + 60) / 2 + DEFAULT_MARGIN_TOP) * levelIndex
              : CARD_HEIGHT - 75;
          }
        }
      }
      return 0;
    },
    [previousLevel, level, levelIndex]
  );

  return (
    <View style={styles.container}>
      <View style={styles.matchContainer}>
        {matches.map((match, index) => {
          const matchWrapperStyle = {
            ...styles.matchWrapper,
            marginBottom: isDrag ? 0 : 40,
            marginTop: calculateMarginTop(index, isDrag),
          };

          return (
            <View key={match.id} style={matchWrapperStyle}>
              <MatchCard
                match={match}
                levelIndex={levelIndex}
                isDrag={isDrag}
                index={index}
                isLast={isLast}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  levelText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  matchContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  matchWrapper: {
    flexDirection: "row",
  },
  horizontalLineContainer: {
    position: "absolute",
    top: CARD_HEIGHT,
    left: CARD_WIDTH,
  },
  verticalLineContainer: {
    position: "absolute",
    top: CARD_HEIGHT / 2,
    left: CARD_WIDTH / 2,
  },
});

export default LevelView;
