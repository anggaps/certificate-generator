import './ClassicTemplate.css'

const ClassicTemplate = ({ certData, customLogo }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }

  return (
    <div 
      className="template classic" 
      style={{
        '--primary-color': certData.primaryColor,
        '--secondary-color': certData.secondaryColor,
        '--name-font': certData.nameFont,
        '--name-size': `${certData.nameFontSize}px`
      }}
    >
      <div className="cert-border" style={{ display: certData.showBorder ? 'block' : 'none' }}>
        <div className="cert-inner">
          <div className="cert-header">
            <div className="cert-logo" style={{ display: certData.showLogo ? 'block' : 'none' }}>
              {customLogo ? <img src={customLogo} alt="Logo" className="custom-logo" /> : '🏛️'}
            </div>
            <div className="cert-badge">★</div>
          </div>

          <div className="cert-body">
            <h2 className="cert-title">{certData.certTitle}</h2>
            <p className="cert-subtitle">Dengan bangga diberikan kepada</p>
            <h1 className="cert-name">{certData.recipientName}</h1>
            <div className="cert-divider"></div>
            <p className="cert-description">{certData.description}</p>
            <p className="cert-event">{certData.eventName}</p>
          </div>

          <div className="cert-footer">
            <div className="signature">
              <div className="sign-line"></div>
              <p className="sign-name">{certData.signer1Name}</p>
              <p className="sign-title">{certData.signer1Title}</p>
            </div>
            <div className="cert-seal">
              <div className="seal">✓</div>
            </div>
            {certData.signer2Name && (
              <div className="signature">
                <div className="sign-line"></div>
                <p className="sign-name">{certData.signer2Name}</p>
                <p className="sign-title">{certData.signer2Title}</p>
              </div>
            )}
          </div>

          <div className="cert-date">
            <p>{formatDate(certData.date)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassicTemplate