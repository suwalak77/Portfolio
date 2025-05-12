'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function About() {
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
      <nav className="relative flex justify-between items-center px-6 py-4 z-10 bg-black/30 backdrop-blur">
        <div className="text-white font-bold text-xl">Menu</div>
        <ul className="flex gap-6 text-sm uppercase tracking-wider">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`pb-1 transition border-b-2 ${
                  pathname === href
                    ? 'border-white text-white font-semibold'
                    : 'border-transparent hover:border-white/50 text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header */}
      <section className="flex justify-center items-center px-10 md:px-20 pt-10 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-white pb-2">
          About Me
        </h1>
      </section>

      {/* Main Content */}
      <section className="bg-[#2B0000] py-8 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="p-2 bg-red/60 rounded-full shadow-xl">
              <Image
                src="/me.png"
                alt="Profile"
                width={220}
                height={220}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2 space-y-10">
            {/* About Me */}
            <div>
              <h2 className="text-xl font-semibold mb-2">เกี่ยวกับฉัน</h2>
              <p className="leading-relaxed">
                สวัสดีค่ะ ดิฉันชื่อ <strong>สุวลักษณ์ ดีเลิศ</strong> (ต้นข้าว) เป็นนักศึกษาคณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
                <br />
                สนใจด้านการพัฒนาเว็บไซต์ โดยถนัดการใช้ HTML, CSS, JavaScript และ Vue.js
                <br /><br />
                ดิฉันเชื่อว่า <em>"เว็บไซต์ที่ดีต้องใช้งานง่าย และสื่อสารได้โดยไม่ต้องอธิบาย"</em> <br />
                และมุ่งมั่นพัฒนาทักษะอย่างต่อเนื่อง พร้อมเปิดรับความท้าทายใหม่ ๆ
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-semibold mb-2">ทักษะ</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>HTML, CSS, JavaScript, Tailwind CSS</li>
                <li>Vue.js, React / Next.js</li>
                <li>Firebase (Realtime Database, Hosting)</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            {/* Goals */}
            <div>
              <h2 className="text-xl font-semibold mb-2">เป้าหมาย</h2>
              <p className="leading-relaxed">
                ต้องการเติบโตในสายงานพัฒนาเว็บไซต์ และร่วมงานกับทีมที่มีวิสัยทัศน์และพร้อมเรียนรู้ไปด้วยกัน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 h-10" />
    </div>
  );
}
