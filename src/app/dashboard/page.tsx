"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter,  Link, Input, Accordion, AccordionItem, Divider, User, Button,   Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";





const Dashboard = () => {
      const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-t from-slate-800 to-slate-900 p-4 flex flex-col">
  <div className="flex-grow">
    {/* Logo */}
    <div className="flex justify-left mb-1 text-gray-200 font-bold text-xl">
      <p className="text-green-600">gamesense</p>.vip
    </div>
    <p className="text-gray-300 text-xs font-bold">Current Plan: <span className="text-green-600">Premium</span> </p>
    {/* Navigation */}
    <Divider className="my-2 dark" />
    <ul className="flex flex-col dark text-gray-200">
      <li className="py-2 bg-slate-800 rounded-md">
        <Link className="flex items-center justify-between pl-2 pr-3 text-gray-200 font-semibold transition hover:text-green-600" href="/">
          <span>Dashboard</span>
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </li>
      <li className="py-2">
        <Link className="flex items-center justify-between pl-2 pr-3 text-gray-200 font-semibold transition hover:text-green-600" href="/">
          <span>Support</span>
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </li>
      <li className="py-2">
        <Link className="flex items-center justify-between pl-2 pr-3 text-gray-200 font-semibold transition hover:text-green-600" href="/">
          <span>Discord</span>
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 0 0 1.33 0l1.713-3.293a.783.783 0 0 1 .642-.413 41.102 41.102 0 0 0 3.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0 0 10 2ZM6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </li>
      {/* Add more navigation items here */}
    </ul>
  </div>
{/* Profile Section */}
{/* Profile Section */}
<div className="mt-auto flex justify-left w-full">
  <div className="flex items-start dark">
  <User className="text-gray-200"
      name="Paxz"
      description="Premium"
      avatarProps={{
        src: "https://cdn.discordapp.com/avatars/460509967900868609/569345da72a7fd14e5de70a1b06a47a9.png?size=4096"
      }}
    />
    <div className="ml-3 dark">



     <Dropdown className="dark">
             <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
            <span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 0 0-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 0 0 .649.375h2.158ZM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 0 0 6 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 0 0 0-.75L7.839 7.758ZM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 0 0 4.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 0 0-.65.375l-1.078 1.868Z" />
  <path fillRule="evenodd" d="m14.13 4.347.644-1.117a.75.75 0 0 0-1.299-.75l-.644 1.116a6.954 6.954 0 0 0-2.081-.556V1.75a.75.75 0 0 0-1.5 0v1.29a6.954 6.954 0 0 0-2.081.556L6.525 2.48a.75.75 0 1 0-1.3.75l.645 1.117A7.04 7.04 0 0 0 4.347 5.87L3.23 5.225a.75.75 0 1 0-.75 1.3l1.116.644A6.954 6.954 0 0 0 3.04 9.25H1.75a.75.75 0 0 0 0 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 1 0 .75 1.298l1.117-.644a7.04 7.04 0 0 0 1.523 1.523l-.645 1.117a.75.75 0 1 0 1.3.75l.644-1.116a6.954 6.954 0 0 0 2.081.556v1.29a.75.75 0 0 0 1.5 0v-1.29a6.954 6.954 0 0 0 2.081-.556l.645 1.116a.75.75 0 0 0 1.299-.75l-.645-1.117a7.042 7.042 0 0 0 1.523-1.523l1.117.644a.75.75 0 0 0 .75-1.298l-1.116-.645a6.954 6.954 0 0 0 .556-2.081h1.29a.75.75 0 0 0 0-1.5h-1.29a6.954 6.954 0 0 0-.556-2.081l1.116-.644a.75.75 0 0 0-.75-1.3l-1.117.645a7.04 7.04 0 0 0-1.524-1.523ZM10 4.5a5.475 5.475 0 0 0-2.781.754A5.527 5.527 0 0 0 5.22 7.277 5.475 5.475 0 0 0 4.5 10a5.475 5.475 0 0 0 .752 2.777 5.527 5.527 0 0 0 2.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 0 0 2.78-.753 5.527 5.527 0 0 0 2.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 0 0-.753-2.78 5.528 5.528 0 0 0-2.028-2.002A5.475 5.475 0 0 0 10 4.5Z" clipRule="evenodd" />
</svg>

            </span>
          Account
        </Button>
      </DropdownTrigger>
      
      <DropdownMenu aria-label="Static Actions" className="dark">
        
        <DropdownItem  className="text-gray-200" key="Edituser">Edit username</DropdownItem>
        <DropdownItem className="text-gray-200" key="sethwid">Set HWID</DropdownItem>
        <DropdownItem className="text-gray-200" key="Discord">Discord</DropdownItem>
        <DropdownItem className="text-danger" key="Logout" color="danger">
          Log out hello
        </DropdownItem>
      </DropdownMenu>
        </Dropdown>
        
        </div>

        
  </div>
</div>


</div>


      {/* Main Content */}
      <div className="bg-slate-800 min-h-screen text-white">
      <div className="ml-64 p-2"> 
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <input type="search" placeholder="Search" className="w-48" />
            <button className="ml-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Add your dashboard content here */}
          <h1>HI</h1>
          {/* Add more cards or content here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;