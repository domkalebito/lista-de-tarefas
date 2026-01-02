import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, CircleEllipsis, Check, List, SquarePen, Trash2, ListChecks, Sigma } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialogDescription } from "@/components/ui/alert-dialog"

const Home = () => {
  return (
    <main className="w-full h-screen flex justify-center items-start bg-neutral-700">
      <Card className="w-lg text-white bg-neutral-800">
        <CardHeader className="flex gap-2">
          <Input type="text" placeholder="Adicionar tarefa" className="border-2 border-neutral-500" />
          <Button type="submit" variant="default" className="cursor-pointer"><Plus />Cadastrar</Button>
        </CardHeader>
              
        <CardContent>
          <Separator />
          <div className="flex gap-2 mt-6">
            <Badge className="cursor-pointer px-3 py-1"><List />Todas</Badge>
            <Badge className="cursor-pointer px-3 py-1" variant="secondary"><CircleEllipsis />Não finalizados</Badge>
            <Badge className="cursor-pointer px-3 py-1" variant="secondary"><Check />Concluídos</Badge>
          </div>

          <div className="mt-6">
            <div className="flex items-center border-b-2 border-neutral-500">
              <div className="w-3 h-3 rounded-full bg-red-300"></div>
              <p className="flex-1 px-2">Estudar Programação</p>
              <div className="flex items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex justify-center items-center w-10 h-10 cursor-pointer"><SquarePen size={22} /></div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <Input />
                      <Button variant="default" className="cursor-pointer">Sim</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex justify-center items-center w-10 h-10 cursor-pointer"><Trash2 size={22} /></div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Deseja excluir?</DialogTitle>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="default">Sim</Button>
                      <DialogClose>
                        <Button type="submit" variant="secondary">Não</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="w-full grid gap-2">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-2">
                <ListChecks size={22} />
                <p>Tarefas concluídas (3/3)</p>
              </div>
              <div className="flex gap-2">
                <Button type="submit" variant="secondary" className="cursor-pointer text-xs">
                  <Trash2 />Limpar tarefas concluídas
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="h-2 rounded-md bg-neutral-900">
                <div className="h-full rounded-md bg-green-300" style={{ width: "50%" }}></div>
              </div>
              <p className="flex items-center gap-2 self-end"><Sigma size={18} />3 Tarefas no total</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

export default Home