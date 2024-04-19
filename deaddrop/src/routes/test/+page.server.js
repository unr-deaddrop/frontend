/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const auth = cookies.get('token')
    let test = {};

    // let bool_val = true;
    let bool_val = false;

    if (bool_val){
        let test_backend = await fetch(`http://backend.localhost/backend/`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
        })
        test["test_backend"] = await test_backend.json()
        console.log("43 test_backend")
        console.log(test_backend)
    }
    else{
        let test_proxy = await fetch(`http://backend.localhost/backend/`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
        })
        test["test_proxy"] = await test_proxy.json()
        console.log("43 test_proxy")
        console.log(test_proxy)
    }


    
    return {
        "test": test

    };
};