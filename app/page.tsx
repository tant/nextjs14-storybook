'use client'

import Image from 'next/image'
import { Button } from '@/stories/Button'

export default function Home() {
  return (
    <main className="">
      <h1>
        Đây là header thôi
      </h1>
      <p>
        Đây là một cái đoạn văn được nhét vào tag p
      </p>
      
      <Button
        label="Đây chỉ là một cái nút bấm thôi mà"
        onClick={() => {}}
        primary = {false}
        size={3}
      />
    </main>
  )
}
