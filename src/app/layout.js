import './globals.css'

export const metadata = {
  title: 'Your Name - Developer Portfolio',
  description: 'Software developer specializing in building exceptional digital experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-gray-300 antialiased">
        {children}
      </body>
    </html>
  )
}