import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { restCountriesApi } from "./services/countriesApiSlice";

const rootReducer = combineReducers({
	[restCountriesApi.reducerPath]: restCountriesApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(restCountriesApi.middleware),
	});
};

const store = setupStore();
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
