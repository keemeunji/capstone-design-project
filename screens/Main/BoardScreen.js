// // // // // import React from 'react';
// // // // // import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
// // // // // import { View, Text, StyleSheet, Image } from 'react-native';

// // // // // const BoardScreen = () => {
// // // // //     return (
// // // // //       <Collapse style={styles.container}>
// // // // //           <CollapseHeader>
// // // // //             <View>
// // // // //               <Text style={styles.title}>오늘의 추천도서</Text>
// // // // //               <Text style={styles.subTitle}>하루동안 분석한 아이의 감정을 기반으로 도서를 추천해드립니다!</Text>
// // // // //             </View>
// // // // //           </CollapseHeader>
// // // // //           <CollapseBody style={styles.body}>
// // // // //             <Text style={styles.bodyText}> 2024년 6월 11일 화요일</Text>
// // // // //             <Text style={styles.bodyText}> 감정 Top1 : 분노</Text>
// // // // //             <Image source={require('../../assets/images/book.jpg')} style={styles.image}></Image>
// // // // //           </CollapseBody>
// // // // //       </Collapse>  
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //     container: {
// // // // //       flex: 1,
// // // // //       backgroundColor: '#FFF7E0',
// // // // //       paddingHorizontal: 16,
// // // // //       paddingVertical: 10,
// // // // //     },
// // // // //     title: {
// // // // //         textAlign: 'center',
// // // // //         marginTop: 30,
// // // // //         fontSize: 35,
// // // // //     },
// // // // //     subTitle: {
// // // // //       textAlign: 'center',
// // // // //       marginTop: 15,
// // // // //       fontSize: 15,
// // // // //     },
// // // // //     body: {
// // // // //       marginTop: 60,
// // // // //       alignItems: 'center',
// // // // //     },
// // // // //     bodyText: {
// // // // //       fontSize: 20,
// // // // //     },
// // // // //     image: {
// // // // //       marginTop: 40,
// // // // //       width: 280,
// // // // //       height: 280,
// // // // //     },

// // // // // });

// // // // // export default BoardScreen;



// // // import React from 'react';
// // // import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
// // // import { View, Text, StyleSheet, Image } from 'react-native';

// // // const BoardScreen = () => {
// // //     return (
// // //       <View style={styles.screenContainer}>
// // //         <Collapse style={styles.container}>
// // //             <CollapseHeader style={styles.header}>
// // //               <Text style={styles.title}>오늘의 추천도서</Text>
// // //               <Text style={styles.subTitle}>하루동안 분석한 아이의 감정을 기반으로 도서를 추천해드립니다!</Text>
// // //             </CollapseHeader>
// // //             <CollapseBody style={styles.body}>
// // //               <Text style={styles.bodyText}>2024년 6월 11일 화요일</Text>
// // //               <Text style={styles.bodyText}>감정 Top1 : 분노</Text>
// // //               <Image source={require('../../assets/images/book.jpg')} style={styles.image} />
// // //             </CollapseBody>
// // //         </Collapse>  
// // //       </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //     screenContainer: {
// // //       flex: 1,
// // //       backgroundColor: '#FFF7E0',
// // //       justifyContent: 'center',
// // //       alignItems: 'center',
// // //       paddingHorizontal: 16,
// // //     },
// // //     container: {
// // //       width: '100%',
// // //       borderRadius: 10,
// // //       overflow: 'hidden',
// // //       backgroundColor: '#FFFFFF',
// // //       elevation: 3,
// // //       shadowColor: '#000',
// // //       shadowOffset: { width: 0, height: 2 },
// // //       shadowOpacity: 0.1,
// // //       shadowRadius: 5,
// // //     },
// // //     header: {
// // //       padding: 20,
// // //       borderBottomWidth: 1,
// // //       borderBottomColor: '#E0E0E0',
// // //     },
// // //     title: {
// // //         textAlign: 'center',
// // //         fontSize: 28,
// // //         fontWeight: '600',
// // //         color: '#333',
// // //     },
// // //     subTitle: {
// // //       textAlign: 'center',
// // //       marginTop: 5,
// // //       fontSize: 13,
// // //       color: '#666',
// // //     },
// // //     body: {
// // //       padding: 20,
// // //       alignItems: 'center',
// // //     },
// // //     bodyText: {
// // //       fontSize: 18,
// // //       color: '#333',
// // //       marginTop: 10,
// // //     },
// // //     image: {
// // //       marginTop: 25,
// // //       marginBottom: 20,
// // //       width: 250,
// // //       height: 250,
// // //       borderRadius: 10,
// // //     },
// // // });

// // // export default BoardScreen;


// // import React from 'react';
// // import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
// // import { View, Text, StyleSheet, Image } from 'react-native';

