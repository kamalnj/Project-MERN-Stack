import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../Auth/AuthContext";
import { Link } from 'react-router-dom';



const Jobcard = () => {
    const [jobs, setJobs] = useState([]);
    const { userLoggedIn } = useAuth();

    useEffect(() => {
        // Fetch job data when the component mounts
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        // Fetch jobs from the server
        axios.get('http://localhost:3000/getjob')
            .then(response => setJobs(response.data))
            .catch(err => console.error("Error fetching jobs:", err));
    };

    // const deleteJob = (id, nomoffre) => {
    //     // Confirm with the user before deleting the job
    //     const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    //     if (!confirmDelete) return; // If user cancels, do nothing

    //     // Send delete request to the server
    //     axios.post("http://localhost:3000/suppjob", { id, nomoffre })
    //         .then((response) => {
    //             alert("Job deleted successfully");
    //             // After deletion, refresh the job list
    //             fetchJobs();
    //         })
    //         .catch((error) => {
    //             console.error("Error deleting job:", error);
    //             alert("Error deleting job. Please try again later.");
    //         });
    // };


    return (
        <div>
            {jobs.map(job => (
                <div className="m-5" key={job.id}>
                    <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
                        <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                                <img src="https://www.eccbc.com/wp-content/uploads/2022/04/ECCBC_Logo.png" alt="" className="h-full w-full object-cover text-gray-700" />
                            </div>
                        </div>
                        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                            <p  className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">{job.nomoffre}</p>
                            <p className="overflow-hidden pr-7 text-sm">{job.description}</p>

                            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                <div>Localisation:<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> {job.localisation} </span></div>
                                <div>Salaire:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">{job.salaire}</span></div>
                            </div>
                            {!userLoggedIn && ( // Afficher le bouton "Postuler" uniquement si l'utilisateur n'est pas administrateur
                                <Link to="/postuler" className="mt-3 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Postuler</Link>
                            )}
                            {/* {userLoggedIn && ( // Afficher le bouton "Supprimer" uniquement si l'utilisateur est connecté
                                <button className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteJob(job._id, job.nomoffre)}>Supprimer</button>
                            )} */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Jobcard;
