import * as React from 'react';
import { Button, View } from 'react-native';

function Home({ navigation }) {
 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Button
       onPress={() => navigation.navigate('Notificaciones')}
       title="Go to notifications"
     />
   </View>
 );
}

export default Home;