import Head from 'next/head';
import Header from './components/header/Header';

export default function Home() {
  return (
    <>
       <div className="container">
     
     <Head>
       <title>Create Next App</title>
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <main>
     <Header/>
      </main>
      </div>
    </>
    )
}
