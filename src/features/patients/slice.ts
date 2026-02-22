import type { patients, selectPatient } from "@/types/patients/listPatients";
import { createSlice } from "@reduxjs/toolkit";

interface State {
    data: {
        patientsList: patients[],
    },
    modal: {
        status: boolean,
        seleccionado: selectPatient
    },
};

const initialState: State = {
    data: {
        patientsList: [
            {
                id: 1,
                name: 'Scott',
                species: 'Perro',
                gender: 'Macho',
                race: 'Pitbull',
                age: 3,
                weight: 28,
                owner: 'Mishel Morales',
                lastVisit: 2-11-2025,
                status: 'Activo'
            },
            {
                id: 2,
                name: 'Luna',
                species: 'Gato',
                gender: 'Hembra',
                race: 'Siames',
                age: 2,
                weight: 4.5,
                owner: 'Carlos Pérez',
                lastVisit: 15-10-2025,
                status: 'En tratamiento'
            },
        ],
    },
    modal: {
        status: false,
        seleccionado: {
            id: 0,
            name: '',
            species: '',
            gender: '',
            race: '',
            age: 0,
            weight: 0,
            owner: ''
        }
    },
};

export const PatientsSlice = createSlice({
    name: 'SlicePatiens',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal.status = action.payload;
        },
        setSelectModal: (state, action) => {
            state.modal.seleccionado = action.payload;
        },
        setNewPatient: (state, action) => {
            state.data.patientsList.push(action.payload);
        },
        setPatientsList: (state, action) => {
            state.data.patientsList = action.payload;
        }
    },
});

export const { setModal, setSelectModal, setNewPatient, setPatientsList } = PatientsSlice.actions;
export default PatientsSlice.reducer;