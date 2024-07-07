"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import useRole from './useRole';


const Navbar = () => {
  const pathname = usePathname();
  const [role, isLoading] = useRole()


  const links = [
    {
      title: "Home",
      path: '/'
    },
    {
      title: "About",
      path: '/about'
    },
    {
      title: "Services",
      path: '/services'
    },
    {
      title: "Contact",
      path: '/contact'
    },
  ];


  if (isLoading) {
    return (
      <div className='h-[70vh] flex flex-col justify-center items-center'>
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 border-black rounded-full border-t-8 border-b-8"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-[#E3FF04] border-b-8 animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar p-6 bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links.map(link => (
              <li key={link.path}>
                <Link href={link.path} className={pathname === link.path ? 'font-extrabold border-2' : ''}>
                  {link.title}
                </Link>
              </li>
            ))}
            {
              role === 'admin' && <li>
                <details>
                  <summary className='text-green-500'>Dashboard</summary>
                  <ul className="text-[16px] w-full">
                    <li><Link href="/order">All Orders</Link></li>
                    <li><Link href="/add-project">Add Project</Link></li>
                    <li><Link href="/add-review">Add Review</Link></li>
                    <li><Link href="/all-admin">All Admin</Link></li>
                  </ul>
                </details>
              </li>
            }
          </ul>
        </div>
        <a href='/' className="font-bold text-3xl md:text-4xl md:ml-16">SparkFilter</a>
      </div>
      <div className="navbar-end hidden pr-20 lg:flex">
        <ul className="menu text-[17px] menu-horizontal px-1">
          {links.map(link => (
            <li key={link.path}>
              <Link href={link.path} className={pathname === link.path ? 'font-extrabold border-2' : ''}>
                {link.title}
              </Link>
            </li>
          ))}


          {
            role === 'admin' && <li className='relative'>
              <details className='z-20'>
                <summary className='text-green-500 z-10'>Dashboard</summary>
                <ul className="text-[16px] w-full">
                  <li><Link href="/order">All Orders</Link></li>
                  <li><Link href="/add-project">Add Project</Link></li>
                  <li><Link href="/add-review">Add Review</Link></li>
                  <li><Link href="/all-admin">All Admin</Link></li>
                </ul>
              </details>
            </li>
          }

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
