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
        
        const res = await fetch('http://backend:8000/backend/users/login/', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                //"Authorization": "Token b0b13fb3c91521945cd53242c4cfcbb341765ee8"
                // "Authorization": "Token 9163f165e84167aae5eba41367c7f2673f0ea9a7"
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
            const sessionid = cookies.set('sessionid', '0000', {path: '/'})
            throw redirect(302, '/dashboard')
        }
        
        else {
            console.log("Authentication failed")
        }
    }
}