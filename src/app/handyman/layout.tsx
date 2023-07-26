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
      <main className=" min-h-screen ">
        <div>
            <NavBar isMessage={true} />
        </div>
        <div className='flex'>
            
                
    
                <HandymanLeftBar />
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
