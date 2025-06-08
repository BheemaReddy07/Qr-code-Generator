 import React from 'react'

 import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Link, Mail } from 'lucide-react'

 
 function QrCodeGenerator() {
   return (
     <div className='relative z-10 mx-10 flex  max-w-[1250px] w-full min-h-[700px]  h-full '>
        <Card className=' flex-1  flex flex-col w-full h-auto bg-[#ecf7ff]/80 mx-auto backdrop-blur-md rounded-xl     shadow-sm border-2 border-white/40 '>
             <CardHeader>
                <CardTitle className='text-3xl font-bold text-center text-[#037fff]'>Qr Code Generator</CardTitle>
             </CardHeader>
             <CardContent className='flex-1'>
                <div className='h-full flex flex-col md:flex-row gap-8'>
                  <div className='flex-1 space-y-6'>
                    <Tabs 
                    defaultValue='link'
                    className='space-y-6'>
                        <TabsList className='h-10 w-full grid grid-cols-2 bg-[#057FFF] text-lg'>
                             <TabsTrigger className='text-white font-bold data-[state=active]:text-black' value='link'><Link /> Link</TabsTrigger>
                                <TabsTrigger className='text-white font-bold data-[state=active]:text-black' value='email'> <Mail className="w-4 h-4 mr-2" />Email</TabsTrigger>
                        </TabsList>
                    </Tabs>
                  </div>
                  <div className='relative flex-1 bg-[#037fff] round-lg flex flex-col justify-center space-y-6'></div>
                </div>
             </CardContent>
        </Card>
        
        </div>
   )
 }
 
 export default QrCodeGenerator