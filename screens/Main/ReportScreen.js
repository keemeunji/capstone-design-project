// // // // import React, { useRef, useState} from 'react';
// // // // import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// // // // import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// // // // import Ionicons from '@expo/vector-icons/Ionicons';
// // // // import COLORS from '../../constants/colors';
// // // // import axios, { all } from 'axios';

// // // // const API_URL = 'http://3.34.107.88:8080';

// // // // const ReportScreen = () => {
// // // //   const bottomSheetRef = useRef(null);
// // // //   const [emotionData, setEmotionData] = useState(null);

// // // //   const handleAnalyzeEmotion = async () => {

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={styles.headerContainer}>
// // // //         <TouchableOpacity style={styles.headerButton}>
// // // //           <Ionicons
// // // //             name={'arrow-back-outline'}
// // // //             size={30}
// // // //             color={COLORS.black}
// // // //           />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerText}>오늘 아이의 기분은...</Text>
// // // //       </View>

// // // //       <View style={styles.buttonContainer}>
// // // //         <TouchableOpacity
// // // //           style={styles.button}
// // // //           onPress={handleAnalyzeEmotion}
// // // //         >
// // // //           <Text style={styles.buttonText}>감정분석하기</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
      
// // // //       <BottomSheet
// // // //         ref={bottomSheetRef}
// // // //         snapPoints={['4%', '60%']}
// // // //         borderRadius={100}
// // // //         containerStyle={styles.bottomSheetContainer}
// // // //       >
// // // //         <BottomSheetView style={styles.bottomSheet}>
// // // //             <View style={styles.infoContainer}>
// // // //               <View style={styles.infoItem}>
// // // //                 <Text style={styles.infoLabel}>화가 나요</Text>
// // // //                 <View style={[styles.progressBar, { backgroundColor: '#ff9999' }]} />
// // // //               </View>
// // // //               <View style={styles.infoItem}>
// // // //                 <Text style={styles.infoLabel}>슬퍼요</Text>
// // // //                 <View style={[styles.progressBar, { backgroundColor: '#9999ff' }]} />
// // // //               </View>
// // // //               <View style={styles.infoItem}>
// // // //                 <Text style={styles.infoLabel}>우울해요</Text>
// // // //                 <View style={[styles.progressBar, { backgroundColor: '#cc99ff' }]} />
// // // //               </View>
// // // //               <View style={styles.infoItem}>
// // // //                 <Text style={styles.infoLabel}>기뻐요</Text>
// // // //                 <View style={[styles.progressBar, { backgroundColor: '#99ffcc' }]} />
// // // //               </View>
// // // //             </View>

// // // //             <View style={styles.resultContainer}>
// // // //               <Text style={styles.resultLabel}>종합 우울지수</Text>
// // // //               <Text style={styles.resultText}>3단계</Text>
// // // //               <Text style={styles.resultMessage}>*추세이 변동해요*</Text>
// // // //             </View>

// // // //             <View style={styles.resultContainer}>
// // // //               <Text style={styles.resultLabel}>종합 행복지수</Text>
// // // //               <Text style={styles.resultText}>2단계</Text>
// // // //               <Text style={styles.resultMessage}>*조금씩 좋아지고 있어요*</Text>
// // // //             </View>
// // // //         </BottomSheetView>
// // // //       </BottomSheet>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //   },
  

// // // //   // header
// // // //   headerContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'space-between',
// // // //     backgroundColor: '#ffefd5',
// // // //     paddingVertical: 10,
// // // //     paddingHorizontal: 16,
// // // //   },
// // // //   headerButton: {
// // // //     padding: 8,
// // // //     justifyContent: 'flex-start',
// // // //   },
// // // //   headerText: {
// // // //     justifyContent: 'center',
// // // //     fontSize: 25,
// // // //     flex: 1, 
// // // //     textAlign: 'center',
// // // //   },

// // // //   // button
// // // //   button: {
// // // //     backgroundColor: '#841584',
// // // //     paddingVertical: 12,
// // // //     paddingHorizontal: 24,
// // // //     borderRadius: 4,
// // // //   },
// // // //   buttonText: {
// // // //     color: 'white',
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //   },

// // // //   // bottomsheet
// // // //   bottomSheetContainer: {
// // // //     // backgroundColor: '#fff',
// // // //     borderTopLeftRadius: 100,
// // // //     borderTopRightRadius: 100,
// // // //   },
// // // //   infoContainer: {
// // // //     width: '80%',
// // // //     marginBottom: 24,
// // // //   },
// // // //   infoItem: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginVertical: 8,
// // // //   },
// // // //   infoLabel: {
// // // //     flex: 1,
// // // //     fontSize: 16,
// // // //   },
// // // //   progressBar: {
// // // //     flex: 2,
// // // //     height: 16,
// // // //     borderRadius: 8,
// // // //   },
// // // //   resultContainer: {
// // // //     width: '20%',
// // // //     marginVertical: 12,
// // // //   },
// // // //   resultLabel: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 4,
// // // //   },
// // // //   resultText: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   resultMessage: {
// // // //     fontSize: 14,
// // // //     color: '#888',
// // // //   },
// // // // });

// // // // export default ReportScreen;







