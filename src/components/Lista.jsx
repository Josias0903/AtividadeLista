import React, { useState, useCallback } from 'react';

const ListaLugares = () => {
  const [Lugares, setLugares] = useState([]);
  const [newJogo, setNewJogo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addJogo = useCallback(() => {
    if (newJogo.trim() !== '') {
      if (isEditing) {
        const updatedLugares = Lugares.map((jogo, index) =>
          index === currentIndex ? newJogo : jogo
        );
        setLugares(updatedLugares);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setLugares((prevLugares) => [...prevLugares, newJogo]);
      }
      setNewJogo('');
    }
  }, [newJogo, isEditing, currentIndex, Lugares]);

  const removeJogo = useCallback((index) => {
    setLugares((prevLugares) => prevLugares.filter((_, i) => i !== index));
  }, []);

  const editJogo = useCallback((index) => {
    setNewJogo(Lugares[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  }, [Lugares]);

  return (
    <div>
      <h1>Lista de Lugares</h1>
      <input
        type="text"
        value={newJogo}
        onChange={(e) => setNewJogo(e.target.value)}
        placeholder="Novo Jogo"
      />
      <button onClick={addJogo}>
        {isEditing ? 'Salvar Alteração' : 'Adicionar Jogo'}
      </button>
      <ul>
        {Lugares.map((jogo, index) => (
          <li key={index}>
            {jogo}
            <div>
              <button
                className="icon-button edit"
                onClick={() => editJogo(index)}
              >
                &#9998; {/* Unicode para o ícone de lápis */}
              </button>
              <button
                className="icon-button remove"
                onClick={() => removeJogo(index)}
              >
                &#128465; {/* Unicode para o ícone de lixeira */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaLugares;
