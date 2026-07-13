import { useState } from 'react'
import { siteInfo } from '../data/siteInfo'

const initialValues = { name: '', email: '', phone: '', subject: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name.'

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialValues)
    }
  }

  if (submitted) {
    return (
      <div role="status" className="card flex flex-col items-center gap-3 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Message sent</h3>
        <p className="max-w-sm text-sm text-gray-400">
          Thank you for contacting {siteInfo.brand}. Our team will get back to you shortly.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-2">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="card space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
        />
        <Field
          label="Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full rounded-md border bg-ink-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent-500 focus:outline-none ${
            errors.message ? 'border-red-500' : 'border-white/10'
          }`}
          placeholder="Tell us about your fitness goals..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-gray-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-md border bg-ink-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent-500 focus:outline-none ${
          error ? 'border-red-500' : 'border-white/10'
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
