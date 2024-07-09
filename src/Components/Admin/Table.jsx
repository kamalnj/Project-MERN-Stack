import axios from "axios";
import React, { useEffect, useState  } from "react";

const Table = () => {
    const [jobs, setJobs] = useState([]);


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

    const deleteJob = (id, nomoffre) => {
        // Confirm with the user before deleting the job
        const confirmDelete = window.confirm("Are you sure you want to delete this job?");
        if (!confirmDelete) return; // If user cancels, do nothing

        // Send delete request to the server
        axios.post("http://localhost:3000/suppjob", { id, nomoffre })
            .then((response) => {
                alert("Job deleted successfully");
                // After deletion, refresh the job list
                fetchJobs();
            })
            .catch((error) => {
                console.error("Error deleting job:", error);
                alert("Error deleting job. Please try again later.");
            });
    };
    const editJob = (nomoffre) => {
        window.location.href = `http://localhost:3001/modifier/${encodeURIComponent(nomoffre)}`;

    };

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nom d'offre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Localisation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Salaire
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {job.nomoffre}
                                </th>
                                <td className="px-6 py-4">{job.localisation}</td>
                                <td className="px-6 py-4">{job.salaire}</td>
                                <td className="px-6 py-4 text-right">
                                <button
                                        onClick={() => editJob(job.nomoffre)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        onClick={() => deleteJob(job._id, job.nomoffre)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
