import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {View, StyleSheet} from 'react-native';


const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
        <Searchbar style={styles.searchbar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

    </View>

  );
};

export default SearchScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  searchbar: {
    marginTop:30,
    width: '90%',
    marginLeft:'5%',

  }


});