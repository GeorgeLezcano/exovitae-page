export function Message() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',     
        justifyContent: 'flex-start', 
        height: '100vh',
        paddingTop: '2rem',
        textAlign: 'center',
        gap: '1rem',              
      }}
    >
      <h1>Under Construction, come back soon!</h1>
      <img
        src={`${import.meta.env.BASE_URL}exovitae_logo.png`}
        alt="Logo"
        width={600}
        height={600}
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />
    </div>
  );
}
