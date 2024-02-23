function Msg({ name1, profile }) {
  return (
    <div>
      <img style={{ width: 150, height: 150 }} src={profile} alt="profile" />
      <h1>{name1}</h1>
    </div>
  );
}
