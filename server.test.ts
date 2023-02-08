import { test, expect } from 'vitest';
import request from 'supertest';
import app from './src/app.js';

test('GET /', async () => {
	const response = await request(app).get('/');
	expect(response.statusCode).toBe(200);
	expect(response.text.length).toBeGreaterThan(250);
});

test('GET /books', async () => {
	const response = await request(app).get('/books');
	expect(response.statusCode).toBe(200);
	expect(JSON.parse(response.text).length).toBe(35);
});