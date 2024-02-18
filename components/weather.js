import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Amazing weather",
    description: "Go for a walk, stop staaying at home!",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn this in the fog",
    description: "Go for a walk, stop staaying at home!",
  },
  Thunderstorem: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Sit at home",
    description: "Do you see what's on the street!",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3A7BD5", "#3A6073"],
    title: "Take a umbrella",
    description: "Perphons the rain will incrace soon",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1cb5e0"],
    title: "It's raining outside",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "There's a snowball outside",
    description: "Dress warmly, make snowmen",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716b"],
    title: "Dusty",
    description: "Butter close the windows!",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "On the street smog :(",
    description: "I don't advise going out unnecessarily!",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#decba4"],
    title: "There's snow outside",
    description: "Dress warmly, make snowmen!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "The Clodes",
    description: "Dress warmly, make snowmen!",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn this in the fog",
    description: "Go for a walk, stop staaying at home!",
  },
};

const Weather = ({ temp, name, condition, setWeather }) => {
  const [query, setQuery] = useState("");

  console.log(weatherOptions[condition].gradient);

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient || ""}
      style={styles.mainContainer}
    >
      <StatusBar />

      <View style={styles.container}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          color={"#fff"}
          size={100}
        />
        <View style={styles.flex}>
          <Text style={styles.temp}>{temp}°C </Text>
          <Text style={styles.temp}>| {name}</Text>
        </View>
      </View>

      <View style={{ ...styles.container, ...styles.tectContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.description}>
          {weatherOptions[condition].description}
        </Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search Coutry"
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Button
            style={styles.btn}
            title="Search"
            onPress={() => {
              setWeather(query);
              setQuery("");
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  temp: {
    fontSize: 25,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  tectContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    color: "white",
    fontWeight: "600",
    fontSize: 17,
    textAlign: "left",
  },
  searchContainer: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  input: {
    width: "70%",
  },
  btn: {},
});

export default Weather;
