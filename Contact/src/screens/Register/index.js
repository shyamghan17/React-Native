import React, {useState} from 'react';
import RegisterComponent from '../../components/signUp';

import envs from '../../config/env';

const Register = ()=>{

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {BACKEND_URL} = envs;

        console.log('BACKEND_URL :>>', BACKEND_URL);
        console.log('__DEV__ :>>', __DEV__);



    const onChange =({name, value})=>{
        setForm({...form, [name] : value})

        if (value !==''){
            if(name === 'password') {
                if(value.length < 6){

                setErrors((...prev) =>{
                return{...prev, [name]: 'This field is required 6 character'}
            })
                }else{
                    setErrors((prev)=>{
                        return {...prev, [name]:null}
                    })}

            }else{
            setErrors((prev)=>{
                return {...prev, [name]:null}
            })}
        } else {
            setErrors((...prev) =>{
                return{...prev, [name]: 'This field is required'}
            })
           
        }
    };

    const onSubmit = () =>{
        console.log('form:>>', form)
        //validation
        if(!form.userName){
            setErrors((prev) =>{
                return {...prev, userName: 'Please add a user name'}
            })
        }
        if(!form.firstName){
            setErrors((prev) =>{
                return {...prev, firstName: 'Please add a user name'}
            })
        }
        if(!form.lastName){
            setErrors((prev) =>{
                return {...prev, lastName: 'Please add a user name'}
            })
        }
        if(!form.email){
            setErrors((prev) =>{
                return {...prev, email: 'Please add a user name'}
            })
        }
        if(!form.password){
            setErrors((prev) =>{
                return {...prev, password: 'Please add a user name'}
            })
        }
    }
    return <RegisterComponent 
    onSubmit={onSubmit}
    onChange={onChange}
    form ={form} 
    errors ={errors}/>
}
export default Register