;


import { Inter } from "next/font/google";

import NavBar from "@/components/Admin/Nav/NavBar";
import ClientLeftBar from "@/components/Client/LeftBar/ClientLeftBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashbord",
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
      <main className=" min-h-screen w-fit md:w-auto">
        <div>
            <NavBar isMessage={true}/>
        </div>
        <div className='flex'>
            
                
    
                <ClientLeftBar />
           
            <div className="w-full basis-3/4 flex-grow bg-[#F2F8FF] " >
           {children}

           

            </div>
        </div>
        </main>
      </body>
    </html>
    </>
  );
}
