import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Email",
          content: "",
        },
        {
          id: 2,
          name: "Phone",
          content: "",
        } 
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 3,
          name: "Address",
          content: "ul. Księcia Witolda 49/15",
        },
        {
          id: 2,
          name: "City",
          content: "50-202 Wrocław",
        }
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
