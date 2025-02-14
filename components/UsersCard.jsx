"use client"
export default function UsersCard({user}) {
  return (
    <div 
        onClick={() => {console.log('Usuario: '+user.id)}}
        className=" container mx-auto max-w-90 grid grid-cols-2 gap-2 space-y-5 mt-10 p-4 border border-slate-300 shadow-lg bg-white rounded-xl cursor-pointer">
        <div className=" max-w-30 ">
            <img className="rounded-full mx-auto p-1 w-full" src={user.avatar} alt="" />
        </div>
        <div className=" text-xl font-bold text-left space-y-5">
            <p>Nombre: <span className=" font-normal">{user.first_name} {''} {user.last_name}</span></p>
            <p>Email: <span className=" font-normal">{user.email}</span></p>
        </div>
    </div>
  )
}
