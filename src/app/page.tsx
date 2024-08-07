import dynamic from 'next/dynamic'
import { Metadata } from 'next'

const ClientHome = dynamic(() => import('@/components/ClientHome'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Blooming Furniture - Expert Furniture Restoration',
  description: 'Revive your cherished furniture pieces with Blooming Furniture. We offer expert restoration services to breathe new life into your antiques and family heirlooms.',
}

export default function Home() {
  return (
    <main>
      <ClientHome />
    </main>
  )
}