import React from 'react';
import Durabilité from '../Components/Durabilité/Durabilité';
import Durabilité1 from '../Components/Durabilité/Durabilité1';

const Durabilite = () => {
    const cards = [
        {
          imageUrl: "https://www.eccbc.com/wp-content/uploads/2022/11/Cadena_cocacola.jpg",
          title: "01 Emballage ",
          description: "Préserver la valeur de nos matériaux d’emballage et de notre environnement en augmentant la réduction, la réutilisation et le recyclage de nos emballages et en veillant à ce qu’ils ne finissent pas dans nos cours d’eau partagés ou dans l’environnement.",
        },
        {
          imageUrl: "https://www.eccbc.com/wp-content/uploads/2022/05/SB_02_Water-768x640.png",
          title: "02 Eau",
          description: "Maximiser la valeur de nos ressources en eau partagées en étant responsables de notre utilisation de l’eau au sein de l’entreprise et en aidant nos communautés à accéder à leurs ressources en eau et à mieux les gérer.",
        },
        {
            imageUrl: "https://www.eccbc.com/wp-content/uploads/2022/05/03_SB_Climate-768x640.png",
            title: "03 Climat",
            description: "Préservez notre environnement commun en stimulant l’efficacité et l’innovation, afin de créer plus de valeur avec moins d’énergie, tant au sein de l’entreprise que dans nos communautés.​",
          },
          {
            imageUrl: "https://www.eccbc.com/wp-content/uploads/2023/02/SB_04_Communities-768x640.jpg",
            title: "04 Communautés",
            description: "Nous créerons une valeur durable pour nos communautés en investissant en elles et dans leur avenir, en nous concentrant sur l’amélioration de leur santé et de leurs moyens de subsistance, et en investissant dans l’employabilité et les compétences des femmes et des jeunes.​​",
          },
          {
            imageUrl: "https://www.eccbc.com/wp-content/uploads/2022/12/06_SB_Sourcing-768x640.png",
            title: "05 Approvisionnement",
            description: "Prenez des décisions responsables pour nos communautés et notre planète en soutenant les entreprises durables tout au long de notre chaîne de valeur, de la ferme à la table.​​",
          },
          {
            imageUrl: "https://www.eccbc.com/wp-content/uploads/2022/12/SB_06_People-768x640.png",
            title: "06 Personnes",
            description: "Nous accorderons une valeur égale à tous nos employés, en leur fournissant les outils et les opportunités de se développer professionnellement et en éliminant les obstacles à leur progression.​​",
          },
          
      ];
    return (
        <div>
            <Durabilité />
            <Durabilité1 cards={cards} />
        </div>
    );
}

export default Durabilite;
