import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="text-2xl mb-8">
          Get started by editing{' '}
          <code className="bg-gray-100 rounded-md p-2 font-mono text-lg">
            app/page.tsx
          </code>
        </p>

        <div className="flex items-center justify-center space-x-4">
          <Button>Click me!</Button>
          <ThemeToggle />
        </div>
      </main>
    </div>
  )
}