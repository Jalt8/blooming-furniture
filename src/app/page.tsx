import ClientHome from '@/components/ClientHome'
import { Metadata } from 'next'

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