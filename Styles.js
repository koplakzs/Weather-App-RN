import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 15,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  icon: {
    marginHorizontal: 10,
  },
  weather: {
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  location: {
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  desc: {
    fontSize: 20,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
});

export default styles;
