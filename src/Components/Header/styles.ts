import { StyleSheet } from "react-native";
import { theme } from "../../assets/theme";

export const styles = StyleSheet.create({
    headerContainer:
    {
        position:'relative',
        backgroundColor: theme.colors.base.gray700,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:173
    },

    form:
    {
        position:'absolute',
        height:54,
        bottom: -54/2,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    input:
    {
        height:54,
        width:'75%',
        backgroundColor:theme.colors.base.gray500,
        borderRadius:5,
        padding:16,
        fontSize:theme.font_size.lg,
        borderColor:theme.colors.base.gray700,
        borderWidth:1,
        marginRight:4,
        color:theme.colors.base.gray100,
    },
    button:
    {
        height:54,
        width:54,
        borderRadius:5,
        backgroundColor:theme.colors.produto.blueDark,
        alignItems:'center',
        justifyContent:'center'
    }
})