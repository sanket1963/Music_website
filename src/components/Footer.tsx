

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/nUaKotcJSvnnSiWp/?mibextid=qi2Omg"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sanket_patel_official_1963?igsh=MWEyOGcwZmkyd2I4Yw=="
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/sanket-tavethiya-158b87247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Ahmedabad, India</p>
          <p>Ahmedabad 382350</p>
          <p>Email: tavethiyasanket598@gmail.com</p>
          <p>Phone: (+91) 7226833420</p>
        </div>
        </div>
        <p className="text-center text-xl">Demo Website From My Site</p>
        <p className="text-center text-xs pt-4">© 2024 Music School. All rights reserved.</p>
    </footer>
  )
}

export default Footer
