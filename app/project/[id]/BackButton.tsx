'use client'; 

import React from 'react'
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <button
            onClick={() => router.back()}
            className="fixed bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Go Back
        </button>
    </div>
  )
}

export default BackButton
