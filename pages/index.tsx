import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import Widgets from '../components/widgets/widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../Typings'


interface Props{
  tweets: Tweet[]
}


const Home: NextPage = ({tweets}:Props) => {
  console.log(tweets)
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar/>
        <Feed tweets={tweets} />
        <Widgets/>

      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (contxt) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets
    }
  }
}