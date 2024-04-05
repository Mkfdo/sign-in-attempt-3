import styles from "./signup.module.css"




import React from 'react'
import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"


import { FaGoogle } from "react-icons/fa6";
import Link from 'next/link'
import { string } from "zod"




const signupSchema = z.object({
    Name:z.string().min(2,"Name should have atleast 2 characters").max(50,"Name should not exceed 50 characters."),
    Email:z.string().email("Email must be valid"),
    Password:z.string().min(8,"Must be atleast 8 characters"),
});

export default function signup():any {
    

    function onSubmit(values:z.infer<typeof signupSchema>) {
        console.log(values)
    }
  return (
    <>
    
        <div className={styles.signupWrapper}>
            <div className={styles.formWrapper}>
                <div className={styles.left}>
                    <span><b>Create an account</b></span>
                    <div className={styles.subheader}>
                    <p>Start your 30-day free trial</p>
                    </div>                    
                </div>
                <div className={styles.right}>
                    
                    
                            <div className={styles.input_box}>
                                
                                <input type="string"  className={styles.input_field} placeholder="Enter your name"/>
                                    <label htmlFor="pass" className="label">Name*
                                    </label>
                                
                            </div>           
                                        
                                        
                                    
                                
                             

                            <div className={styles.input_box}>
                                <input type="email"  className={styles.input_field} placeholder="Enter your email"/>
                                    <label htmlFor="pass" className="label">Email*
                                    </label>
                                
                                
                            </div>    
                             
                            <div className={styles.input_box}>
                                <input type="password" id="pass" className={styles.input_field} placeholder="********"/>
                                    <label htmlFor="pass" className="label" >Password*
                                    </label>
                                    
                                
                                   
                            </div>            
                            <div className={styles.paragraph}>
                                <p>Must be atleast 8 characters</p>
                            </div>             
                                     
                                     
                                

                            
                            <div className={styles.buttons}>
                                <button type='submit'
                                className={styles.submit}>Get started</button> 
                                <button type="submit"
                                className={styles.google}><FaGoogle className={styles.icon} />Signup with Google
                                </button>
                                    
                                    
                                                               
                                   
                                   
                                <div className={styles.register}>
                                    
                                    <p>Already have an account?<Link href={"/src/app/page"}>Sign in</Link>
                                    </p>
                                </div>
                            </div>
                            
                               
                        </div>
                    </div>
                    
                </div>
            
        
    
    </>
    
  )
}   
                                
                                
                                            
                                        
                                        
                                    
                                
                            
                            