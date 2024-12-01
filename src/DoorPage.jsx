import { Divider, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import PDFViewer from "./PDFVIewer";

function DoorPage() {
    let navigate = useNavigate();
    const location = useLocation();
    const day = location.pathname.split("_")[1]
    console.log(parseInt(day))
    if([4,10,16,22,6,12,18].includes(parseInt(day))) {
        return <div className="page-container">
            <Typography onClick={()=> {
                                navigate(`/`);
                            }} variant="h5">{"◄Zurück" }</Typography>

            <Typography variant="h3">{`${day}. Dezember`}</Typography>
            <Typography variant="h5">Heute gibt es leider keine Anleitung!</Typography>
           
        </div>
    }
    return (
        <div className="page-container">
            <Typography onClick={()=> {
                                navigate(`/`);
                            }} variant="h5">{"◄Zurück" }</Typography>

            <Typography variant="h3">{`${day}. Dezember`}</Typography>
            <Typography variant="h5">Hier ist die heutige Anleitung!</Typography>
            <Divider className="divider-custom"/>
            <PDFViewer fileName={`/day/${day}.pdf`}/>
           
        </div>
    );
}

export default DoorPage;