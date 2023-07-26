;


import { Inter } from "next/font/google";

import NavBar from "@/components/Admin/Nav/NavBar";
import ClientLeftBar from "@/components/Client/LeftBar/ClientLeftBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Client Dashbord",
  description: "Client Dashbord",
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
      <main className=" min-h-screen ">
        <div>
            <NavBar isMessage={true} isDeleteBtn={true}/>
        </div>
        <div className='flex '>
            
                
    
                <ClientLeftBar />
           
            <div className="w-full sm:basis-3/4 flex-grow  min-h-screen bg-[#F2F8FF]  min-w-[0]" >
              <div className="ml-[1px] pt-2 sm:pt-5 md:pt-10 pl-2 sm:pl-5 md:pl-10 ">

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
