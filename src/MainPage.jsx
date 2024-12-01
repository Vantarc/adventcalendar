import { Button, Divider, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function Mainpage() {
    const now = new Date();
    let navigate = useNavigate();

    return (
        <div className="page-container">
            <Typography variant="h3">Adventskalendar 2024</Typography>
            <Typography variant="h5">Auf alle grünen Türchen kannst du zugreifen!</Typography>
            <Divider className="divider-custom"/>

            <Grid2 container spacing={2}>
                {Array.from(Array(24)).map((_, index) => {
                    if(now >= new Date(2024, 11, index + 1)) {
                        return (<Grid2 key={index}>
                            <Button onClick={()=> {
                                navigate(`/door_${index+1}`);
                            }} variant="contained" className="door-enabled">{index + 1}</Button >
                        </Grid2>)
                    }
                    return (<Grid2 key={index}>
                        <div className="door">{index + 1}</div>
                    </Grid2>)
                })}
            </Grid2>
        </div>
    );
}

export default Mainpage;