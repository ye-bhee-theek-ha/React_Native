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
import InputBoxWithNum from '../../components/inputBoxWithNum/inputBoxWithNum.js';


function Signup01() {
  // Screen logic here
  const navigation = useNavigation();

  const [email, SetEmail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Password, SetPassword] = useState("");
  const [isChecked, SetisChecked] = useState(false);

  function OnPress()
  {
    console.log("login pressed")
  }

  function movetoLogin()
  {
    navigation.navigate('login');
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
        Heading='Create an account'
        Subheading="Connect with your friends today!"
      />
      
      <InputFeild
        header={"Email"}
        onChangeText={SetEmail}
        value={email}
        inputStyle={styles.InputBox}
        placeholder={"Enter your Email"}
      />
      <InputBoxWithNum
        header={"Phone Number"}
        onChangeText={SetPhone}
        value={Phone}
        placeholder={"Enter your Phone Number"}
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
        title='Sugn Up'
        onPress={OnPress}
        containerStyle={styles.SubmitArea_style}
      />
      
      <Page_footer 
        info_text={"Already Have an account?"}
        btn_txt = {"Log in"}
        OnPress={movetoLogin}
      />
    </View>
  );
}

export default Signup01;


