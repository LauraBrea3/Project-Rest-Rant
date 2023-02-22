const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3>
                        Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div id="placeInfo" className="col-sm-6">
                    <h1>{ data.place.name }</h1>
                    <h2 className="placeInfo">Rating</h2>
                    <p>No ratings yet</p>
                    <br/>
                    <h2 className="placeInfo">Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                    </div>
                    </div>
                <hr/>
                <div  className="row">
                    <h2 id="comments">Comments</h2>
                    <p>No comments yet!</p>
                </div>
                
            </main>
        </Def>
    )
}

module.exports = show