// // const BoardScreen = () => {
// //     return (
// //       <View style={styles.screenContainer}>
// //         <Collapse>
// //             <CollapseHeader>
// //               <View style={styles.headerTitle}>
// //                 <Text style={styles.title}>오늘의 추천도서 📚</Text>
// //                 <Text style={styles.subTitle}>하루동안 분석한 아이의 감정을 기반으로 도서를 추천해드립니다!</Text>
// //               </View>
// //             </CollapseHeader>
// //             <CollapseBody>
// //               <View style={styles.bodyTitle}>
// //                 <Text style={styles.bodyText}>2024년 6월 11일 화요일</Text>
// //                 <Text style={styles.bodyText}>감정 Top1 : 분노</Text>
// //                 <Image source={require('../../assets/images/book.jpg')} style={styles.image} />
// //               </View>
// //             </CollapseBody>
// //         </Collapse>  
// //       </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     screenContainer: {
// //       flex: 1,
// //       backgroundColor: '#FFF7E0',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       paddingHorizontal: 16,
// //     },
// //     container: {
// //       width: '100%',
// //       borderRadius: 10,
// //       overflow: 'hidden',
// //       backgroundColor: '#FFFFFF',
// //       elevation: 3,
// //       shadowColor: '#000',
// //       shadowOffset: { width: 0, height: 2 },
// //       shadowOpacity: 0.1,
// //       shadowRadius: 5,
// //     },
// //     headerTitle: {
// //       padding: 20,
// //       borderBottomWidth: 1,
// //       borderBottomColor: '#E0E0E0',
// //     },
// //     title: {
// //         textAlign: 'center',
// //         fontSize: 28,
// //         fontWeight: '600',
// //         color: '#333',
// //     },
// //     subTitle: {
// //       textAlign: 'center',
// //       marginTop: 5,
// //       fontSize: 13,
// //       color: '#666',
// //     },
// //     bodyTitle: {
// //       padding: 20,
// //       alignItems: 'center',
// //     },
// //     bodyText: {
// //       fontSize: 18,
// //       color: '#333',
// //       marginTop: 10,
// //     },
// //     image: {
// //       marginTop: 25,
// //       marginBottom: 20,
// //       width: 250,
// //       height: 250,
// //       borderRadius: 10,
// //     },
// // });

// // export default BoardScreen;

// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const BoardScreen = () => {
//     return (
//       <View style={styles.screenContainer}>
//         <View style={styles.container}>
//           <View style={styles.headerTitle}>
//             <Text style={styles.title}>오늘의 추천도서 📚</Text>
//             <Text style={styles.subTitle}>하루동안 분석한 아이의 감정을 기반으로 도서를 추천해드립니다!</Text>
//           </View>
//           <View style={styles.bodyTitle}>
//             <Text style={styles.bodyText}>2024년 6월 11일 화요일</Text>
//             <Text style={styles.bodyText}>감정 Top1 : 분노</Text>
//             <Image source={require('../../assets/images/book.jpg')} style={styles.image} />
//             <Text style={styles.subTitle}>몰리 뱅 글그림 / 박수현 역 | 책읽는곰 | 2013년 11월 26일</Text>
//           </View>
//         </View>  
//       </View>
//     );
// };

// const styles = StyleSheet.create({
//     screenContainer: {
//       flex: 1,
//       backgroundColor: '#FFF7E0',
//       justifyContent: 'center',
//       alignItems: 'center',
//       paddingHorizontal: 16,
//     },
//     container: {
//       width: '100%',
//       borderRadius: 10,
//       overflow: 'hidden',
//       backgroundColor: '#FFFFFF',
//       elevation: 3,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 5,
//     },
//     headerTitle: {
//       padding: 20,
//       borderBottomWidth: 1,
//       borderBottomColor: '#E0E0E0',
//     },
//     title: {
//         textAlign: 'center',
//         fontSize: 28,
//         fontWeight: '600',
//         color: '#333',
//     },
//     subTitle: {
//       textAlign: 'center',
//       marginTop: 10,
//       marginBottom: 10,
//       fontSize: 13,
//       color: '#666',
//     },
//     bodyTitle: {
//       padding: 10,
//       alignItems: 'center',
//     },
//     bodyText: {
//       fontSize: 20,
//       color: '#333',
//       marginTop: 10,
//     },
//     image: {
//       marginTop: 25,
//       marginBottom: 10,
//       width: 250,
//       height: 250,
//       borderRadius: 10,
//     },
// });

// export default BoardScreen;


import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Collapsible from 'react-native-collapsible';

const BoardScreen = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const handleImagePress = () => {
      Linking.openURL('https://m.yes24.com/Goods/Detail/11519108');
    };

    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>오늘의 추천도서 📚</Text>
                    <Text style={styles.subTitle}>하루동안 분석한 아이의 감정을 기반으로 도서를 추천해드립니다!</Text>
                </View>
                <TouchableOpacity onPress={toggleExpanded} style={styles.bodyTitle}>
                  <Collapsible collapsed={collapsed}>
                      <View style={styles.collapsibleContent}>
                        <Text style={styles.bodyText}>2024년 6월 11일 화요일</Text>
                        <Text style={styles.bodySubText}>감정 분석 결과 Top 1 : 분노 😡</Text>
                        <TouchableOpacity onPress={handleImagePress}>
                          <Image source={require('../../assets/images/book.jpg')} style={styles.image} />
                          <Text style={styles.subBodyTitle}>몰리 뱅 글그림 / 박수현 역 | 책읽는곰 | 2013년 11월 26일</Text>
                        </TouchableOpacity>  
                      </View>
                  </Collapsible>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#FFF7E0',
        // justifyContent: 'center',
        // alignItems: 'top',
        paddingHorizontal: 16,
    },
    container: {
        width: '100%',
        borderRadius: 10,
        marginTop: 30,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    headerTitle: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    title: {
        textAlign: 'center',
        fontSize: 29,
        fontWeight: '600',
        color: '#333',
    },
    subTitle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 13,
        color: '#666',
    },
    bodyTitle: {
        padding: 10,
        alignItems: 'center',
    },
    bodyText: {
      fontSize: 22,
      color: '#333',
      marginTop: 10,
  },
    bodySubText: {
        fontSize: 15,
        color: '#333',
        marginTop: 10,
        // marginBottom: 10,
    },
    collapsibleContent: {
        alignItems: 'center',
        padding: 10,
    },
    image: {
        marginTop: 20,
        marginBottom: 10,
        width: 280,
        height: 280,
        borderRadius: 10,
        marginBottom: 10,
    },
    subBodyTitle: {
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      fontSize: 13,
      color: '#666',
  },
});

export default BoardScreen;
