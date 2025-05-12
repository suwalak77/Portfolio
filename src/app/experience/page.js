'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Experience() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/performance', label: 'Performance' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#2B0000] text-white font-sans">
      
      {/* Navbar */}
      <nav className="relative flex justify-between items-center p-6 z-10">
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
      <div className="absolute top-0 left-0 w-full h-24 bg-black/50 z-0"></div>

      {/* Hero Section */}
      <section className="-mt-6 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-20 pb-20">
        
        {/* Heading */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-white inline-block pt-2 pb-2 px-6">
            Experience
          </h1>
        </div>

        {/* Experience Boxes */}
        <div className="relative w-full h-64 bg-[#2B0000] flex items-center justify-center">
          
          {/* Background Box */}
          <div className="absolute top-6 left-6 w-140 h-90 bg-black/50 rounded-lg shadow-md z-0"></div>

          {/* Foreground Box */}
          <div className="absolute top-11 left-11 w-140 h-90 bg-white rounded-lg shadow-2xl z-10 flex flex-col justify-center items-start p-6 gap-4">
            
            {/* COMCAMP */}
            <div className="flex flex-col text-black text-xl font-semibold">
              <h1 className="text-3xl">COMCAMP 21,22</h1>
              <p className="text-1xl">
                เป็นเจ้าหน้าที่ฝ่ายสันทนาการ: มีส่วนร่วมในกิจกรรมจัดการค่ายยุวชน COMCAMP 
                โดยทําการสันทนาการให้กับน้องๆ มัธยมที่มาเข้าร่วมค่ายของสาขา
              </p>
            </div>

            {/* วิ่งสันทราย */}
            <div className="flex flex-col text-black text-xl font-semibold">
              <h1 className="text-3xl">กิจกรรมประเพณีวิ่งสันทราย</h1>
              <p className="text-1xl">
                เป็นเจ้าหน้าที่ฝ่าย Staff: มีส่วนร่วมในประเพณีวิ่งสันทรายของมหาวิทยาลัย 
                โดยมีหน้าที่เป็นสตาฟในการดูแลน้องๆ ที่เข้าร่วมกิจกรรม
              </p>
            </div>

            {/* กีฬาภายใน */}
            <div className="flex flex-col text-black text-xl font-semibold">
              <h1 className="text-3xl">แข่งกีฬาภายในของมหาวิทยาลัย</h1>
              <p className="text-1xl">
                เป็นตัวแทนในการเข้าร่วมการแข่งขันกีฬาของคณะวิทยาศาสตร์
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gray-200 z-0"></div>
      </section>
    </div>
  );
}
