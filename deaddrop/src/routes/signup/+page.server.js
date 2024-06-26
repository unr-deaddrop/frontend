import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

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
    
        if(passwd != confirm){
            return {"messages": ["Passwords do not match."]};
        } 

        const res = await fetch('http://backend.localhost/backend/users/sign_up/', {
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
        if (json.message === "User created"){
            throw redirect(302, '/signup_success');
        }

        const errorData = json;
        console.log(errorData);

        let errorlist = [];
        
        if(errorData.username != undefined){
            errorlist = errorlist.concat(errorData.username);
        }

        if(errorData.password != undefined){
            errorlist = errorlist.concat(errorData.password);
        }
        
        console.log(errorlist);
        return {"messages": errorlist};
    }
}

