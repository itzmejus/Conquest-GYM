import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="section">
        <div className="container-page flex flex-col items-center text-center">
          <span className="eyebrow">404</span>
          <h1 className="text-4xl font-bold sm:text-5xl">Page Not Found</h1>
          <p className="mt-4 max-w-md text-base text-gray-400">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link to="/" className="btn-primary mt-8">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
