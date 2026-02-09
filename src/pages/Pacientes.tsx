import TablePatients from "@/components/TablePatients";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Plus } from "lucide-react";

const Pacientes = () => {
    const titles = ['Todos', 'Perros', 'Gatos', 'Aves', 'Conejos'];

    return (
        <>
            <div className="p-8">
                <div className="mb-5 flex justify-between">
                    <div>
                        <h1 className="font-display text-2xl font-bold tracking-tight">Pacientes</h1>
                        <p className="text-sm text-muted-foreground">Gestión de pacientes registrados</p>
                    </div>
                    <Button className="bg-cyan-500"> <Plus /> Nuevo Paciente </Button>
                </div>
                <Tabs defaultValue="Todos">
                    <div className="flex justify-between">
                        <TabsList>
                            {
                                titles.map((title) => <TabsTrigger key={title} value={title}>{title}</TabsTrigger>)
                            }
                        </TabsList>
                        <Input
                            type="text"
                            placeholder="Buscar Paciente"
                            className="w-100 border-none bg-gray-100"
                        />
                    </div>
                    {
                        titles.map((title, index) => (
                            <TabsContent key={index} value={title}>
                                <TablePatients title={title} />
                            </TabsContent>
                        ))
                    }
                </Tabs>
            </div>
        </>
    );
};

export default Pacientes;
