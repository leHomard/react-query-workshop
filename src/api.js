const BASE_URL = 'https://api.airtable.com/v0';
const BASE = 'appQJYqwCGjYCVfdK';
const TABLE = 'Table%201';
const VIEW = 'Grid%20view';
const API_KEY = 'keyW0cghHkXHzy0Em';

const AUTH_HEADER = {
  Authorization: `Bearer ${API_KEY}`,
};

export function fetchPosts(cursor) {
  let API_URL = `${BASE_URL}/${BASE}/${TABLE}?view=${VIEW}&pageSize=3`;

  if (cursor) {
    API_URL = API_URL + `&cursor=${cursor}`;
  }

  return fetch(API_URL, {
    headers: { ...AUTH_HEADER },
  }).then(response => response.json());
}

export function likePost(id) {
  return fetch(`/posts/:${id}`, { method: 'PATCH' }).then(() => {});
}

export function addPost(imageUrl) {
  const API_URL = `${BASE_URL}/${BASE}/${TABLE}`;
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...AUTH_HEADER,
    },
    body: JSON.stringify({
      fields: {
        imageUrl: imageUrl,
      },
    }),
  });
}

export function deletePost(id) {
  const API_URL = `${BASE_URL}/${BASE}/${TABLE}/${id}`;
  return fetch(API_URL, {
    method: 'DELETE',
    headers: { ...AUTH_HEADER },
  }).then(response => response.json());
}
