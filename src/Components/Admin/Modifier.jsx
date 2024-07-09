import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Modifier = () => {
    const { nomoffre } = useParams(); // Récupère le nom de l'offre d'emploi de l'URL
    const [job, setJob] = useState({ nomoffre: "", localisation: "", salaire: "", description: "" });

    useEffect(() => {
        // Charge les détails de l'offre d'emploi à éditer
        axios.get(`http://localhost:3000/${nomoffre}`)
            .then(response => setJob(response.data))
            .catch(err => console.error("Error fetching job details:", err));
    }, [nomoffre]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les modifications à l'API
        axios.put(`http://localhost:3000/mod/${nomoffre}`, job)
            .then(() => {
                alert("Job updated successfully");
                // Rediriger l'utilisateur vers la page de détails de l'offre d'emploi
                // Remplacez ceci par l'URL réelle de la page de détails de l'offre d'emploi
                window.location.href = '/careers';
            })
            .catch((error) => {
                console.error("Error updating job:", error);
                alert("Error updating job. Please try again later.");
            });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Modifier un offre d'emploi</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nom de l'offre d'emploi</label>
                            <input
                                type="text"
                                id="nomoffre"
                                name="nomoffre"
                                className="mt-1 p-2 w-full border rounded-md"
                                value={job.nomoffre}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Localisation</label>
                        <input
                            type="text"
                            id="localisation"
                            name="localisation"
                            className="mt-1 p-2 w-full border rounded-md"
                            value={job.localisation}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Salaire</label>
                        <input
                            type="text"
                            id="salaire"
                            name="salaire"
                            className="mt-1 p-2 w-full border rounded-md"
                            value={job.salaire}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mt-4">
                        <label className="mb-3 block text-sm font-medium text-gray-700">Description</label>
                        <ContactTextArea
                            row="6"
                            name="description"
                            value={job.description}
                            onChange={handleInputChange}
                            defaultValue=""
                        />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Modifier
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ContactTextArea = ({ row, name, value, onChange }) => {
    return (
        <div className="mb-6">
            <textarea
                rows={row}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
            />
        </div>
    );
};

export default Modifier;
