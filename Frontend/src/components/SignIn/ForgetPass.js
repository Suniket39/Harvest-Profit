import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./signin.css";
import { URL } from "../../config";
import { Button } from "reactstrap";

function ForgetPassword() {
    // get user inputs
    // const [userName, setUserName] = useState("");
    const [to, setTo] = useState("");
    //const[subject, setSubject]= useState("");
    //const[message, setMessage]= useState("");
    const [mobileNo, setMobileNo] = useState("");
    //const [userPassword, setUserPassword] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [value, setValue]= useState("");
    const [otpbyuser , setOtpbyuser]=useState("");

    // this function is used to navigate from one component to another programmatically
    // userNavigate() returns a function reference

    const navigate = useNavigate();

    const generateotp =()=>{
        if (to.length === 0) {
            toast.error("please enter valid email");
        }
        let otp=Math.floor((Math.random()*10000)+1);
        let subject="System Generated OTP";
        let message=otp;
    
        const body = {
            to,
            subject,
            message
        };
        // make the API call to check if user exists
        const url = `${URL}/sendemail`;

        axios.post(url, body).then((response) => {
            //console.log(response.data);
            if(response.data==="Email sent"){
                toast.success(response.data);
            }else if(response.data==="Email not sent !!"){
                toast.error(response.data);
            }else if(response.data==="User Is Not Registered"){
                toast.warning(response.data);
            }
            setValue(otp);
            //console.log(otp+"then");
            });
    };

    const forgetpassword = () => {

       //console.log("Enter");
        //check if user has really entered any value
        if(value!=otpbyuser){
            toast.error("OTP Mismatched");
        }else if (newPass.length === 0) {
            toast.error("please enter password");
        } else if (confirmPassword.length === 0) {
            toast.error("please enter password");
        } else if(newPass!=confirmPassword){
            toast.error("Password and confirm Password did not matched");
        }else{
           
        const body = {
                to,
                newPass
            };
            // make the API call to check if user exists
            const url = `${URL}/forgetpass`;

            axios.post(url, body).then((response) => {
                if(response.data==="Password Updated Successfully"){
                       toast.success(response.data);
                       navigate("/signin");
                    }

                else
                        toast.warning(response.data);

               
        });
     }
    };

    return (

        <>
            <div className="body">
                <h1 className="title text-center">RESET PASSWORD</h1>
                <hr/>

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="form">
                            <div className="mb-3">
                                <label htmlFor="" className="label-control">
                                    Email address
                                </label>
                                <input
                                    onChange={(e) => {
                                        setTo(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                                {/* <div className="mb-3-sm text-danger">{emailErr}</div> */}
                            </div>
                            <button onClick={generateotp} className="btn btn-primary">
                                    Generate OTP
                                </button>
                                <hr/>
                                <hr/>
                            <div className="mb-2">
                                <label htmlFor="" className="label-control">
                                Enter OTP
                                </label>
                                <input
                                    onChange={(e) => {
                                        setOtpbyuser(e.target.value);
                                    }}
                                    type="tel"
                                    className="form-control"
                                />
                                {/* <div className="mb-2-sm text-danger">{passErr}</div> */}
                            </div>

                            <div className="mb-2">
                                <label htmlFor="" className="label-control">
                                    New Password
                                </label>
                                <input
                                    onChange={(e) => {
                                        setNewPass(e.target.value);
                                    }}
                                    type="password"
                                    className="form-control"
                                />
                                {/* <div className="mb-2-sm text-danger">{passErr}</div> */}
                            </div>

                            <div className="mb-2">
                                <label htmlFor="" className="label-control">
                                    Confirm Password
                                </label>
                                <input
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                    type="password"
                                    className="form-control"
                                />
                                {/* <div className="mb-2-sm text-danger">{passErr}</div> */}
                            </div>

                            <div className="mb-3">

                                <Button color="primary" onClick={forgetpassword} className="btn btn-primary">
                                    Update Password
                                </Button>
                                <Button
                                        color="info"
                                        //size="lg"
                                        className="mx-2"
                                        onClick={() => {
                                        navigate(`/signin`);
                                        }}
                                     >
                                        SignIn
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
}

export default ForgetPassword;