'use client'
import { FaFileSignature } from "react-icons/fa6";
import Field from "../components/Field";
import { useState } from "react";

export default function Login(){
    const [isRequest, setIsRequest] = useState(false);

    return (
            <div className="flex flex-col justify-center items-center gap-5 pt-10  bg-slate-50 h-min-screen h-max-full w-full font-outfit">
                <div className="flex flex-row items-center">
                    <FaFileSignature size={50} fill="blue" />
                    <h1 className="text-blue-500 text-3xl font-bold">SignDesk</h1>
                </div>
                <div className="flex flex-col gap-5 bg-white h-min-fit h-max-[80%] w-1/3 px-10 pt-5 pb-5 rounded-lg shadow-md">
                    <div className="w-full flex justify-center bg-slate-100 rounded-md p-1">
                        <button onClick={
                            
                            ()=>{
                                setIsRequest(false);
                            }
                        } 
                        style={{background: isRequest ?  "transparent": "white", color: isRequest ? "gray": "blue"}}
                        className="flex-1  font-bold text-blue-500 text-sm rounded-xl px-5 py-2">
                            <p>Sign in</p>
                        </button>
                        <button 
                        style={{background: isRequest ? "white" : "transparent", color: isRequest ? "blue" : "gray"}}
                        onClick={
                            ()=>{
                                setIsRequest(true);
                            }
                        } className="flex-1 font-bold rounded-md px-5 py-2 text-sm">
                            <p>Request Account</p>
                        </button>
                    </div>
                     <Field isRequest={isRequest} />
                </div>
            </div>
    )
}