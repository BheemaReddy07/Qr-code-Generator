import Image from "next/image";
import QrCodeGenerator from "./QrCodeGenerator";
 

export default function Home() {
  return (
    <div className="relative flex min-h-[100vh]  h-full items-center justify-center ">
     <QrCodeGenerator />
       <Image
        src="/glass.png"
        alt="Hero Image"
        width={1600}
        height={1200}
        className="fixed top-0 left-0 h-full w-full object-cover z-0 pointer-events-none" />
    </div>
  );
}
