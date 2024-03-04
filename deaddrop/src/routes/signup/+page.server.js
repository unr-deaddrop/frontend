import {goto} from '$app/navigation'

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    var data = {};
    
    data['token'] = cookies.get('token');
    return data;
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData()
        let username = formData.get('username')
        let passwd = formData.get('password')
        let confirm = formData.get('confirm')
        
        if(passwd != confirm){console.log("error confirmation and password are not the same")}

        const res = await fetch('http://127.0.0.1:8000/backend/users/sign_up/', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            body: JSON.stringify({
                "username": username,
                "password": passwd,
            })
        })

        const json = await res.json();
    }
}

