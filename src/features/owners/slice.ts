import type { owner, selectOwner } from "@/types/owners/ownersType";
import { createSlice } from "@reduxjs/toolkit";

interface State {
    data: {
        ownersList: owner[],
    },
    modal: {
        status: boolean,
        seleccionado: selectOwner
    },
};

const initialState: State = {
    data: {
        ownersList: [
            {
                id: 1,
                name: 'Mishel Morales',
                phone: '+502 5026 4879',
                email: 'mishelmorales@gmail.com',
                address: 'Sector 3, Cantón Chupol, Chichicastenango',
                status: 'Activo',
                created: 9-11-2025
            },
            {
                id: 2,
                name: 'Melany Mejía',
                phone: '+502 5136 7948',
                email: 'melany69m@gmail.com',
                address: 'Sector 1, Cantón Chupol, Chichicastenango',
                status: 'Activo',
                created: 22-2-2026
            },
            {
                id: 3,
                name: 'Carlos Pérez',
                phone: '+502 3596 0800',
                email: 'aguilar2007d@gmail.com',
                address: 'Aldea El Socobal, Chimaltenango',
                status: 'Activo',
                created: 22-2-2025
            },
        ],
    },
    modal: {
        status: false,
        seleccionado: {
            id: 0,
            name: '',
            phone: '',
            email: '',
            address: ''
        }
    },
};

export const OwnersSlice = createSlice({
    name: 'SlicePatiens',
    initialState,
    reducers: {
        setModalOwners: (state, action) => {
            state.modal.status = action.payload;
        },
        setSelectModalOwners: (state, action) => {
            state.modal.seleccionado = action.payload;
        },
        setNewOwner: (state, action) => {
            state.data.ownersList.push(action.payload);
        },
        setOwnersList: (state, action) => {
            state.data.ownersList = action.payload;
        }
    },
});

export const { setModalOwners, setSelectModalOwners, setNewOwner, setOwnersList } = OwnersSlice.actions;
export default OwnersSlice.reducer;