import {ScrollView, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Splash from './src/screens/app/Splash';
import SignIn from './src/screens/auth/SignIn';





const App = () => {


  return (
        <View style={styles.rootCont}>
        {/* <Splash /> */}
          <SignIn />
        </View>

  );
};

const styles = StyleSheet.create({
   rootCont:{
    flex:1,
    backgroundColor:'white'

   },

});

export default App;
