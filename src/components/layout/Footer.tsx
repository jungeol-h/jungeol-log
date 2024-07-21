// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} 준걸로그. All rights reserved.
      </div>
    </footer>
  );
}
