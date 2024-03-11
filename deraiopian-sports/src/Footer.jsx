import LogoSports from "./assets/logo.jpg";

const Footer = () => {
    return (
        <div className="card mb-3 pie">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= {LogoSports} className="img-thumbnail rounded float-start final" alt=""></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text copyright">© Copyright - 2017 - 2023 www.dexter.com.ar, TODOS LOS DERECHOS RESERVADOS. Las fotos contenidas en este site, el logotipo y las marcas son propiedad de www.dexter.com.ar y/o de sus respectivos titulares. Está prohibida la reproducción total o parcial, sin la expresa autorización de la administradora de la tienda virtual. Dexter, empresa perteneciente al grupo DABRA S.A. con domicilio en Autopista Panamericana KM 25,6 - Don Torcuato de la Provincia de Buenos Aires – Argentina.</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Footer;

