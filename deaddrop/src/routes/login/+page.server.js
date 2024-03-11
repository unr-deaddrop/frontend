import { redirect } from '@sveltejs/kit';
import user from './user.js';


/** @type {import('../$types').PageServerLoad} */
export async function load({cookies}) {
    cookies.delete('sessionid',{path:'/'})
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request, cookies}) => {
        const formData = await request.formData()
        let username = formData.get('username')
        let passwd = formData.get('password')
        let auth = false
        
        const res = await fetch('http://127.0.0.1:8000/backend/users/login/', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                //"Authorization": "Token b0b13fb3c91521945cd53242c4cfcbb341765ee8"
                // "Authorization": "Token 60bea874042182f30eab35c1405d420e4b09855d"
            },
            body: JSON.stringify(
                {
                    "username": username,
                    "password": passwd
                }
            )
        })

        // const status = await res.status;
        // let error = null;
        // if (status > 299) error = "some error";
        const json = await res.json()
        
        if (json) {
            user.update(val => val = {...json})
            auth = json.token
        }

        if (json.message === 'successfully logged in') {
            console.log(json.message)
            const token = cookies.set('token', auth.toString(), {path: '/'})
            throw redirect(302, '/dashboard')
        }
        
        else {
            console.log("Authentication failed")
        }
    }
}