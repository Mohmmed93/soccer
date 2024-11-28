import React, { useState, useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Match, SampleSoccerBracketData } from "../app/(tabs)/data/sample-data";
import LevelView from "./LevelView";

const BracketView: React.FC = () => {
  const { data } = SampleSoccerBracketData;

  const groupedMatches = useMemo(() => {
    return data.reduce((acc, match) => {
      const level = match.level || "OTHER";
      acc[level] = acc[level] || [];
      acc[level].push(match);
      return acc;
    }, {} as Record<string, Match[]>);
  }, [data]);

  const levels = useMemo(() => {
    return Object.entries(groupedMatches).filter(
      ([level]) => level !== "THIRD_PLACE"
    );
  }, [groupedMatches]);

  const [isDrag, setIsDrag] = useState(false);

  return (
    <ScrollView
      horizontal
      style={styles.container}
      onScrollBeginDrag={() => setIsDrag(true)}
      onScrollEndDrag={() => setIsDrag(false)}
    >
      {levels.map(([level, matches], index) => (
        <LevelView
          key={level}
          isDrag={isDrag}
          level={level}
          matches={matches}
          isLast={index === levels.length - 1}
          previousLevelMatchCount={
            index > 0 ? levels[index - 1][1].length : matches.length
          }
          previousLevel={index > 0 ? levels[index - 1][0] : ""}
          levelIndex={index}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    flex: 1,
  },
});

export default BracketView;