// // // axios.get(`${API_URL}/analyze-emotion`) API 네개인 버전
// // import React, { useRef, useState } from 'react';
// // import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
// // import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// // import Ionicons from '@expo/vector-icons/Ionicons';
// // import COLORS from '../../constants/colors';
// // import axios from 'axios';

// // const API_URL = 'http://192.168.0.235:8080';

// // const ReportScreen = () => {
// //   const bottomSheetRef = useRef(null);
// //   const [isAnalyzing, setIsAnalyzing] = useState(false);
// //   const [emotionData, setEmotionData] = useState(null);
// //   const handleAnalyzeEmotion = async () => {
// //     setIsAnalyzing(true);
// //     try {
// //       // 1. 감정 분석 API 호출
// //       const analyzeResponse = await axios.get(`${API_URL}/analyze-emotion`);
// //       const analyzeData = analyzeResponse.data;
// //       if (analyzeData.status === 200) {
// //         console.log(analyzeData.message);
  
// //         // 2. 감정 결과 저장 API 호출
// //         const saveResponse = await axios.post(`${API_URL}/save-emotion-result`);
// //         const saveData = saveResponse.data;
// //         if (saveData.status === 200) {
// //           console.log(saveData.message);
  
// //           // 3. 감정 결과 검색 API 호출
// //           const searchResponse = await axios.get(`${API_URL}/search-emotion`);
// //           const searchData = searchResponse.data;
// //           if (searchData.status === 200) {
// //             console.log(searchData.message);
  
// //             // 4. 모든 감정 결과 API 호출
// //             const allResponse = await axios.get(`${API_URL}/all-emotion-results`);
// //             const allData = allResponse.data;
// //             if (allData.status === 200) {
// //               console.log(allData.message);
// //               setEmotionData(allData.data);
// //               bottomSheetRef.current?.expand();
// //             } else {
// //               console.error('All Emotion Results Error:', allData.message);
// //               setIsAnalyzing(false);
// //             }
// //           } else {
// //             console.error('Search Emotion Error:', searchData.message);
// //           }
// //         } else {
// //           console.error('Save Emotion Result Error:', saveData.message);
// //         }
// //       } else {
// //         console.error('Analyze Emotion Error:', analyzeData.message);
// //       }
// //     } catch (error) {
// //       console.error('Error analyzing emotion:', error);
// //     } finally {
// //       setIsAnalyzing(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.headerContainer}>
// //         <TouchableOpacity style={styles.headerButton}>
// //           <Ionicons
// //             name={'arrow-back-outline'}
// //             size={30}
// //             color={COLORS.black}
// //           />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>오늘 아이의 기분은...</Text>
// //       </View>
      
// //       <View style={styles.imageContainer}>
// //         <Image 
// //           style={styles.image}
// //           source={require('../../assets/images/chicky/chick (5).png')}/>
// //       </View>
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={handleAnalyzeEmotion}
// //         >
// //           <Text style={styles.buttonText}>감정분석하기</Text>
// //         </TouchableOpacity>
// //       </View>
      
// //       <BottomSheet
// //         ref={bottomSheetRef}
// //         snapPoints={['4%', '60%']}
// //         borderRadius={100}
// //         containerStyle={styles.bottomSheetContainer}
// //       >
// //       <BottomSheetView style={styles.bottomSheet}>
// //         {emotionData ? (
// //           <>
// //             <View style={styles.infoContainer}>
// //               {emotionData.map((result, index) => (
// //                 <View key={index} style={styles.infoItem}>
// //                   <Text style={styles.infoLabel}>{result.top1}</Text>
// //                   <View
// //                       style={[
// //                         styles.progressBar,
// //                         { width: `${result.top1_pre * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// //                       ]}
// //                     />
// //                 </View>
// //               ))}
// //               {emotionData.map((result, index) => (
// //                 <View key={index + 3} style={styles.infoItem}>
// //                   <Text style={styles.infoLabel}>{result.top2}</Text>
// //                   <View
// //                       style={[
// //                         styles.progressBar,
// //                         { width: `${result.top2_pre * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// //                       ]}
// //                     />
// //                 </View>
// //               ))}
// //               {emotionData.map((result, index) => (
// //                 <View key={index + 6} style={styles.infoItem}>
// //                   <Text style={styles.infoLabel}>{result.top3}</Text>
// //                   <View
// //                       style={[
// //                         styles.progressBar,
// //                         { width: `${result.top3_pre * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// //                       ]}
// //                     />
// //                 </View>
// //               ))}
// //             </View>

// //             <View style={styles.resultContainer}>
// //               <Text style={styles.resultLabel}>종합 우울지수</Text>
// //               <Text style={styles.resultText}>
// //                 {emotionData.reduce((sum, result) => sum + result.sadPercent, 0) / emotionData.length} 단계
// //               </Text>
// //               <View
// //                       style={[
// //                         styles.progressBar,
// //                         { width: `${result.sadPercent * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// //                       ]}
// //                     />
// //               <Text style={styles.resultMessage}>*추세이 변동해요*</Text>
// //             </View>

