// import {Inter} from 'next/font/google'
import './globals.css'
import './reset.css'
import Script from "next/script";
import SideBar from "@/components/SideBar";

// const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Front Store',
    description: 'Generated by UnicornJade',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body><Script src="//at.alicdn.com/t/c/font_4386293_6fio8gprqbk.js"
                      strategy="afterInteractive"
        ></Script>
        <div className="home">
            {/*  SideBar*/}
            <div className="sideContainer">
                <SideBar></SideBar>
            </div>

            {/*  MainStore*/}
            <div className="mainStore">{children}</div>
        </div>
        </body>
        </html>
    )
}
