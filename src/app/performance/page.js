'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Performance() {
  const pathname = usePathname();

  const performances = [
    {
      title: 'project_calorie',
      description:
        'สร้างโปรแกรมการคํานวณแคลลอรี่แบบง่ายๆจากภาษา Python programming language: Python http://localhost:5173/ ',
      image: '/calorie.png',
      link: 'https://colab.research.google.com/drive/1icqt3qSTUVX0fdZvLj0zZxG7CHtkeKos?usp=sharing',
    },
    {
      title: 'Employee Time-Off Management',
      description:
        'เป็นเว็บไซต์เกี่ยวกับการลางานแบบออนไลน์โดยมีการอนุมัติจากแอดมิน programming language: HTML, CSS, Javascript, Fribase',
      image: '/employee.png',
      link: 'https://pp88-d3a5f.web.app/index.html',
    },
    
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20 text-white">
        <div className="font-bold text-xl">Menu</div>
        <ul className="flex gap-6 text-sm uppercase tracking-wider">
          <li>
            <Link
              href="/"
              className={`hover:underline underline-offset-4 decoration-white ${pathname === '/' ? 'underline' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:underline underline-offset-4 decoration-white ${pathname === '/about' ? 'underline' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/performance"
              className={`hover:underline underline-offset-4 decoration-white ${pathname === '/performance' ? 'underline' : ''}`}
            >
              Performance
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className={`hover:underline underline-offset-4 decoration-white ${pathname === '/experience' ? 'underline' : ''}`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:underline underline-offset-4 decoration-white ${pathname === '/contact' ? 'underline' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute top-0 left-0 w-full h-24 bg-black/50 z-0"></div>

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center text-white">
        <Image
          src="/code.png"
          alt="fruit background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold">performance</h1>
          <p className="text-sm mt-2">My past projects and experiences</p>
        </div>
        <div className="absolute inset-0 bg-black/60 z-0" />
      </section>

      {/* Performance Section */}
      <section className="bg-[#2B0000] py-16 px-6 md:px-20 text-white space-y-16">
        {performances.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
          >
            {/* Image */}
            <div className="flex-1">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="rounded shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-white">
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black py-2 px-4 rounded hover:bg-gray-300 inline-block transition-colors"
              >
                ดูผลงาน
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 h-10" />
    </div>
  );
}
