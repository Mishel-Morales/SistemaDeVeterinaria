import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
    Field,
    FieldContent,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "./ui/input";
import { validationPatients } from "@/validations/Patients";
import * as z from "zod";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { setModal, setNewPatient, setPatientsList, setSelectModal } from "@/features/patients/slice";
import type { patients } from "@/types/patients/listPatients";

const FormPatients = () => {
    const especies = ['Perro', 'Gato', 'Ave', 'Conejo'];
    const propietarios = ['Mishel Morales', 'Luis Macario', 'Logan Hernandez', 'Wendy Rodriguez'];
    const { data, modal } = useSelector((state: RootState) => state.PatientsSlice);
    const dispatch = useDispatch();

    const form = useForm<z.infer<typeof validationPatients>>({
        resolver: zodResolver(validationPatients),
        defaultValues: {
            name: '',
            species: '',
            gender: '',
            race: '',
            age: '',
            weight: '',
            owner: '',
        },
    });

    function onSubmit(dataForm: z.infer<typeof validationPatients>) {
        const today = new Date().toLocaleDateString();

        if (modal.seleccionado.name == '') {
            const newPatient = {
                id: Number(data.patientsList[data.patientsList.length - 1].id + 1),
                name: dataForm.name,
                species: dataForm.species,
                gender: dataForm.gender,
                race: dataForm.race,
                age: Number(dataForm.age),
                peso: Number(dataForm.weight),
                owner: dataForm.owner,
                lastVisit: today,
                status: 'Activo'
            };

            dispatch(setNewPatient(newPatient));

        } else {
            const updateList = data.patientsList.map((p: patients) => {
                if (p.id === modal.seleccionado.id) {
                    console.log(p.id, modal.seleccionado.id, 'ingresa')
                    return {
                        ...p,
                        name: dataForm.name,
                        species: dataForm.species,
                        gender: dataForm.gender,
                        race: dataForm.race,
                        age: Number(dataForm.age),
                        weight: Number(dataForm.weight),
                        owner: dataForm.owner,
                    };
                };
                return p;
            });
            console.log(updateList, 'listaa actualizada.....')
            dispatch(setPatientsList(updateList));
        };

        cerrar();
    };

    const cerrar = () => {
        form.reset();
        dispatch(setModal(false));
        const select = {
            name: '',
            species: '',
            gender: '',
            race: '',
            age: 0,
            weight: 0,
            owner: ''
        };

        dispatch(setSelectModal(select));
    };

    useEffect(() => {

        if (modal.seleccionado.name != '') {

            form.reset({
                name: modal.seleccionado.name,
                species: modal.seleccionado.species,
                gender: modal.seleccionado.gender,
                race: modal.seleccionado.race,
                age: String(modal.seleccionado.age),
                weight: String(modal.seleccionado.weight),
                owner: modal.seleccionado.owner,
            });

        } else {

            form.reset({
                name: '',
                species: '',
                gender: '',
                race: '',
                age: '',
                weight: '',
                owner: '',
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
                <FieldGroup>
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
                                    placeholder="Nombre de la mascota"
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
                        name="species"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                orientation="responsive"
                                data-invalid={fieldState.invalid}
                            >
                                <FieldContent>
                                    <FieldLabel htmlFor="form-rhf-select-species">
                                        Especie
                                    </FieldLabel>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </FieldContent>
                                <Select
                                    name={field.name}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger
                                        id="form-rhf-select-species"
                                        aria-invalid={fieldState.invalid}
                                        className="min-w-[120px]"
                                    >
                                        <SelectValue placeholder="Selecciona una especie" />
                                    </SelectTrigger>
                                    <SelectContent position="item-aligned">
                                        <SelectItem value="especie">Selecciona una especie</SelectItem>
                                        {
                                            especies.map((especie, index) =>
                                                <SelectItem key={index} value={especie}>
                                                    {especie}
                                                </SelectItem>
                                            )
                                        }
                                        <SelectSeparator />
                                    </SelectContent>
                                </Select>
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup>
                    <Controller
                        name="gender"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                orientation="responsive"
                                data-invalid={fieldState.invalid}
                            >
                                <FieldContent>
                                    <FieldLabel htmlFor="form-rhf-select-gender">
                                        Género
                                    </FieldLabel>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </FieldContent>
                                <Select
                                    name={field.name}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger
                                        id="form-rhf-select-gender"
                                        aria-invalid={fieldState.invalid}
                                        className="min-w-[120px]"
                                    >
                                        <SelectValue placeholder="Selecciona el género" />
                                    </SelectTrigger>
                                    <SelectContent position="item-aligned">
                                        <SelectItem value="genero">Selecciona el Género</SelectItem>
                                        <SelectItem value='Macho'>
                                            Macho
                                        </SelectItem>
                                        <SelectItem value='Hembra'>
                                            Hembra
                                        </SelectItem>
                                        <SelectSeparator />
                                    </SelectContent>
                                </Select>
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup>
                    <Controller
                        name="race"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Raza</FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-race"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Raza"
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
                        name="age"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Edad</FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-age"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Edad"
                                    autoComplete="off"
                                    type="number"
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
                        name="weight"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Peso (kg)</FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-weight"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Peso"
                                    autoComplete="off"
                                    type="number"
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
                        name="owner"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field
                                orientation="responsive"
                                data-invalid={fieldState.invalid}
                            >
                                <FieldContent>
                                    <FieldLabel htmlFor="form-rhf-select-owner">
                                        Propietario
                                    </FieldLabel>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </FieldContent>
                                <Select
                                    name={field.name}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger
                                        id="form-rhf-select-owner"
                                        aria-invalid={fieldState.invalid}
                                        className="min-w-[120px]"
                                    >
                                        <SelectValue placeholder="Selecciona a un propietario" />
                                    </SelectTrigger>
                                    <SelectContent position="item-aligned">
                                        <SelectItem value="propietario">Selecciona a un propietario</SelectItem>
                                        {
                                            propietarios.map((propietario, index) =>
                                                <SelectItem key={index} value={propietario}>
                                                    {propietario}
                                                </SelectItem>
                                            )
                                        }
                                        <SelectSeparator />
                                    </SelectContent>
                                </Select>
                            </Field>
                        )}
                    />
                </FieldGroup>
            </form>
            <Button type="submit" form="form-rhf-demo" className="bg-cyan-500 w-full mt-6 hover:bg-cyan-600">
                {
                    modal.seleccionado.name == '' ? 'Crear Paciente' : 'Guardar Cambios'
                }
            </Button>
        </div>
    );
};

export default FormPatients;