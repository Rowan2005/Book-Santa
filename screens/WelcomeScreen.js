import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import SantaAnimation from '../components/SantaClaus';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }
    userLogin = (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Sucessfully logged in")
        }).catch((error)=>{
            var errorcode = error.code
            var errormessage = error.message
            return Alert.alert(errormessage)
        })
    }
    userSignUp = (emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Sucessfully logged in")
        }).catch((error)=>{
            var errorcode = error.code
            var errormessage = error.message
            return Alert.alert(errormessage)
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.buttonContainer}>

                <View style = {{justifyContent:'center',alignItems:'center'}}>
                    <SantaAnimation/>
                        <Text style = {styles.title}>Book Santa</Text>
                </View>
                <TextInput style = {styles.loginBox}
                    placeholder = "abc@booksanta.com"
                    keyboardType = "email-address"
                    placeholderTextColor = "#ffff"
                    onChangeText = {(text)=>{
                        this.setState({email:text})
                    }}/>
                    
                     <TextInput style = {styles.loginBox}
                    placeholder = "Enter Password"
                    secureTextEntry = {true}
                    placeholderTextColor = "#ffff"
                    onChangeText = {(text)=>{
                        this.setState({password:text})
                    }}/>
                    <TouchableOpacity style = {[styles.button,{marginBottom:20,marginTop:20}]}
                        onPress = {()=>{this.userLogin(this.state.email,this.state.password)}}>
                            <Text>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button}
                        onPress = {()=>{this.userSignUp(this.state.email,this.state.password)}}>
                            <Text>Sign Up</Text>
                    </TouchableOpacity>
               
               </View> 
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8BE85',
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#000',
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16,
        shadowOffset:{width:0,height:8}
    },
    title: {
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color:'#ff3d00'

    },
})

