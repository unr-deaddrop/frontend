import {goto} from '$app/navigation'

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    //var data = {};
    
    //data['token'] = cookies.get('token');
    //return data;
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        let signup_status = {"status": 200, "body": ""}
        const formData = await request.formData()
        let username = formData.get('username')
        let password = formData.get('password')
        let confirm = formData.get('confirm')
        
        if (password != confirm) {
            console.log("passwords do not match")
                signup_status = {
                status: 400,
                body: JSON.stringify({ error: "Password and confirm password do not match" })
                
            }
            return signup_status
        }

        else {
            const res = await fetch('http://127.0.0.1:8000/backend/users/sign_up', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
            })
            })

            if (!res.ok) {
                console.log("Failed to register user")
                console.log(res.status)
                signup_status = {
                    status: res.status,
                    body: JSON.stringify({ error: "Failed to register user" })
                }
            }

            else {
                console.log("User registered successfuly")
                signup_status = {
                    status: 200,
                    body: JSON.stringify({ message: "User registered successfully" })
                }
            } 
             
            return signup_status
        } 
    }
}
