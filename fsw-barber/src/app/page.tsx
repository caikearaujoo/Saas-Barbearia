import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Felipe!</h2>
        <p>Segunda-feira, 05 de agosto</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faca sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
