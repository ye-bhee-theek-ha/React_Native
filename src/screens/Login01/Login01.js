import React, { useState } from 'react';
import {View, Text} from 'react-native';

import styles from './Style.js';
import InputBox from '../../components/InputBox/InputBox.js';
import InputFeild from '../../components/inputFeild/inputFeild.js';
import RememberMe from '../../components/RememberMe/RememberMe.js';
import InputFeildFooter from '../../components/InputFeildFooter/InputFeildFooter.js';
import HeroText from '../../components/HeroText/HeroText.js';
import SubmitArea from '../../components/submitArea/submitArea.js';
import Page_footer from '../../components/page_footer/page_footer.js';
import { useNavigation } from '@react-navigation/native';


function Login01() {
  // Screen logic here

  const navigation = useNavigation();

  const [email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [isChecked, SetisChecked] = useState(false);

  function OnPress()
  {
    console.log("login pressed")
  }

  function movetoSignup()
  {
    navigation.navigate('signup');
  }

  function movetoresetPass()
  {
    console.log("re")
    navigation.navigate('resetPass');
  }


  return (
    <View style={styles.container}>
      <HeroText
        containerStyle={styles.HeroText}
        Heading='Hi, Wecome Back! 👋'
        Subheading="Hello again, you've been missed!"
      />
      
      <InputFeild
        header={"Email"}
        onChangeText={SetEmail}
        value={email}
        inputStyle={styles.InputBox}
        placeholder={"Enter your Email"}
      />
      <InputFeild
        header={"Password"}
        onChangeText={SetPassword}
        value={Password}
        inputStyle={styles.InputBox}
        placeholder={"Enter your Password"}
      />
      <InputFeildFooter
        isChecked= {isChecked}
        setisChecked={SetisChecked}
        resetPass = {movetoresetPass}
      />
      <SubmitArea
        title='Login'
        onPress={OnPress}
        containerStyle={styles.SubmitArea_style}
      />
      
      <Page_footer 
        info_text={"Donn't Have an account?"}
        btn_txt = {"Sign Up"}
        OnPress={movetoSignup}
      />
    </View>
  );
}

export default Login01;
