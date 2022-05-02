import React from 'react';
import RNStyler from 'rn-styler';

const App = () => {
  return (
    <RNStyler.View className="bg-#0d0d0d flex-1">
      <RNStyler.View className="flex-row absolute left-0 top-0 right-0 mt-50">
        <RNStyler.Text className="color-white font-size-30 font-italic ml-10 font-bold">
          Instagram
        </RNStyler.Text>
      </RNStyler.View>
      <RNStyler.View className="bg-#0d0d0d mt-100">
        <RNStyler.StatusBar barStyle="light-content" />
        <RNStyler.View className="">
          <RNStyler.View className="mt-10 mb-10 flex-row">
            <RNStyler.ScrollView className="w-60 h-60 border-50 mt-20" />
          </RNStyler.View>
        </RNStyler.View>
      </RNStyler.View>
    </RNStyler.View>
  );
};

export default App;
