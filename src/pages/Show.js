import { useLoaderData, Form} from "react-router-dom"

function Show(props) {
  const cheese = useLoaderData()

  return (
    <div className="show">
      <h1>{cheese.name}</h1>
      <h2>{cheese.title}</h2>
      <img src={cheese.image} alt={cheese.name} />
      <h2>Delete Cheese</h2>
      <Form action={`/delete/${cheese._id}`} method="post">
        <input type="submit" value="delete cheese" />
      </Form>
    </div>
  )
}
export default Show