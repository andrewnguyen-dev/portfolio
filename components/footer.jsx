import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">&copy; 2024 Andrew. All rights reserved.</small>
      <p className="text-xs">
        <span>About this website:</span> Built with React & Next.js (App Router
        & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email
        & Resend, Vercel hosting. Inspired by ByteGrad.
      </p>
    </footer>
  );
};

export default Footer;
