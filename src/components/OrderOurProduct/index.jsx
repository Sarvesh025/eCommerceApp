import React, { useState, useEffect } from 'react'
import styles from './orderOurProduct.module.css'
import { postal_code_verification, emailFormat, size } from '../../util'
import { FcSelfServiceKiosk } from 'react-icons/fc';
export default function index({ img, desc, id, setShow }) {

    const [form, setForm] = useState({
        email: '',
        landmark: '',
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
        else if (e.target.name === 'landmark') {
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
        // console.log(form);
    }

    const handelClose = () => {
        setShow(false);
    };

    const handelOrder = (e) => {
        e.preventDefault();

        if (verify.email &&
            verify.pincode && (
                (form.small) ||
                (form.medium) ||
                (form.large) ||
                (form.extraLarge))) {
            if ((verify.small && form.small) || (verify.medium && form.medium) || (verify.large && form.large) || (verify.extraLarge && form.extraLarge)) {
                alert(`
            CUSTOMER'S DETAILS :-
            Email : ${form.email}
            Landmark : ${form.landmark}
            Pincode : ${form.pincode}
            Address : ${form.address}

            ORDER'S DETAILS :-
            Item : ${desc}
            ${form.small && `Small : ${form.small} \n`} ${form.medium && `Medium : ${form.medium} \n`} ${form.large && `Large : ${form.large} \n`} ${form.extraLarge && `Extra-large : ${form.extraLarge}`}
            `);
                window.open(`https://wa.me/918420836758?text=${encodeURIComponent(`CUSTOMER'S DETAILS :-\nEmail : ${form.email}\nLandmark : ${form.landmark}\nPincode : ${form.pincode}\nAddress : ${form.address}\nORDER'S DETAILS :-\nItem : ${desc}\n${form.small && `Small : ${form.small} \n`} ${form.medium && `Medium : ${form.medium} \n`} ${form.large && `Large : ${form.large} \n`} ${form.extraLarge && `Extra-large : ${form.extraLarge}`}`)}`)

            } else {
                alert('Please select size!');
            }
        } else {
            alert('Please fill all the detail correctly!');
        }
    };

    useEffect(() => {
        if (postal_code_verification(form.pincode)) {
            setForm({ ...form, })
        }
    }, [form.pincode]);

    return (
        <div className={styles.orderOurProduct}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={img} alt="image..." style={{ width: '100%', height: '100%' }} />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.heading}>Please Provide Your Details!</h2>
                    <form className={styles.form} onSubmit={handelOrder}>

                        <div>
                            <label htmlFor="">Select your size with required pieces!</label>
                            <div className={styles.sizeContainer}>
                                <input className={styles.inputSize} type="number" name='small' value={form.small} onChange={handelChange} placeholder='S' style={form.small ? verify.small ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                                <input className={styles.inputSize} type="number" name='medium' value={form.medium} onChange={handelChange} placeholder='M' style={form.medium ? verify.medium ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                                <input className={styles.inputSize} type="number" name='large' value={form.large} onChange={handelChange} placeholder='L' style={form.large ? verify.large ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                                <input className={styles.inputSize} type="number" name='extraLarge' value={form.extraLarge} onChange={handelChange} placeholder='XL' style={form.extraLarge ? verify.extraLarge ? { outline: 'green solid' } : { outline: 'red solid' } : {}} />
                            </div>
                        </div>
                        <div className={styles.inputBoxes}>
                            <label htmlFor="phone">Email :</label>
                            <input type="email" name='email' value={form.email} onChange={handelChange} className={styles.inputNum} placeholder='Enter your email id' style={form.email ? verify.email ? { outline: 'green solid' } : { outline: 'red solid' } : {}} required />
                        </div>
                        <div className={styles.inputBoxes}>
                            <label htmlFor="landmark">Landmark :</label>
                            <input type="text" name='landmark' value={form.landmark} onChange={handelChange} className={styles.inputNum} placeholder='Enter Landmark' required />
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
