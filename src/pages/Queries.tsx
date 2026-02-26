import type { RootState } from "@/app/store";
import { FormQueries } from "@/components/FormQueries";
import Modal from "@/components/Modal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { setModalQuery, setQueriesList, setSelectModalQuery } from "@/features/queries/slice";
import type { queries } from "@/types/queries/queriesType";
import { Clock4, FileSpreadsheet, FileText, HeartPulse, Stethoscope, Thermometer, Weight } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Queries = () => {
    const { data, modal } = useSelector((state: RootState) => state.QueriesSlice);
    const { patientsList } = useSelector((state: RootState) => state.PatientsSlice.data);
    const [idSelect, setIdSelect] = useState<number>(0);
    const dispatch = useDispatch();

    const info = [
        {
            title: 'Hoy',
            total: data.queriesList.length,
            icon: <Stethoscope color="teal" />
        },
        {
            title: 'En Curso',
            total: data.queriesList.filter((q) => q.status == 'En Curso').length,
            icon: <Clock4 color="gray" />
        },
        {
            title: 'En Espera',
            total: data.queriesList.filter((q) => q.status == 'En Espera').length,
            icon: <FileSpreadsheet color="orange" />
        },
        {
            title: 'Completadas',
            total: data.queriesList.filter((q) => q.status == 'Completada').length,
            icon: <HeartPulse color="red" />
        }
    ];

    const mostrarDatos = (id: number) => {
        setIdSelect(id);
    };

    const updateQuery = (id: number) => {
        const query = data.queriesList.find((q) => q.id === id);
        const weight = patientsList.find((p) => p.id === idSelect)?.weight;

        const select = query && {
            id: query.id,
            id_pet: query.id_pet,
            temperature: query.temperature,
            weight: weight,
            fCardiac: query.fCardiac,
            diagnosis: query.diagnosis,
            treatment: query.treatment,
            note: query.note
        };
        dispatch(setSelectModalQuery(select));
        dispatch(setModalQuery(true));
    };

    const endQuery = () => {
        const changeStatus = data.queriesList.map((q: queries) => {
                        if (q.id === idSelect) {
                            return {
                                ...q,
                                status: 'Completada'
                            };
                        };
                        return q;
                    });
        dispatch(setQueriesList(changeStatus));
    };

    useEffect(() => {
        
    }, [data.queriesList]);

    return (
        <div className="p-8">
            <Modal state={modal.status}>
                <FormQueries />
            </Modal>
            <div className="mb-5">
                <h1 className="font-display text-2xl font-bold tracking-tight">Consultas</h1>
                <p className="text-sm text-muted-foreground">Registros de Consultas Médicas y Diagnosticos</p>
            </div>
            <div className="flex gap-3">
                {
                    info.map((content, index) =>
                        <div key={index} className="flex items-center border rounded-xl p-3 w-full flex">
                            <div className="rounded-xl bg-cyan-200/25 flex p-3 me-4">
                                {content.icon}
                            </div>
                            <div>
                                <p>
                                    {content.title}
                                </p>
                                <p className="text-2xl font-medium">
                                    {content.total}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="border rounded-xl w-full p-4">
                    <p>Consultas del Día</p>
                    <div>
                        {
                            data.queriesList.map((dataQ, index) =>
                                <div key={index} tabIndex={0} onClick={() => mostrarDatos(dataQ.id)} className="my-5 flex justify-between hover:bg-gray-200/25 boder rounded-lg p-2 focus:ring-2 focus:ring-cyan-200/25 focus:bg-cyan-100/25">
                                    <div className="flex">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback className="bg-cyan-300/25 text-cyan-300 ">
                                                MM
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="ms-2">
                                            {
                                                patientsList.find((p) => p.id === dataQ.id_pet)?.name
                                            }
                                            <span className="text-muted-foreground text-sm ms-2">
                                                {
                                                    patientsList.find((p) => p.id === dataQ.id_pet)?.species
                                                }
                                            </span>
                                            <p className="text-muted-foreground text-sm font-light">
                                                {dataQ.reason} - {dataQ.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`rounded-xl text-sm font-light px-1 ${dataQ.status == 'En Curso' && 'bg-cyan-100/75 text-cyan-700' || dataQ.status == 'En Espera' && 'bg-amber-300/25 text-orange-400' || dataQ.status == 'Completada' && 'bg-red-700/25 text-red-500'}`}>
                                            {dataQ.status}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="border rounded-xl w-full col-span-2 p-3">
                    {
                        idSelect !== 0 ? (
                            <>
                                <div>
                                    <div className="mb-2">
                                        <p>{patientsList.find((p) => p.id === idSelect)?.name}</p>
                                        <p className="font-light text-muted-foreground text-sm">{patientsList.find((p) => p.id === idSelect)?.race} · {patientsList.find((p) => p.id === idSelect)?.owner} · Dr. {data.queriesList.find((q) => q.id === idSelect)?.vet}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center border rounded-xl w-full p-2">
                                            <Thermometer className="m-2" color="pink" size={20} />
                                            <div>
                                                <p className="text-muted-foreground text-sm">Temperatura</p>
                                                {data.queriesList.find((q) => q.id === idSelect)?.temperature}
                                            </div>
                                        </div>
                                        <div className="flex items-center border rounded-xl w-full p-2">
                                            <Weight className="m-3" color="teal" size={20} />
                                            <div>
                                                <p className="text-muted-foreground text-sm">Peso</p>
                                                {patientsList.find((p) => p.id === idSelect)?.weight}
                                            </div>
                                        </div>
                                        <div className="flex items-center border rounded-xl w-full p-2">
                                            <HeartPulse className="m-3" color="red" size={20} />
                                            <div>
                                                <p className="text-muted-foreground text-sm">F. Cardiaca</p>
                                                {data.queriesList.find((q) => q.id === idSelect)?.fCardiac}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-5" />
                                <div>
                                    <div className="my-2">
                                        <FileText color="green" />
                                        <p>Diagnostico</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {data.queriesList.find((q) => q.id === idSelect)?.diagnosis == '' && 'Pendiente de Evaluación.'}
                                            {data.queriesList.find((q) => q.id === idSelect)?.diagnosis}
                                        </p>
                                    </div>
                                    <div className="my-2">
                                        <div>
                                            <Stethoscope color="orange" />
                                            <p>Tratamiento</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {data.queriesList.find((q) => q.id === idSelect)?.treatment == '' && 'Pendiente.'}
                                            {data.queriesList.find((q) => q.id === idSelect)?.treatment}
                                        </p>
                                    </div>
                                    {
                                        data.queriesList.find((q) => q.id === idSelect)?.note !== '' && (
                                            <div className="my-3">
                                                <p>Notas</p>
                                                <p className="border rounded-xl p-3 text-sm text-muted-foreground bg-gray-100">
                                                    {data.queriesList.find((q) => q.id === idSelect)?.note}
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button onClick={() => updateQuery(idSelect)} className="border bg-white text-black hover:bg-amber-500 hover:text-white">Editar Consulta</Button>
                                    {
                                        data.queriesList.find((q) => q.id === idSelect)?.status != 'Completada' && (
                                            <Button onClick={endQuery} className="bg-cyan-600 hover:bg-cyan-500">Finalizar Consulta</Button>
                                        )
                                    }
                                </div>
                            </>
                        ) : (
                            <p className="text-center mt-8">Selecciona una consulta para ver los detalles...</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Queries;