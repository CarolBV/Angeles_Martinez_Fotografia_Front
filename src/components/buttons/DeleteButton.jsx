import axios from "axios";
import DeleteModal from "../modals/DeleteModal";
import { useState } from "react";
import './deleteButton.scss';


const DeleteButton = ({ imageId, onImageDeleted }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      await axios.delete(`http://localhost:3001/gallery/id/${imageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onImageDeleted(imageId); // Actualiza la lista de imágenes
      setShowModal(false);
    } catch (error) {
      console.error('Error al eliminar la imagen', error);
    }
  };

  return (
    <>
      {/* Icono para eliminar */}
      <div className="deleteButton" onClick={(e) => { e.stopPropagation(); setShowModal(true); }}>
  <img className="imgDeleteButton" src="/assets/icons/delete.svg" alt="Eliminar imagen" />
</div>
      {/* Modal de confirmación */}
      {showModal && (
        <DeleteModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default DeleteButton