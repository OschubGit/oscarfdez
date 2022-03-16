export default function TitleName({user, username}) {
  return (
    <p>
      <strong>{user}</strong> {username && (<small>{username}</small>)}
    </p>
  );
}