// //             <View style={styles.resultContainer}>
// //               <Text style={styles.resultLabel}>종합 행복지수</Text>
// //               <Text style={styles.resultText}>
// //                 {emotionData.reduce((sum, result) => sum + result.happyPercent, 0) / emotionData.length} 단계
// //               </Text>
// //               <View
// //                       style={[
// //                         styles.progressBar,
// //                         { width: `${result.happyPercent * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// //                       ]}
// //                     />
// //               <Text style={styles.resultMessage}>*조금씩 좋아지고 있어요*</Text>
// //             </View>
// //           </>
// //         ) : (
// //           <View style={styles.loadingContainer}>
// //             <Text style={styles.loadingText}>감정 분석 중...</Text>
// //           </View>
// //         )}
// //        </BottomSheetView>
// //      </BottomSheet>
// //      </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#FFF7E0',
// //   },
// //   // header
// //   headerContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: 10,
// //     paddingHorizontal: 16,
// //   },
// //   headerButton: {
// //     padding: 5,
// //     justifyContent: 'flex-start',
// //   },
// //   headerText: {
// //     justifyContent: 'center',
// //     fontSize: 25,
// //     flex: 1, 
// //     marginRight: 20,
// //     textAlign: 'center',
// //   },

// //   pressableArea: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     flexDirection: 'column', // 이미지를 위로, bubble을 아래로
// //   },  
  
// //   // image
// //   imageContainer: {
// //     width: 300,
// //     height: 300,
// //     resizeMode: 'contain',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginLeft: 40,
// //   },
// //   image: {
// //     width: 300,
// //     height: 300,
// //   },

// //   // button
// //   buttonContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     // paddingVertical: 300,
// //     paddingHorizontal: 16,
// //   },
// //   button: {
// //     position: 'absolute',
// //     backgroundColor: '#FFD580',
// //     padding: 15,
// //     borderRadius: 20,
// //     // bottom: 280, // 위치 조정, 이미지 위로
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //   },
// //   buttonText: {
// //     color: '#FFFFFF',
// //     fontSize: 30,
// //     fontWeight: 'bold',
// //   },

// //   // bottomsheet
// //   bottomSheetContainer: {
// //     // backgroundColor: '#fff',
// //     borderTopLeftRadius: 100,
// //     borderTopRightRadius: 100,
// //   },
// //   infoContainer: {
// //     width: '80%',
// //     marginBottom: 24,
// //   },
// //   infoItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginVertical: 8,
// //   },
// //   infoLabel: {
// //     flex: 1,
// //     fontSize: 16,
// //   },
// //   progressBar: {
// //     flex: 2,
// //     height: 16,
// //     borderRadius: 8,
// //   },
// //   resultContainer: {
// //     width: '20%',
// //     marginVertical: 12,
// //   },
// //   resultLabel: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 4,
// //   },
// //   resultText: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //   },
// //   resultMessage: {
// //     fontSize: 14,
// //     color: '#888',
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   loadingText: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default ReportScreen;




// // // // // axios.get(`${API_URL}/analyze-emotion`) API 하나인 버전
// // // // import React, { useRef, useState } from 'react';
// // // // import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
// // // // import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// // // // import Ionicons from '@expo/vector-icons/Ionicons';
// // // // import COLORS from '../../constants/colors';
// // // // import axios from 'axios';

// // // // const API_URL = 'http://192.168.0.235:8080';

// // // // const ReportScreen = () => {
// // // //   const bottomSheetRef = useRef(null);
// // // //   const [isAnalyzing, setIsAnalyzing] = useState(false);
// // // //   const [emotionData, setEmotionData] = useState(null);
// // // //   const [imagePath, setImagePath] = useState(null);

// // // //   const handleAnalyzeEmotion = async () => {
// // // //     setIsAnalyzing(true);
// // // //     try {
// // // //       const analyzeResponse = await axios.get(`${API_URL}/analyze-emotion`);
// // // //       if (analyzeResponse.data.status === 200) {
// // // //         console.log(analyzeResponse.data.message);
// // // //         setEmotionData(analyzeResponse.data.data);
// // // //         setImagePath(analyzeResponse.data.data.imagePath);
// // // //         bottomSheetRef.current?.expand();
// // // //       } else {
// // // //         console.error(analyzeResponse.data.message);
// // // //         setIsAnalyzing(false);
// // // //         setImagePath(null);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error analyzing emotion:', error);
// // // //       setIsAnalyzing(false);
// // // //       setImagePath(null);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={styles.headerContainer}>
// // // //         <TouchableOpacity style={styles.headerButton}>
// // // //           <Ionicons
// // // //             name={'arrow-back-outline'}
// // // //             size={30}
// // // //             color={COLORS.black}
// // // //           />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerText}>오늘 아이의 기분은...</Text>
// // // //       </View>
      
// // // //       <View style={styles.imageContainer}>
// // // //         {imagePath ? (
// // // //           <Image
// // // //             style={styles.image}
// // // //             // source={{ uri: imagePath }}
// // // //             source={imagePath}
// // // //           />
// // // //         ) : (
// // // //           <Image
// // // //             style={styles.image}
// // // //             source={require('../../assets/images/chicky/chick (5).png')}
// // // //           />
// // // //         )}
// // // //       </View>


