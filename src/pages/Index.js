import { Link, useLoaderData, Form } from "react-router-dom"

function Index(props) {
  const cheeses = useLoaderData()
  return (
    <div>
      <h2 className="indexForm">Add a Cheese</h2>
      <Form className="indexForm" action="/create" method="post">
        <input type="text" name="name" placeholder="name of cheese" />
        <input type="text" name="image" placeholder="link to cheese image" />
        <input type="text" name="countryOfOrigin" placeholder="country of origin" />
        <input type="submit" value="add cheese" />
      </Form>
      {cheeses.map((cheese, index) => {
        return (
          <div className="main">
            <div key={cheese._id}>
              <Link to={`/${cheese._id}`}>
                <h1>{cheese.name}</h1>
              </Link>
              <img src={cheese.image} alt={cheese.name} />
              <h3>{cheese.countryOfOrigin}</h3>
            </div>
          </div>
        )
      })}
    </div>
  );
}


export default Index;