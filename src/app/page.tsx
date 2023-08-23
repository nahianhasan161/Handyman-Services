import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Link href={"/new_admin/user_managment"}> <h1 className='font-bold text-blue-500'>{'GO TO New ADMIN DASHBORD ->'}</h1></Link>
     <Link href={"/admin"}> <h1 className='font-bold text-blue-500'>{'GO TO ADMIN DASHBORD ->'}</h1></Link>
     <Link href={"/handyman/email/change"}> <h1 className='font-bold text-blue-500'>{'GO TO Handyman DASHBORD ->'}</h1></Link>
     <Link href={"/client/handyman/find"}> <h1 className='font-bold text-blue-500'>{'GO TO Client DASHBORD ->'}</h1></Link>
      
    </main>
  )
}