// // // //       <View style={styles.buttonContainer}>
// // // //         <TouchableOpacity
// // // //           style={styles.button}
// // // //           onPress={handleAnalyzeEmotion}
// // // //         >
// // // //           <Text style={styles.buttonText}>감정분석하기</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
      
// // // //       <BottomSheet
// // // //         ref={bottomSheetRef}
// // // //         snapPoints={['4%', '60%']}
// // // //         borderRadius={100}
// // // //         containerStyle={styles.bottomSheetContainer}
// // // //       >
// // // //       <BottomSheetView style={styles.bottomSheet}>
// // // //         {emotionData ? (
// // // //           <>
// // // //             <View style={styles.infoContainer}>
// // // //               {emotionData.map((result, index) => (
// // // //                 <View key={index} style={styles.infoItem}>
// // // //                   <Text style={styles.infoLabel}>{result.top1}</Text>
// // // //                   <View
// // // //                       style={[
// // // //                         styles.progressBar,
// // // //                         { width: `${result.top1_pre * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// // // //                       ]}
// // // //                     />
// // // //                 </View>
// // // //               ))}
// // // //               {emotionData.map((result, index) => (
// // // //                 <View key={index + 3} style={styles.infoItem}>
// // // //                   <Text style={styles.infoLabel}>{result.top2}</Text>
// // // //                   <View
// // // //                       style={[
// // // //                         styles.progressBar,
// // // //                         { width: `${result.top2_pre * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// // // //                       ]}
// // // //                     />
// // // //                 </View>
// // // //               ))}
// // // //               {emotionData.map((result, index) => (
// // // //                 <View key={index + 6} style={styles.infoItem}>
// // // //                   <Text style={styles.infoLabel}>{result.top3}</Text>
// // // //                   <View
// // // //                       style={[
// // // //                         styles.progressBar,
// // // //                         { width: `${result.top3_pre * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// // // //                       ]}
// // // //                     />
// // // //                 </View>
// // // //               ))}
// // // //             </View>

// // // //             <View style={styles.resultContainer}>
// // // //               <Text style={styles.resultLabel}>종합 우울지수</Text>
// // // //               <Text style={styles.resultText}>
// // // //                 {emotionData.reduce((sum, result) => sum + result.sadPercent, 0) / emotionData.length} 단계
// // // //               </Text>
// // // //               <View
// // // //                       style={[
// // // //                         styles.progressBar,
// // // //                         { width: `${result.sadPercent * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// // // //                       ]}
// // // //                     />
// // // //               <Text style={styles.resultMessage}>*추세이 변동해요*</Text>
// // // //             </View>

// // // //             <View style={styles.resultContainer}>
// // // //               <Text style={styles.resultLabel}>종합 행복지수</Text>
// // // //               <Text style={styles.resultText}>
// // // //                 {emotionData.reduce((sum, result) => sum + result.happyPercent, 0) / emotionData.length} 단계
// // // //               </Text>
// // // //               <View
// // // //                       style={[
// // // //                         styles.progressBar,
// // // //                         { width: `${result.happyPercent * 100}%`, backgroundColor: index === 0 ? '#ff9999' : index === 1 ? '#9999ff' : '#cc99ff' },
// // // //                       ]}
// // // //                     />
// // // //               <Text style={styles.resultMessage}>*조금씩 좋아지고 있어요*</Text>
// // // //             </View>
// // // //           </>
// // // //         ) : (
// // // //           <View style={styles.loadingContainer}>
// // // //             <Text style={styles.loadingText}>감정 분석 중...</Text>
// // // //           </View>
// // // //         )}
// // // //       </BottomSheetView>
// // // //     </BottomSheet>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#FFF7E0',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   // header
// // // //   headerContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'space-between',
// // // //     paddingVertical: 10,
// // // //     paddingHorizontal: 5,
// // // //     marginTop: -200,
// // // //     marginBottom: 80,
// // // //   },
// // // //   headerButton: {
// // // //     padding: 5,
// // // //     justifyContent: 'flex-start',
// // // //   },
// // // //   headerText: {
// // // //     justifyContent: 'center',
// // // //     fontSize: 25,
// // // //     flex: 1, 
// // // //     marginRight: 20,
// // // //     textAlign: 'center',
// // // //     fontFamily: 'OnglipRyujeongche'
// // // //   },

// // // //   pressableArea: {
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     flexDirection: 'column', // 이미지를 위로, bubble을 아래로
// // // //   },  

