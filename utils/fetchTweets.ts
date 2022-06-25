import { Tweet } from "../Typings"

export const fetchTweets = async () => {
    const res = await fetch(`${process.env.NEXTPUBLIC_BASE_URL}/api/getTweets`)
    const data = await res.json()
    const tweets: Tweet[] = data.tweets;
    return tweets;
}