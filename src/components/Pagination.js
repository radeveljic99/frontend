import React from "react";

class Pagination extends React.Component {

    render() {
        return <div className="flex justify-center items-center flex-wrap mb-2">
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    }
}

export default Pagination;
