import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';
import endPoints from '../services/api';

//creamos un contexto para usarlo para proteger rutas.
const AuthContext = createContext();


//custom hook con los metodos para operaciones con usuarios.
function useProviderAuth(){
    const router = useRouter();
    const [user,setUser] = useState(null);
    const [headers, setHeaders] = useState( new Headers());

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


        const response = await fetch(endPoints.auth.addCustomer, options);

        return response.json();        
    };

    //autenticacion de usuario
    const login = async (email, password) =>{
        
        const data = {
            email,
            password
        };

        const options = {
            method:'POST',
            headers:{
                accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        try{
            const acces_token = await fetch(endPoints.auth.login, options).then(data => data.json());
        
            if(acces_token.token){
                const token = acces_token.token;
                const user = acces_token.user;
                Cookies.set('token',token,{expires: 5});
                headers.append('Authorization',`Bearer ${token}`);
                setUser(user);
            }else{
                throw new Error('error');
            };
            
        }catch(error){
            const errorMessage = 'user invalid';
            throw new Error(errorMessage);
        };
        
    };

    //autorizacion de usuario
    const autorization = async () => {
        const token = Cookies.get('token');
        if(!token){
            router.push('/login');
        }else{
            try{
                const options={
                    headers:{
                        accept: '*/*',
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${token}`,
                    },
                };
                const user = await fetch(endPoints.auth.profile, options).then( data => data.json());
                setUser(user);    
            }catch (error){
                console.log(error);
                router.push('/login');
            };
        };
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        router.push('/login');
    }

    return{
        signUp,
        login,
        user,
        autorization,
        logout
    };
};



//componente con el cual envolveremos la app para proporcionarle el contexto.
export function ProviderAuth ({children}) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
};

//metodo que nos retorna el contexto que posee el custoom hook para usar sus metodos.
export const useAuth = () => {
    return useContext(AuthContext);
}