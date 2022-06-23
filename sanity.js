import {createClient} from 'next-sanity';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    api_version: '2021-03-25',
    use_Cdn : process.env.NODE_ENV == 'production'
}

export const sanityClient = createClient(config)