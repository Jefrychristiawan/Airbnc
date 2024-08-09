import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link, Navigate, useParams } from "react-router-dom"

function AccountPage() {
  const {ready, user} = useContext(UserContext)

  if(!ready){
    return 'Loading...'
  }

  if(ready && !user) {
    return <Navigate to='/login' />
  }

  useParams

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className="py-2 px-6" to='/account' >My profile</Link>
        <Link className="py-2 px-6" to='/account/bookings' >My bookings</Link>
        <Link className="py-2 px-6" to='/account/places' >My accommodations</Link>
        {user.name}
      </nav>
    </div>
  )
}

export default AccountPage