import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function ProductDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullDescription = "This handy 250 g pack serves 3-4 people and tastes scrumptious with chunks of chicken tikka!";

  return (
    <View className="mb-6">
      <Text className="text-base leading-6">
        <Text className="text-gray-600">{fullDescription}</Text>
        {!isExpanded && (
          <TouchableOpacity onPress={() => setIsExpanded(true)}>
            <Text className="font-semibold text-sm text-gray-900"> Read More. . .</Text>
          </TouchableOpacity>
        )}
      </Text>
    </View>
  );
}