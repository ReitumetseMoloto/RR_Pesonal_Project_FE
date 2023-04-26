import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { username } from './store';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login:async ({request}) => {
        const formData = await request.formData();
        const inUsername = String(formData.get("username"));
        if(!inUsername){
            return fail(400, {username, missing:true});
        }
        username.update(()=>inUsername);
        console.log(inUsername);
        return {success:true};
    }
}