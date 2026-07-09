function SearchBar({ value, onChange, onSubmit, disabled }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Digite um usuário do Github"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Nome de usuário do GitHub"
      />
      <button
        type="submit"
        className="search-bar__button"
        disabled={disabled}
        aria-label="Buscar"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 5L20.49 19l-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  )
}

export default SearchBar
