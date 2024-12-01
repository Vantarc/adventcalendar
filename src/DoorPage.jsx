import { Button, Divider, Grid2, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import PDFViewer from "./PDFVIewer";

function DoorPage() {
    const now = new Date();
    let navigate = useNavigate();
    const location = useLocation();
    const day = location.pathname.split("_")[1]
    return (
        <div className="page-container">
            <Typography onClick={()=> {
                                navigate(`/`);
                            }} variant="h5">{"◄Zurück" }</Typography>

            <Typography variant="h3">{`${day}. Dezember`}</Typography>
            <Typography variant="h5">Auf alle grünen Türchen kannst du zugreifen!</Typography>
            <Divider className="divider-custom"/>
            <PDFViewer/>
           
        </div>
    );
}

export default DoorPage;