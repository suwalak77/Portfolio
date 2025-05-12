'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/performance', label: 'Performance' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#2B0000] text-white font-sans flex flex-col relative overflow-hidden">

      {/* Navbar */}
      <nav className="relative flex justify-between items-center p-6 z-20">
        <div className="text-white font-bold text-xl">Menu</div>
        <ul className="flex gap-6 text-sm uppercase tracking-wider">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:underline underline-offset-4 decoration-white ${
                  pathname === link.href ? 'underline' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-10 md:px-20 pt-0.01 pb-2">
        
        {/* Black skew overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="w-[150%] h-[140%] bg-black/50 transform -skew-y-20 origin-center absolute top-1/4 left-[-25%]" />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center min-h-screen w-full">
          <motion.div
            className="md:w-1/2 space-y-4 z-10 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-5xl font-bold border-b-4 border-white inline-block pb-1 mt-1 md:px-20 pt-1 pb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Suwalak Diloet
            </motion.h1>
            <motion.h2
              className="text-3xl font-semibold mt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Welcome To My Portfolio
            </motion.h2>
            <motion.p
              className="mt-4 leading-relaxed text-lg max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              ฉันเป็นนักศึกษาที่มีความกระตือรือร้นและมุ่งมั่นในการเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ
              <br />
             มีทักษะในการเรียนรู้อย่างรวดเร็ว และสามารถทำงานร่วมกับผู้อื่นได้อย่างมีประสิทธิภาพ
              <br />
              พร้อมเปิดใจรับสิ่งใหม่ และพัฒนาทักษะของตนเองให้ก้าวหน้าอย่างต่อเนื่อง
            </motion.p>
          </motion.div>
        </div>

      </section>
      
    </div>
  );
}
