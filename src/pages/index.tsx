import Link from 'next/link';
import { useState } from 'react'


export default function Home() {
  const [showFavoritedCourses, setShowFavoritedCourses] = useState(false);

  return (
    <Link href="/dashboard">
      <a>dashboard</a>
    </Link>
  )
}

