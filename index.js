import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  Environment,
  VrButton,
  console,
} from 'react-360';

backgroundImage = 'Renascent2.jpg';

Environment.setBackgroundImage(asset(this.backgroundImage), {
  format: '3DTB',
});



export default class Gallery360 extends React.Component {


  render() {
    return (
      <View id="theView" style={styles.panel}>
          <VrButton onClick={this.changeImage} style={styles.panel}>
            <Image source={asset('renascent-inc-experts-in-demolition.jpg')}  style={styles.panel}/>
          </VrButton>
      </View>
    );
  }

  changeImage() {
    return (
      backgroundImage = 'Renascent3.jpg',
      window.console.log('Hey man')
      //I need a way to tell the DOM to update here
      
    );
  }

};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#c0c0d0',
    borderRadius: 5,
    width: 40,
    height: 44,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('Gallery360', () => Gallery360);
