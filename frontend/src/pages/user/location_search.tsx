import { TextField,Stack} from "@mui/material";
const Location_search:React.FC = () => {
    return(
        <div>
            <Stack sx={{flexDirection:'column'}}>
                <TextField sx={{width:500}}>A동</TextField>
                <TextField>B동</TextField>
                <TextField>C동</TextField>
                <TextField>D동</TextField>
            </Stack>
        </div>
    );
}

export default Location_search;