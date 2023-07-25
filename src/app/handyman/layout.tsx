;


import { Inter } from "next/font/google";


import NavBar from "@/components/Admin/Nav/NavBar";

import HandymanLeftBar from "@/components/Admin/LeftBar/HandymanLeftBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Handyman Dashbord",
  description: "Handyman Dashbord",
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
            <NavBar isMessage={true} />
        </div>
        <div className='flex'>
            
                
    
                <HandymanLeftBar />
           
            <div className="w-full basis-3/4 flex-grow bg-[#F2F8FF] sm:min-h-screen min-h-[200vh]" >
           {children}

           

            </div>
        </div>
        </main>
      </body>
    </html>
    </>
  );
}
