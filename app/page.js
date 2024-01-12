'use client';
import Image from 'next/image'
import React from 'react';
import Navbar from './navbar';
import MainSection from './mainsection';
import Footer from './footer';

export default function Home() {
  return (
    <div className="App">
    <Navbar/>
    <MainSection />
    <Footer />
  </div>
  )
}
