"use client"

import { Inter } from "next/font/google";
import { Kalam } from 'next/font/google'

import "./globals.css";

import { Provider } from 'react-redux';
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });
const kalam = Kalam({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Provider store={store}>
        <body className={`${inter.className} ${kalam.className}`}>{children}</body>
       </Provider>
    </html>
  );
}
