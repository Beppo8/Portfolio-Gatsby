import React from "react";
import illustration from '../imgs/undraw_selecting_1lx3.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">¡Hola! Soy Saúl</h1>
                    <p className="text-xl font-light">Creo aplicaciones web</p>
                </div>
                <img src={illustration} alt="Imagen Pagina Estatica" style={{height: "300px"}} />
            </div>

            <div>
                <Form/>
            </div>
        </div>
    </header>
)