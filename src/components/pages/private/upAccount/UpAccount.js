import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useService from "../../../../services/requests";
import { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from "@mui/material";
import { sentTransaction } from "../../../../store/actions/actions";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Spinner from "../../partials/spinner/Spinner";
import { useEffect } from "react";

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
        POST_TRANSACTION: transaction,
        process,
        setProcess
    } = useService();

    const navigate = useNavigate();

    const wrongSymbols = ["e", "E", "-", "+", ".", ","];

    const [formData, setFormData] = useState({
        trType: "topUp",
        amount: '',
        userName: '',
        userAvatar: ''
    });

    useEffect(() => {
        setFormData({
            ...formData,
            userName: userData.username,
            userAvatar: userData.avatar
        });
    }, [userData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: parseFloat(value),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        transaction(formData)
            .then(() => {
                dispatch(sentTransaction());
                setProcess('confirmed');
                navigate('/transaction');
            })
            .catch((error) => {
                console.error("Error in transaction:", error);
            });
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Container maxWidth="sm">
            {process === 'loading' ? <Spinner /> :
                <>
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
                            value={formData.amount}
                            onChange={(e) => handleChange(e)}
                        />
                        {process === 'error' ? <p className="error__message">Error</p> : null}

                        <Button
                            fullWidth
                            variant="contained"
                            style={customBtnStyles}
                            type="submit"
                        >
                            Пополнить счет
                        </Button>
                    </form>
                </>
            }

        </Container>
    );
}

export default UpAccount;