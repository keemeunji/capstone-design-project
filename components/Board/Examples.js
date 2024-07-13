import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabButton from '../../components/Board/TabButton';
import Section from '../../components/Board/Section';
import Tabs from '../../components/Board/Tabs';
import { EXAMPLES } from '../../constants/data';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <Text style={styles.message}>Please select a topic.</Text>;

  if (selectedTopic) {
    tabContent = (
      <View style={styles.tabContent}>
        <Text style={styles.title}>{EXAMPLES[selectedTopic].title}</Text>
        <Text style={styles.description}>{EXAMPLES[selectedTopic].description}</Text>
        <Text style={styles.code}>{EXAMPLES[selectedTopic].code}</Text>
      </View>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  tabContent: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  code: {
    fontSize: 14,
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 4,
  },
});