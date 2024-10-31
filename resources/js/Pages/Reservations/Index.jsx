import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import '../../../css/reservation.css';

const Index = ({ reservations }) => {
    const handleEdit = (reservationId) => {
        Inertia.put(`reservations/edit/${reservationId}`);
    };

    const handleCreateReservation = () => {
        Inertia.post('reservations/create');
    };

    const handleDelete = (reservationId) => {
        if (confirm('Tem certeza que deseja excluir esta reserva?')) {
            Inertia.delete(`/reservations/${reservationId}`);
        }
    };

    return (
        <div className="background-image">
            <div className="reservations-container">
                <div className="header-container">
                    <h1 className="reservations-title">Lista de Reservas</h1>
                    <button className="create-button" onClick={handleCreateReservation}>
                        Criar Reserva
                    </button>
                </div>
                {Array.isArray(reservations) && reservations.length > 0 ? (
                    reservations.map((reservation) => (
                        <div className="reservation-card" key={reservation.id}>
                            <p className="reservation-room">Quarto: {reservation.room_number}</p>
                            <p className="reservation-dates">Entrada: {new Date(reservation.check_in).toLocaleDateString()}</p>
                            <p className="reservation-dates">Saída: {new Date(reservation.check_out).toLocaleDateString()}</p>
                            <button className="edit-button" onClick={() => handleEdit(reservation.id)}>
                                Editar Reserva
                            </button>
                            <button className="delete-button" onClick={() => handleDelete(reservation.id)}>
                                Excluir Reserva
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-reservations">Nenhuma reserva disponível.</p>
                )}
            </div>
        </div>
    );
};

export default Index;
