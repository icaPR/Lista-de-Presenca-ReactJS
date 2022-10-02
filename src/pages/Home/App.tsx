import "./styles.css";
import { Card, CardProps } from "../../components/Card/index";
import React, { useState, useEffect } from "react";

type typeResponse = {
  name: string;
  avatar_url: string;
};
type User = {
  name: string;
  avatar: string;
};

export function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents([...students, newStudent]);
  }
  useEffect(() => {
    async function fetchData() {
      const reponse = await fetch("https://api.github.com/users/icaPR");
      const data = (await reponse.json()) as typeResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
