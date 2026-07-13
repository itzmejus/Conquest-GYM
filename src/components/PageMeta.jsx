import { useEffect } from 'react'
import { siteInfo } from '../data/siteInfo'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title || siteInfo.siteTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
