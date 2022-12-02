import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  DashboardWrapper,
  HeaderWrapper,
  SubWrapper,
  Hello,
  UserName,
  UserImage,
  ImageWrapper,
} from "../../styles/pages/dashboard";
import { SearchBar } from "react-native-elements";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <DashboardWrapper>
      <SubWrapper>
        <HeaderWrapper>
          <View>
            <Hello>Hello</Hello>
            <UserName>UserName</UserName>
          </View>
          <ImageWrapper>
            <UserImage
              // style={styles.tinyLogo}
              source={require("../../assets/images/elon.webp")}
            />
          </ImageWrapper>
        </HeaderWrapper>
        <SearchBar
          placeholder="Search a Hospital here.."
          onChangeText={updateSearch}
          value={search}
          lightTheme={true}
          round={true}
          containerStyle={{
            backgroundColor: "white",
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
            padding: 25,
          }}
          inputContainerStyle={{
            backgroundColor: "#F8F8FC",
          }}
        />
      </SubWrapper>
      <Text>Open up App.js to start working on your appp!</Text>
      <StatusBar style="auto" />
    </DashboardWrapper>
  );
};

export default Dashboard;
