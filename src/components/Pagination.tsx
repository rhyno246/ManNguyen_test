import React from 'react';
interface Props {
    totalUser : number,
    onChangePage: (index: number) => void,
    currentPage : number,
}
const Pagination: React.FC<Props> = (props) => {
    const { totalUser , onChangePage , currentPage } = props
    let numberPages = []
    for(let i = 1; i <= totalUser ; i++){
        numberPages.push(i)
    }
    return (
        <div className="d-flex justify-content-end pagination">
            <ul className="d-flex list-unstyled">
                <li className="mr-2">
                    <button 
                        disabled={ currentPage === 1 }
                        className="btn btn-primary" 
                        onClick={ () => onChangePage(currentPage - 1)}
                    >
                        Prev
                    </button>
                </li>

                { numberPages && numberPages.map((item ,i) => (
                    <li className="mr-2" key={i}>
                        <button 
                            className={currentPage === i + 1 ? 'btn btn-primary' : "btn btn-outline-primary"} 
                            onClick={ () => onChangePage(i + 1) }
                        >
                            {item}
                        </button>
                    </li>
                    
                )) }
                <li>
                    <button 
                        className="btn btn-primary" 
                        onClick={ () => onChangePage(currentPage + 1)}
                        disabled={ currentPage === totalUser }
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;