// // // //   // image
// // // //   imageContainer: {
// // // //     width: 300,
// // // //     height: 300,
// // // //     resizeMode: 'contain',
// // // //     // marginBottom: 40,
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   image: {
// // // //     width: 300,
// // // //     height: 300,
// // // //   },

// // // //   // button
// // // //   buttonContainer: {
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     marginTop: -50, // 이미지와 버튼 사이의 간격 조정
// // // //   },
// // // //   button: {
// // // //     backgroundColor: '#FFD580',
// // // //     padding: 15,
// // // //     borderRadius: 20,
// // // //     shadowColor: '#000',
// // // //     shadowOffset: {
// // // //       width: 0,
// // // //       height: 2,
// // // //     },
// // // //     shadowOpacity: 0.25,
// // // //     shadowRadius: 3.84,
// // // //     elevation: 5,
// // // //   },
// // // //   buttonText: {
// // // //     color: '#FFFFFF',
// // // //     fontSize: 28,
// // // //     fontWeight: 'bold',
// // // //   },

// // // //   // bottomsheet
// // // //   bottomSheetContainer: {
// // // //     // backgroundColor: '#fff',
// // // //     borderTopLeftRadius: 100,
// // // //     borderTopRightRadius: 100,
// // // //   },
// // // //   infoContainer: {
// // // //     width: '80%',
// // // //     marginBottom: 24,
// // // //   },
// // // //   infoItem: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginVertical: 8,
// // // //   },
// // // //   infoLabel: {
// // // //     flex: 1,
// // // //     fontSize: 16,
// // // //   },
// // // //   progressBar: {
// // // //     flex: 2,
// // // //     height: 16,
// // // //     borderRadius: 8,
// // // //   },
// // // //   resultContainer: {
// // // //     width: '20%',
// // // //     marginVertical: 12,
// // // //   },
// // // //   resultLabel: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 4,
// // // //   },
// // // //   resultText: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   resultMessage: {
// // // //     fontSize: 14,
// // // //     color: '#888',
// // // //   },
// // // //   loadingContainer: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   loadingText: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //   },
// // // // });

// // // // export default ReportScreen;




// // // import React, { useRef, useState} from 'react';
// // // import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// // // import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// // // import Ionicons from '@expo/vector-icons/Ionicons';
// // // import COLORS from '../../constants/colors';
// // // import axios, { all } from 'axios';

// // // const API_URL = 'http://3.34.107.88:8080';

// // // const ReportScreen = () => {
// // //   const bottomSheetRef = useRef(null);
// // //   const [emotionData, setEmotionData] = useState(null);

// // //   const handleAnalyzeEmotion = async () => {

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.headerContainer}>
// // //         <TouchableOpacity style={styles.headerButton}>
// // //           <Ionicons
// // //             name={'arrow-back-outline'}
// // //             size={30}
// // //             color={COLORS.black}
// // //           />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerText}>오늘 아이의 기분은...</Text>
// // //       </View>

// // //       <View style={styles.buttonContainer}>
// // //         <TouchableOpacity
// // //           style={styles.button}
// // //           onPress={handleAnalyzeEmotion}
// // //         >
// // //           <Text style={styles.buttonText}>감정분석하기</Text>
// // //         </TouchableOpacity>
// // //       </View>
      
// // //       <BottomSheet
// // //         ref={bottomSheetRef}
// // //         snapPoints={['4%', '60%']}
// // //         borderRadius={100}
// // //         containerStyle={styles.bottomSheetContainer}
// // //       >
// // //         <BottomSheetView style={styles.bottomSheet}>
// // //             <View style={styles.infoContainer}>
// // //               <View style={styles.infoItem}>
// // //                 <Text style={styles.infoLabel}>화가 나요</Text>
// // //                 <View style={[styles.progressBar, { backgroundColor: '#ff9999' }]} />
// // //               </View>
// // //               <View style={styles.infoItem}>
// // //                 <Text style={styles.infoLabel}>슬퍼요</Text>
// // //                 <View style={[styles.progressBar, { backgroundColor: '#9999ff' }]} />
// // //               </View>
// // //               <View style={styles.infoItem}>
// // //                 <Text style={styles.infoLabel}>우울해요</Text>
// // //                 <View style={[styles.progressBar, { backgroundColor: '#cc99ff' }]} />
// // //               </View>
// // //               <View style={styles.infoItem}>
// // //                 <Text style={styles.infoLabel}>기뻐요</Text>
// // //                 <View style={[styles.progressBar, { backgroundColor: '#99ffcc' }]} />
// // //               </View>
// // //             </View>

// // //             <View style={styles.resultContainer}>
// // //               <Text style={styles.resultLabel}>종합 우울지수</Text>
// // //               <Text style={styles.resultText}>3단계</Text>
// // //               <Text style={styles.resultMessage}>*추세이 변동해요*</Text>
// // //             </View>

// // //             <View style={styles.resultContainer}>
// // //               <Text style={styles.resultLabel}>종합 행복지수</Text>
// // //               <Text style={styles.resultText}>2단계</Text>
// // //               <Text style={styles.resultMessage}>*조금씩 좋아지고 있어요*</Text>
// // //             </View>
// // //         </BottomSheetView>
// // //       </BottomSheet>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //   },
  

// // //   // header
// // //   headerContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     backgroundColor: '#ffefd5',
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 16,
// // //   },
// // //   headerButton: {
// // //     padding: 8,
// // //     justifyContent: 'flex-start',
// // //   },
// // //   headerText: {
// // //     justifyContent: 'center',
// // //     fontSize: 25,
// // //     flex: 1, 
// // //     textAlign: 'center',
// // //   },

// // //   // button
// // //   button: {
// // //     backgroundColor: '#841584',
// // //     paddingVertical: 12,
// // //     paddingHorizontal: 24,
// // //     borderRadius: 4,
// // //   },
// // //   buttonText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },

