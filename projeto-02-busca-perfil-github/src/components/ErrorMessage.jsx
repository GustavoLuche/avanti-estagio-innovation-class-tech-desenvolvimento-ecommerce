function ErrorMessage({ message }) {
  return (
    <div className="result-box result-box--error" role="alert">
      <p className="result-box__error-text">{message}</p>
    </div>
  )
}

export default ErrorMessage
