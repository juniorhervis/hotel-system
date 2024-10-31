import React from 'react';
import { useForm } from '@inertiajs/react';
import '../../../css/reservationForm.css';
import { Inertia } from "@inertiajs/inertia";

export default function Form({ reservation = null }) {
    const { data, setData, errors } = useForm({
        room_number: reservation?.room_number || '',
        check_in: reservation?.check_in || '',
        check_out: reservation?.check_out || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reservation) {
            Inertia.put(`/reservations/edit/${reservation.id}`, {
                room_number: data.room_number,
                check_in: data.check_in,
                check_out: data.check_out,
            });
        } else {
            Inertia.post('/reservations/create', {
                room_number: data.room_number,
                check_in: data.check_in,
                check_out: data.check_out,
            });
        }
    };

    return (
        <div className="form-container">
            <h2>{reservation ? 'Editar Reserva' : 'Nova Reserva'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Quarto</label>
                    <input
                        value={data.room_number}
                        onChange={e => setData('room_number', e.target.value)}
                    />
                    {errors.room_number && <span className="error-message">{errors.room_number}</span>}
                </div>
                <div>
                    <label>Check-in</label>
                    <input
                        type="date"
                        value={data.check_in}
                        onChange={e => setData('check_in', e.target.value)}
                    />
                    {errors.check_in && <span className="error-message">{errors.check_in}</span>}
                </div>
                <div>
                    <label>Check-out</label>
                    <input
                        type="date"
                        value={data.check_out}
                        onChange={e => setData('check_out', e.target.value)}
                    />
                    {errors.check_out && <span className="error-message">{errors.check_out}</span>}
                </div>
                <button type="submit">
                    {reservation ? 'Atualizar' : 'Criar'} Reserva
                </button>
            </form>
        </div>
    );
}
