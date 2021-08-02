import { StyleSheet,} from 'react-native';

const headerBlock = StyleSheet.create({
   header: {
       backgroundColor: '#fff',
    },
    headerLink:{
        color:'#fff',
        marginLeft:20,
    },
    burger:{
        height:18,
        width:22,
        display:'flex',
        justifyContent:'space-between',
        
    },
    burgerItem:{
        width:22,
        height:2,
        backgroundColor:'#fff',
        zIndex:10,
        borderRadius:30
    },

    searchBarIcon:{
        height:18,
        width:22,
        marginTop:0
    },
    searchbarBlock:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
    }
})
export default headerBlock