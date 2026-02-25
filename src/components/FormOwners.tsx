import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "./ui/input";
import * as z from "zod";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { validationOwners } from "@/validations/Owners";
import { setModalOwners, setNewOwner, setOwnersList, setSelectModalOwners } from "@/features/owners/slice";
import type { owner } from "@/types/owners/ownersType";

const FormOwners = () => {
    const { data, modal } = useSelector((state: RootState) => state.OwnersSlice);
    const dispatch = useDispatch();

    const form = useForm<z.infer<typeof validationOwners>>({
        resolver: zodResolver(validationOwners),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
        },
    });

    function onSubmit(dataForm: z.infer<typeof validationOwners>) {
        const today = new Date().toLocaleDateString();
        console.log(dataForm, 'qeue hay??????')

        if (modal.seleccionado.name == '') {
            const newOwner = {
                id: Number(data.ownersList[data.ownersList.length - 1].id + 1),
                name: dataForm.name,
                phone: dataForm.phone,
                email: dataForm.email,
                address: dataForm.address,
                created: today,
                status: 'Activo'
            };

            dispatch(setNewOwner(newOwner));

        } else {
            const updateList = data.ownersList.map((o: owner) => {
                if (o.id === modal.seleccionado.id) {
                    console.log(o.id, modal.seleccionado.id, 'ingresa')
                    return {
                        ...o,
                        name: dataForm.name,
                        phone: `+502 ${dataForm.phone}`,
                        email: dataForm.email,
                        address: dataForm.address
                    };
                };
                return o;
            });
            console.log(updateList, 'listaa actualizada.....')
            dispatch(setOwnersList(updateList));
        };

        cerrar();
    };

    const cerrar = () => {
        form.reset();
        dispatch(setModalOwners(false));
        const select = {
            name: '',
            phone: '',
            email: '',
            address: ''
        };

        dispatch(setSelectModalOwners(select));
    };

    useEffect(() => {

        if (modal.seleccionado.name != '') {

            form.reset({
                name: modal.seleccionado.name,
                phone: modal.seleccionado.phone,
                email: modal.seleccionado.email,
                address: modal.seleccionado.address,
            });

        } else {

            form.reset({
                name: '',
                phone: '',
                email: '',
                address: '',
            });
        };
    }, [modal.status]);

    return (
        <div className=" w-100">
            <div className="flex justify-between mb-4">
                <p className="text-xl font-bold">Paciente</p>
                <Button onClick={cerrar} className="bg-accent text-black hover:bg-gray-300/50">
                    <X strokeWidth={4} />
                </Button>
            </div>
            <form id="form-rhf-demo" className="grid grid-cols-2 gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup className="col-span-2">
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Nombre</FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Nombre"
                                    autoComplete="off"
                                    className="placeholder:text-cyan-500/50 border-2 border-cyan-500 rounded-lg text-sm focus:border-cyan-600"
                                />
                                {fieldState.invalid && (
                                    <FieldError className="text-red-800" errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup>
                    <Controller
                        name="phone"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Teléfono</FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-phone"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Teléfono"
                                    autoComplete="off"
                                    className="placeholder:text-cyan-500 border-2 border-cyan-500 rounded-full text-sm focus:border-cyan-600 focus-visible:ring-0"
                                />
                                {fieldState.invalid && (
                                    <FieldError className="text-red-800" errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup>
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Correo</FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-email"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Correo"
                                    autoComplete="off"
                                    className="placeholder:text-cyan-500 border-2 border-cyan-500 rounded-full text-sm focus:border-cyan-600 focus-visible:ring-0"
                                />
                                {fieldState.invalid && (
                                    <FieldError className="text-red-800" errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup className="col-span-2">
                    <Controller
                        name="address"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Dirección</FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-address"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Dirección"
                                    autoComplete="off"
                                    className="placeholder:text-cyan-500 border-2 border-cyan-500 rounded-full text-sm focus:border-cyan-600 focus-visible:ring-0"
                                />
                                {fieldState.invalid && (
                                    <FieldError className="text-red-800" errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
            </form>
            <Button type="submit" form="form-rhf-demo" className="bg-cyan-500 w-full mt-6 hover:bg-cyan-600">
                {
                    modal.seleccionado.name == '' ? 'Crear Propietario' : 'Guardar Cambios'
                }
            </Button>
        </div>
    );
};

export default FormOwners;