import Link from 'next/link';
import { useState } from 'react'


export default function Home() {
  return (
    <Link href="/dashboard">
      <a>dashboard</a>
    </Link>
  )
}

