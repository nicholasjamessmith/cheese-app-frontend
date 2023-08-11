import { baseUrl } from "./base_url";

import { redirect } from "react-router-dom";

export const createAction = async ({ request }) => {
  const formData = await request.formData()

  const newCheese = {
    name: formData.get("name"),
    image: formData.get("image"),
    countryOfOrigin: formData.get("countryOfOrigin")
  }

  await fetch(`${baseUrl}/cheese`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCheese
    )
  })
  return redirect('/')
}

export const deleteAction = async ({ params }) => {
  const id = params.id
  await fetch(`${baseUrl}/cheese/${id}`, {
    method: `DELETE`
  })
  return redirect('/')
}