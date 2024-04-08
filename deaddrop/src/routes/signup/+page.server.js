import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    var data = {};
    data['token'] = cookies.get('token');
    cookies.delete('token',{path:'/'})
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
        
        else {
            const res = await fetch('http://backend:8000/backend/users/sign_up/', {
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
            console.log((json));
            let message = json['message'];
            if (message !== "Failed"){
                throw redirect(302, '/login')
            }
            else{
                return { "messages": json["password"]}
            }
            // throw redirect(302, '/login')
        }
        
    }
}

