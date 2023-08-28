export const GET = async () => {
  return new Response('', {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
