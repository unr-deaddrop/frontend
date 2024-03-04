import { writable } from 'svelte/store'
import user from './user.js';


/** @type {import('../$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
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
                "Authorization": "Token b0b13fb3c91521945cd53242c4cfcbb341765ee8"
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

        console.log(json.token)
        console.log(JSON.stringify(json))
        return auth
    }
}