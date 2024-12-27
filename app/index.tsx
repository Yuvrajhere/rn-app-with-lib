import React from "react";
import { View, Text } from "react-native";
import { Button } from "@yuvrajhere/rn-ui-lib";
import { ButtonText } from "@yuvrajhere/rn-ui-lib/ui/button";

const index = () => {
  return (
    <View>
      <Text className="text-red-500">Hello</Text>
      <Button onPress={() => alert('yo 1')} action="negative" variant="outline"><ButtonText>outline</ButtonText></Button>
      <Button onPress={() => alert('yo 2')} action="negative"  variant="link"><ButtonText>link</ButtonText></Button>
      <Button onPress={() => alert('yo 3')} action="negative"  variant="solid"><ButtonText>solid</ButtonText></Button>
    </View>
  );
};

export default index;
