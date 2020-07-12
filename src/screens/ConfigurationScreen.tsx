import { default as React, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import VentSwitch from '../components/VentSwitch';
import ConfigSelect from '../components/ConfigSelect';
import configs from '../constants/Configurables';
import ToggleUpdate from '../components/UpdateButton';

const INITIAL_STATE = {
  'Ventilation Mode': 'PCV',
  'I:E Ratio': '1:1',
  'Respiratory Rate': 12,
  'Tidal Volume': 200,
  'Pressure': 15,
  'Flow Trigger': 1,
  'PEEP': 0,
  'FiO2': '20 - 30',
}

export default function LinksScreen() {
  const [canUpdate, setCanUpdate] = useState(false);
  const [ventConfigs, setVentConfigs] = useState({...INITIAL_STATE});
  const [isVentilating, setIsVentilating] = useState(false);

  const handleState = (key: string, value: string | boolean) => {
    setVentConfigs((prevState: any) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <ToggleUpdate canUpdate={canUpdate} setCanUpdate={setCanUpdate} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {Object.keys(configs).map((config) => (
          <ConfigSelect
            key={config}
            label={config}
            selectedValue={ventConfigs[config]}
            isEditable={canUpdate}
            settingsHandler={handleState}
            unit={configs[config].unit}
            pickerItems={configs[config].options}
          />
        ))}
      </ScrollView>
      <VentSwitch switchHandler={setIsVentilating} isVentilating={isVentilating} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.generalBackGround,
  },
  contentContainer: {
    paddingTop: 15,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
