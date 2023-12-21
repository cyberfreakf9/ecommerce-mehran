import React from 'react'
import Navitem from '../navitem'
import MobildMenu from '../mobileMenu'
import { AuthNavbar } from './navbarcomponent'
import Head from 'next/head'
import Link from 'next/link'
import Style from '@/Utils/navStyle.module.css'
import Logout from '../header/logout'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import MobileHamberger from '../mobileHamberger'
import {
  BsFillPersonFill,
  BsFillPersonPlusFill,
  BsCartFill,
} from 'react-icons/bs'

const NavBar = async () => {
  const session = await getServerSession()

  return (
    <div>
      <div className="flex z-20 items-center justify-between h-12 w-full  bg-gray-500 border-b  shadow-md">
        <Head>
          <title>Site</title>

          {/* Meta tags */}
          <meta charset="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          >
            Mehran Autose
          </meta>
          <script type="text/javascript" src="/script/script.js"></script>
        </Head>
        {/* <h2 className="text-orange-500 text-2xl">Navbar</h2> */}
        <div className="flex z-20 items-center justify-start w-10/12">
          <div className=" md:w-1/3  ml-5">
            <span className="text-orange-300 text-2xl font-semibold cursor-pointer hover:text-orange-700">
              <Link href={'/'} className="text-2xl">
                Mehran Filter
              </Link>
            </span>
          </div>
          <div className="  main-nav hidden  md:block">
            {/* {ishamb ? <MobNavitem /> : <Navitem />} */}
            <Navitem />
          </div>
          {/* mobile menu code start */}
          {/* <div className={`${Style.mainnav}  mobnav hidden `} id="main-nav"> */}
          <div className={` hidden ${Style.mobnav}`} id="main-nav">
            {/* <MobNavitem /> */}
            <MobildMenu />
          </div>
          {/* mobile menu code end  */}
        </div>

        <AuthNavbar />
        {/* Register and Login code here */}
        <span>
          <BsFillPersonPlusFill className="text-orange-300 hover:text-orange-500 text-2xl cursor-pointer mx-1" />
        </span>
        <span className="inline-block px-1 mr-1 text-orange-300 hover:text-orange-500 cursor-pointer font-semibold">
          <span className="hidden md:block"> Register </span>
        </span>
        <span>
          <BsFillPersonFill className="text-orange-300 hover:text-orange-500 text-2xl cursor-pointer mx-1" />
        </span>
        <span className="inline-block px-1 mr-1 text-orange-300 hover:text-orange-500 cursor-pointer font-semibold">
          <span className="hidden md:block">
            {session && (
              <div className="relative">
                <span>
                  {' '}
                  <Logout />
                </span>
                {/* <div className="hidden absolute top-10 left-0 -translate-x-2 z-10 bg-gray-700 px-2 py2 border rounded-md shadow-md">
                  <div>user</div>
                  <div>Profile</div>
                </div> */}
              </div>
            )}
            {!session && (
              <span>
                <Link href={'/signin'}>Login</Link>
              </span>
            )}
            {/* <Link href={'/signin'}>Login</Link> */}
          </span>
        </span>
        {/* Hamberger Code Start */}
        <MobileHamberger />
        {/* Hamberger code End Here */}
      </div>
    </div>
  )
}

export default NavBar
