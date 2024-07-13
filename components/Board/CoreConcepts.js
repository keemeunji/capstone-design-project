// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import CoreConcept from './CoreConcept.js';
// import { CORE_CONCEPTS } from '../../constants/data.js';

// export default function CoreConcepts() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>자주묻는질문 FAQ</Text>
//       <FlatList
//         data={CORE_CONCEPTS}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => <CoreConcept {...item} />}
//         contentContainerStyle={styles.list}
//       />  
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF7E0',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   list: {
//     paddingVertical: 8,
//   },
// });