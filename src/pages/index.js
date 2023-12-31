import Link from 'next/link'

export default function Home() {
  return (
      <div className='flex flex-col items-center justify-center h-screen wx-container bg-slate-100'>
      <h1 className='p-4 m-4 text-4xl font-bold text-white bg-black hover:bg-gray-600'>
          <Link href='https://blog.openreplay.com/serverless-vs-edge-functions/' target='_blank'>latencytest</Link>
      </h1>
      <div className='text-black hover:text-gray-600'>
          <Link href='/api/serverless/hello' className='px-4 py-2 mx-auto text-white bg-blue-600 rounded hover:bg-blue-300' target='_blank'>Serverless</Link>
      </div>
      <div className='my-3'></div>
      <div className='text-black hover:text-gray-600'>
          <Link href='/api/edge/hello' className='px-4 py-2 mx-auto text-white bg-blue-600 rounded hover:bg-blue-300' target='_blank'>Edge</Link>
      </div>
   </div>
    )
}
