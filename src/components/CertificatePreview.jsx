import { forwardRef } from 'react'
import ClassicTemplate from '../templates/ClassicTemplate'
import ModernTemplate from '../templates/ModernTemplate'
import ElegantTemplate from '../templates/ElegantTemplate'
import MinimalTemplate from '../templates/MinimalTemplate'
import './CertificatePreview.css'

const CertificatePreview = forwardRef(({ certData, customLogo }, ref) => {
  const renderTemplate = () => {
    const props = { certData, customLogo }
    
    switch (certData.template) {
      case 'classic':
        return <ClassicTemplate {...props} />
      case 'modern':
        return <ModernTemplate {...props} />
      case 'elegant':
        return <ElegantTemplate {...props} />
      case 'minimal':
        return <MinimalTemplate {...props} />
      default:
        return <ClassicTemplate {...props} />
    }
  }

  return (
    <div className="certificate-wrapper">
      <div className="certificate" ref={ref}>
        {renderTemplate()}
      </div>
    </div>
  )
})

CertificatePreview.displayName = 'CertificatePreview'

export default CertificatePreview