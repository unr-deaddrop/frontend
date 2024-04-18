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
    
        if(passwd != confirm){throw error(400, "passwords do not match")}
        
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
            
            if (json.message != 'User created'){
                const errorData = json;
                console.log(errorData);

                // leading newline used to align all successive lines. otherwise,
                // the first line is slightly indented relative to the others if
                // there are multiple errors
                let errorlist = "\n";
                
                if(errorData.username != undefined){
                    console.log(errorData.password)
                    errorData.username.forEach((string)=>{errorlist += string +"\n"}) 
                }

                if(errorData.password!= undefined){
                    console.log(errorData.password)
                    errorData.password.forEach((string)=>{errorlist += string +"\n"}) 
                }
                
                console.log(errorlist)
                throw error(400, errorlist)
            }  

            
            throw redirect(302, '/signup_success')
            
        }
    }
}

