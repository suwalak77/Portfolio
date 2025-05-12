'use client';
import { useState } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';
import { sendEmail } from '../data/email'; // ✅ ใช้ path ถูกต้องแล้ว
import Image from 'next/image';

export default function Contact() {
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(e.target); // ✅ ส่ง form element ไม่ใช่ object
      setStatus('ส่งอีเมลสำเร็จ!');
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('มีบางอย่างผิดพลาด กรุณาลองใหม่');
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#2B0000]">
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20 text-white">
        <div className="font-bold text-xl">Menu</div>
        <ul className="flex gap-6 text-sm uppercase tracking-wider">
          <li><Link href="/" className={`hover:underline ${pathname === '/' ? 'underline' : ''}`}>Home</Link></li>
          <li><Link href="/about" className={`hover:underline ${pathname === '/about' ? 'underline' : ''}`}>About</Link></li>
          <li><Link href="/performance" className={`hover:underline ${pathname === '/performance' ? 'underline' : ''}`}>Performance</Link></li>
          <li><Link href="/experience" className={`hover:underline ${pathname === '/experience' ? 'underline' : ''}`}>Experience</Link></li>
          <li><Link href="/contact" className={`hover:underline ${pathname === '/contact' ? 'underline' : ''}`}>Contact</Link></li>
        </ul>
      </nav>

      <div className="absolute top-0 left-0 w-full h-24 bg-black/50 z-0"></div>

      <section className="flex flex-col items-center justify-between px-10 pt-40 pb-20">
        <div className="md:w-1/3 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-white inline-block pb-1">Contact</h1>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl shadow-md p-6 text-black">
            <div>
              <label htmlFor="name" className="text-lg font-medium">ชื่อของคุณ:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">อีเมล:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-lg font-medium">ข้อความ:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 mt-2 border rounded"
                rows="4"
              />
            </div>
            <button type="submit" className="w-full p-3 bg-red-900 text-white rounded hover:bg-blue-500">ส่งข้อความ</button>
          </form>

          {status && <div className="mt-4 text-center text-lg text-white">{status}</div>}
        </div>

        <div className="mt-10 text-center text-white">
          <h2 className="text-2xl font-bold">ติดต่อเราเพิ่มเติม</h2>
          <p className="mt-4">เบอร์โทร: <span className="font-medium">062 429 6972</span></p>
          <p>
            Facebook:
            <Link href="https://www.facebook.com/suwalak.diloet/?locale=th_TH" target="_blank" className="text-blue-400 font-medium hover:text-blue-500 ml-1">My Facebook</Link>
          </p>
        </div>
      </section>

      <footer className="bg-gray-200 h-10" />
    </div>
  );
}
