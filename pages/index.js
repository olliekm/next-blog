import Link from 'next/link'


export async function getServerSideProps(context) {
  const res = await fetch(`https://blog-server-ollie.herokuapp.com/all`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({ data }) {
  return (
    <div className="w-full min-h-screen h-auto bg-slate-300 font-semibold flex justify-center overflow-x-hidden">
      <div className="max-w-[1800px] ">
        <div className="my-20 flex justify-center">
          <h1 className='text-6xl text-gray-900'>Oliver&apos;s Blog</h1>
        </div>
        {
          data.map((post, i) => (
            <a target="_blank" rel="noreferrer" key={i} href={'https://blog.olliekm.com/post/' + post.title} className="max-w-[900px] mx-2 mb-5 min-h-[200px] bg-slate-200/75 drop-shadow-xl rounded-md text-gray-900 p-10 flex flex-col justify-evenly">
              <h1 className='text-4xl font-bold max-w-full overflow-clip p-2'>{post.title}</h1>
              <h2 className=''>{post.shortDescription}</h2>
              <h3>By {post.author}</h3>
            </a>
          ))
        }

      </div>
    </div>
  )
}
