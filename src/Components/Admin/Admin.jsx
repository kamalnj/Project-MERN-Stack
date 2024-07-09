import React, { useEffect, useState } from 'react';
import { useAuth } from "../Auth/AuthContext";
import { Link } from "react-router-dom";
import axios from 'axios';
import Table from './Table';

function Admin() {
    const { currentUser } = useAuth();
    const [jobOffersCount, setJobOffersCount] = useState(0);

    useEffect(() => {
        // Fetch the job offers count from the backend
        const fetchJobOffersCount = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/joboffers/count');
                setJobOffersCount(response.data.count); // Access response data directly
            } catch (error) {
                console.error("Error fetching job offers count:", error);
            }
        };

        fetchJobOffersCount();
    }, []);

    return (
        <section className="w-full overflow-hidden bg-slate-50">
            <div className="w-full mx-auto">
                <img src="https://www.creads.com/wp-content/uploads/2021/05/sans-titre-1-7.jpg" alt="User Cover"
                    className="w-full h-[20rem] object-cover" />

                <div className="w-full mx-auto flex justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010" alt="User Profile"
                        className="rounded-full bg-white object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28" />
                </div>

                <div className="w-11/12 mx-auto flex flex-col gap-4 justify-center items-center relative -top-16 sm:-top-20 md:-top-24 lg:-top-28">
                    <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">ADMIN</h1>
                    <p className="w-full text-gray-700 dark:text-gray-400 text-md text-pretty text-center">
                        @{currentUser.displayName ? currentUser.displayName : currentUser.email}
                    </p>

                    <div className="w-full flex gap-4 justify-center items-center mt-10">
                        <Link 
                            to="/ajouter" 
                            className="flex justify-center items-center px-4 py-2 bg-red-600 hover:bg-red-400 text-white text-center rounded-md text-lg border-2"
                            style={{ minWidth: '200px', maxWidth: '300px', width: 'auto' }}
                        >
                            AJOUTER UNE OFFRE D'EMPLOI
                        </Link>
                    </div>
                    <div className="w-full flex gap-4 justify-center items-center mt-10">
                        <div className='flex justify-center items-center px-4 py-2 bg-red-600  text-white text-center rounded-md text-lg border-2'>
                            Nombre d'offre d'emploi : {jobOffersCount}
                        </div>
                    </div>
                </div>
            </div>
            <div className=' px-7 py-7'> <Table/>
            </div>
           
        </section>
        
    );
}

export default Admin;
