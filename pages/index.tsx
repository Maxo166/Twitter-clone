import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import Widgets from '../components/widgets/widgets'
const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar/>
        <Feed />
        <Widgets/>

      </main>
    </div>
  )
}

export default Home
