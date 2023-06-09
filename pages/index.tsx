import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Social media app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className="h-screen flex">
            <div className="m-auto text-3xl">Hello world!</div>
          </div>
      </main>
    </>
  )
}
