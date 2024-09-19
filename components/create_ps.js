import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity } from 'react-native';

export default function App() {
  const [passwordLength, setPasswordLength] = useState('');
  const [isSelected1, setSelection1] = useState(false); // Include lower case letters
  const [isSelected2, setSelection2] = useState(false); // Include upper case letters
  const [isSelected3, setSelection3] = useState(false); // Include numbers
  const [isSelected4, setSelection4] = useState(false); // Include special symbols
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let length = parseInt(passwordLength);


    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialSymbols = '!@#$%^&*()_+{}[]<>?';

    let characters = '';
    if (isSelected1) characters += lowerCase;
    if (isSelected2) characters += upperCase;
    if (isSelected3) characters += numbers;
    if (isSelected4) characters += specialSymbols;



    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.v}>
        <View style={styles.v1}>
          <Text style={styles.txt_1}>password{'\n'}generator</Text>
          <Text style={styles.create_MK}>{generatedPassword}</Text>
        </View>

        <View style={styles.v2}>
          <View style={styles.setVi}>
            <View style={styles.phanvung}>
              <Text style={styles.title}>Password length</Text>
              <TextInput 
                style={styles.txt_ip} 
                keyboardType='numeric'
                value={passwordLength}
                onChangeText={setPasswordLength}
              />      
            </View> 
            <View style={styles.phanvung}>
              <Text style={styles.title}>Include lower case letters</Text>
              <CheckBox value={isSelected1} onValueChange={setSelection1} style={styles.checkbox} />
            </View> 
            <View style={styles.phanvung}>
              <Text style={styles.title}>Include upper case letters</Text>
              <CheckBox value={isSelected2} onValueChange={setSelection2} style={styles.checkbox} />
            </View> 
            <View style={styles.phanvung}>
              <Text style={styles.title}>Include numbers</Text>
              <CheckBox value={isSelected3} onValueChange={setSelection3} style={styles.checkbox} />
            </View> 
            <View style={styles.phanvung}>
              <Text style={styles.title}>Include special symbols</Text>
              <CheckBox value={isSelected4} onValueChange={setSelection4} style={styles.checkbox} />
            </View> 
            <TouchableOpacity style={styles.create_ps} onPress={generatePassword}>
              <View style={{width:269, height: 55, backgroundColor: '#3B3B98'}}>
                <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                 <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>GENERATE PASSWORD </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B3B98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create_ps: {
    flex: 1,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent:'center',
  },
  setVi: {
    flex: 1,
    width: 297, 
  },
  title: {
    fontSize: 20,
    fontWeight:'bold',
    color: 'white',
  },
  txt_ip: {
    width: 118,
    height:33,
    backgroundColor: 'white',
    textAlign:'center',
  },
  phanvung: {
    flex: 1,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  txt_1: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign:'center',
  },
  create_MK: {
    backgroundColor: '#151537',
    height: 55,
    width:297,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  v1: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  v2: {
    flex: 2,
    alignItems: 'center',
  },
  v: {
    height: '93%',
    width:'90%',
    backgroundColor: '#23235B',
    borderRadius: 15,
    flex1: 1,
  },
});
