import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 93px)',
      }}
    >
      <h1 style={{ marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  )
}
