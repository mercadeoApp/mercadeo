import React from 'react';
import imagen1 from '../logo.svg'
import imagen2 from '../2.jpg'
import imagen3 from '../1.jpg'
import ErrorBoundary from './errores/ErrorBoundary'
const Empresa = () => {
    const imag = [imagen1,imagen2,imagen3]
    if (imag.length > 0) {
        return (
            <div className="row border offset-sm-3 rounded mr-3 shadow-lg p-3 mb-5 bg-body rounded" key="uebaEmpresa" >
                {imag.map((i,index) => (
                    <div className="col-sm-6 bg-light mt-3" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <img src={i} className="card-img-top" alt="..." />
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p href="#" className="btn btn-primary">Go somewhere</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }else{
        return(<ErrorBoundary></ErrorBoundary>)
    }

}

export default Empresa