// // //   // bottomsheet
// // //   bottomSheetContainer: {
// // //     // backgroundColor: '#fff',
// // //     borderTopLeftRadius: 100,
// // //     borderTopRightRadius: 100,
// // //   },
// // //   infoContainer: {
// // //     width: '80%',
// // //     marginBottom: 24,
// // //   },
// // //   infoItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginVertical: 8,
// // //   },
// // //   infoLabel: {
// // //     flex: 1,
// // //     fontSize: 16,
// // //   },
// // //   progressBar: {
// // //     flex: 2,
// // //     height: 16,
// // //     borderRadius: 8,
// // //   },
// // //   resultContainer: {
// // //     width: '20%',
// // //     marginVertical: 12,
// // //   },
// // //   resultLabel: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     marginBottom: 4,
// // //   },
// // //   resultText: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //   },
// // //   resultMessage: {
// // //     fontSize: 14,
// // //     color: '#888',
// // //   },
// // // });

// // // export default ReportScreen;


// import React, { useRef, useState} from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import COLORS from '../../constants/colors';
// import axios, { all } from 'axios';

// const ReportScreen = () => {
//   const bottomSheetRef = useRef(null);
// ㅁ
//   const handleAnalyzeEmotion = async () => {
//     fetch('http://127.0.0.1:5000/emotion_analysis_results')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // 데이터 출력 또는 처리
//       })
//       .catch(error => console.error('Error:', error));

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity style={styles.headerButton}>
//           <Ionicons
//             name={'arrow-back-outline'}
//             size={30}
//             color={COLORS.black}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>오늘 아이의 기분은...</Text>
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleAnalyzeEmotion}
//         >
//           <Text style={styles.buttonText}>감정분석하기</Text>
//         </TouchableOpacity>
//       </View>
      
//       <BottomSheet
//         ref={bottomSheetRef}
//         snapPoints={['4%', '60%']}
//         borderRadius={100}
//         containerStyle={styles.bottomSheetContainer}
//       >
//         <BottomSheetView style={styles.bottomSheet}>
//             <View style={styles.infoContainer}>
//               <View style={styles.infoItem}>
//                 <Text style={styles.infoLabel}>화가 나요</Text>
//                 <View style={[styles.progressBar, { backgroundColor: '#ff9999' }]} />
//               </View>
//               <View style={styles.infoItem}>
//                 <Text style={styles.infoLabel}>슬퍼요</Text>
//                 <View style={[styles.progressBar, { backgroundColor: '#9999ff' }]} />
//               </View>
//               <View style={styles.infoItem}>
//                 <Text style={styles.infoLabel}>우울해요</Text>
//                 <View style={[styles.progressBar, { backgroundColor: '#cc99ff' }]} />
//               </View>
//               <View style={styles.infoItem}>
//                 <Text style={styles.infoLabel}>기뻐요</Text>
//                 <View style={[styles.progressBar, { backgroundColor: '#99ffcc' }]} />
//               </View>
//             </View>

//             <View style={styles.resultContainer}>
//               <Text style={styles.resultLabel}>종합 우울지수</Text>
//               <Text style={styles.resultText}>3단계</Text>
//               <Text style={styles.resultMessage}>*추세이 변동해요*</Text>
//             </View>

//             <View style={styles.resultContainer}>
//               <Text style={styles.resultLabel}>종합 행복지수</Text>
//               <Text style={styles.resultText}>2단계</Text>
//               <Text style={styles.resultMessage}>*조금씩 좋아지고 있어요*</Text>
//             </View>
//         </BottomSheetView>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
  

//   // header
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#ffefd5',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//   },
//   headerButton: {
//     padding: 8,
//     justifyContent: 'flex-start',
//   },
//   headerText: {
//     justifyContent: 'center',
//     fontSize: 25,
//     flex: 1, 
//     textAlign: 'center',
//   },

//   // button
//   button: {
//     backgroundColor: '#841584',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 4,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   // bottomsheet
//   bottomSheetContainer: {
//     // backgroundColor: '#fff',
//     borderTopLeftRadius: 100,
//     borderTopRightRadius: 100,
//   },
//   infoContainer: {
//     width: '80%',
//     marginBottom: 24,
//   },
//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   infoLabel: {
//     flex: 1,
//     fontSize: 16,
//   },
//   progressBar: {
//     flex: 2,
//     height: 16,
//     borderRadius: 8,
//   },
//   resultContainer: {
//     width: '20%',
//     marginVertical: 12,
//   },
//   resultLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   resultText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   resultMessage: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default ReportScreen;



// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button, Image } from 'react-native';
// import * as Progress from 'react-native-progress';

