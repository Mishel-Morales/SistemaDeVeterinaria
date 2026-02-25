import type { RootState } from "@/app/store";
import CardOwners from "@/components/CardOwners";
import FormOwners from "@/components/FormOwners";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { setModalOwners } from "@/features/owners/slice";
import { CalendarCheck, PawPrint, Plus, Users } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Owners = () => {
    const { ownersList } = useSelector((state: RootState) => state.OwnersSlice.data);
    const { status } = useSelector((state: RootState) => state.OwnersSlice.modal);
    const { patientsList } = useSelector((state: RootState) => state.PatientsSlice.data);
    const dispatch = useDispatch();

    const summary = [
        {
            title: 'Total Propietarios',
            total: String(ownersList.length),
            icon: <Users size={20} color="teal" />
        },
        {
            title: 'Total Mascotas',
            total: String(patientsList.length),
            icon: <PawPrint size={20} color="brown" />
        },
        {
            title: 'Total Visitas',
            total: 78,
            icon: <CalendarCheck size={20} color="orange" />
        }
    ];

    return (
        <div className="p-8">
            <Modal state={status}>
                <FormOwners />
            </Modal>
            <div className="mb-5">
                <h1 className="font-display text-2xl font-bold tracking-tight">Propietarios</h1>
                <p className="text-sm text-muted-foreground">Directorio</p>
            </div>
            <div className="flex gap-4">
                {
                    summary.map((data, index) =>
                        <Card key={index} className="w-full">
                            <div className="grid grid-cols-2 px-4">
                                <div className="rounded-xl bg-cyan-500/25 flex justify-center items-center w-12 h-12">
                                    {data.icon}
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm">
                                        {data.title}
                                    </p>
                                    <p className="text-3xl font-medium">
                                        {data.total}
                                    </p>
                                </div>
                            </div>
                        </Card>)
                }
            </div>
            <div className="flex justify-between my-5">
                <Input
                    type="text"
                    placeholder="Buscar Propietario..."
                    className="w-100 border-none bg-gray-100"
                />
                <Button onClick={() => dispatch(setModalOwners(true))} className="bg-cyan-500 hover:bg-cyan-700"> <Plus /> Nuevo Propietario </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <CardOwners />
            </div>
        </div>
    )
};

export default Owners;