const { test } = require('node:test');
const assert = require('node:assert/strict');

const { registrarPrestamo } = require('../src/prestamo');

test('Debe registrar un préstamo correctamente', () => {

    const equipo = {
        nombre: 'Laptop',
        stock: 10
    };

    const resultado = registrarPrestamo(equipo, 3);

    assert.equal(resultado.stockRestante, 7);
    assert.equal(equipo.stock, 7);

});

test('Debe rechazar préstamos sin stock suficiente', () => {

    const equipo = {
        nombre: 'Laptop',
        stock: 2
    };

    assert.throws(
        () => registrarPrestamo(equipo, 5),
        /No hay stock disponible/
    );

});

test('Debe rechazar cantidades inválidas', () => {

    const equipo = {
        nombre: 'Laptop',
        stock: 10
    };

    assert.throws(
        () => registrarPrestamo(equipo, 0),
        /entero positivo/
    );

});

test('No debe aceptar cantidades negativas', () => {

    const equipo = {
        nombre: 'Laptop',
        stock: 10
    };

    assert.throws(
        () => registrarPrestamo(equipo, -2),
        /entero positivo/
    );

});