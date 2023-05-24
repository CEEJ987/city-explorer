import Card from 'react-bootstrap/Card';


function Moviecarddisplay(props) {
    console.log(props.movies)

    return( 
        props.movies.map(function (movies) {
        return (



            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{movies.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        {movies.overview}Click the link to acces movie information.
                    </Card.Text>
                    <Card.Link href="#">Movie showings Link</Card.Link>
                </Card.Body>
            </Card>
            )
    })

    )
}

export default Moviecarddisplay;