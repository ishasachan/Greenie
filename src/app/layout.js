import TopBar from './components/TopBar';
import Sidebar from './components/SideBar';
import './globals.css';

export const metadata = {
  title: 'Greenie',
  description: 'A website build as part of assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <aside className="bg-white w-60 p-4 hidden sm:block">
          <Sidebar />
        </aside>
        <div className="flex-1 flex flex-col">
          <TopBar />
          <main className="flex-1 p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}