// const ReportScreen = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = () => {
//     setLoading(true);
//     fetch('http://192.168.0.241:5000/emotion_analysis_results')
//       .then(response => response.json())
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/images/chicky/chick (5).png')} style={styles.chickImage} />
//       <Text style={styles.title}>감정분석 병아리</Text>
//       <Button title="감정분석하기" onPress={fetchData} color="#FFA500" />
//       {loading && <ActivityIndicator size="large" color="#FFA500" style={styles.loading} />}
//       {data && !loading && (
//         <ScrollView style={styles.dataContainer}>
//           <Text style={styles.date}>날짜: {data.date_today}</Text>
//           <View style={styles.ratioContainer}>
//             <Text style={styles.label}>종합 행복 지수: </Text>
//             <Text style={styles.ratio}>{data.happiness_ratio}</Text>
//             <Progress.Bar 
//               progress={data.happiness_ratio / 100} 
//               width={200} 
//               color="#FFD700" 
//               style={styles.progressBar} 
//             />
//           </View>
//           <View style={styles.ratioContainer}>
//             <Text style={styles.label}>종합 우울 지수: </Text>
//             <Text style={styles.ratio}>{data.depression_ratio}</Text>
//             <Progress.Bar 
//               progress={data.depression_ratio / 100} 
//               width={200} 
//               color="#1E90FF" 
//               style={styles.progressBar} 
//             />
//           </View>
//           <Text style={styles.label}>상위 감정:</Text>
//           <Text style={styles.emotion}>1. {data.top1_emotion} ({data.top1_percentage}%)</Text>
//           <Progress.Bar 
//             progress={data.top1_percentage / 100} 
//             width={200} 
//             color="#FF6347" 
//             style={styles.progressBar} 
//           />
//           <Text style={styles.emotion}>2. {data.top2_emotion} ({data.top2_percentage}%)</Text>
//           <Progress.Bar 
//             progress={data.top2_percentage / 100} 
//             width={200} 
//             color="#FF8C00" 
//             style={styles.progressBar} 
//           />
//           <Text style={styles.emotion}>3. {data.top3_emotion} ({data.top3_percentage}%)</Text>
//           <Progress.Bar 
//             progress={data.top3_percentage / 100} 
//             width={200} 
//             color="#FFD700" 
//             style={styles.progressBar} 
//           />
//         </ScrollView>
//       )}
//       {!data && !loading && (
//         <Text style={styles.message}>데이터를 불러오려면 버튼을 누르세요.</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF8DC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   chickImage: {
//     width: 200,
//     height: 200,
//     // marginBottom: 0,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FFA500',
//     marginBottom: 20,
//   },
//   loading: {
//     marginTop: 20,
//   },
//   dataContainer: {
//     marginTop: 20,
//     backgroundColor: '#FFFACD',
//     padding: 20,
//     borderRadius: 10,
//     width: '100%',
//   },
//   date: {
//     fontSize: 18,
//     color: '#FFA500',
//     marginBottom: 10,
//   },
//   ratioContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 18,
//     color: '#FF8C00',
//   },
//   ratio: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FF4500',
//     marginLeft: 10,
//   },
//   emotion: {
//     fontSize: 16,
//     color: '#FF6347',
//     marginBottom: 5,
//   },
//   progressBar: {
//     marginTop: 5,
//     marginLeft: 10,
//   },
//   message: {
//     fontSize: 16,
//     color: '#FF8C00',
//     marginTop: 20,
//   },
// });

// export default ReportScreen;

















// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button, Image } from 'react-native';
// import * as Progress from 'react-native-progress';

// const ReportScreen = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchWithTimeout = (url, options, timeout = 7000) => {
//     return Promise.race([
//       fetch(url, options),
//       new Promise((_, reject) =>
//         setTimeout(() => reject(new Error('timeout')), timeout)
//       )
//     ]);
//   };
  
//   const fetchData = () => {
//     setLoading(true);
//     fetchWithTimeout('http://192.168.0.241:5001/emotion_analysis_results', {}, 7000)
//       .then(response => response.json())
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   };
  
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/images/chicky/chick (5).png')} style={styles.chickImage} />
//       <Text style={styles.title}>감정분석 병아리</Text>
//       <Button title="감정분석하기" onPress={fetchData} color="#FFA500" />
//       {loading && <ActivityIndicator size="large" color="#FFA500" style={styles.loading} />}
//       {data && !loading && (
//         <ScrollView style={styles.dataContainer}>
//           <Text style={styles.date}>날짜: {data.date_today}</Text>
//           <View style={styles.ratioContainer}>
//             <Text style={styles.label}>종합 행복 지수: </Text>
//             <Text style={styles.ratio}>{data.happiness_ratio}</Text>
//             <Progress.Bar 
//               progress={data.happiness_ratio / 100} 
//               width={200} 
//               color="#FFD700" 
//               style={styles.progressBar} 
//             />
//           </View>
//           <View style={styles.ratioContainer}>
//             <Text style={styles.label}>종합 우울 지수: </Text>
//             <Text style={styles.ratio}>{data.depression_ratio}</Text>
//             <Progress.Bar 
//               progress={data.depression_ratio / 100} 
//               width={200} 
//               color="#1E90FF" 
//               style={styles.progressBar} 
//             />
//           </View>
//           <Text style={styles.label}>상위 감정:</Text>
//           <Text style={styles.emotion}>1. {data.top1_emotion} ({data.top1_percentage}%)</Text>
//           <Progress.Bar 
//             progress={data.top1_percentage / 100} 
//             width={200} 
//             color="#FF6347" 
//             style={styles.progressBar} 
//           />
//           <Text style={styles.emotion}>2. {data.top2_emotion} ({data.top2_percentage}%)</Text>
//           <Progress.Bar 
//             progress={data.top2_percentage / 100} 
//             width={200} 
//             color="#FF8C00" 
//             style={styles.progressBar} 
//           />
//           <Text style={styles.emotion}>3. {data.top3_emotion} ({data.top3_percentage}%)</Text>
//           <Progress.Bar 
//             progress={data.top3_percentage / 100} 
//             width={200} 
//             color="#FFD700" 
//             style={styles.progressBar} 
//           />
//         </ScrollView>
//       )}
//       {!data && !loading && (
//         <Text style={styles.message}>데이터를 불러오려면 버튼을 누르세요.</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF8DC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   chickImage: {
//     width: 200,
//     height: 200,
//     // marginBottom: 0,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FFA500',
//     marginBottom: 20,
//   },
//   loading: {
//     marginTop: 20,
//   },
//   dataContainer: {
//     marginTop: 20,
//     backgroundColor: '#FFFACD',
//     padding: 20,
//     borderRadius: 10,
//     width: '100%',
//   },
//   date: {
//     fontSize: 18,
//     color: '#FFA500',
//     marginBottom: 10,
//   },
//   ratioContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 18,
//     color: '#FF8C00',
//   },
//   ratio: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FF4500',
//     marginLeft: 10,
//   },
//   emotion: {
//     fontSize: 16,
//     color: '#FF6347',
//     marginBottom: 5,
//   },
//   progressBar: {
//     marginTop: 5,
//     marginLeft: 10,
//   },
//   message: {
//     fontSize: 16,
//     color: '#FF8C00',
//     marginTop: 20,
//   },
// });

