import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='wrapper'>
     <Header />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
