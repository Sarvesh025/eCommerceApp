
export async function postal_code_verification(postal_code) {

    try {
        let response = await fetch(`https://api.postalpincode.in/pincode/${postal_code}`, { method: 'GET' });
        let data = await response.json();
        return (data[0].Status === 'Success');
    }
    catch (Error) {
        return false;
    }
};

export function emailFormat(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    else {
        return true;
    }
};

export function validatePhoneNumber (number) {
    // This regex matches common phone number formats (adjust as needed)
    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if(phoneRegex.test(number)) {
        return true;
    }
    else{
        return false;
    }
};

export function size(size) {
    if (size > 0) {
        return true;
    }
    else {
        return false;
    }
}

export const isMobile = () => {
    return typeof window !== 'undefined' && window.matchMedia("(max-width: 1100px)").matches;
}