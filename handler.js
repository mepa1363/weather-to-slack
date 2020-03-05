"use strict";
import axios from "axios";

export async function weather() {
  const url = "https://wttr.in";

  const calgary = await axios
    .get(`${url}/Calgary?m&format=3`)
    .then(response => response.data);

  const golden = await axios
    .get(`${url}/Golden?m&format=3`)
    .then(response => response.data);

  const vancouver = await axios
    .get(`${url}/Vancouver?m&format=3`)
    .then(response => response.data);

  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text: "Today's Weather",
    attachments: [
      { title: calgary, image_url: `${url}/Calgary_m_1pq.png` },
      { title: golden, image_url: `${url}/Golden_m_1pq.png` },
      { title: vancouver, image_url: `${url}/Vancouver_m_1pq.png` }
    ]
  });

  return;
}
