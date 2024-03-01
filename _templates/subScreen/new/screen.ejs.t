---
to: src/screens/<%= folder %>/<%= name %>/<%= name %>.js
unless_exists: true
---
<% if(locals.hooks){ -%>
import React, {useState, useEffect} from 'react';
<% } -%>
<% if(locals.effect){ -%>
import React, {useEffect} from 'react';
<% } -%>
<% if(locals.state){ -%>
import React, {useState} from 'react';
<% } -%>
<% if(!locals.hooks && !locals.state && !locals.effect){ -%>
import React from 'react';
<% } -%>
import {View, Text} from 'react-native';

import styles from './Style.js';

function <%= Name %>() {
  // Screen logic here
<% if(locals.hooks){ -%>
  const [abc, setAbc] = useState('');
  
  useEffect(() => {}, []);
<% } -%>
<% if(locals.state){ -%>
  const [abc, setAbc] = useState('');
<% } -%>
<% if(locals.effect){ -%>
  useEffect(() => {}, []);
<% } -%>

  return (
    <View>
      <Text><%= Name %></Text>
    </View>
  );
}

export default <%= Name %>;
