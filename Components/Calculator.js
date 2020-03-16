
import React, {Component} from 'react'; //import 
import {View, Text,Button,StyleSheet, TouchableOpacity} from 'react-native'; //import jsx


class Calculator extends Component {
    constructor() {
      super();
      this.history = [];
      this.state = {
        number: "",
        result:"",
        error:"",
      };
    }
  
    // function to display numbers on the screen
    displayNumbers(num) {

        // if user enter any operator before equals, it displays an error otherwise it gives result
        if(num == "="){
            const newVariable = this.state.number
            if(newVariable.slice(-1) == "+" || newVariable.slice(-1) == "-" || newVariable.slice(-1) == "*" || newVariable.slice(-1) == "/" || newVariable.slice(-1) == "(" || newVariable.slice(-1) == "%" || newVariable.slice(-1) == "."){
                this.setState(
                    {
                        number: "",
                        error:"Invalid Expression",
                        
                    },
                );
                
            } else{
                this.setState(
                    {
                        result: String(eval(this.state.number)),

                    },
                    ()=> {
                        this.history.push(this.state.number + " = " +this.state.result+"\n");
                        this.state.number="";
                    }
                );
            }

        } else if(num=="CE"){ //if user press CE, it backspace last string
            this.setState(
                {
                    number: this.state.number.substring(0, this.state.number.length - 1),
                    result: "",
                    
                },
            );

        } else if(num=="C"){ // if user press C, it clears all the text
            this.setState(
                {
                    error:"",
                    number: "",
                },
            );
        } else if(num == "+" || num == "-" || num == "(" || num== ")" || num=="*" || num == "/" || num == "%" || num == "." ){ // if user press 2 operators, it displays an error
            const newVariables = this.state.number
            if(newVariables.slice(-1) == "+" || newVariables.slice(-1) == "-" || newVariables.slice(-1) == "*" || newVariables.slice(-1) == "/" || newVariables.slice(-1) == "(" || newVariables.slice(-1) == ")" || newVariables.slice(-1) == "%" || newVariables.slice(-1) == "." ){
                this.setState(
                    {
                        number: "",
                        error:"Invalid Expression",
                        
                    },
                );
                
            } else{
                this.setState(
                    {
                        error:"",
                        number: this.state.number + num,
                        result: "",
                    },
                );
            }

        } else{ // it just concatenate all the operators and operands
            this.setState(
                {
                    error:"",
                    number: this.state.number + num,
                    result: "",
                },
            );
            
        }

        
        
      
    }
    render() { //View that user can see
      return (
        <View style={styles.container}>
            <View style={styles.half1}>
                <Text style={styles.texts}>{this.state.number}</Text>
                <Text style={styles.texts}>{this.state.result}</Text>
                <Text style={styles.error} >{this.state.error}</Text>
                <Text style={styles.texts}>--------------------</Text>
                
                
                
                <View style={styles.row}>
                    {/* //TouchableOpacity give feedback */}
                    <TouchableOpacity onPress={() => this.displayNumbers('CE')} >
                        <Text  style={styles.button}>CE</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity onPress={() => this.displayNumbers('C')} >
                        <Text  style={styles.button}>C</Text>
                    </TouchableOpacity>    
                    
                    <TouchableOpacity onPress={() => this.displayNumbers('.')} >
                        <Text  style={styles.button}>.</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity  onPress={() => this.displayNumbers(0)} >
                        <Text style={styles.button}>0</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity  onPress={() => this.displayNumbers(1)} >
                        <Text  style={styles.button} >1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers(2)} >
                        <Text  style={styles.button}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers(3)} >
                        <Text  style={styles.button}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers(4)} >
                        <Text  style={styles.button}>4</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.row}>
                    <TouchableOpacity onPress={() => this.displayNumbers(5)} >
                        <Text  style={styles.button}>5</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.displayNumbers(6)} >
                        <Text  style={styles.button}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers(7)} >
                        <Text  style={styles.button}>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers(8)} >
                        <Text  style={styles.button}>8</Text>
                    </TouchableOpacity>
                </View >

                <View style={styles.row}>    
                    <TouchableOpacity onPress={() => this.displayNumbers(9)} >
                        <Text  style={styles.button}>9</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity  onPress={() => this.displayNumbers("+")} >
                        <Text style={styles.button}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => this.displayNumbers("-")} >
                        <Text  style={styles.button} >-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers("/")} >
                        <Text  style={styles.button}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity onPress={() => this.displayNumbers("*")} >
                        <Text  style={styles.button}>*</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers("=")} >
                        <Text  style={styles.button}>=</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers("(")} >
                        <Text  style={styles.button}>(</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers(")")} >
                        <Text  style={styles.button}>)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.displayNumbers("%")} >
                        <Text  style={styles.button}>%</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.half2}>
                <Text style={styles.text}>History</Text>
                <Text></Text>
                <Text>{this.history}</Text>

            </View>
        </View>
      );
    }
  }

  //Css for this class
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      color:'white',
    },
    half1:{
        flex: 1,
      backgroundColor:'black',
    },
    half2:{
        flex: 1,
        alignItems: "center",
    },
    row:{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        
    },
    text:{
        fontSize:30,
        fontStyle:"italic"
        
    },
    button:{
      fontSize: 25,
      justifyContent:"center",
      alignItems:"center",
      color: 'white',
      borderRadius: 5,
      width:35,
    },
    error:{
        borderColor:'red',
        color:'red',
    },
    texts:{
        fontSize:30,
        color:'white',
    },
});
// it return default Calculator class
export default Calculator;


