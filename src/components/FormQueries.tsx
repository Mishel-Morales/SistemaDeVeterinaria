"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { validationQueries } from "@/validations/Queries";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setModalQuery, setQueriesList, setSelectModalQuery } from "@/features/queries/slice";
import { useEffect } from "react";
import type { RootState } from "@/app/store";
import type { queries } from "@/types/queries/queriesType";
import type { patients } from "@/types/patients/listPatients";
import { setPatientsList } from "@/features/patients/slice";

export function FormQueries() {
    const { modal, data } = useSelector((state: RootState) => state.QueriesSlice);
    const { patientsList } = useSelector((state: RootState) => state.PatientsSlice.data);
    const dispatch = useDispatch();

    const form = useForm<z.infer<typeof validationQueries>>({
        resolver: zodResolver(validationQueries),
        defaultValues: {
            temperature: '',
            weight: '',
            fCardiac: '',
            diagnosis: '',
            treatment: '',
            note: ''
        },
    });

    const cerrar = () => {
        dispatch(setModalQuery(false));
        form.reset();
        const select = {
            id: 0,
            temperature: 0,
            weight: 0,
            fCardiac: 0,
            diagnosis: '',
            treatment: '',
            note: ''
        };
        dispatch(setSelectModalQuery(select));
    };

    function onSubmit(dataForm: z.infer<typeof validationQueries>) {
        const updateList = data.queriesList.map((q: queries) => {
            if (q.id === modal.seleccionado.id) {
                return {
                    ...q,
                    temperature: Number(dataForm.temperature),
                    fCardiac: Number(dataForm.fCardiac),
                    diagnosis: dataForm.diagnosis,
                    treatment: dataForm.treatment,
                    note: dataForm.note
                };
            };
            return q;
        });
        const updateWeight = patientsList.map((p: patients) => {
            if (p.id === modal.seleccionado.id_pet) {
                return {
                    ...p,
                    weight: Number(dataForm.weight)
                };
            };
            return p;
        });
        dispatch(setPatientsList(updateWeight));
        dispatch(setQueriesList(updateList));
        cerrar();
    };

    useEffect(() => {

        if (modal.seleccionado.id != 0) {

            form.reset({
                temperature: String(modal.seleccionado.temperature),
                weight: String(modal.seleccionado.weight),
                fCardiac: String(modal.seleccionado.fCardiac),
                diagnosis: modal.seleccionado.diagnosis,
                treatment: modal.seleccionado.treatment,
                note: modal.seleccionado.note
            });

        } else {

            form.reset({
                temperature: '',
                fCardiac: '',
                weight: '',
                diagnosis: '',
                treatment: '',
                note: ''
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
            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
                <FieldGroup>
                    <Controller
                        name="temperature"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-temperature">
                                    Temperatura
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-temperature"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Temperatura°..."
                                    autoComplete="off"
                                    type="number"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
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
                                <FieldLabel htmlFor="form-rhf-demo-weight">
                                    Peso (kg)
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-weight"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Peso..."
                                    autoComplete="off"
                                    type="number"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup>
                    <Controller
                        name="fCardiac"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-fCardiac">
                                    F Cardiaca
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="form-rhf-demo-fCardiac"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Frecuencia Cardiaca..."
                                    autoComplete="off"
                                    type="number"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup className="col-span-3">
                    <Controller
                        name="diagnosis"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-diagnosis">
                                    Diagnóstico
                                </FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea
                                        {...field}
                                        id="form-rhf-demo-diagnosis"
                                        placeholder="Ingrese el diagnóstico..."
                                        rows={6}
                                        className="min-h-24 resize-none"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    <InputGroupAddon align="block-end">
                                        <InputGroupText className="tabular-nums">
                                            {field.value.length}/150 characters
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup className="col-span-3">
                    <Controller
                        name="treatment"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-treatment">
                                    Tratamiento
                                </FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea
                                        {...field}
                                        id="form-rhf-demo-treatment"
                                        placeholder="Ingrese el tratamiento..."
                                        rows={6}
                                        className="min-h-24 resize-none"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    <InputGroupAddon align="block-end">
                                        <InputGroupText className="tabular-nums">
                                            {field.value.length}/150 characters
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup className="col-span-3">
                    <Controller
                        name="note"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="form-rhf-demo-note">
                                    Nota
                                </FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea
                                        {...field}
                                        id="form-rhf-demo-note"
                                        placeholder="Notas..."
                                        rows={6}
                                        className="min-h-24 resize-none"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    <InputGroupAddon align="block-end">
                                        <InputGroupText className="tabular-nums">
                                            {field.value.length}/100 characters
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
            </form>
            <div className="flex justify-end mt-2">
                <Button type="submit" form="form-rhf-demo" className="bg-cyan-500 w-full mt-6 hover:bg-cyan-600">
                    Guardar
                </Button>
            </div>
        </div>
    )
}
