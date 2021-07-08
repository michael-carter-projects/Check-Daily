import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AppRegistry, Card, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function getDate() {

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return months[month] + ' ' + date + ', ' + year;
}


function Home ({ navigation }) {

  const default_color = '#ffffff'

  const [color1a, setColor1a] = useState(default_color);
  const [color2a, setColor2a] = useState(default_color);
  const [color3a, setColor3a] = useState(default_color);
  const [color4a, setColor4a] = useState(default_color);
  const [color5a, setColor5a] = useState(default_color);
  const [color6a, setColor6a] = useState(default_color);
  const [color7a, setColor7a] = useState(default_color);

  const [color1b, setColor1b] = useState(default_color);
  const [color2b, setColor2b] = useState(default_color);
  const [color3b, setColor3b] = useState(default_color);
  const [color4b, setColor4b] = useState(default_color);
  const [color5b, setColor5b] = useState(default_color);
  const [color6b, setColor6b] = useState(default_color);
  const [color7b, setColor7b] = useState(default_color);

  const [color1c, setColor1c] = useState(default_color);
  const [color2c, setColor2c] = useState(default_color);
  const [color3c, setColor3c] = useState(default_color);
  const [color4c, setColor4c] = useState(default_color);
  const [color5c, setColor5c] = useState(default_color);
  const [color6c, setColor6c] = useState(default_color);
  const [color7c, setColor7c] = useState(default_color);

  function changeColor(index) {

    switch (index) {
      case '1a':
        if (color1a == default_color) { setColor1a('#D98FC6');     }
        else                          { setColor1a(default_color); }
        break;
      case '1b':
        if (color1b == default_color) { setColor1b('#C75DAB');     }
        else                          { setColor1b(default_color); }
        break;
      case '1c':
        if (color1c == default_color) { setColor1c('#8C2880');     }
        else                          { setColor1c(default_color); }
        break;
      case '2a':
        if (color2a == default_color) { setColor2a('#FFA395');     }
        else                          { setColor2a(default_color); }
        break;
      case '2b':
        if (color2b == default_color) { setColor2b('#E45956');     }
        else                          { setColor2b(default_color); }
        break;
      case '2c':
        if (color2c == default_color) { setColor2c('#AD2323');     }
        else                          { setColor2c(default_color); }
        break;
      case '3a':
        if (color3a == default_color) { setColor3a('#FFC081');     }
        else                          { setColor3a(default_color); }
        break;
      case '3b':
        if (color3b == default_color) { setColor3b('#F28736');     }
        else                          { setColor3b(default_color); }
        break;
      case '3c':
        if (color3c == default_color) { setColor3c('#CA5708');     }
        else                          { setColor3c(default_color); }
        break;
      case '4a':
        if (color4a == default_color) { setColor4a('#FFF099');     }
        else                          { setColor4a(default_color); }
        break;
      case '4b':
        if (color4b == default_color) { setColor4b('#E8C912');     }
        else                          { setColor4b(default_color); }
        break;
      case '4c':
        if (color4c == default_color) { setColor4c('#BE980E');     }
        else                          { setColor4c(default_color); }
        break;
      case '5a':
        if (color5a == default_color) { setColor5a('#A0E886');     }
        else                          { setColor5a(default_color); }
        break;
      case '5b':
        if (color5b == default_color) { setColor5b('#5CD10D');     }
        else                          { setColor5b(default_color); }
        break;
      case '5c':
        if (color5c == default_color) { setColor5c('#358E08');     }
        else                          { setColor5c(default_color); }
        break;
      case '6a':
        if (color6a == default_color) { setColor6a('#96BEFF');     }
        else                          { setColor6a(default_color); }
        break;
      case '6b':
        if (color6b == default_color) { setColor6b('#3399FF');     }
        else                          { setColor6b(default_color); }
        break;
      case '6c':
        if (color6c == default_color) { setColor6c('#0B52D3');     }
        else                          { setColor6c(default_color); }
        break;
      case '7a':
        if (color7a == default_color) { setColor7a('#C3B0FA');     }
        else                          { setColor7a(default_color); }
        break;
      case '7b':
        if (color7b == default_color) { setColor7b('#847EF6');     }
        else                          { setColor7b(default_color); }
        break;
      case '7c':
        if (color7c == default_color) { setColor7c('#4829B9');     }
        else                          { setColor7c(default_color); }
        break;
      default:
        break;
    }
  }

  return (
    <ScrollView backgroundColor={'#444444'} alignItems={'center'}>
      <View height={40}/>
      <Text style={styles.date}>{getDate()}</Text>
      <View height={40}/>

      <View style={styles.checkboxes}>

        <View style={styles.box_row}>
          <TouchableOpacity onPress={()=>{changeColor('1a')}} >
            <View style={{
              backgroundColor: color1a,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('2a')}} >
            <View style={{
              backgroundColor: color2a,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('3a')}} >
            <View style={{
              backgroundColor: color3a,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('4a')}} >
            <View style={{
              backgroundColor: color4a,
              borderRadius:5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('5a')}} >
            <View style={{
              backgroundColor: color5a,
              borderRadius:5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('6a')}} >
            <View style={{
              backgroundColor: color6a,
              borderRadius:5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('7a')}} >
            <View style={{
              backgroundColor: color7a,
              borderRadius:5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.box_row}>
          <TouchableOpacity onPress={()=>{changeColor('1b')}} >
            <View style={{
              backgroundColor: color1b,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('2b')}} >
            <View style={{
              backgroundColor: color2b,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('3b')}} >
            <View style={{
              backgroundColor: color3b,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('4b')}} >
            <View style={{
              backgroundColor: color4b,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('5b')}} >
            <View style={{
              backgroundColor: color5b,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('6b')}} >
            <View style={{
              backgroundColor: color6b,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('7b')}} >
            <View style={{
              backgroundColor: color7b,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.box_row}>
          <TouchableOpacity onPress={()=>{changeColor('1c')}} >
            <View style={{
              backgroundColor: color1c,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('2c')}} >
            <View style={{
              backgroundColor: color2c,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('3c')}} >
            <View style={{
              backgroundColor: color3c,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('4c')}} >
            <View style={{
              backgroundColor: color4c,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('5c')}} >
            <View style={{
              backgroundColor: color5c,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('6c')}} >
            <View style={{
              backgroundColor: color6c,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{changeColor('7c')}} >
            <View style={{
              backgroundColor: color7c,
              borderRadius: 5,
              height: little_height,
              width: little_width,
            }}>
              <Text></Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

Home.navigationOptions = navigation => ({
  title: "Home",
  headerStyle: {
    backgroundColor: '#333333',
  },
  headerTintColor: '#fff',
});

const win = Dimensions.get('window');

const cols = 7;
const rows = 3;
const border = 10;

const big_width = win.width*0.9;
const little_width = (big_width - ((cols+1) * border)) / cols;

const little_height = little_width * 1;
const big_height = (little_height*rows)+(border*(rows+1));

const styles = StyleSheet.create({
  date: {
    color: '#ffffff',
    fontSize: 50,
  },
  checkboxes: {
    flex: 1,
    height: big_height,
    width: big_width,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  box_row: {
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    paddingTop: (border/2),
    paddingBottom: (border/2),
    paddingLeft: border,
    paddingRight: border,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  box: {
    backgroundColor: '#ffffff',
    borderRadius:5,
    height: little_height,
    width: little_width,
  },
});

export default Home;
