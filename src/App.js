import React,{useState} from "react";
import {SafeAreaView, Text,View,StyleSheet,FlatList} from "react-native";
import music_data from './music-data.json';
import SongCard from "./Components/SongCard";
import SearchBar from "./Components/SearchBar";



function App(){
    const [list,setList] =useState(music_data);

    const handleSearch = text => {
        const filteredList = music_data.filter(song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        })

        setList(filteredList);
    };


    const renderSong = ({item}) =>  <SongCard song={item} />
    const renderSepreator = () => <View style={styles.seperator} />

  return(
      <SafeAreaView style={styles.container}>
          <SearchBar  onSearch={handleSearch} />
          <FlatList
              ItemSeparatorComponent={renderSepreator}
              keyExtractor={item => item.id}
              data={list}
              renderItem={renderSong}

          />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    container:{
    },
    seperator:{
        borderWidth:1,
        borderColor:'#cec5c5'

    }
})

export default App;
