import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../../store/actions/actions";
import useService from "../../../../services/requests";
import { useEffect, useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const customBtnStyles = {
    backgroundColor: "#272643",
    color: "white",
    borderRadius: "20px",
    padding: "10px 25px",
    minWidth: "100px",
    marginTop: "10px",
};

function UpAccount() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.userData);
    const {
        GET_USER_DATA: getUser,
        PUT_CHANGE_DATA: changeBalance,
    } = useService();

    const navigate = useNavigate();

    const wrongSymbols = ["e", "E", "-", "+", ".", ","];

    const [formData, setFormData] = useState(0);

    useEffect(() => {
        getMyData();
        // eslint-disable-next-line
    }, [])

    const getMyData = () => {
        getUser().then((data) => {
            dispatch(getUserData(data));
        });
    };
    console.log(userData);

    const handleChange = (event) => {
        setFormData(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        changeBalance({ balance: userData.balance + +formData });
    };

    const handleBack = () => {
        navigate(-1);
    };

    console.log(typeof (formData));

    return (
        <Container maxWidth="sm">
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#272643",
                    marginTop: "20px",
                    marginBottom: "10px",
                }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="back"
                        onClick={handleBack}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Вернуться
                    </Typography>
                </Toolbar>
            </AppBar>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Сумма пополнения"
                    variant="outlined"
                    margin="normal"
                    name="amount"
                    type="number"
                    onKeyDown={(e) => wrongSymbols.includes(e.key) && e.preventDefault()}
                    value={formData}
                    onChange={(e) => handleChange(e)}
                />

                <Button
                    fullWidth
                    variant="contained"
                    style={customBtnStyles}
                    type="submit"
                >
                    Пополнить счет
                </Button>
            </form>
        </Container>
    );
}

export default UpAccount;