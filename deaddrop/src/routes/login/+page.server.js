import {goto} from '$app/navigation'

/** @type {import('../$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
    // login page
    // add auth
    // sign-in (post and compare passwords) and sign-up (post)
    const formData = await request.formData()
    let username = formData.get('username')
    let passwd = formData.get('password')
    let auth = false
    
    /*
    const res = await fetch('http://127.0.0.1:8000/backend/users/login/', {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
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

        console.log(JSON.stringify(json))
        
        auth? goto('/dashboard') : console.log("error")
    }
    */
}}

    get: async ({request}) => {
    // GET METHOD (NOT USED, only for testing)
    async function doGet () {
        const res = await fetch('http://127.0.0.1:8000/backend/credentials/', {
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": "Token 9163f165e84167aae5eba41367c7f2673f0ea9a7"
            },
            method: 'GET'
        })
        
        const json = await res.json()
        console.log(JSON.stringify(json))
    }
    }