import { Poppins, Bebas_Neue, Libre_Baskerville } from 'next/font/google'
 
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500','600','700']
})
 
export const libre_Baskerville = Libre_Baskerville({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400","700"]
})