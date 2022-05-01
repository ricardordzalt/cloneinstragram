import React from 'react';
import RNStyler from 'rn-styler';

const App = () => {
  return (
    <RNStyler.View className="bg-#0d0d0d flex-1">
      <RNStyler.View className="flex-row absolute left-0 top-0 right-0 mt-0">
        <RNStyler.Text className="color-white font-size-30 font-italic ml-10 font-bold">
          Instagram
        </RNStyler.Text>
      </RNStyler.View>
    </RNStyler.View>
  );
};

export default App;
