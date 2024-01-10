'use client';
import Image from 'next/image'
import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="App">
    <Navbar />
    <MainSection />
    <Footer />
  </div>
  )
}
