import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    {
      name: "Janek",
      surname: "Kowalski",
      content: "jakiś opis Janka",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Paweł",
      surname: "Jumper",
      content: "jakiś opis Pawła",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Jakub",
      surname: "Petarda",
      content: "jakiś opis Kuby",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Kacper",
      surname: "Nowak",
      content: "jakiś opis Kacpra",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        );
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;
