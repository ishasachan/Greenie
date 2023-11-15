import TopBar from './components/TopBar';
import './globals.css';

export const metadata = {
  title: 'Greenie',
  description: 'A website build as part of assignment',
}

export default function RootLayout({ children, }) {

  return (
    <html lang="en">
      <body>
        <TopBar />
        <main className='px-4 md:px-16 lg:px-16'>
          {children}
        </main>
      </body>
    </html>
  )
}