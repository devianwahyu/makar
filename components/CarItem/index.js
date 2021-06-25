import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

  const { modelName, tagline, taglineCTA, imageSrc } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground 
        source={imageSrc} 
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{modelName}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>

        <StyledButton 
          type="primary"
          text="Custom Order"
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />

        <StyledButton 
          type="secondary"
          text="Existing Inventory"
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />

      </View>
    </View>
  );
};

export default CarItem;