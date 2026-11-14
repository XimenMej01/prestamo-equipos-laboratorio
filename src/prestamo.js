function registrarPrestamo(equipo, cantidad) {

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        throw new Error("La cantidad debe ser un entero positivo");
    }

    if (cantidad > equipo.stock) {
        throw new Error("No hay stock disponible");
    }

    equipo.stock -= cantidad;

    return {
        mensaje: "Préstamo registrado correctamente",
        equipo: equipo.nombre,
        cantidad: cantidad,
        stockRestante: equipo.stock
    };
}

module.exports = { registrarPrestamo };