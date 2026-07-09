function ProfileCard({ profile }) {
  return (
    <div className="result-box result-box--profile">
      <img
        className="result-box__avatar"
        src={profile.avatarUrl}
        alt={`Foto de perfil de ${profile.name}`}
      />
      <div className="result-box__info">
        <a
          className="result-box__name"
          href={profile.htmlUrl}
          target="_blank"
          rel="noreferrer"
        >
          {profile.name}
        </a>
        {profile.bio && <p className="result-box__bio">{profile.bio}</p>}
      </div>
    </div>
  )
}

export default ProfileCard
