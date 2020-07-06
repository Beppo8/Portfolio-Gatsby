import React from "react";
import illustration from '../imgs/undraw_selecting_1lx3.svg';
import saul from '../imgs/saul.jpg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <img className="img" src={saul} alt="Imagen de persona cx"/>
                    <h1 className="font-bold text-purple-700 text-4xl">¡Hello! I´m Saúl</h1>
                    <p className="text-xl font-light">I´m FullStack developer focused in Python and Javascript </p>
                </div>
                <img src={illustration} alt="Imagen Pagina Estatica" style={{height: "300px"}} />
            </div>

            <div>
                <Form/>
            </div>
        </div>
    </header>
)