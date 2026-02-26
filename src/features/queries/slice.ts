import type { queries, selectQuery } from "@/types/queries/queriesType";
import { createSlice } from "@reduxjs/toolkit";

interface State {
    data: {
        queriesList: queries[],
    },
    modal: {
        status: boolean,
        seleccionado: selectQuery
    },
};

const initialState: State = {
    data: {
        queriesList: [
            {
                id: 1,
                id_pet: 1,
                vet: "Melany Mejía",
                temperature: 38.5,
                fCardiac: 140,
                reason: 'Revisión General',
                diagnosis: 'Paciente presenta leve inflamacion en encias. Se recomienda limpieza dental programada.',
                treatment: 'Enjuague bucal especializado 2 veces al dia durante 7 dias.',
                status: 'Completada',
                note: 'Paciente tranquila durante la consulta. Propietaria informada sobre cuidado dental.',
                time: '09:30',
                date: 2-11-2025
            },
            {
                id: 2,
                id_pet: 2,
                vet: "Miguel Ruiz",
                temperature: 39.0,
                fCardiac: 110,
                reason: 'Revisión General',
                diagnosis: '',
                treatment: '',
                status: 'En Espera',
                note: '',
                time: '11:45',
                date: 2-11-2025
            },
        ],
    },
    modal: {
        status: false,
        seleccionado: {
            id: 0,
            id_pet: 0,
            temperature: 0,
            weight: 0,
            fCardiac: 0,
            diagnosis: '',
            treatment: '',
            note: ''
        }
    },
};

export const QueriesSlice = createSlice({
    name: 'SlicePatiens',
    initialState,
    reducers: {
        setModalQuery: (state, action) => {
            state.modal.status = action.payload;
        },
        setSelectModalQuery: (state, action) => {
            state.modal.seleccionado = action.payload;
        },
        setNewQuery: (state, action) => {
            state.data.queriesList.push(action.payload);
        },
        setQueriesList: (state, action) => {
            state.data.queriesList = action.payload;
        }
    },
});

export const { setModalQuery, setSelectModalQuery, setNewQuery, setQueriesList } = QueriesSlice.actions;
export default QueriesSlice.reducer;