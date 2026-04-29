import './MinimalTemplate.css'

const MinimalTemplate = ({ certData, customLogo }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }

  return (
    <div 
      className="template minimal"
      style={{
        '--primary-color': certData.primaryColor,
        '--secondary-color': certData.secondaryColor,
        '--name-font': certData.nameFont,
        '--name-size': `${certData.nameFontSize}px`
      }}
    >
      <div className="minimal-content">
        <div className="minimal-header">
          <div className="minimal-logo" style={{ display: certData.showLogo ? 'block' : 'none' }}>
            {customLogo ? <img src={customLogo} alt="Logo" className="custom-logo" /> : '🏛️'}
          </div>
          <p className="minimal-org">Organization Name</p>
        </div>

        <div className="minimal-body">
          <h1 className="minimal-title">Certificate of Achievement</h1>
          <p className="minimal-prefix">is awarded to</p>
          <h2 className="minimal-name">{certData.recipientName}</h2>
          <p className="minimal-description">{certData.description}</p>
          <p className="minimal-event">{certData.eventName}</p>
        </div>

        <div className="minimal-footer">
          <div className="minimal-signature">
            <div className="minimal-line"></div>
            <p className="minimal-sign-name">{certData.signer1Name}</p>
            <p className="minimal-sign-title">{certData.signer1Title}</p>
          </div>
          <div className="minimal-seal">✓</div>
          {certData.signer2Name && (
            <div className="minimal-signature">
              <div className="minimal-line"></div>
              <p className="minimal-sign-name">{certData.signer2Name}</p>
              <p className="minimal-sign-title">{certData.signer2Title}</p>
            </div>
          )}
        </div>
        <div className="minimal-date">{formatDate(certData.date)}</div>
      </div>
    </div>
  )
}

export default MinimalTemplate