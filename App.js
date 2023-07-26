import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
export default function App() {
  const [loc, setLoc] = useState("");
  const [img, setImg] = useState(null);
  const [name, setName] = useState("-");
  const [main, setMain] = useState("");
  const [desc, setDesc] = useState("-");
  const [temp, setTemp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [show, setShow] = useState(false);
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  const capital = (sentence) => {
    const words = sentence.split(" ");

    const capitalizeWords = words.map((word) => {
      const firstWord = word.charAt(0).toUpperCase();
      const otherWord = word.slice(1);
      return firstWord + otherWord;
    });

    return capitalizeWords.join(" ");
  };

  const handlePress = () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apiKey}`;
    try {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.cod !== 200) {
            setImg(require("./assets/images/not-found.png"));
            setName("-");
            setDesc(capital(data.message));
            setTemp(0);
            setSpeed(0);
            return;
          }
          setMain(data.weather[0].main);
          switch (main) {
            case "Clear":
              setImg(require("./assets/images/clear.png"));
              break;
            case "Clouds":
              setImg(require("./assets/images/cloud.png"));
              break;
            case "Mist" || "Haze":
              setImg(require("./assets/images/mist.png"));
              break;
            case "Rain":
              setImg(require("./assets/images/rain.png"));
              break;
            case "Snow":
              setImg(require("./assets/images/snow.png"));
              break;

            default:
              setImg(require("./assets/images/not-found.png"));

              break;
          }
          setName(data.name);
          setDesc(capital(data.weather[0].description));
          setTemp(data.main.temp);
          setSpeed(data.wind.speed);
        });
    } catch (e) {
      setImg(require("./assets/images/not-found.png"));
    }
    setShow(true);
    setLoc("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={styles.searchInput}>
          <Entypo
            name="location-pin"
            size={25}
            color="green"
            style={styles.icon}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
            value={loc}
            onChangeText={(e) => setLoc(e)}
          />
        </View>
        <TouchableOpacity onPress={handlePress}>
          <FontAwesome name="search" size={24} color="green" />
        </TouchableOpacity>
      </View>
      {show && (
        <View>
          <View style={styles.weather}>
            <Image source={img} style={styles.image} />
            <Text style={styles.location}> {name} </Text>
            <Text style={styles.desc}> {desc} </Text>
          </View>
          <View style={styles.main}>
            <View style={styles.items}>
              <Entypo name="air" size={30} color="black" />
              <View>
                <Text>Temp</Text>
                <Text>
                  {" "}
                  {temp} {"\u00B0"}C
                </Text>
              </View>
            </View>
            <View style={styles.items}>
              <Feather name="wind" size={30} color="black" />
              <View>
                <Text>Wind</Text>
                <Text>{speed} m/s</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