// export default ReportScreen;



import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const ReportScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageSource, setImageSource] = useState(require('../../assets/images/chicky/chick (5).png'));

  const fetchWithTimeout = (url, options, timeout = 30000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), timeout)
      )
    ]);
  };

  const fetchData = () => {
    setLoading(true);
    fetchWithTimeout('http://192.168.0.241:5001/emotion_analysis_results', {}, 30000)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
        setImageSource(require('../../assets/images/emotion/grinning.png')); // 데이터를 성공적으로 가져왔을 때 이미지 변경
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.chickImage} />
      <Text style={styles.title}>감정분석 병아리</Text>
       <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={fetchData}
        >
          <Text style={styles.buttonText}>감정분석하기</Text>
        </TouchableOpacity>
      </View>
      {/* <Button style={styles.button} title="감정분석하기" onPress={fetchData} color="#FFA500" /> */}
      {loading && <ActivityIndicator size="large" color="#FFA500" style={styles.loading} />}
      {data && !loading && (
        <ScrollView style={styles.dataContainer}>
          <Text style={styles.date}>날짜: {data.date_today}</Text>
          <View style={styles.ratioContainer}>
            <Text style={styles.label}>종합 행복 지수: </Text>
            <Text style={styles.ratio}>{data.happiness_ratio}</Text>
            <Progress.Bar
              progress={data.happiness_ratio / 100}
              width={150}
              color="#FFD700"
              style={styles.progressBar}
            />
          </View>
          <View style={styles.ratioContainer}>
            <Text style={styles.label}>종합 우울 지수: </Text>
            <Text style={styles.ratio}>{data.depression_ratio}</Text>
            <Progress.Bar
              progress={data.depression_ratio / 100}
              width={150}
              color="#1E90FF"
              style={styles.progressBar}
            />
          </View>
          <Text style={styles.label}>상위 감정:</Text>
          <Text style={styles.emotion}>1. {data.top1_emotion} ({data.top1_percentage}%)</Text>
          <Progress.Bar
            progress={data.top1_percentage / 100}
            width={200}
            color="#FF6347"
            style={styles.progressBar}
          />
          <Text style={styles.emotion}>2. {data.top2_emotion} ({data.top2_percentage}%)</Text>
          <Progress.Bar
            progress={data.top2_percentage / 100}
            width={200}
            color="#FF8C00"
            style={styles.progressBar}
          />
          <Text style={styles.emotion}>3. {data.top3_emotion} ({data.top3_percentage}%)</Text>
          <Progress.Bar
            progress={data.top3_percentage / 100}
            width={200}
            color="#FFD700"
            style={styles.progressBar}
          />
        </ScrollView>
      )}
      {!data && !loading && (
        <Text style={styles.message}>데이터를 불러오려면 버튼을 누르세요.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  chickImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50, // 이미지와 버튼 사이의 간격 조정
  },
  button: {
    backgroundColor: '#FFD580',
    marginTop: 50,
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 20,
  },
  dataContainer: {
    marginTop: 20,
    backgroundColor: '#FFFACD',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  date: {
    fontSize: 18,
    color: '#FFA500',
    marginBottom: 10,
  },
  ratioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#FF8C00',
  },
  ratio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4500',
    marginLeft: 10,
  },
  emotion: {
    fontSize: 16,
    color: '#FF6347',
    marginBottom: 5,
  },
  progressBar: {
    marginTop: 5,
    marginLeft: 10,
  },
  message: {
    fontSize: 15,
    color: '#FF8C00',
    marginTop: 20,
    marginBottom: 50,
  },
});

export default ReportScreen;