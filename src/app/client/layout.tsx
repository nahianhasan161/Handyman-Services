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
      <main className=" min-h-screen min-w-fit">
        <div>
            <NavBar isMessage={true} isDeleteBtn={true}/>
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
