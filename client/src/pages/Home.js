import Box from '@mui/material/Box';
import Image from '../img/main.jpg';
import { Button, AppBar, Toolbar, Paper, Typography } from "@material-ui/core"; 
import { Link } from "react-router-dom";

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
}

function App() {
    return (
    <div>
        <Box
    class="candles"
    style={{
    backgroundImage: `url(${Image})`,
    backgroundSize: "contain",
    height: "90vh",
    color: "#f5f5f5"
}}/>

    </div>

    )

};
export default App;

