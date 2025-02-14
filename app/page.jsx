import UsersCard from '@/components/UsersCard'
import React from 'react'

export async function FetchUsers(){{
    const res = await fetch('https://reqres.in/api/users?page=2')
    const {data} = await res.json()
    return data
}}

export default async function HomePage() {
  const data = await FetchUsers()
  console.log(data)
  return (
    <>
      <h1 className=' text-center font-bold text-3xl mt-10'>Usuarios</h1>
      <div className=' container mx-auto grid grid-cols-2 lg:grid-cols-3 m-10 gap-5'>
          {data.map(user => (
            <UsersCard
            key={user.id}
              user={user}
            />
          ))}
      </div>
      
      
    </>
  )
}
