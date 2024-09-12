import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Dialog,
    DialogTitle,
    Box,
    IconButton,
    DialogContent,
    DialogActions,
    TextField,
    SvgIcon,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import PageHeader from "../components/PageHeader";
import StyledTableRow from "../components/StyledTableRow";

import { ReactComponent as TrashIcon } from "../assets/icons/Trash.svg";
import { ReactComponent as Close } from "../assets/icons/Close.svg";

export default function Franchisees() {
    const [franchisees, setFranchisees] = useState([]);
    const [open, setOpen] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [mail, setMail] = useState("");

    useEffect(() => {
        api.get("/getAllFranchisees").then(({ data }) => {
            setFranchisees(data);
        });
    }, []);

    const addFranchisee = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("whatsapp", whatsapp);
        formData.append("mail", mail);

        api.post("/addFranchisee", formData, {
            headers: { "Content-Type": "application/json" },
        }).then(({ data }) => {
            setName("");
            setPhone("");
            setWhatsapp("");
            setMail("");
            api.get("/getAllFranchisees").then(({ data }) => {
                setFranchisees(data);
            });
            setOpen(false);
        });
    };

    const deleteFranchisee = (id) => {
        const formData = new FormData();
        formData.append("_id", id);
        api.post("/deleteFranchisee", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(() => {
                api.get("/getAllFranchisees").then(({ data }) => {
                    setFranchisees(data);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Dialog
                open={open}
                fullWidth={true}
                maxWidth="xs"
                onClose={() => setOpen(false)}
            >
                <DialogTitle>
                    <div className="flex justify-end">
                        <IconButton
                            sx={{ ml: "auto" }}
                            onClick={() => setOpen(false)}
                        >
                            <SvgIcon component={Close} />
                        </IconButton>
                    </div>
                </DialogTitle>

                <DialogContent>
                    <div className="text-center text-[#2B3674] text-[24px] font-medium">
                        Добавить пользователя
                    </div>

                    <div className="text-center mt-1 text-[#2B3674] text-sm">
                        Введите данные пользователя
                    </div>
                    <Box component="form">
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"name"}
                                label={"Имя"}
                                fullWidth
                                autoFocus
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"phone"}
                                label={"Номер"}
                                fullWidth
                                autoFocus
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"whatsapp"}
                                label={"Whatsapp"}
                                fullWidth
                                autoFocus
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"mail"}
                                label={"Почта"}
                                fullWidth
                                autoFocus
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </Box>
                    </Box>
                </DialogContent>

                <DialogActions sx={{ justifyContent: "center" }}>
                    <button
                        onClick={addFranchisee}
                        className="py-2 text-sm px-3 rounded-lg font-medium border border-[#4318FF] bg-[#4318FF] text-white uppercase hover:bg-opacity-50 hover:text-#A3AED0"
                    >
                        Добавить
                    </button>
                    <button
                        onClick={() => {
                            setOpen(false);
                            setName("");
                            setPhone("");
                            setWhatsapp("");
                            setMail("");
                        }}
                        className="rounded-lg py-2 px-3 border border-[#A3AED0] text-[#A3AED0] text-sm font-mdeium uppercase hover:bg-gray-100"
                    >
                        Отменить
                    </button>
                </DialogActions>
            </Dialog>

            <PageHeader title="Франчайзилар" sx={{ mb: 10 }}></PageHeader>

            <Paper className="rounded-2xl pb-6 my-5">
                <TableContainer sx={{ borderRadius: "10px" }}>
                    <Table>
                        <TableHead
                            sx={{
                                backgroundColor: "#4318FF",
                                textTransform: "uppercase",
                            }}
                        >
                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    Имя пользователя
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    Телефон
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    Whatsapp
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    Почта
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        {franchisees.length > 0 && (
                            <TableBody>
                                {franchisees.map((item) => (
                                    <StyledTableRow key={item.createdAt}>
                                        <TableCell
                                            sx={{
                                                color: "#2B3674",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {item.name}
                                        </TableCell>
                                        <TableCell sx={{ color: "#707EAE" }}>
                                            {item.phone}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: "#2B3674",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {item.whatsapp}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: "#2B3674",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {item.mail}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-center gap-x-3">
                                                <button className="py-1 px-2 border rounded-lg border-[#4318FF] text-[#4318FF] uppercase font-medium hover:bg-[#4318FF] hover:text-white">
                                                    <Link
                                                        to={`franchisee/${item._id}`}
                                                    >
                                                        Посмотреть
                                                    </Link>
                                                </button>
                                                <IconButton
                                                    color="warning"
                                                    onClick={() =>
                                                        deleteFranchisee(
                                                            item._id
                                                        )
                                                    }
                                                >
                                                    <SvgIcon
                                                        component={TrashIcon}
                                                    />
                                                </IconButton>
                                            </div>
                                        </TableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>
            </Paper>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Добавить франчайзи
            </Button>
        </>
    );
}
