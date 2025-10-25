"use client"

import { useParams } from 'next/navigation'
import Navbar from "@/components/Navbar"
import ProductView from "@/components/ProductView"
import Footer from "@/components/Footer"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductView productId={productId as string} />
      <Footer />
    </main>
  )
}