const BASE_URL = "http://127.0.0.1:3001/api/studio";

export async function saveProjectAPI(project) {
  const res = await fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  });
  return res.json();
}

export async function loadProjectAPI(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}
