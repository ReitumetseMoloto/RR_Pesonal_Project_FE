import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// api/users GET
export const GET: RequestHandler =async(event)=>{
    const options: ResponseInit={
        status: 418,
        headers:{
            X: ''
        }
    }
    return new Response('Hello', options)
}

// api/users POST
export const POST: RequestHandler = async(event)=>{
    const data = await event.request.formData()
    const username = data.get('username');
    const idNumber = data.get('idNumber');

    console.log(username);
    console.log(idNumber)

    return new Response(
        JSON.stringify({success:true}),
        {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
}