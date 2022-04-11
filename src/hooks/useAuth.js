import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';
import endPoints from '../services/api';

//creamos un contexto para usarlo para proteger rutas.
const AuthContext = createContext();


//custom hook con los metodos para operaciones con usuarios.
function useProviderAuth(){
    const router = useRouter();

    //registro de usuario
    const signUp = async (name,lastName,phone,email,password) => {

       const  data = {
            name,
            lastName,
            phone,
            user:{
                email,
                password,
            }
        };

        const options = {
            method:'POST',
            headers:{
                accept: '*/*', //para que trabaje con todas las solicitudes
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };


        const response = await fetch(endPoints.auth.addCustomer, options)

        return response.json();        
    };

    return{
        signUp
    }
};



//componenete con el cual envolveremos la app para proporcionarle el contexto.
export function ProviderAuth ({children}) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
};

//metodo que nos retorna el contexto que posee el custoom hook para usar sus metodos.
export const useAuth = () => {
    return useContext(AuthContext);
}