import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTopButton from '../components/BackToTopButton'
import ScrollToTop from '../components/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
