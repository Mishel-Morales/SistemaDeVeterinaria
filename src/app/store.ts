import OwnersSlice from "@/features/owners/slice";
import PatientsSlice from "@/features/patients/slice";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        PatientsSlice: PatientsSlice,
        OwnersSlice: OwnersSlice,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;