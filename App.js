import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Weather from "./components/weather";

import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "ec20dafbdcd6efa640fe3cbbaec3b22b";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather = async (longitude, latitude) => {
    console.log("longitude", longitude);
    console.log("latitude", latitude);
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=41.3123&lon=69.2787&appid=ec20dafbdcd6efa640fe3cbbaec3b22b"
      // `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=ec20dafbdcd6efa640fe3cbbaec3b22b`
    );

    setLocation(data);
    setIsLoading(false);
  };

  const setWeather = async (query) => {
    setIsLoading(true);

    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=ec20dafbdcd6efa640fe3cbbaec3b22b`
    );

    setLocation(data);
    setIsLoading(false);
  };

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let {
        coords: { longitude, latitude },
      } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("i cant'n find current location, so bad");
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Weather
      temp={location.main.temp}
      name={location.name}
      condition={location.weather[0].main}
      setWeather={setWeather}
    />
  );
}
