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
      <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github Followers: {data.followers}</div>
      <img className='text-center' src={data.avatar_url} alt='Git Picture' width={300} />
      <p>{data.bio}</p>
    </>

  )
}

export default Github

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/nasir-saeed");
  return response.json()
}