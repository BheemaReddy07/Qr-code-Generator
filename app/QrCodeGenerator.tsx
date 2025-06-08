 "use client"
 import React, { useState } from 'react'

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
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { fileURLToPath } from 'url'

 
 function QrCodeGenerator() {
    
   
       const [url,setUrl]  = useState("")
       const [color,setColor] = useState("#ffffff")
       const [bgColor,setBgColor] = useState("#037FFF")
       const [logo,setLogo] = useState <string | null >(null)
       const [logoFile,setLogoFile] = useState<File | null >(null)
       const [qrType,setQrType] = useState("link")
       const [subject,setSubject] = useState("")
       const [message,setMessage] = useState("")


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
                    className='space-y-6'
                    onValueChange={(val)=>setQrType(val)}>
                        <TabsList className='h-10 w-full grid grid-cols-2 bg-[#057FFF] text-lg'>
                             <TabsTrigger className='text-white font-bold data-[state=active]:text-black' value='link'><Link /> Link</TabsTrigger>
                                <TabsTrigger className='text-white font-bold data-[state=active]:text-black' value='email'> <Mail className="w-4 h-4 mr-2" />Email</TabsTrigger>
                        </TabsList>
                        <TabsContent value='link' className='space-y-6'>
                           <div className='space-y-6'>
                            <div className='space-y-2'>
                               <Label htmlFor="url" className="font-semibold text-[#057FFF]">URL</Label>
                               <Input id="url" type='text' value={url} onChange={(e)=>setUrl(e.target.value)} className='w-full bg-whit border-2 border-white/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400' />
                            </div>
                           </div>
                        </TabsContent>
                    </Tabs>

                    <div className='space-y-4'>
                       <div className='flex space-x-4'>
                        <div className='space-y-2 flex-1'>
                           <Label htmlFor='color'  className='font-semibold text-[#057FFF]'>Qr Code Color</Label>
                        <div className='flex items-center gap-1'>
                           <div className='relative w-12  flex-1 h-12 rounded-md border-2 border-white/70' style={{backgroundColor:color}}>
                            <input type='color' value={color} onChange={(e)=>setColor(e.target.value)}
                             className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' />
                           </div>
                           <Input type='text' value={color} onChange={(e)=>setColor(e.target.value)} className='flex-1 h-12 border-2 bg-transparent border-white/70 focus:border-[#057FFF] rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'/>
                        </div>
                        </div>
                         <div className='space-y-2 flex-1'>
                           <Label htmlFor='color'  className='font-semibold text-[#057FFF]'>Background Color</Label>
                        <div className='flex items-center gap-1'>
                           <div className='relative w-12  flex-1 h-12 rounded-md border-2 border-white/70' style={{backgroundColor:bgColor}}>
                            <input type='color' value={color} onChange={(e)=>setBgColor(e.target.value)}
                             className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' />
                           </div>
                           <Input type='text' value={color} onChange={(e)=>setBgColor(e.target.value)} className='flex-1 h-12 border-2 bg-transparent border-white/70 focus:border-[#057FFF] rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'/>
                        </div>
                        </div>
                       </div>

                       <div className='space-y-2'>
                         <Label 
                         htmlFor='logo' className='text-bold text-[#037FFF]'>
                           LOGO
                         </Label>
                         <Input 
                         type='file'
                         id="logo"
                         accept='image/*'
                         className='w-full h-12 border-2 bg-transparent border-white/70 focus:border-[#057FFF] rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'
                          onChange={(e: any)=>{
                           if (e.target.files && e.target.files[0]) {
                              setLogoFile(e.target.files[0]);

                              const reader = new FileReader()
                              reader.onloadend = () => {
                                 setLogo(reader.result as string);
                                 reader.readAsDataURL(e.target.files[0]);
                              }
                         }}}
                         />
                       </div>
                    </div>
                  </div>
                  <div className='relative flex-1 bg-[#037fff] round-lg flex flex-col justify-center space-y-6'></div>
                </div>
             </CardContent>
        </Card>
        
        </div>
   )
 }
 
 export default QrCodeGenerator