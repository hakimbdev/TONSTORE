import { Star, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1C1F26]">
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center text-white font-bold text-xl">
              <span className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              TONSTORE
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                Usernames
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Numbers
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white flex items-center">
                Stars
                <span className="ml-2 bg-[#0088CC] text-white text-xs px-2 py-0.5 rounded">New</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Premium
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Ads
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="bg-transparent text-white border-gray-600 hover:bg-gray-700">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M6 10L12 4L18 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Connect Telegram
            </Button>
            <Button className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Connect TON
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#1E2229] border-0 p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Star className="w-12 h-12 text-[#0088CC]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Telegram Stars</h2>
              <p className="text-gray-400 mb-6">Top up Stars Balance for yourself or your friends and colleagues.</p>
              <Button className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white w-full">Buy Stars Package</Button>
            </div>
          </Card>

          <Card className="bg-[#1E2229] border-0 p-8 relative">
            <span className="absolute right-4 top-4 bg-[#0088CC] text-white text-xs px-2 py-0.5 rounded">New</span>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Zap className="w-12 h-12 text-[#0088CC]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Stars Giveaways</h2>
              <p className="text-gray-400 mb-6">
                Boost your Telegram channel by gifting Telegram Stars to your subscribers.
              </p>
              <Button className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white w-full">Prepay a Giveaway</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

