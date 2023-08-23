;


import { Inter } from "next/font/google";


import NavBar from "@/components/Admin/Nav/NavBar";
import LeftBar from "@/components/New_Admin/LeftBar/LeftBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
title: "Admin Dashbord",
  description: "Admin Dashbord",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        
    <html lang="en">
        
      <body className={inter.className}>
      {/* <main className=" min-h-screen w-fit md:w-auto"> */}
      <main className=" min-h-screen ">
        <div>
            <NavBar 
            title="Admin Dashbord"
            />
        </div>
        <div className='flex'>
            
                
    
                <LeftBar />
           
            <div className="w-full sm:basis-3/4 bg-[#F2F8FF] min-w-[0] " >
              <div className=" pt-2 sm:pt-5 md:pt-10 pl-2 sm:p-5 md:p-10 ">

           {children}

              </div>
           

            </div>
        </div>
        </main>
      </body>
    </html>
    </>
  );
}
