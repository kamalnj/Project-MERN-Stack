import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Ajouter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomoffre: "",
    localisation: "",
    salaire: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/joboffers", formData)
      .then((response) => {
        alert(response.data);
        navigate("/careers");
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Ajouter un offre d'emploi</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom de l'offre d'emploi</label>
              <input
                type="text"
                id="nomoffre"
                name="nomoffre"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.nomoffre}
                onChange={handleChange}
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
              value={formData.localisation}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Salaire</label>
            <input
              type="text"
              id="salaire"
              name="salaire"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.salaire}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label className="mb-3 block text-sm font-medium text-gray-700">Description</label>
            <ContactTextArea
              row="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Ajouter
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

export default Ajouter;
