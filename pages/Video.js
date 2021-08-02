import React from 'react'
import {View,StyleSheet,Text,Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Video from 'react-native-video';

const { width: screenWidth,height:screenHeight } = Dimensions.get('window')


export default function VideoPlayer({navigation}){
    return(
        <ScrollView style={styles.container}>
            <Video source={{uri: "http://cache.mytube.uz/v8/D/Disc15/97b09abc-0c9e-4ac6-94e8-eaea36f5fdd6_768.mp4?file=1"}}   // Can be a URL or a local file.
                ref={(ref) => {// this.player = ref
                }}                                      // Store reference
                onBuffer={()=>{}}     
                resizeMode='cover'
                controls={true}  
                fullscreen={true} 
                //fullscreenAutorotate={true} 
                fullscreenOrientation='landscape'       // Callback when remote video is buffering
                //onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
 container:{
     backgroundColor:'#000'
 },
 backgroundVideo: {
    width:screenWidth,
    height:screenWidth/1.666,
  },
});