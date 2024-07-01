import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data, setData] = useState()
  // useEffect(() => {
  //   fetch("https://api.github.com/users/nasir-saeed")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //     }
  //     )
  // }, [])
  const data = useLoaderData();
  return (
    <>


      <div className="mt-14 mb-14 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center m-auto">
        <a href="https://github.com/nasir-saeed">
          <img className="rounded-t-lg" src={data.avatar_url} alt="Git Picture" />
        </a>
        <div className="p-5">
          <a href="#">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h2>
          </a>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.bio}</h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Transforming Ideas into Innovative Solutions</p>
          <p className='mb-3'><strong className="mb-3 font-normal text-sky-800">Total Repository: {data.public_repos}</strong></p>
          <a href="https://nasir-saeed-portfolio.netlify.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
           dark:hover:bg-blue-600 dark:focus:ring-blue-600">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </>

  )
}

export default Github

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/nasir-saeed");
  return response.json()
}