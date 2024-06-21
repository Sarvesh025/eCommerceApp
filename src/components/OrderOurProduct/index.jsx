import React, { useState, useEffect } from 'react'
import styles from './orderOurProduct.module.css'
import { postal_code_verification, emailFormat, size } from '../../util'
import { FcSelfServiceKiosk } from 'react-icons/fc';
import emailjs from '@emailjs/browser'
import { useDispatch } from 'react-redux';
import { cancelOrder } from '../../redux/designs/orderSlice';
export default function index({ img, desc, id }) {

    const [form, setForm] = useState({
        email: '',
        phone: '',
        pincode: '',
        address: '',
        small: '',
        medium: '',
        large: '',
        extraLarge: ''
    });

    const [verify, setVerify] = useState({
        email: false,
        pincode: false,
        small: false,
        medium: false,
        large: false,
        extraLarge: false
    });

    function handelChange(e) {
        if (e.target.name === 'email') {
            setForm({ ...form, [e.target.name]: e.target.value });
            if (emailFormat(e.target.value)) {
                setVerify({ ...verify, email: true })
            } else {
                setVerify({ ...verify, email: false })
            }
        }
        else if (e.target.name === 'phone') {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
        else if (e.target.name === 'pincode') {
            setForm({ ...form, [e.target.name]: e.target.value });
            postal_code_verification(e.target.value).then(result => {
                if (result) {
                    setVerify({ ...verify, pincode: true });
                }
                else {
                    setVerify({ ...verify, pincode: false });
                }
            }

            )

        }
        else if (e.target.name === 'address') {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
        else if (e.target.name === 'small') {
            setForm({ ...form, [e.target.name]: e.target.value });
            if (size(e.target.value)) {
                setVerify({ ...verify, small: true });
            }
            else {
                setVerify({ ...verify, small: false });
            }
        }
        else if (e.target.name === 'medium') {
            setForm({ ...form, [e.target.name]: e.target.value });
            if (size(e.target.value)) {
                setVerify({ ...verify, medium: true });
            }
            else {
                setVerify({ ...verify, medium: false });
            }
        }
        else if (e.target.name === 'large') {
            setForm({ ...form, [e.target.name]: e.target.value });
            if (size(e.target.value)) {
                setVerify({ ...verify, large: true });
            }
            else {
                setVerify({ ...verify, large: false });
            }
        }
        else if (e.target.name === 'extraLarge') {
            setForm({ ...form, [e.target.name]: e.target.value });
            if (size(e.target.value)) {
                setVerify({ ...verify, extraLarge: true });
            }
            else {
                setVerify({ ...verify, extraLarge: false });
            }
        }
    }
    const dispatch = useDispatch();

    const handelClose = () => {
        dispatch(cancelOrder({
            img : '',
            desc : '',
            id : ''
          }));
    };

    const handelOrder = (e) => {
        e.preventDefault();

        if((!verify.small && form.small.length) || (!verify.large && form.large.length) || (!verify.medium && form.medium.length) || (!verify.extraLarge && form.extraLarge.length)){
            alert('Please enter a valid number of items to order');
        }
        else{
            if(verify.small || verify.medium || verify.large || verify.extraLarge){
                if(verify.email){
                    if(verify.pincode){
                        // alert(`
                        // CUSTOMER'S DETAILS :-
                        // Email : ${form.email}
                        // phone : ${form.phone}
                        // Pincode : ${form.pincode}
                        // Address : ${form.address}
                        
                        // ORDER'S DETAILS :-
                        // Item : ${desc}
                        // ${form.small && `Small : ${form.small} \n`} ${form.medium && `Medium : ${form.medium} \n`} ${form.large && `Large : ${form.large} \n`} ${form.extraLarge && `Extra-large : ${form.extraLarge}`}
                        // `);
                        //     window.open(`https://wa.me/918420836758?text=${encodeURIComponent(`CUSTOMER'S DETAILS :-\nEmail : ${form.email}\nphone : ${form.phone}\nPincode : ${form.pincode}\nAddress : ${form.address}\n\nORDER'S DETAILS :-\nItem : ${desc}\n${form.small && `Small : ${form.small} \n`} ${form.medium && `Medium : ${form.medium} \n`} ${form.large && `Large : ${form.large} \n`} ${form.extraLarge && `Extra-large : ${form.extraLarge}`}`)}`)            
                  
                        try{
                            emailjs.sendForm('service_ot234zj', 'template_pc0esy8', e.target, 'JcKFmMIAXfLnLokyT');
                            alert('Your order has been placed successfully!');
                            handelClose();
                        }
                        catch(err){
                            alert(err);
                        }

                    }
                    else{
                        alert('Please enter a valid pincode');
                    }
                }
                else{
                    alert('Please enter a valid email address');
                }
            }
            else{
                alert('Please fill the number of items of a perticular size');
            }
        }
     };

    return (
        <div className={styles.orderOurProduct}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={img} alt="image..." style={{ width: '100%', height: '100%' }} />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.heading}>Please Provide Your Details!</h2>
                    <form className={styles.form} onSubmit={handelOrder}>
                        <input name='desc' value={desc} style={{display:'none'}}/>

                        <div>
                            <label htmlFor="">Select your size with required pieces!</label>
                            <div className={styles.sizeContainer}>
                                <input className={styles.inputSize} type="number" name='small' value={form.small} onChange={handelChange} placeholder='S' min='1' max='100' style={form.small ? verify.small ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                                <input className={styles.inputSize} type="number" name='medium' value={form.medium} onChange={handelChange} placeholder='M' min='1' max='100' style={form.medium ? verify.medium ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                                <input className={styles.inputSize} type="number" name='large' value={form.large} onChange={handelChange} placeholder='L' min='1' max='100' style={form.large ? verify.large ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                                <input className={styles.inputSize} type="number" name='extraLarge' value={form.extraLarge} onChange={handelChange} placeholder='XL' min='1' max='100' style={form.extraLarge ? verify.extraLarge ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                            </div>
                        </div>
                        <div className={styles.inputBoxes}>
                            <label htmlFor="phone">Email :</label>
                            <input type="email" name='email' value={form.email} onChange={handelChange} className={styles.inputNum} placeholder='Enter your email id' style={form.email ? verify.email ? { outline: 'green solid' } : { outline: 'red solid' } : {}} required />
                        </div>
                        <div className={styles.inputBoxes}>
                            <label htmlFor="phone">phone :</label>
                            <input type="number" name='phone' value={form.phone} onChange={handelChange} className={styles.inputNum} placeholder='Enter your phone No.' required />
                        </div>
                        <div className={styles.inputBoxes}>
                            <label htmlFor="pincode">Pincode :</label>
                            <input type="number" name='pincode' value={form.pincode} onChange={handelChange} className={styles.inputNum} placeholder='Enter valid pincode' style={form.pincode ? (verify.pincode ? { outline: 'green solid' } : { outline: 'red solid' }) : {}} required />
                        </div>
                        <div className={styles.inputBoxes}>
                            <label htmlFor="address">Address :</label>
                            <textarea name="address" value={form.address} onChange={handelChange} className={styles.inputNum} cols="30" rows="5" required />
                        </div>
                        <div className={styles.actionBtn}>
                            <button onClick={handelClose}>Cancel</button>
                            <button type='submit'>Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
