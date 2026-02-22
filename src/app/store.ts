import PatientsSlice from "@/features/patients/slice";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        PatientsSlice: PatientsSlice,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;