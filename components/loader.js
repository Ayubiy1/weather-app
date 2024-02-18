import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../assets/loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Loading...</Text>
      </AnimatedLoader>
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
