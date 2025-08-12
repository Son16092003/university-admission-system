export const tinhDiemPhuongThuc1 = async (payload) => {
  try {
    const response = await fetch('http://<YOUR_BACKEND_URL>/pt1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
