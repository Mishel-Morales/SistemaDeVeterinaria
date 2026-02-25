import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Mails, MapPin, Phone, RotateCw, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import type { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { owner } from "@/types/owners/ownersType";
import { AlertDialogDestructive } from "./AlertDialogDestructive";
import { Button } from "./ui/button";
import { setModalOwners, setOwnersList, setSelectModalOwners } from "@/features/owners/slice";

const CardOwners = () => {
    const { ownersList } = useSelector((state: RootState) => state.OwnersSlice.data);
    const { status } = useSelector((state: RootState) => state.OwnersSlice.modal);
    const { patientsList } = useSelector((state: RootState) => state.PatientsSlice.data);
    const [data, setData] = useState<owner[]>(ownersList);
    const dispatch = useDispatch();

    const deleteOwner = (id: number) => {
        const deleteP = ownersList.filter((owner) => owner.id != id);
        dispatch(setOwnersList(deleteP));
    };

    const updateOwner = (id: number) => {
        const owner = ownersList.find((o) => o.id === id);

        const select = owner && {
            id: owner.id,
            name: owner.name,
            phone: owner.phone,
            email: owner.email,
            address: owner.address
        };

        dispatch(setSelectModalOwners(select));
        dispatch(setModalOwners(true));
    };

    useEffect(() => {
        setData(ownersList);
    }, [ownersList]);

    return (
        data.map((data, index) => (
            <Card key={index} className="hover:not-focus:bg-gray-300/25">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-cyan-300/25 text-cyan-300 ">
                                    MM
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-sm mx-2">
                                {data.name}
                            </span>
                        </div>
                        <div className={data.status == 'Inactivo' ? 'bg-red-500 rounded-xl px-2 text-sm font-normal' : 'bg-lime-500/50 rounded-xl p-1 text-sm font-normal text-green-500'}>
                            {data.status}
                        </div>
                        <div>
                            <AlertDialogDestructive
                                title={data.name}
                                onClick={() => deleteOwner(data.id)}
                            >
                                <Button variant="ghost">
                                    <Trash2 color="red" />
                                </Button>
                            </AlertDialogDestructive>
                            <Button onClick={() => updateOwner(data.id)} variant="ghost">
                                <RotateCw color="green" />
                            </Button>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col text-sm text-light">
                    <p className="flex m-1">
                        <Phone className="me-3" /> {data.phone}
                    </p>
                    <p className="flex m-1">
                        <Mails className="me-3" /> {data.email}
                    </p>
                    <p className="flex m-1">
                        <MapPin className="me-3" /> {data.address}
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between border-t-2 pt-3">
                    {
                        patientsList.filter(pet => pet.owner === data.name)
                            .map((pet, index) => (
                                <p key={index} className="rounded-xl px-3 text-sm font-mono bg-gray-100">
                                    {pet.name}
                                </p>
                            ))
                    }
                    <p className="text-muted-foreground">3 visitas</p>
                </CardFooter>
            </Card>
        ))
    )
};

export default CardOwners;