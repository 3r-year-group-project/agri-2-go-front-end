import React from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";
import {checkWord, checkWordExactLen,isFirstDateGreaterThanSecondDate} from "../../../services/utils/FormValidation"; 

import SupportedCards from "../card/Card";
import { formatDate } from "../../../services/utils/date/data";


import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "../card/utils";

import "react-credit-cards/es/styles-compiled.css";

import '../card/styles.css';

export default class StepTwo extends React.Component {
  
    constructor(props) {    
        super(props);
        this.state = {
            
                number: "",
                name: "",
                expiry: "",
                cvc: "",
                issuer: "",
                focused: "",
                fomData: null
            
            ,
            errorText: {
                cardNumber:"",
                holder:"",
                expiry:"",
                cvv:""  
            },
            data:{
                cardNumber:"",
                holder:"",
                expiry:"",
                cvv:"",
                
            }
          }
        }

        


        expiryDate = (v) => {
          if(v.length !== 5){
            this.setState(
              state => ({
                errorText:{...state.errorText, expiry : ["invalid date"]},
                data:{...state.data, expiry : ""}
              }));
          }else{
            let month = parseInt(v.slice(0,2));
            if(month > 12){
              this.setState(
                state => ({
                  errorText:{...state.errorText, expiry : ["invalid month"]},
                  data:{...state.data, expiry : ""}
                }));
            }else{
              let year = parseInt(v.slice(3)) + 2000;
              let d = new Date(year.toString()+"-"+v.slice(0,2)+"-01");
              console.log("d",d);
              let ob = isFirstDateGreaterThanSecondDate(d, new Date())
              console.log("ob date",ob);
              if(ob.state){
              console.log("hello")
              this.setState(
                state => ({
                errorText:{...state.errorText, expiry : ""},
                data:{...state.data, expiry : formatDate(d)}
              }));
             }else{
              this.setState(
              state => ({
                errorText:{...state.errorText, expiry : ob.errors},
                data:{...state.data, expiry : ""}
              }));
            }
          }
            }

            
          
      }

        cvv = (e) => {
          let v = e;
          let ob = checkWordExactLen(v,3);
          if(ob.state){
            this.setState(
              state => ({
                errorText:{...state.errorText, cvv : ""},
                data:{...state.data, cvv : v}
              }));
              
          }else{
            this.setState(
              state => ({
                errorText:{...state.errorText, cvv : ob.errors},
                data:{...state.data, cvv : ""}
              }));
          }
          
      };

    componentDidUpdate() {
        console.log("data",this.state.data);
        if(!Object.values(this.state.data).includes("")){
            console.log("i am true");
            this.props.handleSubmitComponent2(this.state.data);
            
        }
        }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      let ob = checkWordExactLen(target.value,19);
          if(ob.state){ 
              this.setState(
                state => ({
                  errorText:{...state.errorText, cardNumber : ""},
                  data:{...state.data, cardNumber : target.value}
                }));
          }else{
              console.log(ob);
              this.setState(
                state => ({
                  errorText:{...state.errorText, cardNumber : ob.errors},
                  data:{...state.data, cardNumber : ""}
                }));
          }
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      this.expiryDate(target.value);
    } else if (target.name === "cvc") {
      this.cvv(target.value);
      target.value = formatCVC(target.value);
    }else if (target.name === "name") {
      let ob = checkWord(target.value,5,50);
          if(ob.state){
              this.setState(
                state => ({
                  errorText:{...state.errorText, holder : ""},
                  data:{...state.data, holder : target.value}
                }));
          }else{
            this.setState(
              state => ({
                errorText:{...state.errorText, holder : ob.errors},
                data:{...state.data, holder : ""}
              }));
              
          }
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <br/>
              <span style={{color: "red"}}><small>{this.state.errorText.cardNumber}</small></span>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <br/>
              <span style={{color: "red"}}><small>{this.state.errorText.holder}</small></span>
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <br />
                <span style={{color: "red"}}><small>{this.state.errorText.expiry}</small></span>
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <br />
                <span style={{color: "red"}}><small>{this.state.errorText.cvv}</small></span>
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
           
          </form>
          
        </div>
      </div>
    );
  }
}



