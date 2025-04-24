import { MistralClient } from '@mistralai/mistralai';

const client = new MistralClient(import.meta.env.PUBLIC_MISTRAL_API_KEY);

export async function post({ request }) {
	try {
		const { message } = await request.json();

		const response = await client.chat({
			model: 'mistral-tiny',
			messages: [
				{
					role: 'system',
					content: 'Eres un asistente virtual de Mundo Recreativo, una empresa de fiestas y recreación. Debes ser amable, profesional y ayudar a los clientes con información sobre nuestros servicios.'
				},
				{
					role: 'user',
					content: message
				}
			]
		});

		return new Response(JSON.stringify({ response: response.choices[0].message.content }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Error al procesar la solicitud' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
} 